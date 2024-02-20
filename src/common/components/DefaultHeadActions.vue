<template>
  <div class="wrapper">
    <div class="text">
      <h2 class="title">Библиотека</h2>
      <p class="location">Библиотека</p>
    </div>
    <div class="action">
      <Button class="button">
        <svg-icon type="mdi" :path="pathIcon"></svg-icon>
        <span>Добавить книгу</span></Button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPlus } from "@mdi/js";
import Button from "./button/Button.vue";

const pathIcon = ref(mdiPlus);
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.button {
  max-width: 170px;
  gap: 4px;
  padding: 10px 14px;
}

.text {
  font-family: "Gilroy", sans-serif;
}

.title {
  font-size: 24px;
  font-weight: 600;
  color: #1d1f2c;
  margin-bottom: 8px;
}

.location {
  font-size: 14px;
  font-weight: 500;
  color: #3250ff;
}
</style>
