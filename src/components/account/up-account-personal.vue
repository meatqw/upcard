<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="section-main">
        <div class="section-main__container">
          <div class="section-main__card main-card">
            <!-- изображение -->
            <div class="main-card__img">
              <picture
                ><source srcset="img/avatar-card.avif" type="image/avif" />
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
            <div class="main-card__info">
              <div class="main-card__top">
                <!-- тайтл -->
                <h2 class="main-card__title title-h2">Название визитки</h2>
                <!-- сабтайтл -->
                <p class="main-card__speciality text-little">
                  Специальность пользователя
                </p>
              </div>
              <div class="main-card__bottom">
                <!-- ссылка телефона -->
                <a href="tel:+79232533434" class="main-card__link"
                  ><i class="fa-solid fa-mobile"></i>
                  <span class="text-little">+7 923 253-34-34</span> </a
                ><!-- ссылк емейла -->
                <a href="mailto:@email.com" class="main-card__link"
                  ><i class="fa-solid fa-envelope"></i>
                  <span class="text-little">email-of-user@mail.com</span></a
                >
              </div>
            </div>
          </div>
          <!-- кнопки -->
          <div class="section-main__btns">
            <button
              class="btn-reset btn btn--main"
              onclick="document.location='qr-cod.html'"
            >
              <i class="fa-solid fa-qrcode"></i>
              <span>QR-код визитки</span></button
            ><!-- data-url - ссылка на визитку -->
            <button
              class="btn-reset btn btn--main"
              id="share"
              data-title="Тайтл визики"
              data-text="Описание визитки"
              data-url="#"
            >
              <i class="fa-regular fa-share-from-square"></i>
              <span>Поделиться визиткой</span>
            </button>
            <button
              class="btn-reset btn btn--main"
              onclick="document.location='edit.html'"
            >
              <i class="fa-regular fa-pen-to-square"></i>
              <span>Редактировать визитку</span></button
            ><!-- href = ссылка на визитку-->
            <a href="#" class="btn-reset btn btn--main" target="_blank"
              ><i class="fa-regular fa-eye"></i>
              <span>Просмотреть визитку</span></a
            >
          </div>
        </div>
      </section>
      <section class="list-of-cards list-of-cards--main">
        <div class="list-of-cards__container">
          <h2 class="list-of-cards__title title-h2">Список ваших визиток</h2>
          <!-- список карт -->
          <ul class="list-reset list-of-cards__list">
            <!-- итем -->
            <li class="list-of-cards__item">
              <button
                class="btn-reset list-of-cards__card card-item"
                onclick="document.location='index.html'"
              >
                <!-- изображение -->
                <div class="card-item__img">
                  <picture
                    ><source srcset="img/avatar-card.avif" type="image/avif" />
                    <source srcset="img/avatar-card.webp" type="image/webp" />
                    <img
                      loading="lazy"
                      src="img/avatar-card.png"
                      class="image"
                      width="65"
                      height="65"
                      alt="avatar"
                  /></picture>
                </div>
                <div class="card-item__info">
                  <!-- имя -->
                  <h3 class="card-item__title text-regular">
                    Название визитки
                  </h3>
                  <!-- специальность -->
                  <p class="card-item__speciality text-little">
                    Специальность пользователя
                  </p>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-account-personal",
};
</script>

