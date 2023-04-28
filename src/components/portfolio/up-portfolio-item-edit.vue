<template>
  <main class="main">
    <div class="main__container container">
      <section class="portfolio-item section-block section-block--data-form">
        <div class="portfolio-item__container">
          <h2 class="visually-hidden">Форма элемента портфолио</h2>
          <p class="portfolio-item__descr text-little" data-aos="zoom-in">
            Описание должно быть не более 150 символов*
          </p>
          <form action="#" class="form data-form portfolio-item__form">
            <div class="data-form__body" data-aos="zoom-in">
              <ul class="list-reset data-form__add-pictures add-pictures__list">
                <!-- личное фото -->
                <li class="add-pictures__item">
                  <!-- изображение -->
                  <div class="add-pictures__img">
                    <picture
                      ><source :srcset="img" type="image/avif" />
                      <source :srcset="img" type="image/webp" />
                      <img
                        loading="lazy"
                        :src="img"
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
                      ref="img"
                      accept="image/*"
                      id="input__file"
                      class="input input__file"
                      @change="uploadImage('img')"
                    />
                    <label for="input__file" class="input__file-button btn"
                      ><span class="input__file-icon-wrapper"
                        ><i class="fa-solid fa-file-export"></i> </span
                      ><span class="input__file-button-text"
                        >Добавить картинку</span
                      ></label
                    >
                  </div>
                </li>
              </ul>
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="Название"
                  class="input-reset input data-form__input input-name"
                  placeholder="Моя лучшая работа"
                  v-model="portfolioItemData.name"
                  required
                />
                <span>Название*</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="date"
                  name="дата"
                  class="input-reset input data-form__input input-date"
                  placeholder="31.01.2001"
                  required
                  v-model="portfolioItemData.date"
                />
                <span>Дата*</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="описание"
                  class="input-reset input data-form__input input-description"
                  placeholder="Эта работа была выполнена с помощью черной краски."
                  required
                  maxlength="150"
                  v-model="portfolioItemData.description"
                />
                <span>Описание*</span></label
              >
            </div>
            <div class="btns-panel data-form__btns">
              <button
                class="btn-reset btn btn--big data-form__btn"
                type="button"
                v-if="SELECTED_PORTFOLIO_ITEM == null"
                @click="savePortfolioData"
              >
                Сохранить данные
              </button>

              <button
                class="btn-reset btn btn--big data-form__btn"
                type="button"
                v-else
                @click="updatePortfolioData"
              >
                Обновить данные
              </button>

              <button v-if="SELECTED_PORTFOLIO_ITEM != null"
                class="btn-reset btn btn--big btn--border data-form__btn"
                type="button" @click="deleteItem()"
              >
                Удалить элемент
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
import { mapActions, mapGetters } from "vuex";
import { API_DOMAIN } from "/config.js";
import upNotificationMessage from "../notification/up-notification-message.vue";

export default{
  name: "up-portfolio-item-edit",
  components: {
    upNotificationMessage,
  },
  data() {
    return {
      API_DOMAIN: API_DOMAIN,

      portfolioItemData: {
        name: "",
        date: "",
        description: "",
        img: null,
        id: null,
      },
       // данные для уведомлялки
       msgText: "",
      showMsg: false,
      img: require("../../assets/img/avatar-card.avif"),
    };
  },
  methods: {
    ...mapActions([
      "SELECT_PORTFOLIO_ITEM",
      "UPDATE_PORTFOLIO_API",
      "POST_PORTFOLIO_API",
      "SET_DELETE_DATA"
    ]),

    // загрузка изображений
    uploadImage(ref) {
      const file = this.$refs[ref].files[0];

      // добавлем данные в portfolioItemData
      this.portfolioItemData[ref] = file;

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

    // сохраняем данные
    savePortfolioData() {
      this.portfolioItemData["id_card"] = this.SELECTED_CARD.id;

      if (
        this.portfolioItemData.name.length &&
        this.portfolioItemData.description.length &&
        this.portfolioItemData.date.length
      ) {
        this.POST_PORTFOLIO_API(this.portfolioItemData);
        this.msgText = 'Данные сохранены.'
        this.showMsg = true;
      } else {
        this.msgText = 'Данные не сохранены. Заполните обязательные поля*'
        this.showMsg = true;
      }
    },

    // обновляем данные
    updatePortfolioData() {
      if (
        this.portfolioItemData.name.length &&
        this.portfolioItemData.description.length &&
        this.portfolioItemData.date.length
      ) {
        this.UPDATE_PORTFOLIO_API(this.portfolioItemData);
        this.msgText = 'Данные обновлены.'
        this.showMsg = true;
      } else {
        this.msgText = 'Данные не обновлены. Заполните обязательные поля*'
        this.showMsg = true;
      }
    },

    deleteItem() {
      this.SET_DELETE_DATA({'type': 'portfolio', 'info': 'элемент порфолио', 'id': this.portfolioItemData.id});
      this.$router.push('/delete')
    },

    // ЗАКРЫТЬ ОТКНО УВЕДОМЛЕНИЯ
    closeNotification(data) {
      this.showMsg = data
    },
  },
  computed: {
    ...mapGetters(["SELECTED_CARD", "SELECTED_PORTFOLIO_ITEM"]),
  },
  mounted() {
    // const token = this.$route.query.token;
    // console.log(token)

    if (this.SELECTED_PORTFOLIO_ITEM !== null) {
      for (let key in this.portfolioItemData) {
        this.portfolioItemData[key] = this.SELECTED_PORTFOLIO_ITEM[key];
      }
      this.portfolioItemData.date = this.portfolioItemData.date
        .toString()
        .split("T")[0];

      // установка изрбрадений из текущей едемента
      if (this.portfolioItemData.img) {
        this.img = this.portfolioItemData.img;
      }
    }

    // удаляем елемент из portfolioItemData чтобы его не передавать при обновление или загрузски если он пустой
    delete this.portfolioItemData.img;
  },
};
</script>
