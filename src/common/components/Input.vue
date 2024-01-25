<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  htmlType: {
    type: String,
    default: "text",
  },
  class: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["update:modelValue"]);

function updateValue(event) {
  emits("update:modelValue", event.target.value);
}
</script>

<template>
  <input
    class="input"
    @input="updateValue"
    :class="class"
    :type="htmlType"
    :placeholder="placeholder"
  />
</template>

<style scoped>
.input {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 15px 24px;
  background-color: var(--color-white);
  font-size: 16px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  border-radius: 50px;
}

.input::placeholder {
  color: #8d8ba7;
}
</style>
