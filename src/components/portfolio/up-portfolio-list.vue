<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="list-of-portfolio">
        <div class="list-of-portfolio__container">
          <h2 class="list-of-portfolio__title title-h2">
            Список элементов портфолио
          </h2>
          <!-- список карт -->
          <ul class="list-reset list-of-portfolio__list">
            <!-- итем -->
            <li class="list-of-cards__item">
              <button
                class="btn-reset list-of-portfolio__card card-item"
                onclick="document.location='portfolio-item-settings.html'"
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
                    Моя первая работа
                  </h3>
                  <!-- дата -->
                  <p class="card-item__date text-little">31.01.2022</p>
                </div>
              </button>
            </li>
            <li class="list-of-card__item">
              <button
                class="btn-reset btn btn--med btn--border list-menu__btn"
                onclick="document.location='delete-portfolio.html'"
              >
                Удалить портфолио
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
  name: "up-portfolio-list",
};
</script>
