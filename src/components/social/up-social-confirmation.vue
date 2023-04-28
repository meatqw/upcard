<template>
  <main class="main">
    <div class="main__container container">
      <section class="confirmation section-block section-block--big">
        <div class="confirmation__container">
          <p class="confirmation__descr text-regular" data-aos="zoom-in">
            Укажите свой аккаунт в социальной сети ({{SOCIAL.charAt(0).toUpperCase() + SOCIAL.slice(1)}}) или вставьте
            ссылку на свой профиль.
          </p>
          <form
            action="#"
            class="confirmation-form btns-panel btns-panel--form"
          >
            <label class="confirmation-form__label label"
              ><input
                type="text"
                name="name"
                v-model="social"
                class="input-reset input confirmation-form__input"
                :placeholder="SOCIAL.charAt(0).toUpperCase() + SOCIAL.slice(1)"
              />
              <span>Ссылка на ваш профиль</span></label
            >
            <div class="confirmation-form__btns">
              <button class="btn-reset btn btn-form confirmation-form__btn"
              @click="setSocial()"
               type="button">
                Сохранить
              </button>
              <button v-if="social"
                class="btn-reset btn btn-form btn--border confirmation-form__btn"
                type="button" 
                @click="delSocial()"
              >
              
                Удалить ссылку
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "up-social-confirmation",
  data() {
    return {
      social: null,
    }
  },
  methods: {
    ...mapActions(["SET_SOCIAL", "SELECT_CARD", "UPDATE_SOCIAL_API"]),

    // оьвнолеям выбраннуб соцсеть 
    setSocial() {
      let newSocialData = {}
      newSocialData[this.SOCIAL] = this.social
      newSocialData['id'] = this.SOCIAL_DATA.id
      
      this.UPDATE_SOCIAL_API(newSocialData).then(() => {
        this.$router.push('/social-list')
      });
     
    },
    delSocial() {
      this.social = null
      this.setSocial()
    }
  },
  computed: {
    ...mapGetters(["SOCIAL", "SELECTED_CARD", "SOCIAL_DATA"]),
  },
  mounted() {
    this.social = this.SOCIAL_DATA[this.SOCIAL]
  }
};
</script>
