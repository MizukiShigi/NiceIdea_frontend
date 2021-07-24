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
  name: "ranking",
  components: {
    Header,
    Footer,
    NewIdea,
    ListIdea,
  },
  data() {
    return {
      title: "Idea Ranking",
      requestUrl: "http://www.niceidea-backend.com/api/ranking/",
      icon: "mdi-medal-outline",
    };
  },
  created() {
    document.title = "NiceIdea Ranking";
  },
};
</script>

<style scoped lang="scss">
h2 {
  color: #4caf50;
}
h3 {
  font-weight: bold;
}
.idea-link {
  text-decoration: none;
  color: black;
}
.idea-link:hover {
  color: #4caf50;
}
.post {
  padding-top: 8px;
}
.comment {
  padding-left: 14px;
  font-size: 14px;
}
.commenticn {
  font-size: 18px;
  padding-right: 4px;
}
::v-deep .ideaicon {
  color: #fbc02d;
}
</style>