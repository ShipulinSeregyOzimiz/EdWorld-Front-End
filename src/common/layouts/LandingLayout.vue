<script setup>
import LandingHeader from "../../common/components/LandingHeader.vue";
import LandingFooter from "../../common/components/LandingFooter.vue";
</script>

<template>
  <div class="navigation">
    <LandingHeader />
    <router-view />
    <LandingFooter />
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex: 1;
}
</style>
