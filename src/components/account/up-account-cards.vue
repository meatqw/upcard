<template>
    <div class="list-of-cards__container">
      <h2 class="list-of-cards__title title-h2">Список ваших визиток</h2>
      <!-- список карт -->
      <ul class="list-reset list-of-cards__list">
        <!-- итем -->
        <li class="list-of-cards__item" v-for="card in CARDS"
         :key="card.id" 
         @click="selectCard(card)"
         >
          <button
            class="btn-reset list-of-cards__card card-item"
          >
            <!-- изображение -->
            <div class="card-item__img">
              <picture
                ><source
                  :srcset="API_DOMAIN + card.personal_img"
                  type="image/avif" />
                <source
                  :srcset="API_DOMAIN + card.personal_img"
                  type="image/webp" />
                <img
                  loading="lazy"
                  :src="API_DOMAIN + card.personal_img"
                  class="image"
                  width="65"
                  height="65"
                  alt="avatar"
              /></picture>
            </div>
            <div class="card-item__info">
              <!-- имя -->
              <h3 class="card-item__title text-regular">
                {{ card.name }}
              </h3>
              <!-- специальность -->
              <p class="card-item__speciality text-little">
                {{ card.spec }}
              </p>
            </div>
          </button>
        </li>
      </ul>
    </div>
</template>

  
<script>


import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from '/config.js'

export default {
  name: "up-account-cards",
  data(){
    return {
        API_DOMAIN: API_DOMAIN
    }
  },
  methods: {
    ...mapActions(["GET_CARDS_FROM_API", "SELECT_CARD"]),

    // устанавливаем текущую карточку
    selectCard(data) {
        this.SELECT_CARD(data);

        // редирект на account если открыта страница со всеми карточками
        if (this.$route.path !== '/account') {
            this.$router.push('/account');
        }
    }
  },
  computed: {
    ...mapGetters(["CARDS", "SELECTED_CARD"]),
  },
  mounted() {
    // const token = this.$route.query.token;
    // console.log(token)

    this.GET_CARDS_FROM_API().then(() => {
        if (this.SELECTED_CARD.id == undefined) {
            // устанавливаем начальную выранную карточку
            this.SELECT_CARD(this.CARDS[0])
        }
    });

    
  },
};
</script>
  
  