<template>
  <div class="book_wrapper">
    <div class="book_text">
      <h2 class="book_title">Список книг</h2>
      <p class="book_desc">
        Здесь вы можете найти более подробную информацию о ваших книгах.
        Поддерживайте интерес пользователя, предоставляя содержательную
        информацию.
      </p>
    </div>
    <div class="books_items" v-if="books.length > 0">
      <template v-for="book in books" :key="book.title">
        <book-card
          :title="book.title"
          :image="book.image"
          :name="book.name"
          :name_link="book.name_link"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import BookCard from "@/common/components/BookCard.vue";

const books = [
  {
    title: "Technology behind the Blockchain",
    image: "@/assets/images/dashboard/books/book1.png",
    name: "Book #1",
    name_link: "See project details",
  },
  {
    title: "Technology behind the Blockchain",
    image: "@/assets/images/dashboard/books/book1.png",
    name: "Book #1",
    name_link: "See project details",
  },
  {
    title: "Technology behind the Blockchain",
    image: "@/assets/images/dashboard/books/book1.png",
    name: "Book #1",
    name_link: "See project details",
  },
  {
    title: "Technology behind the Blockchain",
    image: "@/assets/images/dashboard/books/book1.png",
    name: "Book #1",
    name_link: "See project details",
  },
  {
    title: "Technology behind the Blockchain",
    image: "@/assets/images/dashboard/books/book1.png",
    name: "Book #1",
    name_link: "See project details",
  },
  {
    title: "Technology behind the Blockchain",
    image: "@/assets/images/dashboard/books/book1.png",
    name: "Book #1",
    name_link: "See project details",
  },
];
</script>

<style scoped>
.book_wrapper {
  padding: 23px 31px;
  background-color: #fff;
  box-shadow: 14px 17px 40px 4px #7090b014;
  border-radius: 30px;
}

.book_text {
  font-family: "DM Sans", sans-serif;
  margin-bottom: 41px;
}

.book_title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #2b3674;
}

.book_desc {
  font-size: 16px;
  font-weight: 400;
  color: #a3aed0;
}
.books_items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
