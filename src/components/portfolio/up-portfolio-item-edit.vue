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
                      ><source
                        srcset="img/avatar-card.avif"
                        type="image/avif" />
                      <source srcset="img/avatar-card.webp" type="image/webp" />
                      <img
                        loading="lazy"
                        src="img/avatar-card.png"
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
                />
                <span>Описание*</span></label
              >
            </div>
            <div class="btns-panel data-form__btns">
              <button class="btn-reset btn btn--big data-form__btn">
                Сохранить данные
              </button>
              <button
                class="btn-reset btn btn--big btn--border data-form__btn"
                onclick="document.location='delete-portfolio-item.html'"
              >
                Удалить элемент
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
  name: "up-portfolio-item-edit",
};
</script>
