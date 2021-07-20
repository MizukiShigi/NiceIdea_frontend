<template>
  <div>
    <Header />
    <v-container>
      <v-card class="mx-auto mb-2">
        <v-card-text>
          <div class="d-flex justify-space-between">
            <h2>
              <v-icon style="font-size: 18px; color: #4caf50">
                {{ svgPerson }}
              </v-icon>
              【{{ idea.title }}】
            </h2>
            <div>
              <Delete v-if="idea.is_myidea" :id="this.id" />
            </div>
          </div>
          <p>{{ idea.content }}</p>
        </v-card-text>
        <v-card-actions>
          <good :idea="idea"></good>
          <div class="comment"><newComment :id="this.id" /></div>
        </v-card-actions>
      </v-card>
      <comment
        v-for="(comment, key) in idea.comments"
        :key="key"
        :comment="comment"
      ></comment>
    </v-container>
    <NewIdea />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Comment from "@/components/Comment";
import newComment from "@/components/newComment";
import NewIdea from "@/components/newIdea";
import Good from "@/components/Good";
import Delete from "@/components/Delete";

export default {
  name: "idea",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    Header,
    Footer,
    Comment,
    NewIdea,
    newComment,
    Good,
    Delete,
  },
  data() {
    return {
      idea: {},
      comments: {},
      svgPerson: "mdi-head-lightbulb-outline",
    };
  },
  mounted() {
    this.checkLoggedIn();
  },
  methods: {
    setPageTitle(title) {
      document.title = title;
    },
    getIdeaData() {
      axios
        .get(`/api/ideas/${this.id}/`)
        .then((response) => (this.idea = response.data))
        .then(() => this.setPageTitle(this.idea.title));
    },
  },
  created() {
    this.getIdeaData();
  },
};
</script>

<style>
.comment {
  padding-left: 14px;
}
.date {
  font-size: 12px;
}
</style>