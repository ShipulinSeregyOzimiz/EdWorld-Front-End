<script setup>
import { ref, defineProps, onMounted, onBeforeMount } from "vue";
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: [],
  },
});

const isVisible = ref(false);
const dropDown = ref(null);
const select = ref(null);

const selectEl = (el) => {
  select.value = el;
  isVisible.value = false;
};

const menuToggle = () => {
  isVisible.value = !isVisible.value;
};

const handleClose = (element) => {
  if (!dropDown.value.contains(element.target)) {
    isVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", handleClose);
});

onBeforeMount(() => {
  window.removeEventListener("click", handleClose);
});
</script>

<template>
  <div class="dropdown" :class="class" ref="dropDown">
    <div class="dropdown-content" @click="menuToggle">
      <span class="current_lang" :class="{ active: select }">
        {{ select || text }}
      </span>

      <img src="../../../assets/images/landing/arrow-down.svg" alt="" />
    </div>
    <div class="dropdown-menu" v-show="isVisible">
      <ul v-if="options.length > 0">
        <template v-for="(option, index) in options" :key="index">
          <li @click="selectEl(option.text)">{{ option.text }}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  padding: 11px 10px 11px 22px;
  border: 1px solid var(--color-main);
  border-radius: 26px;
  font-weight: 600;
  font-size: 18px;
  color: var(--color-main);
  cursor: pointer;
  position: relative;
}
.dropdown-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown-menu {
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--color-white);
  box-shadow: 0 2px 4px #0000001a;
  z-index: 1000;
  border-radius: 20px;
  margin-top: 12px;
  padding: 15px 13px;
}

.dropdown-menu ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dropdown-menu ul li {
  width: 100%;
  color: var(--color-main);
}

.dropdown img {
  width: 24px;
  height: 24px;
  margin-left: 6px;
}

.active {
  color: var(--color-main);
}
</style>
