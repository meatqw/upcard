<template>
  <div class="message message-active">
    <button class="btn-reset message__btn">
      <i class="fa-solid fa-xmark" v-on:click="close"></i>
    </button>
    <div class="message__info">
      <p class="message__text">
        {{ msgText }}
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "up-notification-message",
  props: {
    msgText: {
      type: String,
      default: "Ok",
    },
  },
  msgShow: false,
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
};
</script>
  