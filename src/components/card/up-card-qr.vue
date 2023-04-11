<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="qr">
        <div class="qr__container">
          <h2 class="visually-hidden">Сохранить QR-код</h2>

          <div class="qr__img">
            <QRCodeVue3
              :width="400"
              :height="400"
              :data="link"
              :value="link"
              :margin="30"
              :qrOptions="{
                typeNumber: 0,
                mode: 'Byte',
                errorCorrectionLevel: 'H',
              }"
              :imageOptions="{
                hideBackgroundDots: true,
                imageSize: 0.2,
                margin: 0,
              }"
              :dotsOptions="{
                type: 'square',
                color: '#000000',
                gradient: null,
              }"
              :cornersSquareOptions="{
                type: 'square'
              }"
              :cornersDotOptions="{
                type: 'square',
                color: '#000000',
              }"
              :backgroundOptions="{ color: '#ffffff' }"
              
            />
          </div>

          <button class="btn-reset btn qr__btn">Сохранить код</button>
          <p class="qr__descr text-little">
            Чтобы пользователь смог сохранить визитку к себе, необходимо
            отсканировать данный QR-код, который пееправит на страницу с
            визиткой.
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import QRCodeVue3 from "qr-code-generator-vue3";
import { mapGetters } from "vuex";
export default {
  name: "up-card-qr",
  data() {
    return {
      link: "http://card.upcard.online/",
    };
  },
  computed: {
    ...mapGetters(['SELECTED_CARD'])
  },
  components: {
    QRCodeVue3,
  },
  mounted() {
    this.link = "http://card.upcard.online/" + this.SELECTED_CARD.link;
  },
};
</script>

<style scoped>
</style>