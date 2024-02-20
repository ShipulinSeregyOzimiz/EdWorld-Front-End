<template>
  <header class="dashboard_header">
    <div class="dashboard_header_content">
      <div class="dashboard_header_section">
        <div class="dashboard_header_section_search">
          <img src="@/assets/images/dashboard/search.svg" alt="" />
          <Input
            v-model="searchValue"
            class="search_input"
            placeholder="Поиск"
          />
        </div>

        <div class="dashboard_header_section_actions">
          <div class="dashboard_notofication">
            <img src="@/assets/images/dashboard/clock.svg" alt="" />
          </div>
          <div class="dashboard_langs">
            <img src="@/assets/images/dashboard/ru.svg" alt="" />
          </div>

          <div class="dashboard_profile">
            <img src="@/assets/images/dashboard/profile.png" alt="" />

            <div class="dashboard_profile_text">
              <h3 class="dashboard_profile_title">Аскаров М.</h3>
              <p class="dashboard_profile_position">Учитель</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Input from "./Input.vue";

const searchValue = ref("");
</script>

<style scoped>
.dashboard_header {
  padding: 32px 0;
}

.dashboard_header_section {
  display: flex;
  justify-content: space-between;
  padding: 10px 32px;
  background-color: var(--color-white);
  border-radius: 59px;
}

.dashboard_header_section_search {
  width: 100%;
  max-width: 726px;
  display: flex;
}

.search_input {
  outline: none;
  padding: 0 8px;
}

.dashboard_header_section_actions {
  width: 100%;
  max-width: 284px;
  display: flex;
  align-items: center;
}

.dashboard_profile {
  display: flex;
  align-items: center;
  margin-left: 32px;
}

.dashboard_profile_text {
  font-family: "Gilroy", sans-serif;
  margin-left: 12px;
}

.dashboard_profile_title {
  font-size: 14px;
  font-weight: 600;
  color: #1d1f2c;
  margin-bottom: 2px;
}

.dashboard_profile_position {
  font-size: 12px;
  font-weight: 500;
  color: #4a4c56;
}

.dashboard_langs {
  margin-left: 16px;
}
</style>
