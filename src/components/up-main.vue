<template>
  <upHeader v-if="showHeadInfo" />
  <upHeaderInfo :title="pageTitle" v-else-if="!showHeadInfo" />
  <router-view> </router-view>
  <upFooter />
</template>

<script>
import upHeader from "@/components/home/up-header.vue";
import upHeaderInfo from "@/components/home/up-header-info.vue";
import upFooter from "@/components/home/up-footer.vue";
import { getCookie } from "/config.js";
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
    ...mapGetters(["TOKEN_STATUS", "DELETE_DATA"]),
    // не отображаем иформации в header если это страницы авторизации

    showHeadInfo() {
      return this.$route.path === "/account";
    },
  },
  watch: {
    // изменяем заголовок при изменении пути маршрутизации
    $route(to) {
      this.pageTitle = this.getPageTitle(to);

      // не делаем проверку в лоад так как там она уде есть
      if (this.$route.path != '/load') {
        this.checkToken();
      }
    },
  },
  methods: {
    ...mapActions(["GET_CHECK_TOKEN_FROM_API"]),

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
          title = "Подкарта";
          break;
        case "portfolio-item":
          title = "Элемент подкарты";
          break;
        case "card-qr":
          title = "QR-код";
          break;
        case 'delete':
          title = `Удалить ${this.DELETE_DATA.info}`;
          break;
      }
      return title;
    },

    // проверяем наличие и валидности токена доступа
    checkToken() {
      let token = getCookie("token");

      if (token == null) {
        token = this.$route.query.token;
      }

      if (token != null && token != undefined) {
        // проверяем токен
        this.GET_CHECK_TOKEN_FROM_API(token).then(() => {
          this.tokenStatus = this.TOKEN_STATUS.status;
          if (!this.tokenStatus) {
            // если статус false редиректим на еррор
            this.$router.push("/load");
          }
        });
      } else {
        this.$router.push("/load");
      }
    },
  },
  mounted() {
    // this.checkToken();
  },
};
</script>
