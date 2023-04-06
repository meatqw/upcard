<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="list-of-cards">
        <upAccountCards />
      </section>
    </div>
  </main>
</template>

<script>

import upAccountCards from "@/components/account/up-account-cards.vue";

export default {
  name: "up-account-cards-list",
  components: {
    upAccountCards,
  },
  methods: {

  },
  computed: {

  },
  mounted() {
    
    // const token = this.$route.query.token;
    // console.log(token)
  },
};
</script>

