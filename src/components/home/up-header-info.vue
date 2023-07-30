<template>
  <header class="header">
    <div class="header__container">
      <!-- Наименование страницы -->
      <h1 class="header__title">{{ title }}</h1>
      <!-- боковое меню -->
      <div class="header__right" v-if="$route.path != '/load'">
        <div class="header__balance header-balance">
          <span class="header-balance__name">{{ this.ACCOUNT.email }}</span>
        </div>
        <!-- значение баланса -->
        <div class="header__balance header-balance">
          <span class="header-balance__name" style="text-decoration: underline; cursor: pointer">Ваш баланс:</span>
          <span class="header-balance__value">0 руб.</span>
        </div>
        <div class="header__btns">
          <!-- кнопка главная -->
          <button
              class="btn-reset btn header__btn header-btn header-btn--main"
              @click="goToAccount()"
              value="Главная"
          >
            <i class="fa-solid fa-house"></i></button
          ><!-- кнопка назад -->
          <button
              class="btn-reset btn header__btn header-btn"
              @click="back"
              value="Назад"
          >
            <i class="fa-solid fa-arrow-left"></i>
            <span class="header-btn__text">Назад</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "up-header",
  data() {
    return {};
  },
  props: {
    // поучаем щаголвоок старницы
    title: {
      type: String,
      default: 'Заголовок',
    },
  },
  computed: {
    ...mapGetters(["ACCOUNT", "SELECTED_CARD"]),
  },
  methods: {
    ...mapActions(["SELECT_CARD", "GET_ACCOUNT_FROM_API"]),
    goToAccount() {
      this.$router.push("/account")
    },
    back() {
      if (this.$route.path === '/social-list') {
        this.$router.push('/personal')
      } else if (this.$route.path === '/personal' && Object.keys(this.SELECTED_CARD).length) {
        this.$router.push('/card-edit')
      } else if (this.$route.path === '/card-edit') {
        this.$router.push('/account')
      } else {
        history.back()
      }
    }
  },
  mounted() {
    this.GET_ACCOUNT_FROM_API().then(() => {
    });
  }
};
</script>