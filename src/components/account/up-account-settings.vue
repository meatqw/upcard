<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="settings">
        <div class="settings__container">
          <h2 class="visually-hidden">Меню настроек</h2>
          <ul class="list-reset list-menu">
            <li class="list-menu__item">
              <!-- Выбор языка -->
              <div class="select navigation-projects__input">
                <input class="select__input" type="hidden" name="" />
                <div class="select__name">
                  <i class="fa-solid fa-globe"></i>
                  <span>Выбрать язык</span>
                </div>
                <div class="select__head">Русский</div>
                <ul class="select__list" style="display: none">
                  <li class="select__item">Русский</li>
                  <li class="select__item">Немецкий</li>
                </ul>
              </div>
              <!-- --- -->
            </li>
<!--            <li class="list-menu__item">-->
<!--              <button class="btn-reset btn btn&#45;&#45;med list-menu__btn">-->
<!--                Пополнить баланс-->
<!--              </button>-->
<!--            </li>-->
            <li class="list-menu__item">
              <button
                class="btn-reset btn btn--med btn--border list-menu__btn"
                onclick="document.location='delete-account.html'"
              >
                Удалить аккаунт
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-account-settings",
};
</script>
