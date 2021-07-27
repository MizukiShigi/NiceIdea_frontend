<template>
  <v-container grid-list-md>
    <Title />
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12 sm8 lg4 md5>
        <v-card class="login-card">
          <v-card-title>
            <span class="headline">ログイン</span>
          </v-card-title>

          <v-spacer />

          <v-card-text>
            <v-form ref="form" v-model="isValid">
              <formEmail :email.sync="params.user.email" />
              <formPassword :password.sync="params.user.password" />
              <v-btn
                :disabled="!isValid || loading"
                :loading="loading"
                block
                color="success"
                class="white--text"
                @click="signin"
              >
                ログイン
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <v-flex justify="space-around">
          <v-btn color="success" class="white--text" @click="guestSignin"
            >ゲストログイン</v-btn
          >
          <v-btn class="success--text" to="/register">新規登録はこちら</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Title from "@/components/Title";
import formEmail from "@/components/formEmail";
import formPassword from "@/components/formPassword";
import axios from "axios";

export default {
  name: "login",
  components: {
    Title,
    formEmail,
    formPassword,
  },
  data() {
    return {
      isValid: false,
      loading: false,
      params: { user: { email: "", password: "" } },
    };
  },
  methods: {
    signin() {
      this.loading = true;
      const isToken = localStorage.getItem("token");
      axios
        .post("https://www.niceidea-backend.com/auth/", this.params.user)
        .then((res) => {
          if (isToken) {
            localStorage.removeItem("token");
          }
          localStorage.setItem("token", res.data.token);
          this.formReset();
          this.loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
          this.$swal.fire({
            type: "warning",
            title: "Error",
            text: "ユーザー名もしくはパスワード、または両方が間違っています",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          });
        });
    },
    guestSignin() {
      this.loading = true;
      const isToken = localStorage.getItem("token");
      axios
        .post("https://www.niceidea-backend.com/auth/", {
          email: "guest@guest.jp",
          password: "guestpass",
        })
        .then((res) => {
          if (isToken) {
            localStorage.removeItem("token");
          }
          localStorage.setItem("token", res.data.token);
          this.formReset();
          this.loading = false;
          this.$router.push("/");
        });
    },
    formReset() {
      this.$refs.form.reset();
      this.params = { user: { email: "", password: "" } };
    },
  },
  created() {
    document.title = "NiceIdea";
  },
};
</script>
