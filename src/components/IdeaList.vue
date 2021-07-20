<template>
  <v-container>
    <h2>{{ title }}</h2>
    <div v-for="idea in ideas" :key="idea.pk" class="post">
      <v-card>
        <router-link
          :to="{ name: 'idea', params: { id: idea.id } }"
          class="idea-link"
        >
          <v-card-text>
            <h3>
              <v-icon class="ideaicon" style="font-size: 18px">
                {{ icon }}
              </v-icon>
              【{{ idea.title }}】
            </h3>
            <p>{{ idea.content }}</p>
          </v-card-text>
        </router-link>
        <v-card-actions>
          <good :idea="idea"></good>
          <div class="comment">
            <v-icon class="commenticn">{{ commentPath }}</v-icon
            >{{ idea.comments_count }}
          </div>
        </v-card-actions>
      </v-card>
    </div>
    <div class="my-4">
      <p v-show="loadingIdeas">...loading...</p>
      <v-btn v-show="next" @click="getIdeas" color="success">Load More</v-btn>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import Good from "@/components/Good";

export default {
  components: {
    Good,
  },
  props: {
    title: {
      type: String,
    },
    requestUrl: {
      type: String,
    },
    icon: {
      type: String,
      default: "mdi-head-lightbulb-outline",
    },
  },
  data() {
    return {
      commentPath: "mdi-message-text",
      ideas: [],
      next: null,
      loadingIdeas: false,
    };
  },
  mounted() {
    this.checkLoggedIn();
    console.log(this.requestUrl);
  },
  methods: {
    getIdeas() {
      const endpoint = this.next ? this.next : this.requestUrl;
      this.loadingIdeas = true;
      axios.get(endpoint).then((response) => {
        if (response.data.length !== 0) {
          this.ideas.push(...response.data);
        }
        this.loadingIdeas = false;
        if (response.data.next) {
          this.next = response.data.next;
        } else {
          this.next = null;
        }
      });
    },
  },
  created() {
    this.getIdeas();
  },
};
</script>

<style scoped>
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
</style>