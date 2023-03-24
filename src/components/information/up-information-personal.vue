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
                      ><source
                        srcset="../../assets/img/avatar-card.avif"
                        type="image/avif" />
                      <source srcset="img/avatar-card.webp" type="image/webp" />
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
                      ><source
                        srcset="../../assets/img/avatar-card.avif"
                        type="image/avif" />
                      <source srcset="img/avatar-card.webp" type="image/webp" />
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
                      id="input__file--second"
                      class="input input__file"
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
                  type="text"
                  name="Фамилия"
                  class="input-reset input data-form__input"
                  placeholder="Иванов"
                />
                <span>Фамилия</span></label
              >
              <label class="data-form__label label"
                ><input
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
                  type="text"
                  name="Отчество"
                  class="input-reset input data-form__input"
                  placeholder="Иванович"
                />
                <span>Отчество</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="Специализация"
                  class="input-reset input data-form__input"
                  placeholder="Программист"
                />
                <span>Специализация</span></label
              >
              <label class="data-form__label label"
                ><input
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
                  type="tel"
                  name="Домашний телефон"
                  class="input-reset input data-form__input"
                  placeholder="XX-XX-XX"
                />
                <span>Домашний телефон</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="Сайт"
                  class="input-reset input data-form__input"
                  placeholder="mysite.com"
                />
                <span>Личный сайт</span></label
              >
              <label class="data-form__label label"
                ><input
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
                  type="date"
                  name="дата рождения"
                  class="input-reset input data-form__input"
                  placeholder="31.01.2001"
                />
                <span>Дата рождения</span></label
              >
              <label class="data-form__label label"
                ><input
                  type="text"
                  name="адрес"
                  class="input-reset input data-form__input"
                  placeholder="г. Барнаул, ул. Ленина, дом 85"
                />
                <span>Адрес проживания</span></label
              >
              <div class="data-form__btns">
                <a
                  href="social.html"
                  class="btn-reset btn btn--fit data-form__btn"
                  >Выбрать социальные сети</a
                >
                <a
                  href="company-information.html"
                  class="btn-reset btn btn--fit data-form__btn"
                  >Добавить информацию о компании</a
                >
                <a
                  href="appearance.html"
                  class="btn-reset btn btn--fit data-form__btn"
                  >Внешний вид визитки</a
                >
              </div>
            </div>
            <div class="btns-panel data-form__btns-panel">
              <button class="btn-reset btn btn--big data-form__btn">
                Создать визитку
              </button>
              <p class="btns-panel__descr">
                Нажимая кнопку «Создать визитку», вы подтверждаете согласие
                с уловиями и даете согласие на обработку ваших персональных
                данных
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-information-personal",
};
</script>
