<template>
  <v-btn
    v-if="idea.is_good"
    @click.native="unlike"
    class="goodbtn white--text"
    color="#fbc02d"
    rounded
  >
    <v-icon class="goodicn">{{ goodPath }}</v-icon>
    Nice
    {{ idea.goods_count }}
  </v-btn>
  <v-btn v-else @click.native="like" class="goodbtn unlike" outlined rounded>
    <v-icon class="goodicn">{{ goodPath }}</v-icon>
    Nice
    {{ idea.goods_count }}
  </v-btn>
</template>

<script>
import axios from "axios";

export default {
  props: {
    idea: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      goodPath: "mdi-thumb-up-outline",
    };
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    like() {
      axios.get(`/api/idea/${this.idea.id}/like/`).then((response) => {
        console.log(response);
        this.idea.is_good = true;
        this.idea.goods_count++;
      });
    },
    unlike() {
      axios.get(`/api/idea/${this.idea.id}/unlike/`).then((response) => {
        console.log(response);
        this.idea.is_good = false;
        this.idea.goods_count--;
      });
    },
  },
};
</script>

<style scoped>
.goodbtn {
  text-transform: none;
}
.goodicn {
  font-size: 16px;
  padding-right: 4px;
}
.unlike {
  color: #fbc02d;
}
</style>
