<template>
  <v-container grid-list-md>
    <Title />
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12 sm8 lg4 md5>
        <v-card class="register-card">
          <v-card-title>
            <span class="headline">新規登録</span>
          </v-card-title>

          <v-spacer />

          <v-card-text>
            <v-form ref="form" v-model="isValid">
              <formName :username.sync="params.user.username" />
              <formEmail :email.sync="params.user.email" />
              <formPassword :password.sync="params.user.password" />
              <v-btn
                :disabled="!isValid || loading"
                :loading="loading"
                block
                color="success"
                class="white--text"
                @click="signup"
              >
                登録する
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <v-flex xs12 sm6 md2 my-2 offset-xs6>
          <v-spacer></v-spacer>
          <v-btn class="success--text" to="/login">ログインはこちら</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Title from "@/components/Title";
import formName from "@/components/formName";
import formEmail from "@/components/formEmail";
import formPassword from "@/components/formPassword";
import axios from "axios";

export default {
  name: "register",
  components: {
    Title,
    formName,
    formEmail,
    formPassword,
  },
  data() {
    return {
      isValid: false,
      loading: false,
      params: { user: { username: "", email: "", password: "" } },
    };
  },
  methods: {
    signup() {
      this.loading = true;
      console.log(this.params.user);
      axios
        .post("/user/register/", this.params.user)
        .then((res) => {
          console.log(res);
          this.formReset();
          this.loading = false;
          this.$router.push("/login");
          this.$swal.fire({
            type: "info",
            title: "登録完了",
            text: "ご登録ありがとうございます。どんどんアイデアを投稿しましょう！",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          });
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
          this.$swal.fire({
            type: "warning",
            title: "Error",
            text: "ユーザー名もしくはメールアドレスが既に存在しています。\n別のユーザ名、メールアドレスでご登録ください。",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          });
        });
    },
    formReset() {
      this.$refs.form.reset();
      this.params = { user: { username: "", email: "", password: "" } };
    },
  },
};
</script>
