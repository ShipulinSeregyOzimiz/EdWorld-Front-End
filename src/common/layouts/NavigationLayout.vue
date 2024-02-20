<script setup>
import { onMounted, onUnmounted } from "vue";
import Header from "@/common/components/Header.vue";
import Sidebar from "@/common/components/SideBar/Sidebar.vue";

onMounted(() => {
  document.body.style.backgroundColor = "#f9f9fc";
});

onUnmounted(() => {
  document.body.style.backgroundColor = "#fff";
});
</script>

<template>
  <div class="navigation_wrapper">
    <div class="sidebar_wrapper">
      <Sidebar />
    </div>
    <main class="navigation_main">
      <Header />
      <div class="navigation_content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
.navigation_wrapper {
  display: grid;
  grid-template-columns: 290px 1fr;
}

.navigation_main {
  height: 100vh;
  display: grid;
  grid-template-rows: 120px 1fr;
  padding: 0 24px;
}

.navigation_content {
  padding: 0px 20px 40px;
  overflow-y: auto;
}

.navigation_content::-webkit-scrollbar {
  display: none;
}

.navigation_content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
