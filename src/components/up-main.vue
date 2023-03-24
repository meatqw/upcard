<template>
      <header class="header">
        <div class="header__container">
          <!-- кнопка меню -->
          <button
            class="btn-reset burger"
            aria-label="Открыть меню"
            aria-expanded="false"
            data-burger
          >
            <span class="burger__line"></span>
            <span class="burger__line"></span>
            <span class="burger__line"></span></button
          ><!-- боковое меню -->
          <nav class="nav" title="Главное меню" data-menu>
            <ul class="list-reset nav__list">
              <li class="nav__item">
                <a href="" class="nav__link"
                  ><div class="nav__left">
                    <i class="fa-solid fa-list"></i> <span>Мои визитки</span>
                  </div></a
                >
              </li>
              <li class="nav__item">
                <a href="" class="nav__link"
                  ><div class="nav__left">
                    <i class="fa-solid fa-plus"></i>
                    <span>Создать новую визитку</span>
                  </div></a
                >
              </li>
              <li class="nav__item">
                <a href="" class="nav__link"
                  ><div class="nav__left">
                    <i class="fa-regular fa-credit-card"></i>
                    <span>Мой тариф</span>
                  </div>
                  <div class="nav__right">
                    <div class="nav__balance">200 руб</div>
                  </div></a
                >
              </li>
              <li class="nav__item">
                <a href="settings.html" class="nav__link"
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
              <li class="nav__item">
                <a href="exit.html" class="nav__link"
                  ><div class="nav__left">
                    <i class="fa-solid fa-power-off"></i> <span>Выйти</span>
                  </div></a
                >
              </li>
            </ul>
          </nav>
          <div class="header__right">
            <!-- значение баланса -->
            <div class="header__balance header-balance">
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
      <router-view></router-view>
      <footer class="footer"><div class="container"></div></footer>
</template>

<script>
export default {
  name: "up-main",
  components: {},
};
</script>
