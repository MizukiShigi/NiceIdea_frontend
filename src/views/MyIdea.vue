<template>
  <div>
    <Header />
    <listIdea
      :title="this.title"
      :requestUrl="this.requestUrl"
      :icon="this.icon"
    ></listIdea>
    <NewIdea />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewIdea from "@/components/newIdea";
import ListIdea from "@/components/IdeaList";

export default {
  name: "myidea",
  components: {
    Header,
    Footer,
    NewIdea,
    ListIdea,
  },
  data() {
    return {
      title: "My Idea",
      requestUrl: "http://www.niceidea-backend.com/api/myideas/",
      icon: "mdi-alpha-m-circle-outline",
    };
  },
  created() {
    document.title = "NiceIdea";
  },
};
</script>

<style scoped lang="scss">
::v-deep .ideaicon {
  color: #4caf50;
}
</style>