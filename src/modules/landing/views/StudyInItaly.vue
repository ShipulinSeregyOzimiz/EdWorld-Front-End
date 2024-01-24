<script setup>
import TemplateSlider from "../components/TemplateSlider.vue";
</script>

<template>
  <div class="studyTemplateWrapper">
    <div class="container">
      <section class="banner_section">
        <div class="banner">
          <img src="../../../assets/images/landing/banner.png" alt="" />
          <div class="bannerTextContent">
            <h2 class="bannerTitle">Обучение в Италии</h2>
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
            <h2 class="infoTitle">Университеты Италии</h2>
            <p class="infoDesc">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan.
            </p>
          </div>
          <div class="infoItems">
            <div class="infoItem banner1">
              <img src="../../../assets/images/landing/template1.png" alt="" />
              <div class="infoItemTextContent">
                <h2 class="infoItemTitle">Mobile app</h2>
                <p class="infoItemDesc">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis.
                </p>
              </div>
            </div>

            <div class="infoItemRight">
              <div class="infoItem banner2">
                <img
                  src="../../../assets/images/landing/template2.png"
                  alt=""
                />
                <div class="infoItemTextContent banner2TextContent">
                  <h2 class="infoItemTitle infoItemTemplate2Title">
                    Mobile app
                  </h2>
                  <p class="infoItemDesc infoItemTemplate2Desc">
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalaracc lacus vel facilisis.
                  </p>
                </div>
              </div>

              <div class="infoItem banner2">
                <img
                  src="../../../assets/images/landing/template3.png"
                  alt=""
                />
                <div class="infoItemTextContent banner2TextContent">
                  <h2 class="infoItemTitle infoItemTemplate2Title">
                    Mobile app
                  </h2>
                  <p class="infoItemDesc infoItemTemplate2Desc">
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalaracc lacus vel facilisis.
                  </p>
                </div>
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

          <TemplateSlider />
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
  padding-top: 120px;
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

.info_section {
  padding: 150px 0;
}

.infoTextContent {
  text-align: center;
  max-width: 613.67px;
  margin: 0 auto;
  padding-bottom: 55px;
}

.infoTitle {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-main);
  margin-bottom: 16px;
}

.infoDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  color: #9795b5;
}

.infoItems {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.infoItem {
  position: relative;
}

.infoItem::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  border-radius: 20px;
}

.infoItem img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  border-radius: 20px;
}

.banner1 {
  width: 100%;
  max-width: 605px;
  height: 567.63px;
  display: flex;
  justify-content: center;
  text-align: center;
}

.infoItemTextContent {
  width: 100%;
  max-width: 407.83px;
  color: var(--color-white);
  margin-top: auto;
  padding: 48px 0;
  z-index: 100;
}

.infoItemTitle {
  font-size: 22px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
}

.infoItemDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}

.infoItemRight {
  width: 100%;
  max-width: 583.33px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.banner2 {
  width: 100%;
  max-width: 583.33px;
  height: 268.01px;
  display: flex;
}

.banner2TextContent {
  padding: 56px 49px;
}

.infoItemTemplate2Title {
  margin-bottom: 16px;
}

.infoItemTemplate2Desc {
  font-size: 16px;
  line-height: 28px;
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
</style>
