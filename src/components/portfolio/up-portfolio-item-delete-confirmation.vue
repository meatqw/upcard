<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="selection-confirmation">
        <div class="selection-confirmation__container">
          <h2 class="visually-hidden">
            Подтверждение удаления элемента портфолио
          </h2>
          <ul class="list-reset list-menu">
            <li class="list-menu__item">
              <h3 class="list-menu__title text-regular">
                Вы действительно хотите удалить данный элемент вашего портфолио?
              </h3>
            </li>
            <li class="list-menu__item">
              <button class="btn-reset btn btn--med list-menu__btn">
                Удалить Элемент
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
export default {
  name: "up-portfolio-item-delete-confirmation",
};
</script>

<style scoped>
</style>