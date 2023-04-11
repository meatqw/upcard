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
                      ><source :srcset="personal_img" type="image/avif" />
                      <source :srcset="personal_img" type="image/webp" />
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
                      ><source :srcset="logo_img" type="image/avif" />
                      <source :srcset="logo_img" type="image/webp" />
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
                  type="text"
                  name="Специализация"
                  class="input-reset input data-form__input"
                  placeholder="Программист"
                />
                <span>Специализация</span></label
              >
              <label class="data-form__label label"
                ><input
                  v-model="cardData.phone"
                  type="tel"
                  name="Телефон"
                  class="input-reset input data-form__input input-tel"
                  placeholder="+7 (XXX) XXX XX-XX"
                  required
                />
                <span>Мобильный телефон*</span></label
              >
              <label class="data-form__label label"
                ><input
                  v-model="cardData.home_phone"
                  type="tel"
                  name="Домашний телефон"
                  class="input-reset input data-form__input"
                  placeholder="XX-XX-XX"
                />
                <span>Домашний телефон</span></label
              >
              <label class="data-form__label label"
                ><input
                  v-model="cardData.personal_site"
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
                  v-model="cardData.dob"
                  type="date"
                  name="дата рождения"
                  class="input-reset input data-form__input"
                  placeholder="31.01.2001"
                />
                <span>Дата рождения</span></label
              >
              <label class="data-form__label label"
                ><input
                  v-model="cardData.address"
                  type="text"
                  name="адрес"
                  class="input-reset input data-form__input"
                  placeholder="г. Барнаул, ул. Ленина, дом 85"
                />
                <span>Адрес проживания</span></label
              >
              <label class="data-form__label label"
                ><input
                  v-model="cardData.link"
                  type="text"
                  name="Ссылка"
                  class="input-reset input data-form__input"
                  placeholder="upcard"
                  required
                />
                <span>Ссылка* https://card.upcard.online/{{cardData.link}}</span></label>
              <div class="data-form__btns">
                <a
                  @click="goToPage('/social-list')"
                  class="btn-reset btn btn--fit data-form__btn"
                  >Выбрать социальные сети</a
                >
                <a
                  v-if="Object.keys(this.SELECTED_CARD).length !== 0"
                  @click="goToPage('/company')"
                  class="btn-reset btn btn--fit data-form__btn"
                  >Информация о компании</a
                >
                <a
                  href="appearance.html"
                  class="btn-reset btn btn--fit data-form__btn"
                  >Внешний вид визитки</a
                >
              </div>
            </div>

            <div
              class="btns-panel data-form__btns-panel"
              v-if="Object.keys(SELECTED_CARD).length !== 0"
            >
              <button
                class="btn-reset btn btn--big data-form__btn"
                type="button"
                @click="updateCard()"
              >
                Обновить визитку
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
                @click="addCard()"
              >
                Создать визитку
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";

export default {
  name: "up-information-personal",
  data() {
    return {
      API_DOMAIN: API_DOMAIN,

      // информация о карточке
      cardData: {
        id: null,
        card_name: null,
        name: null,
        surname: null,
        patronymic: null,
        spec: null,
        phone: null,
        home_phone: null,
        personal_site: null,
        email: null,
        dob: null,
        address: null,
        personal_img: null,
        logo_img: null,
        date_update: null,
        link: null,
      },
      personal_img: require("../../assets/img/avatar-card.avif"),
      logo_img: require("../../assets/img/avatar-card.avif"),
    };
  },
  methods: {
    ...mapActions([
      "UPDATE_CARD_API",
      "POST_CARD_API",
      "POST_SOCIAL_API",
      "SET_SOCIAL_PATH",
    ]),

    // обновление картчоки
    updateCard() {
      this.UPDATE_CARD_API(this.cardData);
    },

    // создание карточки
    addCard() {
      this.POST_CARD_API(this.cardData);
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
      if (link == "/social-list") {
        if (this.SELECTED_CARD.id_social == null) {
          // создаем табл социалок
          this.POST_SOCIAL_API({}).then(() => {
            // привязываем ее к КАРТОЧКЕ
            this.UPDATE_CARD_API({
              id_social: this.SOCIAL_DATA.id,
              id: this.SELECTED_CARD.id,
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

        // приводим дату к нудному виду
        this.cardData.dob = this.cardData.dob.toString().split("T")[0];
      }
    }

    // удаляем елемент из cardData чтобы его не передавать при обновление или загрузски если он пустой
    delete this.cardData.logo_img;
    delete this.cardData.personal_img;

    // const token = this.$route.query.token;
    // делаем запрос на получение всех карточек пользователя
  },
};
</script>
