<template>
  <upHeader v-if="showHeadInfo && tokenStatus" />
  <upHeaderInfo :title="pageTitle" v-else-if="!showHeadInfo && tokenStatus" />
  <router-view> </router-view>
  <upFooter />
</template>

<script>
import upHeader from "@/components/home/up-header.vue";
import upHeaderInfo from "@/components/home/up-header-info.vue";
import upFooter from "@/components/home/up-footer.vue";
import { getCookie } from '/config.js'
import { mapActions, mapGetters } from "vuex";

export default {
  name: "up-main",
  data() {
    return {
      pageTitle: "",
      tokenStatus: false,
    };
  },
  components: {
    upHeader,
    upFooter,
    upHeaderInfo,
  },
  computed: {
    ...mapGetters(["TOKEN_STATUS",]),
    // не отображаем иформации в header если это страницы авторизации
    showHeadInfo() {
      return this.$route.path === "/account";
    },
  },
  watch: {
    // изменяем заголовок при изменении пути маршрутизации
    $route(to) {
      this.pageTitle = this.getPageTitle(to);
    },
  },
  methods: {
    ...mapActions(["GET_CHECK_TOKEN_FROM_API",]),

    // определяем заголовок страницы
    getPageTitle(route) {
      let title = "";
      switch (route.name) {
        case "personal":
          title = "Личная информация";
          break;
        case "company":
          title = "Информация о компании";
          break;
        case "social-list":
          title = "Социальные сети";
          break;
        case "social-confirmation":
          title = "Добавить соц. сеть";
          break;
        case "card-edit":
          title = "Редактировать";
          break;
        case "portfolio-list":
          title = "Портфолио";
          break;
        case "portfolio-item":
          title = "Элемент портфолио";
          break;
        case "card-qr":
          title = "QR-код";
          break;
        
      }
      return title;
    },
  },
  mounted() {
    let token = getCookie('token');

    if (token == null) {
      token = this.$route.query.token;
    } 

    // проверяем токен
    this.GET_CHECK_TOKEN_FROM_API(token).then(() => {
        this.tokenStatus = this.TOKEN_STATUS.status;
        if (!this.tokenStatus) {
          // если статус false редиректим на еррор
          this.$router.push('/redirect');
        }
    });
  }
};
</script>
