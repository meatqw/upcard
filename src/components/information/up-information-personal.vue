<template>
  <main class="main">
    <div class="main__container container">
      <section class="personal section-block section-block--data-form">
        <div class="personal__container">
          <h2 class="visually-hidden">Форма личной информации</h2>
          <p class="personal__descr text-little" data-aos="zoom-in">
            Добавьте ту информацию, которую хотели бы представить
          </p>
          <form action="#" class="form data-form personal__form">
            <div class="data-form__body" data-aos="zoom-in">
              <ul class="list-reset data-form__add-pictures add-pictures__list">
                <!-- личное фото -->
                <li class="add-pictures__item">
                  <!-- изображение -->

                  <div class="add-pictures__img">
                    <picture
                    >
                      <source :srcset="personal_img" type="image/avif"/>
                      <source :srcset="personal_img" type="image/webp"/>
                      <img
                          loading="lazy"
                          :src="personal_img"
                          class="image"
                          width="230"
                          height="230"
                          alt="avatar"
                      /></picture>
                  </div>
                  <!-- добавить фото -->
                  <div class="input__wrapper">
                    <input
                        name="image"
                        type="file"
                        ref="personal_img"
                        accept="image/*"
                        id="input__file"
                        class="input input__file"
                        @change="uploadImage('personal_img')"
                    />
                    <label for="input__file" class="input__file-button btn"
                    ><span class="input__file-icon-wrapper"
                    ><i class="fa-solid fa-file-export"></i> </span
                    ><span class="input__file-button-text"
                    >Загрузить личное фото</span
                    ></label
                    >
                  </div>
                </li>
                <!-- личный логотип -->
                <li class="add-pictures__item">
                  <!-- изображение -->

                  <div class="add-pictures__img">
                    <picture
                    >
                      <source :srcset="logo_img" type="image/avif"/>
                      <source :srcset="logo_img" type="image/webp"/>
                      <img
                          loading="lazy"
                          :src="logo_img"
                          class="image"
                          width="230"
                          height="230"
                          alt="avatar"
                      /></picture>
                  </div>

                  <!-- добавить фото -->
                  <div class="input__wrapper">
                    <input
                        name="image"
                        type="file"
                        ref="logo_img"
                        accept="image/*"
                        id="input__file--second"
                        class="input input__file"
                        @change="uploadImage('logo_img')"
                    />
                    <label
                        for="input__file--second"
                        class="input__file-button btn"
                    ><span class="input__file-icon-wrapper"
                    ><i class="fa-solid fa-file-export"></i> </span
                    ><span class="input__file-button-text"
                    >Загрузить логотип</span
                    ></label
                    >
                  </div>
                </li>
              </ul>
              <label class="data-form__label label"
              ><input
                  v-model="cardData.card_name"
                  maxlength="120"
                  autocomplete="off"
                  type="text"
                  name="Название"
                  class="input-reset input data-form__input input-name"
                  placeholder="Визитка 1"
                  required
              />
                <span>Название визитки*</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.surname"
                  maxlength="120"
                  autocomplete="off"
                  type="text"
                  name="Фамилия"
                  class="input-reset input data-form__input"
                  placeholder="Иванов"
              />
                <span>Фамилия</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.name"
                  maxlength="120"
                  autocomplete="off"
                  type="text"
                  name="Имя"
                  class="input-reset input data-form__input input-first-name"
                  placeholder="Иван"
                  required
              />
                <span>Имя*</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.patronymic"
                  maxlength="120"
                  autocomplete="off"
                  type="text"
                  name="Отчество"
                  class="input-reset input data-form__input"
                  placeholder="Иванович"
              />
                <span>Отчество</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.spec"
                  maxlength="120"
                  autocomplete="off"
                  type="text"
                  name="Специализация"
                  class="input-reset input data-form__input"
                  placeholder="Программист"
              />
                <span>Специализация*</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.phone"
                  autocomplete="off"
                  type="tel"
                  name="Телефон"
                  class="input-reset input data-form__input input-tel"
                  v-mask="'+7(###)-###-##-##'"
                  placeholder="+7(___)___-__-__"
                  inputmode="text"
                  required
              />
                <span>Мобильный телефон*</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.personal_site"
                  maxlength="120"
                  autocomplete="off"
                  type="text"
                  name="Сайт"
                  class="input-reset input data-form__input"
                  placeholder="mysite.com"
              />
                <span>Личный сайт</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.email"
                  maxlength="120"
                  autocomplete="off"
                  type="email"
                  name="email"
                  class="input-reset input data-form__input input-email"
                  placeholder="ivanov-ivan@mail.com"
                  required
              />
                <span>Email*</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.address"
                  maxlength="120"
                  autocomplete="off"
                  type="text"
                  name="адрес"
                  class="input-reset input data-form__input"
                  placeholder="г. Барнаул, ул. Ленина, дом 85"
              />
                <span>Адрес</span></label
              >
              <label class="data-form__label label"
              ><input
                  v-model="cardData.link"
                  maxlength="120"
                  autocomplete="off"
                  type="text"
                  name="Ссылка"
                  class="input-reset input data-form__input"
                  placeholder="upcard"
                  required
              />
                <span
                >Ссылка* https://card.upcard.online/{{ cardData.link }}</span
                ></label
              >
              <div class="data-form__btns" v-if="Object.keys(SELECTED_CARD).length !== 0">
                <a
                    @click="goToPage('/social-list')"
                    class="btn-reset btn btn--fit data-form__btn"
                >Выбрать социальные сети</a
                >
                <!--                <a-->
                <!--                    v-if="Object.keys(this.SELECTED_CARD).length !== 0"-->
                <!--                    @click="goToPage('/company')"-->
                <!--                    class="btn-reset btn btn&#45;&#45;fit data-form__btn"-->
                <!--                >Информация о компании</a-->
                <!--                >-->
              </div>
            </div>
            <div
                class="btns-panel data-form__btns-panel"
                v-if="Object.keys(SELECTED_CARD).length !== 0"
            >
              <button
                  class="btn-reset btn btn--big data-form__btn"
                  type="button"
                  v-touch="updateCard"
              >
                <template v-if="isLoad">
                  <div class="lds-dual-ring"></div>
                </template>
                <template v-else>
                  Обновить визитку
                </template>
              </button>

              <p class="btns-panel__descr">
                Нажимая кнопку «Обновить визитку», вы подтверждаете согласие с
                уловиями и даете согласие на обработку ваших персональных данных
              </p>
            </div>

            <div class="btns-panel data-form__btns-panel" v-else>
              <button
                  class="btn-reset btn btn--big data-form__btn"
                  type="button"
                  v-touch="addCard"
                  value=""
              >
                <template v-if="isLoad">
                  <div class="lds-dual-ring"></div>
                </template>
                <template v-else>
                  Создать визитку
                </template>
              </button>

              <p class="btns-panel__descr">
                Нажимая кнопку «Создать визитку», вы подтверждаете согласие с
                уловиями и даете согласие на обработку ваших персональных данных
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
  <upNotificationMessage></upNotificationMessage>
