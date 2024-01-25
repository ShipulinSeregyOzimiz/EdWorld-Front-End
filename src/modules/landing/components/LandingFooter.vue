<template>
  <footer class="footer">
    <div class="container">
      <div class="footerContent">
        <div class="footerMainInfo">
          <div class="footerItems">
            <div class="footerItem footerLogoContent">
              <h2 class="footerTitle uppercase">Ed World</h2>
              <p class="footerDesc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                mauris sed ma
              </p>
              <ul class="socialLinks">
                <li>
                  <a href="/" target="_blank"
                    ><img
                      src="../../../assets/images/landing/facebook.svg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="/" target="_blank"
                    ><img
                      src="../../../assets/images/landing/twitter.svg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="/" target="_blank"
                    ><img
                      src="../../../assets/images/landing/instagram.svg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="/" target="_blank"
                    ><img
                      src="../../../assets/images/landing/linkedin.svg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="/" target="_blank"
                    ><img
                      src="../../../assets/images/landing/youtube.svg"
                      alt=""
                  /></a>
                </li>
              </ul>
            </div>

            <div class="footerItem">
              <h2 class="footerListTitle">Контакты</h2>

              <ul class="footerItemList">
                <li><a href="tel:+77006674048">+77006674048</a></li>
                <li><a href="tel:+77079789781">+77079789781</a></li>
                <li><a href="#">info@ed-world.kz</a></li>
              </ul>
            </div>

            <div class="footerItem">
              <h2 class="footerListTitle">Наши офисы</h2>

              <ul class="footerItemList">
                <li>
                  <a href="tel:+77006674048"
                    >г. Алматы, ул. Улица Клочкова, 106</a
                  >
                </li>
                <li><a href="tel:+77079789781">г. Астана</a></li>
              </ul>
            </div>

            <div class="footerItem">
              <h2 class="footerListTitle footerRu">Образование за рубежом</h2>

              <ul class="footerItemList">
                <li><a href="tel:+77006674048">Обучение в Италии</a></li>
                <li><a href="tel:+77079789781">Обучение в Чехии</a></li>
                <li><a href="#">Обучение в Турции</a></li>
                <li><a href="#">Наши кейсы</a></li>
                <li><a href="#">Отзывы</a></li>
              </ul>
            </div>

            <div class="footerItem footerLangItem">
              <h2 class="footerListTitle">Языковая школа</h2>

              <ul class="footerItemList">
                <li><a href="tel:+77006674048">Курса английского языка</a></li>
                <li>
                  <a href="tel:+77079789781">Тест по определению уровня</a>
                </li>
                <li><a href="#">Отзывы</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 113px 0;
  background-color: var(--color-main);
  margin-top: auto;
}

.footerMainInfo {
  padding-bottom: 139px;
  border-bottom: 1px solid #d4d2e3;
}
.footerItems {
  display: flex;
  justify-content: space-between;
}

.footerItem {
  width: 100%;
  max-width: 164px;
}
.footerLangItem {
  max-width: 294.2px;
}

.footerLogoContent {
  width: 100%;
  max-width: 340.6px;
}

.footerTitle {
  font-size: 25px;
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: 31px;
}

.footerDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  color: #9795b5;
  margin-bottom: 40px;
}

.footerListTitle {
  font-size: 20px;
  font-weight: 700;
  color: #5d5a88;
  margin-bottom: 40px;
}

.footerRu {
  margin-bottom: 20px;
}

.footerItemList {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.footerItemList li a {
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  color: #9795b5;
}

.socialLinks {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
