<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="subscription">
        <div class="subscription__container">
          <h2 class="visually-hidden">Список подписок</h2>
          <!-- чек бокс -->
          <div class="form-radio form-radio--checkbox" style="width: 100%">
            <input
                class="input"
                id="1"
                type="checkbox"
                name="checkbox"
                v-model="isChecked"
            />
            <label class="label" for="1">Я ознакомился с уловиями</label>
          </div>
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
                    {{ price }} рублей / месяц
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
                      :disabled="!isChecked"
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
          <!-- счетчик -->
          <div class="counter">
            <button
                :disabled="ACCOUNT.id_subscription"
                class="btn-reset btn counter__btn"
                @click.prevent="decrementValue"
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="counter__value">{{ counterValue }}</span>
            <button
                :disabled="ACCOUNT.id_subscription"
                class="btn-reset btn counter__btn"
                @click.prevent="incrementValue"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "up-subscriptions-list",
  data() {
    return {
      counterValue: 0,
      isChecked: false,
      price: 0,
    };
  },
  methods: {
    ...mapActions([
      "GET_ACCOUNT_FROM_API",
      "UPDATE_ACCOUNT_API",
      "GET_SUBSCRIPTIONS_FROM_API",
      "POST_SUBSCRIBE_API"
    ]),

    loadSubscriptionData() {
      this.GET_SUBSCRIPTIONS_FROM_API().then(() => {
        this.price = this.SUBSCRIPTIONS[0].price
        this.GET_ACCOUNT_FROM_API().then(() => {
        });
      });
    },

    offSubscription() {
      this.UPDATE_ACCOUNT_API({id_subscription: null}).then(() => {
        this.loadSubscriptionData();
      });
    },
    // оформление подписки
    onSubscription(id) {
      this.UPDATE_ACCOUNT_API({id_subscription: id}).then(() => {
        this.POST_SUBSCRIBE_API({
          'card_count': this.counterValue,
          'id_subscription': this.SUBSCRIPTIONS[0].id,
          'price': this.price
        }).then(() => {
          this.loadSubscriptionData();
        })
      });
    },
    // счетчик
    decrementValue() {
      if (this.counterValue > 0) {
        this.price -= 50;
        this.counterValue--;
      }
    },
    incrementValue() {
      this.price += 50;
      this.counterValue++;
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

<style scoped>
.subscription__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.subscription__list {
  width: 100%;
}
</style>
