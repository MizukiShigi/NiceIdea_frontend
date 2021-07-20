<template>
  <v-footer
    color="success"
    dark
    app
    class="d-flex justify-space-around"
    style="font-size: 10px"
  >
    <v-btn icon to="/">
      <v-icon>{{ homePath }}</v-icon>
    </v-btn>
    <v-btn icon to="/ranking">
      <v-icon>{{ rankPath }}</v-icon>
    </v-btn>
    <v-btn icon to="/myidea">
      <v-icon>{{ myPath }}</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      homePath: "mdi-home-lightbulb-outline",
      rankPath: "mdi-chart-bar",
      myPath: "mdi-account-star-outline",
    };
  },
};
</script>

<style scoped>
</style>