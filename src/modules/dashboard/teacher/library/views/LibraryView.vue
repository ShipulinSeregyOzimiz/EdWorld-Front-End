<template>
  <div class="book_header">
    <default-head-actions />
  </div>
  <books-list />

  <div class="pagination_content">
    <books-pagination />
  </div>
</template>

<script setup>
import DefaultHeadActions from "@/common/components/DefaultHeadActions.vue";
import BooksList from "../components/BooksList.vue";
import BooksPagination from "../components/BooksPagination.vue";
</script>

<style scoped>
.book_header {
  margin-bottom: 24px;
}

.pagination_content {
  margin-top: 24px;
}
</style>
