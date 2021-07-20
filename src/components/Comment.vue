<template>
  <div>
    <v-card class="mx-auto mb-2">
      <v-card-text>
        <h3>
          <v-icon>{{ chatPath }}</v-icon>
        </h3>
        <p>{{ comment.comment }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => ({ comment: "" }),
    },
  },
  data() {
    return {
      chatPath: "mdi-message-text",
    };
  },
};
</script>
