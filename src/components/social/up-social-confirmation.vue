<template>
  <main class="main">
    <div class="main__container container">
      <section class="confirmation section-block section-block--big">
        <div class="confirmation__container">
          <p class="confirmation__descr text-regular" data-aos="zoom-in">
            Укажите свой аккаунт в социальной сети (@username) или вставьте
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
                class="input-reset input confirmation-form__input"
                placeholder="@username"
              />
              <span>Ссылка на ваш профиль</span></label
            >
            <div class="confirmation-form__btns">
              <button class="btn-reset btn btn-form confirmation-form__btn">
                Отправить код
              </button>
              <button
                class="btn-reset btn btn-form btn--border confirmation-form__btn"
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
export default {
  name: "up-social-confirmation",
};
</script>
