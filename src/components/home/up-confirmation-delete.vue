<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="selection-confirmation">
        <div class="selection-confirmation__container">
          <h2 class="visually-hidden">Подтверждение {{ DELETE_DATA.info }}</h2>
          <ul class="list-reset list-menu">
            <li class="list-menu__item">
              <h3 class="list-menu__title text-regular">
                Вы действительно хотите удалить {{ DELETE_DATA.info }}?
              </h3>
            </li>
            <li class="list-menu__item">
              <button class="btn-reset btn btn--med list-menu__btn" type="button" @click="del()">
                Удалить {{ DELETE_DATA.info }}
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "up-confirmation-delete",
  msgShow: false,
  computed: {
    ...mapGetters(["DELETE_DATA"]),
  },
  methods: {
    ...mapActions(["SET_DELETE_DATA", "DELETE_PORTFOLIO_API"]),

    del() {
        if (this.DELETE_DATA.type == "portfolio") {
            this.DELETE_PORTFOLIO_API(this.DELETE_DATA.id);
            this.$router.push('/portfolio-list')
        }
    }
  },
};
</script>
    