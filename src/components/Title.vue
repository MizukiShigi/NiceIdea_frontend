<template>
  <h1>
    <v-icon color="#FBC02D">{{ svgPath }}</v-icon
    >NiceIdea
  </h1>
</template>

<script>
export default {
  data() {
    return {
      svgPath: "mdi-lightbulb-on-outline",
    };
  },
};
</script>


<style scoped>
h1 {
  padding-top: 3px;
  padding-bottom: 5px;
  text-align: center;
  color: #4caf50;
}
</style>