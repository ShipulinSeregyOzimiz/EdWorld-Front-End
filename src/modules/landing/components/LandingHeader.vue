<!-- <script setup>
import { RouterLink } from "vue-router";
import DropdownMenu from "./DropDownMenu.vue";
import NavigationDropDownMenu from "./NavigationDropDownMenu.vue";



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

const langCourse = [
  {
    name: "Языковые курсы",
    link: "/language-classes",
  },
];

const langs = [
  {
    text: "eng",
  },
  {
    text: "рус",
  },
  {
    text: "қаз",
  },
];

//
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="headerContent">
        <div class="leftContent">
          <DropdownMenu class="lang" text="рус" :options="langs" />
          <NavigationDropDownMenu
            text="Образование за рубежом"
            :routes="navigationRoutes"
          />
        </div>
        <div class="logoContent">
          <a href="/">
            <img
              src="../../../assets/images/logo.png"
              class="logo"
              alt="Logo"
            />
          </a>
        </div>
        <div class="rightContent">
          <NavigationDropDownMenu
            text="Языковая школа"
            :routes="langCourse"
            class="dropdownL"
          />
          <RouterLink to="/auth/login" class="authLink">Войти</RouterLink>
          <a href="#form" class="submitApplicationLink">Оставить заявку</a>
        </div>
      </div>
    </div>
  </header>
</template>

-->

<template>
  <header class="section__header">
    <div class="section__header__content container">
      <div class="nav-menu">
        <!--// Menu container -->
        <div class="hamburger-menu-body">
          <a href="/" class="nav-menu__logoMobile">
            <img src="../../../assets/images/logo.png" alt="" />
          </a>
          <div
            class="hamburger-menu"
            @click="showMenu()"
            :class="showMobileMenu ? 'humClicked' : ''"
          >
            <div class="bar-top"></div>
            <div class="bar-middle"></div>
            <div class="bar-bottom"></div>
          </div>
        </div>
        <!--Hamburger -->
        <div
          class="nav-content"
          :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
        >
          <div class="headerContent">
            <div class="leftContent">
              <DropdownMenu class="lang" text="рус" :options="langs" />
              <NavigationDropDownMenu
                text="Образование за рубежом"
                :routes="navigationRoutes"
              />
            </div>
            <div class="logoContent">
              <a href="/">
                <img
                  src="../../../assets/images/logo.png"
                  class="logo"
                  alt="Logo"
                />
              </a>
            </div>
            <div class="rightContent">
              <NavigationDropDownMenu
                text="Языковая школа"
                :routes="langCourse"
                class="dropdownL"
              />
              <RouterLink to="/auth/login" class="authLink">Войти</RouterLink>
              <a href="#form" class="submitApplicationLink">Оставить заявку</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import DropdownMenu from "./DropDownMenu.vue";
import NavigationDropDownMenu from "./NavigationDropDownMenu.vue";

const showMobileMenu = ref(false);

const languages = [
  {
    key: "ru",
  },
];

const showMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

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

const langCourse = [
  {
    name: "Языковые курсы",
    link: "/language-classes",
  },
];

const langs = [
  {
    text: "eng",
  },
  {
    text: "рус",
  },
  {
    text: "қаз",
  },
];
</script>

<style scoped>
.header {
  padding: 16px 0 17px 0;
  height: 101px;
}

@media (max-width: 767.98px) {
  .header {
    display: none;
  }
}

@media (max-width: 280px) {
  .advantages_title {
    font-size: 30px !important;
  }
}

.header_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_logo {
  width: 100%;
  min-width: 100px;
  max-width: 269px;
  height: 68px;
}

.header_right_content {
  display: flex;
  align-items: center;
  gap: 87px;
}

.nav-menu {
  padding: 16px 0px 17px 0;
}
@media screen and (max-width: 1156px) {
  .nav-menu__logoDesktop {
    display: none;
  }
  .nav-items-link {
    margin-bottom: 13px !important;
  }
  .nav-items-link:first-child {
    display: none;
  }
  /* .main_slider_section .swiper {
    height: 600px;
  } */
  .swiper_text_content {
    padding-top: 162px;
  }
}
.nav-menu__logoDesktop img {
  width: 100%;
  max-width: 269px;
  height: 68px;
}

.nav-menu__logoMobile img {
  width: 100%;
  max-width: 269px;
  height: 68px;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 9999;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-items-link {
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #25274d;
  /* margin-right: 30px; */
  cursor: pointer;
  transition: color 0.5s;
}

.nav-items-link:hover {
  color: #737496;
}

.nav-items-link:last-child {
  margin: 0 !important;
}
.hamburger-menu-body {
  display: none;
}
.hamburger-menu {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 27px;
  width: 27px;
  cursor: pointer;
}
.hamburger-menu .bar-top,
.hamburger-menu .bar-middle,
.hamburger-menu .bar-bottom {
  height: 3px;
  background: #000;
  border-radius: 5px;
  margin: 3px 0;
  transform-origin: left;
  transition: all 0.5s;
}
.humClicked .bar-top {
  transform: rotate(45deg);
}
.humClicked .bar-middle {
  transform: translateX(1rem);
  opacity: 0;
}
.humClicked .bar-bottom {
  transform: rotate(-45deg);
}
.login-button {
  width: 120px;
  height: 45px;
  background: #2176ff;
  color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
}
.lang__config {
  display: none;
}

/*/
/ Mobile version - hidden hamburger menu*/
@media screen and (max-width: 1156px) {
  .lang__config {
    display: flex;
  }
  .lang_content {
    display: none;
  }
  .nav-menu {
    width: 100%;
  }
  .hamburger-menu-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .open-menu {
    height: 100%;
  }
  .closed-menu {
    display: none;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
    margin-top: 20px;
  }
  .nav-items {
    flex-direction: column;
  }
  .nav-items-link {
    font-size: 20px;
    width: 100%;

    margin: 0;
    text-align: center;
    line-height: 19.07px;
  }
}

.lang__config {
  margin-top: 19px;
  background: #f8f8f8;
  border-radius: 5px;
  padding: 2px;
}
.lang__config__btn {
  background: none;
  border-radius: 0;
  border: none;
  color: #000;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 3px 8px;
  font-weight: 400;
}

.lang__config__btn.active {
  color: #fff;
  border-radius: 5px;
  background: #2e9cca;
}

.header {
  padding: 28px 0 24px 0;
}

.headerContent {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.leftContent {
  display: flex;
  align-items: center;
  gap: 121px;
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
  transition: opacity 0.3s;
}
.authLink:hover {
  opacity: 0.7;
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
  padding-bottom: 10px;
  z-index: 100;
}

.logo {
  width: 140px;
  height: 100px;
}
</style>
