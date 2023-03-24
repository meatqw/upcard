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
                      ><source
                        srcset="../../assets/img/avatar-card.avif"
                        type="image/avif" />
                      <source srcset="../../assets/img/avatar-card.webp" type="image/webp" />
                      <img
                        loading="lazy"
                        src="../../assets/img/avatar-card.png"
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
                      accept="image/*"
                      id="input__file"
                      class="input input__file"
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
                  name="Название компании"
                  class="input-reset input data-form__input"
                  placeholder="The best Company"
                />
                <span>Название компании</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="Деятельность"
                  class="input-reset input data-form__input"
                  placeholder="Производство ОС"
                />
                <span>Деятельность</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="number"
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
                  class="input-reset input data-form__input"
                  placeholder="Сотрудники банка"
                />
                <span>Клиенты</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="tel"
                  name="Телефон компании"
                  class="input-reset input data-form__input"
                  placeholder="+7 (XXX) XXX XX-XX"
                />
                <span>Телефон компании</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="tel"
                  name="Рабочий телефон"
                  class="input-reset input data-form__input"
                  placeholder="XX-XX-XX"
                />
                <span>Рабочий телефон</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="Сайт компании"
                  class="input-reset input data-form__input"
                  placeholder="thebestcompany.com"
                />
                <span>Сайт компании</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="number"
                  name="факс"
                  class="input-reset input data-form__input"
                  placeholder="98382489225"
                />
                <span>Факс</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="email"
                  name="email"
                  class="input-reset input data-form__input"
                  placeholder="the-best-company@mail.com"
                />
                <span>Email</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="адрес"
                  class="input-reset input data-form__input"
                  placeholder="г. Барнаул, ул. Ленина, дом 90"
                />
                <span>Адрес компании</span></label
              >
              <div class="data-form__btns">
                <a
                  href="social.html"
                  class="btn-reset btn btn--fit data-form__btn"
                  >Выбрать социальные сети компании</a
                >
              </div>
            </div>
            <div class="btns-panel data-form__btns-panel">
              <button class="btn-reset btn btn--big data-form__btn">
                Сохранить данные
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-information-company",
};
</script>
