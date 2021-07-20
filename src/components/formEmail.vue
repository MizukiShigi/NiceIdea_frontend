<template>
  <v-text-field
    v-model="setEmail"
    :rules="rules"
    label="メールアドレスを入力"
    :placeholder="form.placeholder"
    color="success"
    outlined
  />
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: "",
    },
    noValidation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rules: [
        (v) => !!v || "メールアドレスを入力してください。",
        (v) =>
          /.+@.+\..+/.test(v) || "メールアドレスの形式でなくてはなりません。",
      ],
    };
  },
  computed: {
    setEmail: {
      get() {
        return this.email;
      },
      set(newVal) {
        return this.$emit("update:email", newVal);
      },
    },
    form() {
      const placeholder = this.noValidation ? undefined : "メールアドレス";
      return { placeholder };
    },
  },
};
</script>
