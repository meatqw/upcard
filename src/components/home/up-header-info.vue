<template>
  <header class="header">
    <div class="header__container">
      <!-- Наименование страницы -->
      <h1 class="header__title">{{ title }}</h1>
      <!-- боковое меню -->
      <div class="header__right" v-if="$route.path != '/load'">
        <!-- значение баланса -->
        <div class="header__balance header-balance">
          <span class="header-balance__name">Ваш баланс: </span>
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
export default {
  name: "up-header",
  data() {
    return {
    };
  },
  props: {
    // поучаем щаголвоок старницы
    title: {
      type: String,
      default: 'Заголовок',
    },
  },
  methods: {
    goToAccount() {
      this.$router.push("/account")
    },
    back() {
      if (this.$route.path != '/social-list') {
        history.back()
      } else {
        this.$router.push('/personal')
      }
    }
  }
};
</script>