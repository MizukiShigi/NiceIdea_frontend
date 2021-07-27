<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          fab
          v-bind="attrs"
          v-on="on"
          class="ideabutton"
        >
          <v-icon style="font-size: 32px">{{ svgPath }}</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-form>
          <v-toolbar dark color="success">
            <v-btn text dark @click="dialog = false"> キャンセル </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="onSubmit" :disabled="content == ''">
                投稿する
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-text-field
            v-model="title"
            label="タイトル"
            placeholder="タイトル"
            counter
            maxlength="40"
            color="success"
            required
            class="ideatitle"
          ></v-text-field>
          <v-textarea
            v-model="content"
            placeholder="アイデアを思い付いたら気軽に投稿しましょう！"
            counter
            maxlength="255"
            color="success"
            required
            class="ideacontents"
          >
          </v-textarea>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      svgPath: "mdi-lightbulb-on-outline",
      title: "",
      content: "",
    };
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    onSubmit() {
      const datas = {
        content: this.content,
        title: this.title,
      };
      axios
        .post("https://www.niceidea-backend.com/api/ideas/", datas)
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