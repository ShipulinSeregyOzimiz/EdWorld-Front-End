<script setup>
import OurCasesSlider from "../components/OurCasesSlider.vue";
</script>

<template>
  <div class="studyTemplateWrapper">
    <div class="container">
      <section class="banner_section">
        <div class="banner">
          <img src="../../../assets/images/landing/banner.png" alt="" />
          <div class="bannerTextContent">
            <h2 class="bannerTitle">Отзывы</h2>
            <p class="bannerDesc">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <div class="bannerActions">
              <a href="/"
                >Get started
                <img
                  src="../../../assets/images/landing/arrow-right.svg"
                  alt=""
              /></a>
              <a href="/">Talk to sales</a>
            </div>
          </div>
        </div>
      </section>

      <section class="info_section">
        <div class="info">
          <div class="infoTextContent">
            <h2 class="infoTitle">Meet our team members</h2>
            <p class="infoDesc">
              Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
              gravida malesuada quam commodo id integer nam.
            </p>
          </div>

          <div class="infoItems">
            <div class="infoItem">
              <img
                src="../../../assets/images/landing/noPhotoSlider.png"
                alt=""
              />
              <div class="infoItemTextContent">
                <h2 class="infoItemTitle">John Carter</h2>
                <h3 class="infoItemPosition uppercase">CEO & Co-Founder</h3>
                <p class="infoItemDesc">
                  Lorem ipsum dolor sit amet consecte adipiscing elit amet
                  hendrerit pretium nu.
                </p>
              </div>
            </div>
            <div class="infoItem">
              <img
                src="../../../assets/images/landing/noPhotoSlider.png"
                alt=""
              />
              <div class="infoItemTextContent">
                <h2 class="infoItemTitle">John Carter</h2>
                <h3 class="infoItemPosition uppercase">CEO & Co-Founder</h3>
                <p class="infoItemDesc">
                  Lorem ipsum dolor sit amet consecte adipiscing elit amet
                  hendrerit pretium nu.
                </p>
              </div>
            </div>
            <div class="infoItem">
              <img
                src="../../../assets/images/landing/noPhotoSlider.png"
                alt=""
              />
              <div class="infoItemTextContent">
                <h2 class="infoItemTitle">John Carter</h2>
                <h3 class="infoItemPosition uppercase">CEO & Co-Founder</h3>
                <p class="infoItemDesc">
                  Lorem ipsum dolor sit amet consecte adipiscing elit amet
                  hendrerit pretium nu.
                </p>
              </div>
            </div>
            <div class="infoItem">
              <img
                src="../../../assets/images/landing/noPhotoSlider.png"
                alt=""
              />
              <div class="infoItemTextContent">
                <h2 class="infoItemTitle">John Carter</h2>
                <h3 class="infoItemPosition uppercase">CEO & Co-Founder</h3>
                <p class="infoItemDesc">
                  Lorem ipsum dolor sit amet consecte adipiscing elit amet
                  hendrerit pretium nu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="templateSlider_section">
        <div class="templateSlider">
          <div class="templateSliderTextContent">
            <h2 class="templateSliderTitle">What our clients say</h2>
            <p class="templateSliderDesc">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan.
            </p>
          </div>

          <OurCasesSlider />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 640px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.banner::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  z-index: -1;
  border-radius: 22px;
}

.banner > img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}

.bannerTextContent {
  color: var(--color-white);
  padding-top: 230px;
  width: 100%;
  max-width: 574px;
}

.bannerTitle {
  font-size: 64px;
  font-weight: 700;
  line-height: 66px;
  margin-bottom: 16px;
}

.bannerDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  margin-bottom: 44px;
}

.bannerActions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.bannerActions a {
  width: 100%;
  max-width: 194px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  gap: 8px;
}

.bannerActions a img {
  width: 18px;
  height: 18px;
}

.bannerActions a:first-child {
  background-color: var(--color-white);
  color: var(--color-main);
}
.bannerActions a:last-child {
  background-color: transparent;
  border: 1.5px solid var(--color-white);
}

.templateSlider_section {
  padding: 150px 0;
  overflow: hidden;
}

.templateSlider {
  position: relative;
}

.templateSliderTextContent {
  max-width: 613.67px;
  margin-bottom: 60px;
  font-family: "DM Sans", sans-serif;
}

.templateSliderTitle {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-main);
}

.templateSliderDesc {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #9795b5;
}

.info_section {
  padding: 175px 0;
}

.infoTextContent {
  max-width: 613.97px;
  margin: 0 auto;
  padding-bottom: 53px;
  font-family: "DM Sans", sans-serif;
  text-align: center;
}

.infoTitle {
  font-size: 36px;
  font-weight: 700;
  line-height: 46px;
  color: var(--color-main);
  margin-bottom: 16px;
}

.infoDesc {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #9795b5;
}

.infoItems {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.infoItem {
  display: flex;
  align-items: center;
  border: 1px solid #d4d2e3;
  border-radius: 20px;
  width: 100%;
  max-width: 596px;
}

.infoItem img {
  width: 100%;
  max-width: 267px;
  height: 342px;
}

.infoItemTextContent {
  padding: 0 49px;
  font-family: "DM Sans", sans-serif;
  width: 100%;
}

.infoItemTitle {
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  color: var(--color-main);
}

.infoItemPosition {
  font-size: 18px;
  font-weight: 700;
  color: #adabc3;
  margin-bottom: 16px;
}

.infoItemDesc {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
}
</style>
