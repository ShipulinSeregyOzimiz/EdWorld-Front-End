<template>
  <li class="sidebar_li">
    <RouterLink
      :to="generateLink"
      class="sidebar_link"
      :class="{ active: generateLink === route.path }"
    >
      <svg-icon type="mdi" :path="pathIcon"></svg-icon>

      <span>{{ name }}</span>
    </RouterLink>
  </li>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import SvgIcon from "@jamescoyle/vue-icon";

const route = useRoute();

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  pathIcon: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});

const generateLink = computed(() => {
  let path = "/dashboard" + props.link;

  return path;
});
</script>

<style scoped>
.sidebar_link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #a3aed0;
  font-size: 16px;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
  line-height: 30px;
  transition: opacity 0.3s;
}

.sidebar_link:hover {
  opacity: 60%;
}

.active {
  font-weight: 700;
  color: var(--color-d-main);
  position: relative;
}

.active::before {
  content: "";
  width: 4px;
  height: 36px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #4318ff;
}

.active svg {
  color: #4318ff;
}
</style>
