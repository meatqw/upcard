<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="list-of-cards">
        <div class="list-of-cards__container">
          <h2 class="list-of-cards__title title-h2">Список ваших визиток</h2>
          <!-- список карт -->
          <ul class="list-reset list-of-cards__list">
            <!-- итем -->
            <li class="list-of-cards__item">
              <button
                class="btn-reset list-of-cards__card card-item">
                <!-- изображение -->
                <div class="card-item__img">
                  <picture
                    ><source srcset="../../assets/img/avatar-card.avif" type="image/avif" />
                    <source srcset="../../assets/img/avatar-card.webp" type="image/webp" />
                    <img
                      loading="lazy"
                      src="../../assets/img/avatar-card.png"
                      class="image"
                      width="65"
                      height="65"
                      alt="avatar"/>
                  </picture>
                </div>
                <div class="card-item__info">
                  <!-- имя -->
                  <h3 class="card-item__title text-regular">
                    Названиек визитки
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
  name: "up-account-cards-list",
};
</script>

