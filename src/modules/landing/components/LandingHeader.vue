<script setup>
import { RouterLink } from "vue-router";
import DropdownMenu from "./DropDownMenu.vue";
import NavigationDropDownMenu from "./NavigationDropDownMenu.vue";

// Вынести отдельно в constants

const navigationRoutes = [
  {
    name: "Обучение в Италии",
    link: "/study-in-italy",
  },
  {
    name: "Обучение в Чехии",
    link: "/study-in-czech",
  },
  {
    name: "Обучение в Турции",
    link: "/study-in-turkey",
  },
  {
    name: "Наши кейсы",
    link: "/our-cases",
  },
  {
    name: "Отзывы",
    link: "/reviews",
  },
];

const langs = [
  {
    text: "ру",
  },
  {
    text: "каз",
  },
  {
    text: "en",
  },
];

//
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="headerContent">
        <div class="leftContent">
          <DropdownMenu class="lang" text="Ру" :options="langs" />
          <NavigationDropDownMenu
            text="Образование за рубежом"
            :routes="navigationRoutes"
          />
        </div>
        <div class="logoContent">
          <a href="/">
            <img
              src="../../../assets/images/logo.svg"
              class="logo"
              alt="Logo"
            />
          </a>
        </div>
        <div class="rightContent">
          <DropdownMenu text="Языковая школа" class="dropdownL" />
          <RouterLink to="/auth/login" class="authLink">Войти</RouterLink>
          <a href="#form" class="submitApplicationLink">Оставить заявку</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 28px 0 24px 0;
}

.headerContent {
  display: flex;
  justify-content: space-between;
}

.leftContent {
  display: flex;
  align-items: center;
  gap: 128px;
}
.rightContent {
  display: flex;
  align-items: center;
}
.dropdownL {
  margin-right: 51px;
}

.authLink {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-main);
  margin-right: 18px;
}

.submitApplicationLink {
  width: 185px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-white);
  background-color: var(--color-secondary);
  border-radius: 39px;
  transition: opacity 0.3s;
}

.submitApplicationLink:hover {
  opacity: 0.7;
}

.lang {
  font-size: 14px;
}

.logoContent {
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: -71px;
  padding-bottom: 10px;
  z-index: 100;
}
</style>
