<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="selection-confirmation">
        <div class="selection-confirmation__container">
          <h2 class="visually-hidden">Подтверждение выхода</h2>
          <ul class="list-reset list-menu">
            <li class="list-menu__item">
              <h3 class="list-menu__title text-regular">
                Вы действительно хотите выйти?
              </h3>
            </li>
            <li class="list-menu__item"  @click="logout()">
              <button class="btn-reset btn btn--med list-menu__btn">
               
                Выйти
              </button>
            </li>
            <li class="list-menu__item">
              <button
                class="btn-reset btn btn--med btn--border list-menu__btn"
                onclick="history.back();"
                value="Отмена"
              >
                Отмена
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { API_DOMAIN } from '/config.js'
export default {
  name: "up-account-exit-confirmation",
  methods: {
    logout() {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      location.href = API_DOMAIN;

    },
  }
};
</script>

