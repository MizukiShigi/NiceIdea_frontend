<template>
  <div>
    <Header />
    <v-container>
      <form @submit.prevent="onSubmit">
        <v-textarea
          v-model="content"
          label="アイデア"
          counter
          maxlength="255"
          color="success"
          required
        >
        </v-textarea>
        <div class="text-center">
          <v-btn color="success" type="submit"> 送信 </v-btn>
        </div>
      </form>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "IdeaEditer",
  props: {
    id: {
      type: Number,
      required: false,
    },
  },
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      content: null,
      error: null,
    };
  },
  methods: {
    onSubmit: function () {
      const datas = {
        idea: this.idea,
      };
      if (this.id !== undefined) {
        axios
          .put(`/api/ideas/${this.id}/`, datas, {
            headers: {
              Authorization: "JWT " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            console.log(response.data);
            this.$router.push({
              name: "idea",
              params: { id: response.data.id },
            });
          })
          .catch((error) => {
            console.log(error);
            this.$swal({
              type: "warning",
              title: "ログイン",
              text: "再ログインしてください",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 1000,
            });
            this.$router.push("/login");
          });
      } else {
        axios
          .post("/api/ideas/", datas, {
            headers: {
              Authorization: "JWT " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            console.log(response.data);
            this.$router.push({
              name: "idea",
              params: { id: response.data.id },
            });
          })
          .catch((error) => {
            console.log(error);
            this.$swal({
              type: "warning",
              title: "ログイン",
              text: "再ログインしてください",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 1000,
            });
            this.$router.push("/login");
          });
      }
    },
  },
  async beforeRouteEnter(to, from, next) {
    if (to.params.id !== undefined) {
      console.log(to);
      console.log(to.params);
      const endpoint = `/api/ideas/${to.params.id}/`;
      const response = await axios
        .get(endpoint, {
          headers: { Authorization: "JWT " + localStorage.getItem("token") },
        })
        .catch((error) => {
          console.log(error);
          this.$swal({
            type: "warning",
            title: "ログイン",
            text: "再ログインしてください",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 1000,
          });
          this.$router.push("/login");
        });
      console.log(response.data);
      return next((vm) => {
        vm.idea = response.data.idea;
      });
    } else {
      return next();
    }
  },
  created() {
    document.title = "Editer idea";
  },
};
</script>
