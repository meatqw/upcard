
<template>
  <main class="main">
    <div class="main__container container loader__container">
      <div class="loader__block">
        <div class="loader">Loading…</div>
      </div>
      <h1 class="title-h2 loader__title">Идет загрузка</h1>
    </div>
  </main>
</template>
  
  <script>
import { mapActions, mapGetters } from "vuex";
import { getCookie, API_DOMAIN } from "../../../config";
export default {
  name: "up-home-loader",
  methods: {
    ...mapActions(["GET_CHECK_TOKEN_FROM_API"]),

    goToAccount() {
      this.$router.push("/account");
    },
  },
  computed: {
    ...mapGetters(["TOKEN_STATUS"]),
  },
  mounted() {
    // сохраяем токен в cookies
    if (this.$route.query.token) {
      let token = this.$route.query.token;

      var date = new Date();
      date.setTime(date.getTime() + 60 * 60 * 1000 * 24 * 7); // 1 hour
      var expires = "; expires=" + date.toUTCString();

      document.cookie = `token=${token}` + expires + "; path=/";
    }

    setTimeout(() => {
        this.GET_CHECK_TOKEN_FROM_API(getCookie('token')).then(() => {
            this.tokenStatus = this.TOKEN_STATUS.status;
            if (this.tokenStatus) {
            // если статус true редиректим на account
            this.$router.push('/account');
            } else {
                location.href = `${API_DOMAIN}/auth/invalid/`
            }
        });
    }, 3000);
  },
};
</script>
  