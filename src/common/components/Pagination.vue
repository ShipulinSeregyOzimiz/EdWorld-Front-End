<template>
  <div class="wrapper">
    <div class="count_list">Показаны 1-5 из 30</div>
    <div class="pagination">
      <div class="arrow_left arrow">
        <svg-icon type="mdi" :path="arrowLeftIcon"></svg-icon>
      </div>

      <div class="pages">
        <template v-for="el of 5" :key="el">
          <div class="page arrow" :class="{ active_page: el === 1 }">
            {{ el }}
          </div>
        </template>

        <div class="page arrow">...</div>
      </div>

      <div class="arrow_right arrow">
        <svg-icon type="mdi" :path="arrowRightIcon"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";

const arrowLeftIcon = mdiMenuLeft;
const arrowRightIcon = mdiMenuRight;
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}

.count_list {
  font-size: 14px;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
  color: #667085;
}

.pagination {
  display: flex;
  align-items: center;
}

.pages {
  display: flex;
  align-items: center;
  gap: 8px;
}

.arrow_left {
  margin-right: 8px;
}

.arrow_right {
  margin-left: 8px;
}

.arrow {
  font-size: 14px;
  font-weight: 600;
  font-family: "Gilroy", sans-serif;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3250ff;
  background-color: #ebeeff;
  border-radius: 8px;
  cursor: pointer;
}

.active_page {
  color: #fff;
  background-color: #3250ff;
}
</style>
