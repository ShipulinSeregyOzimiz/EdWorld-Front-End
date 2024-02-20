<template>
  <div class="wrapper">
    <div class="text_content">
      <img src="@/assets/images/dashboard/books/book1.png" alt="" />
      <div class="text">
        <h3 class="title">{{ title }}</h3>
        <div class="details">
          <div class="name">{{ name }}</div>
          <a href="#" class="name_detail">{{ name_link }}</a>
        </div>
      </div>
    </div>
    <div class="edit">
      <svg-icon type="mdi" :path="pathIcon" class="edit_icon"></svg-icon>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiPencil } from "@mdi/js";

const pathIcon = mdiPencil;

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  name_link: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.wrapper {
  background-color: #fff;
  box-shadow: 0px 18px 40px 0px #7090b01f;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px 14px 14px;
}

.text_content {
  display: flex;
  gap: 19px;
}

.text {
  font-family: "DM Sans", sans-serif;
}
.title {
  font-size: 16px;
  font-weight: 500;
  color: #2b3674;
  margin-bottom: 3px;
}

.details {
  display: flex;
  gap: 30px;
}

.name {
  font-size: 14px;
  font-weight: 500;
  color: #a3aed0;
}

.name_detail {
  font-size: 14px;
  font-weight: 500;
  color: #4318ff;
  text-decoration: underline;
}

.edit {
  cursor: pointer;
}
.edit_icon {
  width: 18px;
  height: 18px;
  color: #8f9bba;
}
</style>
