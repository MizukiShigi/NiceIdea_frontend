<template>
  <v-btn @click="deleteIdea" class="error white--text">
    <v-icon>{{ deletePath }}</v-icon>
  </v-btn>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      deletePath: "mdi-trash-can-outline",
    };
  },
  methods: {
    deleteIdea() {
      axios
        .delete(`https://www.niceidea-backend.com/api/ideas/${this.id}/`)
        .then((response) => {
          console.log(response);
          this.$router.push("/");
        });
    },
  },
};
</script>
