<template>
  <div :class="['popup', { open: isOpen }]">
    <div class="popup__close" @click="closePopup"></div>
    <div class="popup__container">
      <div class="popup__top">
        <h2 class="popup__title">Поделиться</h2>
        <button class="btn-reset popup__btn-close" @click="closePopup">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="popup__content content">
        <ul class="list-reset popup__list social-list">
          <li class="social-list__item">
            <i class="fa-brands fa-whatsapp"></i>
            <span class="social-list__item-title">WhatsApp</span>
          </li>
          <li class="social-list__item">
            <i class="fa-brands fa-facebook"></i>
            <span class="social-list__item-title">Facebook</span>
          </li>
          <li class="social-list__item">
            <i class="fa-brands fa-telegram"></i>
            <span class="social-list__item-title">Telegram</span>
          </li>
          <li class="social-list__item">
            <i class="fa-brands fa-vk"></i>
            <span class="social-list__item-title">ВКонтакте</span>
          </li>
          <li class="social-list__item">
            <i class="fa-solid fa-envelope"></i>
            <span class="social-list__item-title">Электронная почта</span>
          </li>
        </ul>
        <div class="popup__copy-link">
          <div class="popup__link" id="myLink" style="color: black">{{ currentUrl }}</div>
          <button class="btn-reset popup__btn" data-clipboard-target="#myLink" v-touch="copy">
            {{ copyBtnText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    currentUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      copyBtnText: 'Копировать'
    }
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    copy() {
      try {
        navigator.clipboard.writeText(this.currentUrl)
      } catch (e) {
        console.log(e);
      }
      this.copyBtnText = 'Скопировано';
    }
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  left: 0;
  bottom: -100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: "Raleway", sans-serif;
  background-color: rgba(0, 0, 0, 0.2);
  transition: bottom 0.2s ease-in-out;
}

.popup.open {
  bottom: 0;
}

.popup__close {
  z-index: 8000;
  width: 100%;
  height: 100%;
}

.popup__container {
  position: absolute;
  z-index: 10000;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  height: 250px;
  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.04);
  background-color: #fff;
}

.popup__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
}

.popup__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.popup__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.popup__btn:not(:last-child) {
  margin-bottom: 10px;
}

.social-list {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}

.social-list__item {
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  width: 70px;
}

.social-list__item:hover i {
  color: #252525;
}

.social-list__item i {
  margin-bottom: 5px;
  font-size: 35px;
  color: #3f3f3f;
}

.social-list__item-title {
  max-width: 80px;
  font-size: 12px;
  text-align: center;
}

.popup__copy-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #3f3f3f;
  border-radius: 18px;
  padding: 5px 5px 5px 15px;
}

.popup__link {
  font-size: 14px;
}

.popup__btn {
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #3f3f3f;
  background-color: #dadada;
}

.popup__btn:hover {
  background-color: #dadadad0;
}
</style>
