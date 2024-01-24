<script setup>
import DropdownMenu from "./DropDownMenu.vue";
import NavigationDropDownMenu from "./NavigationDropDownMenu.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="headerContent">
        <div class="leftContent">
          <DropdownMenu class="lang" text="Ру" />
          <NavigationDropDownMenu text="Образование за рубежом" />
        </div>
        <div class="logoContent">
          <a href="/">
            <img src="../../assets/images/logo.svg" class="logo" alt="Logo" />
          </a>
        </div>
        <div class="rightContent">
          <DropdownMenu text="Языковая школа" class="dropdownL" />
          <a href="/" class="authLink">Войти</a>
          <a href="/" class="submitApplicationLink">Оставить заявку</a>
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
