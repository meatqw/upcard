<template>
    <upHeader />
    <router-view>
    </router-view>
    <upFooter />
</template>

<script>
import upHeader from "@/components/home/up-header.vue";
import upFooter from "@/components/home/up-footer.vue";
export default {

  name: "up-main",
  components: {
    upHeader,
    upFooter
  },
  computed: {

  },
  mounted() {
  }
}
</script>
