<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="subscription">
        <div class="subscription__container">
          <h2 class="visually-hidden">Список подписок</h2>
          <ul class="list-reset subscription__list">
            <li class="subscription__item sub-item sub-item--active">
              <div class="sub-item__top">
                <h3 class="sub-item__title">
                  <i class="fa-solid fa-person"></i>
                  <span class="text-regular">реферал АлтайСтрой</span>
                </h3>
                <div class="sub-item__value">Текущий</div>
                <a href="#" class="sub-item__link">Подробнее</a>
              </div>
              <div class="sub-item__info">
                <p class="sub-item__descr">altai-stroi@gmail.com</p>
              </div>
              <div class="sub-item__bottom">
                <button class="sub-item__btn btn btn--border">
                  Отключить
                </button>
              </div>
            </li>
            <li class="subscription__item sub-item sub-item">
              <div class="sub-item__top">
                <h3 class="sub-item__title">
                  <i class="fa-solid fa-person"></i>
                  <span class="text-regular">Самозанятый</span>
                </h3>
                <div class="sub-item__value">Текущий</div>
                <a href="#" class="sub-item__link">Подробнее</a>
              </div>
              <div class="sub-item__info">
                <p class="sub-item__descr">149 рублей / месяц</p>
              </div>
              <div class="sub-item__bottom">
                <button class="sub-item__btn btn btn--border">
                  Подключить
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-subscriptions-list-referral"
}
</script>
