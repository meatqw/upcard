<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="subscription">
        <div class="subscription__container">
          <h2 class="visually-hidden">Список подписок</h2>
          <ul class="list-reset subscription__list">
            <div v-for="subscription in SUBSCRIPTIONS" :key="subscription.id">
              <li
                class="subscription__item sub-item"
                v-bind:class="{
                  'sub-item--active':
                    subscription.id == ACCOUNT.id_subscription,
                }"
              >
                <div class="sub-item__top">
                  <h3 class="sub-item__title">
                    <i class="fa-solid" :class="subscription.data.icon"></i>
                    <span class="text-regular">{{ subscription.name }}</span>
                  </h3>
                  <div class="sub-item__value">Текущий</div>
                  <a href="#" class="sub-item__link">Подробнее</a>
                </div>
                <div class="sub-item__info">
                  <p class="sub-item__descr">
                    {{ subscription.price }} рублей / месяц
                  </p>
                </div>
                <div class="sub-item__bottom">
                  <button
                    class="sub-item__btn btn btn--border"
                    @click="offSubscription(subscription.id)"
                    v-if="subscription.id == ACCOUNT.id_subscription"
                  >
                    Отключить
                  </button>
                  <button
                    v-else
                    class="sub-item__btn btn"
                    @click="onSubscription(subscription.id)"
                  >
                    Подключить
                  </button>
                </div>
              </li>
            </div>
            <!-- <li class="subscription__item sub-item">
              <div class="sub-item__top">
                <h3 class="sub-item__title">
                  <i class="fa-solid fa-city"></i>
                  <span class="text-regular">Бизнес</span>
                </h3>
                <div class="sub-item__value">Текущий</div>
                <a href="#" class="sub-item__link">Подробнее</a>
              </div>
              <div class="sub-item__info">
                <p class="sub-item__descr">499 рублей / месяц</p>
              </div>
              <div class="sub-item__bottom">
                <button class="sub-item__btn btn btn--border">
                  Подключить
                </button>
              </div>
            </li> -->
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "up-subscriptions-list",

  methods: {
    ...mapActions([
      "GET_ACCOUNT_FROM_API",
      "UPDATE_ACCOUNT_API",
      "GET_SUBSCRIPTIONS_FROM_API",
    ]),

    loadSubscriptionData() {
      this.GET_SUBSCRIPTIONS_FROM_API().then(() => {
      this.GET_ACCOUNT_FROM_API().then(() => {});
    });
    },

    offSubscription() {
      this.UPDATE_ACCOUNT_API({ id_subscription: null }).then(() => {
        this.loadSubscriptionData()
      });
    },
    onSubscription(id) {
      this.UPDATE_ACCOUNT_API({ id_subscription: id }).then(() => {
        this.loadSubscriptionData()
      });
    },
  },
  computed: {
    ...mapGetters(["ACCOUNT", "SUBSCRIPTIONS"]),
  },
  mounted() {
    this.loadSubscriptionData();
  },
};
</script>
