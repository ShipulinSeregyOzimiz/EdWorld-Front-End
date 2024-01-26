<script setup></script>

<template>
  <div class="studyTemplateWrapper">
    <div class="container">
      <section class="banner_section">
        <div class="banner">
          <img src="../../../assets/images/landing/banner.png" alt="" />
          <div class="bannerTextContent">
            <h2 class="bannerTitle">Языковые курсы</h2>
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
          <div class="infoItems">
            <div class="infoItem">
              <div class="infoItemContent">
                <div class="infoItemContentCard">
                  <img src="../../../assets/images/landing/info.png" alt="" />

                  <h2 class="infoItemContentCardTitle">Feature one</h2>
                  <p class="infoItemContentCardDesc">
                    Web design partially overlaps web engineering in the broader
                    scope of web development
                  </p>
                </div>
                <div class="infoItemContentCard">
                  <img src="../../../assets/images/landing/info.png" alt="" />

                  <h2 class="infoItemContentCardTitle">Feature one</h2>
                  <p class="infoItemContentCardDesc">
                    Web design partially overlaps web engineering in the broader
                    scope of web development
                  </p>
                </div>
              </div>
            </div>
            <div class="infoItem">
              <img
                src="../../../assets/images/landing/languageNoPhoto.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="tagline_section">
        <div class="tagline">
          <div class="taglineItems">
            <div class="taglineItem">
              <div class="tagline1">
                <img src="../../../assets/images/landing/tagline1.png" alt="" />
              </div>
            </div>
            <div class="taglineItem">
              <div class="tagline2">
                <img src="../../../assets/images/landing/tagline2.png" alt="" />
              </div>
            </div>
            <div class="taglineItem">
              <div class="tagline2">
                <img src="../../../assets/images/landing/tagline2.png" alt="" />
              </div>
            </div>
          </div>
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
  padding-bottom: 16px;
  margin: 0 auto;
  max-width: 429px;
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
  padding: 75px 0;
}
.infoItems {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 130px;
}

.infoItem:first-child {
  width: 100%;
  max-width: 263px;
}

.infoItem:last-child {
  width: 100%;
  max-width: 750px;
}

.infoItemContent {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.infoItemContentCard {
  font-family: "DM Sans", sans-serif;
}
.infoItemContentCard img {
  width: 50px;
  height: 50px;
  margin-bottom: 24px;
}

.infoItemContentCardTitle {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-main);
  margin-bottom: 7px;
}

.infoItemContentCardDesc {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: #9795b5;
}

.tagline_section {
  padding: 150px 0;
}

.taglineItems {
  display: grid;
  grid-template-columns: 579.69px 290.09px 290.09px;
  gap: 28px;
}
</style>
