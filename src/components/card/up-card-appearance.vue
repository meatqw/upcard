<template>
  <main class="main">
    <div class="main__container container">
      <section class="appearance section-block">
        <div class="appearance__container">
          <h2 class="visually-hidden appearance__title">
            Список стилей для визитки
          </h2>
          <form action="#" class="appearance__form">
            <ul class="list-reset appearance__list" data-aos="zoom-in">
              <!-- итем стиля -->
              <li class="appearance__item">
                <div class="radio-btn">
                  <!-- radio-box -->
                  <input
                    id="radio-1"
                    type="radio"
                    name="appearance"
                    value="3"
                    checked="checked"
                    v-model="appearance"
                  />
                  <label class="radio-btn__content" for="radio-1"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--accent"
                      ></div>
                      <div
                        class="appearance__color appearance__color--gray"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Наш стиль
                    </h3></label
                  >
                </div>
              </li>
              <!-- итем стиля -->
              <li class="appearance__item">
                <div class="radio-btn">
                  <!-- radio-box -->
                  <input
                    id="radio-2"
                    type="radio"
                    name="appearance"
                    value="1"
                    v-model="appearance"
                  />
                  <label class="radio-btn__content" for="radio-2"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--light"
                      ></div>
                      <div
                        class="appearance__color appearance__color--dark"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Классик
                    </h3></label
                  >
                </div>
              </li>
              <!-- итем стиля -->
              <li class="appearance__item">
                <div class="radio-btn">
                  <!-- radio-box -->
                  <input
                    id="radio-3"
                    type="radio"
                    name="appearance"
                    value="4"
                    v-model="appearance"
                  />
                  <label class="radio-btn__content" for="radio-3"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--dark-green"
                      ></div>
                      <div
                        class="appearance__color appearance__color--green"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Медицина
                    </h3></label
                  >
                </div>
              </li>
              <!-- итем стиля -->
              <li class="appearance__item">
                <div class="radio-btn">
                  <!-- radio-box -->
                  <input
                    id="radio-4"
                    type="radio"
                    name="appearance"
                    value="2"
                    v-model="appearance"
                  />
                  <label class="radio-btn__content" for="radio-4"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--accent"
                      ></div>
                      <div
                        class="appearance__color appearance__color--light"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Почти наш стиль
                    </h3></label
                  >
                </div>
              </li>
              <!-- итем стиля -->
              <li class="appearance__item">
                <div class="radio-btn">
                  <!-- radio-box -->
                  <input
                    id="radio-5"
                    type="radio"
                    name="appearance"
                    value="5"
                    v-model="appearance"
                  />
                  <label class="radio-btn__content" for="radio-5"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--bg"
                      ></div>
                      <div
                        class="appearance__color appearance__color--light"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Строгий
                    </h3></label
                  >
                </div>
              </li>
              <!-- итем стиля -->
              <li class="appearance__item">
                <div class="radio-btn">
                  <!-- radio-box -->
                  <input
                    id="radio-8"
                    type="radio"
                    name="appearance"
                    value="8"
                    disabled="disabled"
                  />
                  <label class="radio-btn__content" for="radio-8"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--yellow"
                      ></div>
                      <div
                        class="appearance__color appearance__color--light"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Веселый
                    </h3></label
                  >
                </div>
              </li>
              <li class="appearance__item">
                <div class="radio-btn">
                  <!-- radio-box -->
                  <input
                    id="radio-6"
                    type="radio"
                    name="appearance"
                    value="6"
                    v-model="appearance"
                  />
                  <label class="radio-btn__content" for="radio-6"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--dark-blue"
                      ></div>
                      <div
                        class="appearance__color appearance__color--light-gray"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Темной синий
                    </h3></label
                  >
                </div>
              </li>
              <li class="appearance__item">
                <div class="radio-btn">
                  <!-- radio-box -->
                  <input
                    id="radio-7"
                    type="radio"
                    name="appearance"
                    value="7"
                    v-model="appearance"
                  />
                  <label class="radio-btn__content" for="radio-7"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--light-yellow"
                      ></div>
                      <div
                        class="appearance__color appearance__color--light"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Желто синий
                    </h3></label
                  >
                </div>
              </li>
            </ul>
            <div class="btns-panel">
              <button
                class="btn-reset appearance__btn btn btn--big"
                type="button"
                @click="saveAppearance()"
              >
                Сохранить выбранный стиль
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>

  <upNotificationMessage
    v-if="showMsg"
    v-on:close="closeNotification"
    :msgText="msgText"
  ></upNotificationMessage>
</template>

<script>
import upNotificationMessage from "../notification/up-notification-message.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "up-card-appearance",
  data() {
    return {
      msgText: "",
      showMsg: false,
      appearance: "",
    };
  },
  computed: {
    ...mapGetters(["SELECTED_CARD"]),
  },
  methods: {
    ...mapActions(["UPDATE_CARD_API"]),

    // ЗАКРЫТЬ ОТКНО УВЕДОМЛЕНИЯ
    closeNotification(data) {
      this.showMsg = data;
    },

    saveAppearance() {
      this.UPDATE_CARD_API({
        id: this.SELECTED_CARD.id,
        id_appearance: this.appearance,
        link: this.SELECTED_CARD.link,
      }).then(() => {
        this.msgText = "Стиль обновлен";
        this.showMsg = true;
        this.$router.push("/card-edit");
      });
    },
  },
  components: {
    upNotificationMessage,
  },
  mounted() {
    if (this.SELECTED_CARD.id_appearance) {
      this.appearance = this.SELECTED_CARD.id_appearance.id;
    } else {
      console.error("No style in this card");
    }
  },
};
</script>
