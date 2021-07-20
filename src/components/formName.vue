<template>
  <!-- v-model 追加 -->
  <v-text-field
    v-model="setName"
    label="ユーザー名を入力"
    placeholder="ユーザー名"
    :rules="rules"
    outlined
    color="success"
  />
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      rules: [(v) => !!v || "名前を入力してください。"],
    };
  },
  computed: {
    setName: {
      get() {
        return this.username;
      },
      set(newVal) {
        return this.$emit("update:username", newVal);
      },
    },
  },
};
</script>