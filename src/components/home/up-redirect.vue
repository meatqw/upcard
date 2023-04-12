
<template>
    <main class="main">
      <div class="main__container container">
        <section class="start section-block">
          <div class="start__container">
            <h1 class="start__title title-h1" data-aos="zoom-in">
              Добро пожаловать в личный кабинет UpCard (окно редиректа)
            </h1>
            <div class="start__content">
              <div class="start__body" data-aos="zoom-in">
                <h2 class="start__subtitle title-h2"></h2>
                <h2 class="start__subtitle title-h2">Начало использования:</h2>
                <ul class="list-reset start__list">
                  <li class="start__item">
                    <i class="fa-solid fa-circle-dot"></i>
                    <span class="text-regular"
                      >Создайте аккаунт или войдите в существующий</span
                    >
                  </li>
                  <li class="start__item">
                    <i class="fa-solid fa-circle-dot"></i>
                    <span class="text-regular">Заполните личные данные</span>
                  </li>
                  <li class="start__item">
                    <i class="fa-solid fa-circle-dot"></i>
                    <span class="text-regular"
                      >Добавьте личную фотографию или лого компании</span
                    >
                  </li>
                </ul>
                <p class="start__descr title-h2">
                  Можете пользоваться! Предложите партнеру отсканировать QR-код
                  и он получит всю необходимую информацию о вас себе.
                </p>
              </div>
              <!-- ссылки в виде кнопок-->
              <div class="start__btns btns-panel" v-if="TOKEN_STATUS">
                <a @click="goToAccount()" style="cursor: pointer;" class="start__btn btn btn--big">Войти</a>
              </div>
              <div class="start__btns btns-panel" v-else>
                <a href="http://upcard.online/auth/welcome" style="cursor: pointer;" class="start__btn btn btn--big">Авторизации</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: "up-home-redirect",
    methods: {
        ...mapActions(["GET_CHECK_TOKEN_FROM_API",]),

        goToAccount() {
          this.$router.push('/account')
        }

    },
    computed: {
    ...mapGetters(["TOKEN_STATUS",]),
    },

    
  };
  </script>
  