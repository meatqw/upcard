<template>
  <main class="main">
        <div class="main__container container">
          <section class="confirmation section-block section-block--big">
            <div class="confirmation__container">
              <p class="confirmation__descr text-regular" data-aos="zoom-in">
                Подтвердите свой Email для продолжения. На него будет прикреплен
                ваш будущий аккаунт визитки UpCard.<br />Если вдруг вы решите
                зайти с другого устройства, на Email придет ссылка для входа
                в аккаунт.
              </p>
              <form
                action="#"
                class="confirmation-form form-confirmation btns-panel"
              >
                <label class="confirmation-form__label label"
                  ><input
                    v-model="email"
                    type="email"
                    name="email"
                    class="input-reset input confirmation-form__input input-email"
                    placeholder="user@mail.com"
                    required
                  />
                  <span>Email</span></label
                >
                <div class="confirmation-form__btns">
                  <button type="button" class="btn-reset btn btn-form confirmation-form__btn" @click="authorization">
                    Отправить код
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
  name: "up-auth-confirmation-email",
  data() {
    return {
      email: "",
    }
  },
  methods: {
    // отправляем ссылку на почту (в данный момент просто редирект на главную)
    authorization() {
      this.$router.push('/account');
    }
  }
}
</script>

