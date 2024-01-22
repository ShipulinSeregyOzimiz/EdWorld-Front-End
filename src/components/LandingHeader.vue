<script setup></script>

<template>
  <header class="header">
    <div class="container">
      <div class="headerContent">
        <div class="leftContent">
          <div class="dropdown lang">рус</div>
          <div class="dropdown">Образование за рубежом</div>
        </div>
        <div class="logoContent">
          <a href="/">
            <img src="../assets/images/logo.svg" class="logo" alt="Logo" />
          </a>
        </div>
        <div class="rightContent">
          <div class="dropdown">Образование за рубежом</div>
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

.rightContent .dropdown {
  margin-right: 51px;
}

.authLink {
  margin-right: 18px;
}

.dropdown {
  padding: 11px 22px;
  border: 1px solid var(--color-main);
  border-radius: 26px;
  font-weight: 600;
  font-size: 18px;
  color: var(--color-main);
  cursor: pointer;
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
