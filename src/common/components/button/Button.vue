<template>
  <button class="button" :class="class" :type="typeHtml" @click="handleClick">
    <template v-if="loading">
      <button-loader />
    </template>
    <template v-else><slot></slot></template>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import ButtonLoader from "./ButtonLoader.vue";

const props = defineProps({
  typeHtml: {
    type: String,
    default: "button",
  },
  class: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["customClick"]);

const handleClick = () => {
  emits("customClick");
};
</script>

<style scoped>
.button {
  width: 100%;
  height: 40px;
  max-width: 156px;
  overflow: hidden;
  background-color: #3250ff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  font-family: "Gilroy", sans-serif;
  color: #fff;
  border-radius: 8px;
  transition: opacity 0.3s;
}

.button:hover {
  opacity: 80%;
}
</style>
