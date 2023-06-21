<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="list-of-portfolio">
        <div class="list-of-portfolio__container">
          <h2 class="list-of-portfolio__title title-h2">
            Список
            <input
              type="text"
              class="input-reset input list-of-portfolio__input"
              placeholder="Портфолио"
              v-model="inputValue"
            />
          </h2>
          <!-- список карт -->
          <ul class="list-reset list-of-portfolio__list">
            <!-- итем -->
            <li
              class="list-of-cards__item"
              v-for="portfolioItem of PORTFOLIO"
              :key="portfolioItem.id"
            >
              <button
                @click="selectItemAndRedirect(portfolioItem)"
                class="btn-reset list-of-portfolio__card card-item"
              >
                <!-- изображение -->
                <div class="card-item__img">
                  <picture v-if="portfolioItem.img"
                    ><source :srcset="portfolioItem.img" type="image/avif" />
                    <source :srcset="portfolioItem.img" type="image/webp" />
                    <img
                      loading="lazy"
                      :src="portfolioItem.img"
                      class="image"
                      width="65"
                      height="65"
                      alt="avatar"
                  /></picture>

                  <picture v-else>
                    <source
                      :srcset="require('../../assets/img/avatar-card.png')"
                      type="image/avif"
                    />
                    <source
                      :srcset="require('../../assets/img/avatar-card.png')"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      :src="require('../../assets/img/avatar-card.png')"
                      class="image"
                      width="65"
                      height="65"
                      alt="avatar"
                    />
                  </picture>
                </div>
                <div class="card-item__info">
                  <!-- имя -->
                  <h3 class="card-item__title text-regular">
                    {{ portfolioItem.name }}
                  </h3>
                  <!-- дата -->
                  <p class="card-item__date text-little">
                    {{ portfolioItem.date.split("T")[0] }}
                  </p>
                </div>
              </button>
            </li>
            <li class="list-of-card__item">
              <button
                class="btn-reset btn btn--med list-menu__btn"
                @click="selectItemAndRedirect(null)"
                type="button"
              >
                Добавить элемент
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
import { API_DOMAIN } from "/config.js";

export default {
  name: "up-portfolio-list",

  data() {
    return {
      API_DOMAIN: API_DOMAIN,
      inputValue: "",
    };
  },
  methods: {
    ...mapActions(["GET_PORTFOLIO_FROM_API", "SELECT_PORTFOLIO_ITEM"]),

    selectItemAndRedirect(portfolioItem) {
      this.SELECT_PORTFOLIO_ITEM(portfolioItem);
      this.$router.push("/portfolio-item");
    },
  },
  computed: {
    ...mapGetters(["SELECTED_CARD", "PORTFOLIO"]),
  },
  mounted() {
    // const token = this.$route.query.token;
    // console.log(token)

    this.GET_PORTFOLIO_FROM_API(this.SELECTED_CARD.id);
  },
};
</script>

<style scoped>
.list-of-portfolio__title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.list-of-portfolio__input {
  border-left: none;
  /* border: 1px solid #fff; */
  height: 40px;
  max-width: 200px;
  padding: 10px 5px;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.02em;
}

.list-of-portfolio__input::placeholder {
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.02em;
}

.list-of-portfolio__input:focus {
  border-left: none;
}

@media (max-width: 576px) {
  .list-of-portfolio__input {
    height: 35px;
    font-size: 18px;
  }

  .list-of-portfolio__input::placeholder {
    font-size: 18px;
  }
}
</style>
