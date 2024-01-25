<script setup></script>

<template>
  <div class="wrapper">
    <div class="items">
      <div class="item">
        <router-view />
      </div>
      <div class="item">
        <div class="bannerContent">
          <img
            src="../../assets/images/auth/phone.png"
            class="phone_img"
            alt=""
          />

          <img src="../../assets/images/auth/logo.png" class="logo" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
}

.items {
  display: flex;
  height: 100%;
}

.item {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bannerContent {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bannerContent::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffffb2;
  z-index: 1;
}

.phone_img {
  width: 100%;
  height: 100vh;
  position: absolute;
}

.logo {
  position: absolute;
  z-index: 100;
}
</style>
