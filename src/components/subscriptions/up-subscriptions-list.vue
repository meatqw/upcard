<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="subscription">
        <div class="subscription__container">
          <h2 class="visually-hidden">Список подписок</h2>
          <!-- чек бокс -->
          <div class="form-radio form-radio--checkbox" style="width: 100%" v-if="!this.status">
            <input
                class="input"
                id="1"
                type="checkbox"
                name="checkbox"
                v-model="isChecked"
            />
            <label class="label label--no-reverse" for="1">Я ознакомился с <a href="https://upcard.online/static/landing/termsofuse.pdf">уловиями</a></label>
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
                  <div class="sub-item__value" v-if="this.expireAt && this.status">Действует до {{ this.expireAt }}</div>
                </div>
                <div class="sub-item__info">
                  <p class="sub-item__descr" v-if="this.status">
                    {{ this.SUBSCRIBE.price }} рублей / месяц
                  </p>
                  <p class="sub-item__descr" v-else>
                    {{ this.price }} рублей / месяц
                  </p>
                </div>
                <div v-if="!this.status && this.paymentURL">
                  <a :href="this.paymentURL">Оплатить</a>
                </div>
                <div class="sub-item__bottom">
                  <button
                      class="sub-item__btn btn"
                      @click="onSubscription(subscription.id)"
                      :disabled="!isChecked"
                  >
                    {{ this.getButtonText }}
                  </button>
                </div>
              </li>
            </div>
          </ul>
          <!-- счетчик -->
          <div class="counter">
            <button
                :disabled="this.getSubscribeStatus"
                class="btn-reset btn counter__btn"
                @click.prevent="decrementValue"
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="counter__value">{{ counterValue }}</span>
            <button
                :disabled="this.getSubscribeStatus"
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
import {getCookie} from "../../../config";

export default {
  name: "up-subscriptions-list",
  data() {
    return {
      counterValue: 1,
      isChecked: false,
      price: 0,
      status: false,
      expireAt: false,
      paymentURL: null,
      redirect: false,
    };
  },
  methods: {
    ...mapActions([
      "GET_ACCOUNT_FROM_API",
      "UPDATE_ACCOUNT_API",
      "GET_SUBSCRIPTIONS_FROM_API",
      "POST_SUBSCRIBE_API",
      "GET_SUBSCRIBE_API"
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
      this.isChecked = false;
      this.redirect = true;
      this.UPDATE_ACCOUNT_API({id_subscription: id}).then(() => {
        this.POST_SUBSCRIBE_API({
          'card_count': this.counterValue,
          'id_subscription': this.SUBSCRIPTIONS[0].id,
          'price': this.price
        }).then((response) => {
          this.loadSubscriptionData();
          location.href = response.payment_url;
        })
      });
    },
    // счетчик
    decrementValue() {
      if (this.counterValue > 1) {
        this.price -= 79;
        this.counterValue--;
      }
    },
    incrementValue() {
      this.price += 79;
      this.counterValue++;
    },

  },
  computed: {
    ...mapGetters(["ACCOUNT", "SUBSCRIPTIONS", "SUBSCRIBE"]),

    getSubscribeStatus() {
      return this.SUBSCRIBE.status;
    },

    getButtonText() {
      if (this.expireAt && this.status) {
        return 'Отключить';
      } else if(this.expireAt && !this.status) {
        return 'В обработке';
      } else {
        return 'Подключить';
      }
    }
  },
  mounted() {
    let token = getCookie("token");
    if (token != null) {
      this.GET_SUBSCRIBE_API().then(() => {
        this.loadSubscriptionData();

          if (this.SUBSCRIBE.cardCount) {
            this.counterValue = this.SUBSCRIBE.cardCount;
          }

          if (this.SUBSCRIBE.price) {
            this.price = this.SUBSCRIBE.price;
          }

          this.status = this.SUBSCRIBE.status;
          this.expireAt = this.SUBSCRIBE.expireAt;
          this.paymentURL = this.SUBSCRIBE.paymentURL;
      });
    }
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
