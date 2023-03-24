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
                    value="1"
                    checked="checked"
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
                    value="2"
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
                    value="3"
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
                    value="4"
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
                    id="radio-6"
                    type="radio"
                    name="appearance"
                    value="6"
                    disabled="disabled"
                  />
                  <label class="radio-btn__content" for="radio-6"
                    ><div class="appearance__colors">
                      <div
                        class="appearance__color appearance__color--yellow"
                      ></div>
                      <div
                        class="appearance__color appearance__color--light-gray"
                      ></div>
                    </div>
                    <h3 class="appearance__subtitle text-little">
                      Веселый
                    </h3></label
                  >
                </div>
              </li>
            </ul>
            <div class="btns-panel">
              <button class="btn-reset appearance__btn btn btn--big">
                Сохранить выбранный стиль
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
  name: "up-card-appearance",
};
</script>
