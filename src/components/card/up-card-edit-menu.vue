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
                <span>Подкарта пользователя</span></a
              >
            </li>
            <li class="list-menu__item">
              <a class="list-menu__link" style="color: gray"
                ><i class="fa-regular fa-calendar-days"></i>
                <span>Органайзер</span></a
              >
            </li>
            <li class="list-menu__item"  @click="goToPage('/card-appearance')">
              <button class="btn-reset btn btn--med list-menu__btn">
                Внешний вид визитки ({{ SELECTED_CARD.id_appearance.name }})
              </button> 
            </li>
            <li class="list-menu__item">
              <button @click="deleteCard()"
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
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "up-card-edit-menu",
  methods: {
    ...mapActions(["SET_DELETE_DATA"]),
    goToPage(link) {
        this.$router.push(link)
    },
    deleteCard() {
      this.SET_DELETE_DATA({
        type: "card",
        info: "визитку",
        id: this.SELECTED_CARD.id,
      });
      this.$router.push("/delete");
    },
  },
  computed: {
      ...mapGetters(['SELECTED_CARD',])
    }
};
</script>
