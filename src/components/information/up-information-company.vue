<template>
  <main class="main">
    <div class="main__container container">
      <section class="company section-block">
        <div class="company__container">
          <h2 class="visually-hidden">Форма личной информации</h2>
          <p class="company__descr text-little" data-aos="zoom-in">
            Добавьте ту информацию, которую хотели бы представить
          </p>
          <form action="#" class="data-form">
            <div class="data-form__body" data-aos="zoom-in">
              <ul class="list-reset data-form__add-pictures add-pictures__list">
                <!-- личный компании -->
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
                      ref="logo_img"
                      name="image"
                      type="file"
                      accept="image/*"
                      id="input__file"
                      class="input input__file"
                      @change="uploadImage('logo_img')"
                    />
                    <label for="input__file" class="input__file-button btn"
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
                  type="text"
                  v-model="companyData.name"
                  name="Название компании"
                  class="input-reset input data-form__input"
                  placeholder="The best Company"
                />
                <span>Название компании</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  v-model="companyData.activity"
                  name="Деятельность"
                  class="input-reset input data-form__input"
                  placeholder="Производство ОС"
                />
                <span>Деятельность</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="number"
                  v-model="companyData.foundation"
                  name="Год основания"
                  class="input-reset input data-form__input"
                  placeholder="2001"
                />
                <span>Год основания</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="Клиенты"
                  v-model="companyData.clientage"
                  class="input-reset input data-form__input"
                  placeholder="Сотрудники банка"
                />
                <span>Клиенты</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="tel"
                  v-model="companyData.phone"
                  name="Телефон компании"
                  class="input-reset input data-form__input"
                  v-mask="'+7(###)-###-##-##'"
                  placeholder="+7(___)___-__-__"
                />
                <span>Телефон компании</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="tel"
                  v-model="companyData.work_phone"
                  name="Рабочий телефон"
                  class="input-reset input data-form__input"
                  placeholder="XX-XX-XX"
                  v-mask="'##-##-##'"
                />
                <span>Рабочий телефон</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="Сайт компании"
                  v-model="companyData.company_site"
                  class="input-reset input data-form__input"
                  placeholder="https://thebestcompany.com"
                />
                <span>Сайт компании</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="факс"
                  v-model="companyData.fax"
                  class="input-reset input data-form__input"
                  placeholder="98382489225"
                  v-mask="'###########'"
                />
                <span>Факс</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="email"
                  name="email"
                  v-model="companyData.email"
                  class="input-reset input data-form__input"
                  placeholder="the-best-company@mail.com"
                />
                <span>Email</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="адрес"
                  v-model="companyData.address"
                  class="input-reset input data-form__input"
                  placeholder="г. Барнаул, ул. Ленина, дом 90"
                />
                <span>Адрес компании</span></label
              >
              <div
                class="data-form__btns"
                v-if="SELECTED_CARD.id_company_info !== null"
              >
                <a
                  @click="goToPage('/social-list')"
                  class="btn-reset btn btn--fit data-form__btn"
                  >Выбрать социальные сети компании</a
                >
              </div>
            </div>
            <div class="btns-panel data-form__btns-panel">
              <button
                class="btn-reset btn btn--big data-form__btn"
                v-if="!SELECTED_CARD.id_company_info"
                @click="addCompany"
                type="button"
              >
                Сохранить данные
              </button>

              <button
                class="btn-reset btn btn--big data-form__btn"
                v-else
                @click="updateCompany"
                type="button"
              >
                Обновить данные
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
  <upNotificationMessage v-if="showMsg" v-on:close="closeNotification" :msgText="msgText"></upNotificationMessage>
</template>

<script>
import upNotificationMessage from "../notification/up-notification-message.vue";
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";

export default {
  name: "up-information-company",
  components: {
    upNotificationMessage
  },
  data() {
    return {
      API_DOMAIN: API_DOMAIN,

      // информация о компании
      companyData: {
        activity: null,
        address: null,
        clientage: null,
        company_site: null,
        // date_create: null,
        // date_update: null,
        email: null,
        fax: null,
        foundation: null,
        id: null,
        // id_social: null,
        logo_img: null,
        name: null,
        phone: null,
        work_phone: null,
      },
      logo_img: require("../../assets/img/avatar-card.avif"),

      // данные для уведомлялки
      msgText: '',
      showMsg: false,
    };
  },
  methods: {
    ...mapActions([
      "UPDATE_CARD_API",
      "POST_COMPANY_API",
      "UPDATE_COMPANY_API",
      "SELECT_CARD",
      "POST_SOCIAL_API",
      "SET_SOCIAL_PATH",
    ]),

    // ЗАКРЫТЬ ОТКНО УВЕДОМЛЕНИЯ
    closeNotification(data) {
      this.showMsg = data
    },

    // обновление ифно о компании
    updateCompany() {
      this.UPDATE_COMPANY_API(this.companyData);

       // показываем уведомление
      this.msgText = 'Данные обновлены'
      this.showMsg = true;
    },

    // создание ифно о компании
    addCompany() {
      delete this.companyData.id;
      // создание ифнормации
      this.POST_COMPANY_API(this.companyData).then(() => {
        // привязка ифнормации к карточке
        this.UPDATE_CARD_API({
          id: this.SELECTED_CARD.id,
          id_company_info: this.COMPANY.id,
        });
      });

       // показываем уведомление
      this.msgText = 'Данные сохранены'
      this.showMsg = true;
    },

    // загрузка изображений
    uploadImage(ref) {
      const file = this.$refs[ref].files[0];

      // добавлем данные в cardData
      this.companyData[ref] = file;

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
        if (this.SELECTED_CARD.id_company_info.id_social == null) {
          // создаем табл социалок
          this.POST_SOCIAL_API({}).then(() => {
            // привязываем ее к КОМПАНИИ
            this.UPDATE_COMPANY_API({
              id_social: this.SOCIAL_DATA.id,
              id: this.SELECTED_CARD.id_company_info.id,
            });
          });
        }
        // даем понять что сейчас будем настрвивать социалки для компании
        this.SET_SOCIAL_PATH("company");
      }

      this.$router.push(link);
    },
  },

  mounted() {
    // проверяем есть ли инфо о компании у выбранной карточке
    if (this.SELECT_CARD) {
      if (
        this.SELECTED_CARD.id_company_info !== null &&
        Object.keys(this.SELECTED_CARD.id_company_info).length !== 0
      ) {
        // берем инфрмацию из выбранной карточки (инфо о компании)
        for (let i in this.companyData) {
          this.companyData[i] = this.SELECTED_CARD.id_company_info[i];
        }

        // установка изрбрадений из текущей карточки (инфо о компании)
        if (this.companyData.logo_img) {
          this.logo_img = this.API_DOMAIN + this.companyData.logo_img;
        }
      }
    }
    // удаляем елемент из companyData чтобы его не передавать при обновление или загрузски если он пустой
    delete this.companyData.logo_img;
  },

  computed: {
    ...mapGetters(["SELECTED_CARD", "COMPANY", "SOCIAL_DATA"]),
  },
};
</script>
