<template>
  <header class="header">
    <div class="header__container">
      <!-- кнопка меню -->
      <button v-if="!showHeadInfo"
          @click="changeClassMenu"
          :class="menuBtnShowClass"
          aria-label="Открыть меню"
          aria-expanded="false"
          data-burger
      >
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span></button
      ><!-- боковое меню -->
      <nav :class="menuShowClass" title="Главное меню" data-menu>
        <ul class="list-reset nav__list">
          <li class="nav__item" @click="routingFromMenu('/account-cards')">
            <a href='' class="nav__link">
              <div class="nav__left">
              <i class="fa-solid fa-list"></i> <span>Мои визитки</span>
            </div></a>
          </li>
          <li class="nav__item" @click="routingFromMenu('/personal')">
            <a href='' class="nav__link"
            ><div class="nav__left">
              <i class="fa-solid fa-plus"></i>
              <span>Создать новую визитку</span>
            </div></a
            >
          </li>
          <li class="nav__item" @click="routingFromMenu('/subscriptions')">
            <a href='' class="nav__link"
            ><div class="nav__left">
              <i class="fa-regular fa-credit-card"></i>
              <span>Мой тариф</span>
            </div>
              <div class="nav__right">
                <div class="nav__balance">200 руб</div>
              </div></a
            >
          </li>
          <li class="nav__item" @click="routingFromMenu('/account-settings')">
            <a href='' class="nav__link"
            ><div class="nav__left">
              <i class="fa-solid fa-gears"></i> <span>Настройки</span>
            </div></a
            >
          </li>
          <li class="nav__item">
            <a href="mailto:support@mail.com" class="nav__link"
            ><div class="nav__left">
              <i class="fa-solid fa-headset"></i> <span>Поддержка</span>
            </div></a
            >
          </li>
          <li class="nav__item" @click="routingFromMenu('/account')">
            <a href='' class="nav__link"
            ><div class="nav__left">
              <i class="fa-solid fa-power-off"></i> <span>Выйти</span>
            </div></a
            >
          </li>
        </ul>
      </nav>
      <div class="header__right" v-if="!showHeadInfo">
        <!-- значение баланса -->
        <div class="header__balance header-balance" >
          <span class="header-balance__name">Ваш баланс:</span>
          <span class="header-balance__value">200руб.</span>
        </div>
        <!-- кнопка создания новой визитки -->
        <button
            class="btn-reset btn header__btn header-btn"
            onclick="document.location='personal-information.html'"
        >
          <i class="fa-solid fa-plus"></i>
          <span class="header-btn__text">Новая визитка</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "up-header",
  data() {
    return {
      menuClassName: 'nav', // дефолтное состояние меню
      menuBtnClassName: 'btn-reset burger' // дефолтное остсоянии кнопки меню
    }
  },
  methods: {
    // открыть/закрыть меню
    changeClassMenu() {
      if (this.menuClassName === 'nav') {
        this.menuClassName = 'nav menu--active';
        this.menuBtnClassName = 'btn-reset burger burger--active';
      } else {
        this.menuClassName = 'nav';
        this.menuBtnClassName = 'btn-reset burger';
      }
    },
    // роутинг с закрытием меню
    routingFromMenu(link) {
      this.menuClassName = 'nav';
      this.menuBtnClassName = 'btn-reset burger'
      // переход
      this.$router.push(link);
    }
  },
  computed: {
    // не отображаем иформации в header если это страницы авторизации
    showHeadInfo() {
      return this.$route.path === '/welcome' || this.$route.path === '/auth' || this.$route.path === '/referral';
    },
    // класс меню
    menuShowClass() {
      return this.menuClassName;
    },
    // класс кнопки меню
    menuBtnShowClass() {
      return this.menuBtnClassName;
    }
  }
}
</script>