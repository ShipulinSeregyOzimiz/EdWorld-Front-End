<script setup>
import { ref } from "vue";

const isVisible = ref(false);
</script>

<template>
  <div
    class="accordion"
    :class="{ active: isVisible }"
    @click="isVisible = !isVisible"
  >
    <div class="accordionItems">
      <div class="accordionItem">
        <div class="accordionHeader">
          <div class="accordionTitle">
            Я заканчиваю школу в этом году. Могу ли я поступить на бакалавриат?
          </div>
        </div>
        <div class="accordionContent" v-show="isVisible">
          Если только вы заканчиваете НИШ или другую школу с 12 классами. В
          Италии 12-летнее школьное образование. Есть несколько вариантов
          поступления на бакалавриат: а) закончить 1 курс в казахстанском
          университете, б) поступить на подготовительный курс при итальянском
          университете (foundation) и в) 9 классов школы + диплом колледжа.
        </div>
      </div>
      <div class="accordionItem">
        <img src="../../assets/images/landing/open.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  background-color: #f9f9ff;
  padding: 38px 50px 31px 50px;
  border-radius: 30px;
  cursor: pointer;
}

.active {
  background-color: rgba(231, 230, 242, 1);
}

.accordionHeader {
  margin-bottom: 16px;
}
.accordionTitle {
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  color: var(--color-main);
}

.accordionContent {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  color: rgba(151, 149, 181, 1);
}

.accordionItems {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accordionItem:first-child {
  width: 100%;
  max-width: 798.98px;
}
</style>
