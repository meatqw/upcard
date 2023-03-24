<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="edit">
        <div class="edit__container">
          <h2 class="visually-hidden">Меню редактирования</h2>
          <ul class="list-reset list-menu">
            <li class="list-menu__item">
              <a href="calendar-list.html" class="list-menu__link"
                ><i class="fa-regular fa-calendar-days"></i>
                <span>Текущий месяц</span></a
              >
            </li>
            <li class="list-menu__item">
              <a href="calendar-list.html" class="list-menu__link"
                ><i class="fa-regular fa-calendar-days"></i>
                <span>Следующий месяц</span></a
              >
            </li>
            <!-- <li class="list-menu__item">
        <button class="btn-reset btn btn--med list-menu__btn"
          onclick="document.location='calendar-settings.html'">Настройка календаря</button>
      </li> -->
            <li class="list-menu__item">
              <button
                class="btn-reset btn btn--med btn--border list-menu__btn"
                onclick="document.location='delete-calendar.html'"
              >
                Удалить календарь
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
  name: "up-calendar-menu",
};
</script>

