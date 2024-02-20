<template>
  <div class="sidebar_wrapper">
    <div class="sidebar_logo_content">
      <img
        src="@/assets/images/dashboard/sidebarLogo.svg"
        class="sidebar_logo"
      />
    </div>

    <ul class="sidebar_ul">
      <template v-for="(link, index) in links" :key="index">
        <sidebar-link
          :name="link.name"
          :path-icon="link.icon"
          :link="link.link"
      /></template>
    </ul>
  </div>
</template>

<script setup>
import SidebarLink from "./SidebarLink.vue";
import { mdiAccount, mdiCartOutline } from "@mdi/js";

const links = [
  {
    name: "Главная",
    icon: mdiAccount,
    link: "/",
  },
  {
    name: "Календарь оплаты",
    icon: mdiCartOutline,
    link: "/",
  },
  {
    name: "Расписание",
    icon: mdiAccount,
    link: "/",
  },
  {
    name: "Уроки",
    icon: mdiAccount,
    link: "/",
  },
  {
    name: "Библиотека",
    icon: mdiAccount,
    link: "/library",
  },
  {
    name: "Профиль",
    icon: mdiAccount,
    link: "/",
  },
];
</script>

<style scoped>
.sidebar_wrapper {
  width: 100%;
  max-width: 290px;
  padding: 56px 0;
  background-color: #fff;
  height: 100vh;
}

.sidebar_logo {
  margin: 0 auto;
}

.sidebar_logo_content {
  padding-bottom: 48px;
  border-bottom: 1px solid #f4f7fe;
}

.sidebar_ul {
  margin-top: 47px;
  margin-left: 33px;
  display: flex;
  flex-direction: column;
  gap: 23px;
}
</style>
