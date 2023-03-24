<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="qr">
        <div class="qr__container">
          <h2 class="visually-hidden">Сохранить QR-код</h2>
          <div class="qr__img">
            <picture
              ><source srcset="img/main-qr.avif" type="image/avif" />
              <source srcset="img/main-qr.webp" type="image/webp" />
              <img
                loading="lazy"
                src="img/main-qr.png"
                class="image"
                width="400"
                height="400"
                alt="qr"
            /></picture>
          </div>
          <button class="btn-reset btn qr__btn">Сохранить код</button>
          <p class="qr__descr text-little">
            Чтобы пользователь смог сохранить визитку к себе, необходимо
            отсканировать данный QR-код, который пееправит на страницу
            с визиткой.
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-card-qr",
};
</script>

<style scoped>
</style>