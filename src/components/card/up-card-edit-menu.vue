<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="edit">
        <div class="edit__container">
          <h2 class="visually-hidden">Меню редактирования</h2>
          <ul class="list-reset list-menu">
            <li class="list-menu__item">
              <a @click="goToPage('/personal')" style="cursor: pointer;" class="list-menu__link"
                ><i class="fa-regular fa-user"></i>
                <span>Личные данные</span></a
              >
            </li>
            <li class="list-menu__item">
              <a @click="goToPage('/portfolio-list')" style="cursor: pointer;" class="list-menu__link"
                ><i class="fa-solid fa-briefcase"></i>
                <span>Портфолио пользователя</span></a
              >
            </li>
            <li class="list-menu__item">
              <a class="list-menu__link"
                ><i class="fa-regular fa-calendar-days"></i>
                <span>Календарь приема</span></a
              >
            </li>
            <!-- <li class="list-menu__item">
              <button class="btn-reset btn btn--med list-menu__btn">
                Добавить портфолио
              </button>
            </li>
            <li class="list-menu__item">
              <button class="btn-reset btn btn--med list-menu__btn">
                Добавить календарь
              </button>
            </li> -->
            <li class="list-menu__item">
              <button
                class="btn-reset btn btn--med btn--border list-menu__btn"
              >
                Удалить визитку
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
  name: "up-card-edit-menu",
  methods: {
    goToPage(link) {
        this.$router.push(link)
    }
  }
};
</script>
