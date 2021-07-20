<template>
  <div>
    <v-app-bar color="success" dark app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <router-link to="/" class="title">
        <v-toolbar-title class="white--text" style="font-size: 24px"
          ><v-icon color="#FBC02D" style="font-size: 20px">{{ svgPath }}</v-icon
          >NiceIdea</v-toolbar-title
        >
      </router-link>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-title>
              <v-icon>{{ homePath }}</v-icon
              >ホーム
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="/ranking">
            <v-list-item-title>
              <v-icon>{{ rankingPath }}</v-icon
              >ランキング
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="/myidea">
            <v-list-item-title>
              <v-icon>{{ myideaPath }}</v-icon
              >マイアイデア
            </v-list-item-title>
          </v-list-item>
          <v-list-item to="/login" @click="removeToken">
            <v-list-item-title>
              <v-icon>{{ logoutPath }}</v-icon
              >ログアウト
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      svgPath: "mdi-lightbulb-on-outline",
      logoutPath: "mdi-logout",
      homePath: "mdi-home-lightbulb-outline",
      rankingPath: "mdi-chart-bar",
      myideaPath: "mdi-account-star-outline",
    };
  },
  methods: {
    removeToken() {
      localStorage.removeItem("token");
    },
  },
};
</script>

<style scoped>
.title {
  text-decoration: none;
}
</style>