<template>
  <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="27"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div class="item">
        <img src="../../../assets/images/landing/noPhotoSlider.png" alt="" />
        <div class="itemTextContent">
          <p class="itemDesc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices
            scelerisque mi sed interdum lacus tellus in mi orc, netus nisl
            laoreet.
          </p>
          <h2 class="itemTitle">John Carter</h2>
          <p class="itemPosition">Designer at BRIX Templates</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="item">
        <img src="../../../assets/images/landing/noPhotoSlider.png" alt="" />
        <div class="itemTextContent">
          <p class="itemDesc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices
            scelerisque mi sed interdum lacus tellus in mi orc, netus nisl
            laoreet.
          </p>
          <h2 class="itemTitle">Matt Cannon</h2>
          <p class="itemPosition">Designer at BRIX Templates</p>
        </div>
      </div></swiper-slide
    >
    <swiper-slide>
      <div class="item">
        <img src="../../../assets/images/landing/noPhotoSlider.png" alt="" />
        <div class="itemTextContent">
          <p class="itemDesc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices
            scelerisque mi sed interdum lacus tellus in mi orc, netus nisl
            laoreet.
          </p>
          <h2 class="itemTitle">John Carter</h2>
          <p class="itemPosition">Designer at BRIX Templates</p>
        </div>
      </div></swiper-slide
    >
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped>
.item {
  background-color: #fafaff;
  font-family: "DM Sans", sans-serif;
  width: 100%;
  max-width: 596.31px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.itemTextContent {
  padding: 0 40px;
}

.itemTitle {
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 12px;
}

.itemPosition {
  font-size: 16px;
  font-weight: 400;
  color: #8d8ba7;
}

.itemDesc {
  font-size: 18px;
  font-weight: 400;
  color: var(--color-main);
  line-height: 30px;
  margin-bottom: 40px;
}
</style>
