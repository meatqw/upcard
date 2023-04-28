<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="social">
        <div class="social__container">
          <h2 class="visually-hidden social__title">Список социальных сетей</h2>
          <ul class="list-reset social__list">
            <!-- добавлненный итем class - social__link--added -->

            <li v-for="(item, key) in socialData"
              :key="key"
              :class="[{ 'social__item': true, 'social__link--added': item !== null }]"
              style="cursor: pointer"
              @click="goToSocialConfirmation(key)"
            >
              <a class="social__link">
                <i :class="'fa-brands fa-'+key"></i> <span>{{key.charAt(0).toUpperCase() + key.slice(1)}}</span></a
              >
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
  name: "up-social-list",
  data() {
    return {
      socialData: {
        behance: null,
        facebook: null,
        github: null,
        google: null,
        // id: null,
        instagram: null,
        linkedin: null,
        odnoklassniki: null,
        skype: null,
        telegram: null,
        tiktok: null,
        twitch: null,
        twitter: null,
        viber: null,
        vk: null,
        whatsapp: null,
        yandex: null,
        youtube: null,
      },
    };
  },

  methods: {
    ...mapActions(["SET_SOCIAL", "SELECT_CARD", "SET_SOCIAL_DATA"]),

    // редирект на установку данных социалки
    goToSocialConfirmation(social) {
      this.SET_SOCIAL(social);
      this.$router.push("/social-confirmation");
    },
  },
  computed: {
    ...mapGetters(["SOCIAL", "SELECTED_CARD", "SOCIAL_PATH"]),
  },

  mounted() {
    // заполняем socialData данныеми из selectedCard
    // проверям путь
    
    let selectedSocialData = {}
    if (this.SOCIAL_PATH == 'personal') {
      selectedSocialData = this.SELECTED_CARD.id_social
    } else {
      selectedSocialData = this.SELECTED_CARD.id_company_info.id_social
    }


    if (selectedSocialData !== null) {
      for (let social in this.socialData) {
        this.socialData[social] = selectedSocialData[social];
      }
    }
    this.SET_SOCIAL_DATA(selectedSocialData)

  }
};
</script>