</template>


<script>
import upNotificationMessage from "../notification/up-notification-message.vue";
import {mapActions, mapGetters} from "vuex";
import {API_DOMAIN} from "/config.js";

export default {
  name: "up-information-personal",
  components: {
    upNotificationMessage,
  },
  data() {
    return {
      API_DOMAIN: API_DOMAIN,

      // информация о карточке
      cardData: {
        id: "",
        card_name: "",
        name: "",
        surname: "",
        patronymic: "",
        spec: "",
        phone: "",
        home_phone: "",
        personal_site: "",
        email: "",
        dob: "",
        address: "",
        personal_img: "",
        logo_img: "",
        date_update: "",
        id_appearance: 1,
        link: "",
      },
      personal_img: require("../../assets/img/avatar-card.avif"),
      logo_img: require("../../assets/img/avatar-card.avif"),
      isLoad: false,
    };
  },
  methods: {
    ...mapActions([
      "UPDATE_CARD_API",
      "POST_CARD_API",
      "POST_SOCIAL_API",
      "SET_SOCIAL_PATH",
      "SET_NOTIFICATION_DATA",
    ]),

    // ЗАКРЫТЬ ОТКНО УВЕДОМЛЕНИЯ
    closeNotification(data) {
      this.showMsg = data;
    },

    // обновление картчоки
    updateCard() {
      if (
          this.cardData.email !== "" &&
          this.cardData.name !== "" &&
          this.cardData.phone !== "" &&
          this.cardData.card_name !== "" &&
          this.cardData.spec !== "" &&
          this.cardData.link !== ""
      ) {
        this.isLoad = true;
        this.UPDATE_CARD_API(this.cardData).then(response => {
          if ('error' in response) {
            if (response['error'] === 'link') {
              this.SET_NOTIFICATION_DATA({
                isNotification: true,
                notificationText: "Данные не обновлены. Ссылка должна быть уникальной",
                notificationType: "message--error",
              });
            }
          }
          // если id есть в результате выполенения запроса, значит он удечный
          if ('id' in response) {
            this.SET_NOTIFICATION_DATA({
              isNotification: true,
              notificationText: "Данные обновлены",
              notificationType: "",
            });
          } else {
            this.SET_NOTIFICATION_DATA({
              isNotification: true,
              notificationText: "Что то пошло не так, повторите попытку",
              notificationType: "message--error",
            });
          }
          this.isLoad = false;
        });
      } else {
        this.SET_NOTIFICATION_DATA({
          isNotification: true,
          notificationText: "Данные не обновлены. Заполните обязательные поля*",
          notificationType: "message--error",
        });
      }
    },
    // создание карточки
    addCard() {
      if (
          this.cardData.email !== "" &&
          this.cardData.name !== "" &&
          this.cardData.phone !== "" &&
          this.cardData.card_name !== "" &&
          this.cardData.link !== ""
      ) {
        this.isLoad = true;
        this.POST_CARD_API(this.cardData).then(response => {
          if ('error' in response) {
            if (response['error'] === 'link') {
              this.SET_NOTIFICATION_DATA({
                isNotification: true,
                notificationText: "Данные не сохранены. Ссылка должна быть уникальной",
                notificationType: "message--error",
              });
            }
          }

          if ('id' in response) {
            this.SET_NOTIFICATION_DATA({
              isNotification: true,
              notificationText: "Данные сохранены",
              notificationType: "",
            });
          } else {
            this.SET_NOTIFICATION_DATA({
              isNotification: true,
              notificationText: "Что то пошло не так, повторите попытку",
              notificationType: "message--error",
            });
          }
          this.isLoad = false;
        });
      } else {
        this.SET_NOTIFICATION_DATA({
          isNotification: true,
          notificationText: "Данные не сохранены. Заполните обязательные поля*",
          notificationType: "message--error",
        });
      }
    },

    // загрузка изображений
    uploadImage(ref) {
      const file = this.$refs[ref].files[0];

      // добавлем данные в cardData
      this.cardData[ref] = file;

      const reader = new FileReader();

      reader.addEventListener(
          "load",
          () => {
            this[ref] = reader.result;
          },
          false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    // редирект
    goToPage(link) {
      // при редиректе на социалки проверяем есть ли такая таблица, если нет,создаем
      if (link === "/social-list") {
        if (this.SELECTED_CARD.id_social == null) {
          // создаем табл социалок
          this.POST_SOCIAL_API({}).then(() => {
            // привязываем ее к КАРТОЧКЕ
            this.UPDATE_CARD_API({
              id_social: this.SOCIAL_DATA.id,
              id: this.SELECTED_CARD.id,
              link: this.SELECTED_CARD.link,
            });
          });
        }
        // даем понять что сейчас будем настрвивать социалки для дичных данных
        this.SET_SOCIAL_PATH("personal");
      }
      this.$router.push(link);
    },
  },
  computed: {
    ...mapGetters(["SELECTED_CARD", "SOCIAL_DATA"]),
  },
  mounted() {
    if (this.SELECTED_CARD) {
      // проверяем есть ли выбранная визитка
      if (Object.keys(this.SELECTED_CARD).length !== 0) {
        // берем инфрмацию из выбранной карточки
        for (let i in this.cardData) {
          this.cardData[i] = this.SELECTED_CARD[i];
        }

        // установка изрбрадений из текущей карточки
        if (this.cardData.logo_img) {
          this.logo_img = this.API_DOMAIN + this.cardData.logo_img;
        }

        if (this.cardData.personal_img) {
          this.personal_img = this.API_DOMAIN + this.cardData.personal_img;
        }

        // проверям appearance
        if (this.SELECTED_CARD.id_appearance) {
          this.cardData.id_appearance = this.SELECTED_CARD.id_appearance.id;
        }
      }
    }
    // удаляем елемент из cardData чтобы его не передавать при обновление или загрузски если он пустой
    delete this.cardData.logo_img;
    delete this.cardData.personal_img;
  },
};
</script>
