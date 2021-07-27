<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on" rounded
        >コメントする</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="success" dark>コメント</v-toolbar>
        <v-card-text class="mt-5">
          <v-textarea
            v-model="comment"
            placeholder="アイデアのブラッシュアップのためにコメントをしましょう！"
            counter
            maxlength="100"
            color="success"
            required
            outlined
          ></v-textarea>
        </v-card-text>
        <v-card-actions class="justify-space-around">
          <v-btn text @click="dialog.value = false">
            <v-icon>{{ cancelPath }}</v-icon>
          </v-btn>
          <v-btn icon @click="onSubmit" :disabled="comment == ''">
            <v-icon>{{ sendPath }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import axios from "axios";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      comment: "",
      cancelPath: "mdi-window-close",
      sendPath: "mdi-send",
    };
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    onSubmit() {
      const datas = {
        comment: this.comment,
      };
      axios
        .post(
          `https://www.niceidea-backend.com/api/comments/${this.id}/`,
          datas
        )
        .then((response) => {
          console.log(response.data);
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
    },
  },
};
</script>

<style scoped>
v-btn {
  font-size: 14px;
}
.ideabutton {
  position: fixed;
  right: 20px;
  bottom: 60px;
}

.ideacontents {
  padding: 10px;
}

.ideatitle {
  padding: 10px;
  line-height: 1.5rem;
}
</style>