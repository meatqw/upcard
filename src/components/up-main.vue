<template>
  <upHeader v-if="showHeadInfo" />
  <upHeaderInfo :title="pageTitle" v-else />
  <router-view> </router-view>
  <upFooter />
</template>

<script>
import upHeader from "@/components/home/up-header.vue";
import upHeaderInfo from "@/components/home/up-header-info.vue";
import upFooter from "@/components/home/up-footer.vue";

export default {
  name: "up-main",
  data() {
    return {
      pageTitle: "",
    };
  },
  components: {
    upHeader,
    upFooter,
    upHeaderInfo,
  },
  computed: {
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
};
</script>
