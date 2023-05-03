<template>
  <div v-if="NOTIFICATION_DATA.isNotification">
    <div
      :class="'message message-active ' + NOTIFICATION_DATA.notificationType"
    >
      <div class="message__info">
        <p class="message__text">
          {{ NOTIFICATION_DATA.notificationText }}
        </p>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "up-notification-message",
  computed: {
    ...mapGetters(["NOTIFICATION_DATA"]),
  },
  methods: {
    ...mapActions(["SET_NOTIFICATION_DATA"]),
    close() {
      this.$emit("close", false);
    },
  },

  watch: {
    "NOTIFICATION_DATA.isNotification"() {

      setTimeout(() => {
        if (this.NOTIFICATION_DATA.isNotification) {
          this.SET_NOTIFICATION_DATA(false)
        }
      }, 1500);
    },
  },
};
</script>
  