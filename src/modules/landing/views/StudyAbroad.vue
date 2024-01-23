<script setup>
import Accordion from "../../../common/components/Accordion.vue";
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <section class="banner_section">
        <div class="banner">
          <img src="../../../assets/images/landing/banner.png" alt="" />
          <div class="bannerTextContent">
            <h2 class="bannerTitle">Обучение за рубежом</h2>
            <p class="bannerDesc">
              Мы помогаем абитуриентам с выбором профессии и университета,а
              также с зачислением на грант
            </p>
          </div>
        </div>
      </section>

      <section class="results_section">
        <div class="results">
          <h2 class="resultsTitle">Наши результаты в цифрах</h2>
          <p class="resultsDesc">
            Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.
          </p>
          <div class="resultsItems flex gap-x-7 justify-center">
            <div class="resultsItem">
              <div class="flex gap-x-5 mb-10">
                <img
                  src="../../../assets/images/landing/resultsCard1.svg"
                  alt=""
                />
                <span class="resultsItemTitle">Опыт работы</span>
              </div>
              <h2 class="resultsItemDesc">4 года</h2>
            </div>
            <div class="resultsItem">
              <div class="flex gap-x-5 mb-10">
                <img src="../../../assets/images/landing/teacher.svg" alt="" />
                <span class="resultsItemTitle">Поступившие студенты</span>
              </div>
              <h2 class="resultsItemDesc">180+</h2>
            </div>
            <div class="resultsItem">
              <div class="flex gap-x-5 mb-10">
                <img
                  src="../../../assets/images/landing/resultsCard1.svg"
                  alt=""
                />
                <span class="resultsItemTitle">IELTS у наших студентов</span>
              </div>
              <h2 class="resultsItemDesc">7,5</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="leaveRequest_section">
        <div class="leaveRequest">
          <h2 class="leaveRequestTitle uppercase">Оставь заявку</h2>
          <p class="leaveRequestDesc lowercase">Оцени все сам</p>
          <div class="leaveRequestItems flex justify-between">
            <div class="leaveRequestItem flex flex-col">
              <span></span>
              <h2 class="leaveRequestItemTitle">Бесплатная консультация</h2>
            </div>
            <div class="leaveRequestItem flex flex-col">
              <span></span>
              <h2 class="leaveRequestItemTitle">
                Выбор университетов и специальностей
              </h2>
            </div>
            <div class="leaveRequestItem flex flex-col">
              <span></span>
              <h2 class="leaveRequestItemTitle">Сбор документов</h2>
            </div>
            <div class="leaveRequestItem flex flex-col">
              <span></span>
              <h2 class="leaveRequestItemTitle">Подача на стипендию</h2>
            </div>
            <div class="leaveRequestItem flex flex-col">
              <span></span>
              <h2 class="leaveRequestItemTitle">Получение студенческой визы</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="documents_section">
        <div class="documents">
          <div class="documentsTextContent">
            <h2 class="documentsTitle">Какие нужны необходимые документы?</h2>
            <p class="documentsDesc">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan.
            </p>
          </div>
          <div class="documentsItems flex flex-wrap">
            <div class="documentsItem">
              <img
                class="documentsItemImg"
                src="../../../assets/images/landing/noPhoto.png"
                alt=""
              />

              <h2 class="documentsItemTitle">CV резюме</h2>

              <p class="documentsItemDesc">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
            </div>
            <div class="documentsItem">
              <img
                class="documentsItemImg"
                src="../../../assets/images/landing/noPhoto.png"
                alt=""
              />

              <h2 class="documentsItemTitle">
                Мотивационные и рекомендательные письма
              </h2>

              <p class="documentsItemDesc"></p>
            </div>
            <div class="documentsItem">
              <img
                class="documentsItemImg"
                src="../../../assets/images/landing/noPhoto.png"
                alt=""
              />

              <h2 class="documentsItemTitle">CV резюме</h2>

              <p class="documentsItemDesc">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
            </div>

            <div class="documentsItem">
              <img
                class="documentsItemImg"
                src="../../../assets/images/landing/noPhoto.png"
                alt=""
              />

              <h2 class="documentsItemTitle">CV резюме</h2>

              <p class="documentsItemDesc">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
            </div>

            <div class="documentsItem">
              <img
                class="documentsItemImg"
                src="../../../assets/images/landing/noPhoto.png"
                alt=""
              />

              <h2 class="documentsItemTitle">CV резюме</h2>

              <p class="documentsItemDesc">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
            </div>

            <div class="documentsItem">
              <img
                class="documentsItemImg"
                src="../../../assets/images/landing/noPhoto.png"
                alt=""
              />

              <h2 class="documentsItemTitle">CV резюме</h2>

              <p class="documentsItemDesc">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="price_section">
        <div class="price">
          <div class="priceTextContent">
            <h2 class="priceTitle">Цены на услуги</h2>
            <p class="priceDesc">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
              egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
            </p>
          </div>
          <div class="priceItems flex">
            <div class="priceItem">
              <div class="priceItemWrapper">
                <div class="priceItemPriceContent">
                  <div class="priceItemPriceContentTarif">Standard</div>
                  <div class="priceItemPriceContentPrice">€2000</div>
                  <div class="priceItemPriceContentDate">Billed monthly</div>
                  <a href="/" class="priceItemPriceContentLink"
                    >Хочу попробовать</a
                  >
                </div>
                <div class="priceItemPriceBody">
                  <ul class="priceItemPriceBodyList">
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Помощь с подбором программ и университета;
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультации по легализации, переводов и иных
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Разбор и исправление (CV, мотивационные и рекомендательные
                      письма);
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Подача заявок в 3-4 вузов;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Налоги за рассмотрение документов в вузы оплачивается
                      отдельно абитуриентом от 15-60 евро;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Подача на стипендию;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультации по подаче визы и по банковским вопросам в РК;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультация до окончательного завершения результата;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Гайд по прибытию в Италию (инструкция по оформлению ВНЖ,
                      поиска жилья и других бытовых вопросов).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="priceItem">
              <div class="priceItemWrapper">
                <div class="priceItemPriceContent">
                  <div class="priceItemPriceContentTarif">Premium</div>
                  <div class="priceItemPriceContentPrice">€2400</div>
                  <div class="priceItemPriceContentDate">Billed monthly</div>
                  <a href="/" class="priceItemPriceContentLink"
                    >Хочу попробовать</a
                  >
                </div>
                <div class="priceItemPriceBody">
                  <ul class="priceItemPriceBodyList">
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Помощь с подбором программ и университета;
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультации по легализации, переводов и иных
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Разбор и исправление (CV, мотивационные и рекомендательные
                      письма);
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Подача заявок в 3-4 вузов;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Налоги за рассмотрение документов в вузы оплачивается
                      отдельно абитуриентом от 15-60 евро;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Подача на стипендию;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультации по подаче визы и по банковским вопросам в РК;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультация до окончательного завершения результата;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Гайд по прибытию в Италию (инструкция по оформлению ВНЖ,
                      поиска жилья и других бытовых вопросов).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="priceItem">
              <div class="priceItemWrapper">
                <div class="priceItemPriceContent">
                  <div class="priceItemPriceContentTarif">Vip</div>
                  <div class="priceItemPriceContentPrice">€3000</div>
                  <div class="priceItemPriceContentDate">Billed monthly</div>
                  <a href="/" class="priceItemPriceContentLink"
                    >Хочу попробовать</a
                  >
                </div>
                <div class="priceItemPriceBody">
                  <ul class="priceItemPriceBodyList">
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Помощь с подбором программ и университета;
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультации по легализации, переводов и иных
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Разбор и исправление (CV, мотивационные и рекомендательные
                      письма);
                    </li>

                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Подача заявок в 3-4 вузов;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Налоги за рассмотрение документов в вузы оплачивается
                      отдельно абитуриентом от 15-60 евро;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Подача на стипендию;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультации по подаче визы и по банковским вопросам в РК;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Консультация до окончательного завершения результата;
                    </li>
                    <li class="priceItemPriceBodyItem">
                      <img
                        src="../../../assets/images/landing/success.svg"
                        alt=""
                      />
                      Гайд по прибытию в Италию (инструкция по оформлению ВНЖ,
                      поиска жилья и других бытовых вопросов).
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq_section">
        <div class="faq">
          <div class="faqTextContent">
            <h2 class="faqTitle">Часто задаваемые вопросы</h2>
            <p class="faqDesc">
              Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie
              atole elementum eu facilisis faucibus interdum posuere.
            </p>
          </div>
          <div class="faqItems">
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>
      </section>
    </div>

    <section class="form_section">
      <div class="container">
        <div class="form">
          <div class="formItems">
            <div class="formItem">
              <h3 class="contactText uppercase">КОНТАКТЫ</h3>
              <h2 class="formTitle">Cвяжитесь с нами сегодня</h2>
              <p class="formDesc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                adipiscing tincidunt interdum tellus du.
              </p>

              <form class="formAction">
                <div class="formGroup">
                  <input type="text" class="formInput" placeholder="Ваше Имя" />
                </div>
                <div class="formGroup">
                  <input
                    type="text"
                    class="formInput"
                    placeholder="Номер телефона"
                  />
                </div>
                <div class="formGroup">
                  <input
                    type="text"
                    class="formInput"
                    placeholder="Куда вы хотели бы поступить?"
                  />
                </div>

                <button
                  type="submit"
                  class="formButton priceItemPriceContentLink"
                >
                  Отправить заявление
                </button>
              </form>
            </div>
            <div class="formItem">
              <img src="../../../assets/images/landing/formBanner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

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
                <li><a href="/" target="_blank"></a></li>
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
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 640px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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

.banner img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}

.bannerTextContent {
  padding: 0 66px;
  color: var(--color-white);
  padding-top: 180px;
}

.bannerTitle {
  font-size: 64px;
  font-weight: 700;
}

.bannerDesc {
  font-size: 23px;
  font-weight: 500;
  line-height: 23px;
  max-width: 645px;
}

.results_section {
  padding: 150px 0;
}

.resultsTitle {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: var(--color-main);
  margin-bottom: 8px;
}

.resultsDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  color: #9795b5;
  text-align: center;
  margin-bottom: 61px;
}

.resultsItem {
  width: 100%;
  max-width: 350px;
  padding: 36px 26px;
  border: 1px solid rgba(212, 210, 227, 1);
  border-radius: 15px;
}

.resultsItemTitle {
  font-size: 22px;
  font-weight: 600;
  color: var(--color-main);
  line-height: 36px;
}

.resultsItemDesc {
  font-size: 56px;
  font-weight: 700;
  color: var(--color-main);
}

.leaveRequest_section {
  padding: 107px 0;
}

.leaveRequestTitle {
  font-size: 55px;
  font-weight: 700;
  color: var(--color-main);
  line-height: 55px;
}

.leaveRequestDesc {
  font-size: 37px;
  font-weight: 500;
  color: var(--color-main);
  line-height: 37px;
  margin-bottom: 49px;
}

.leaveRequestItems {
  height: 293px;
  align-items: center;
  padding-left: 74px;
  padding-right: 36px;
  background-color: var(--color-main);
  border-radius: 26px;
  position: relative;
  z-index: 1;
}

.leaveRequestItems::before {
  content: "";
  position: absolute;
  top: 35%;
  left: 81px;
  width: 72.8%;
  height: 2px;
  background-image: url("../../../assets/images/landing/line.svg");
  background-repeat: no-repeat;
  z-index: -1;
}

.leaveRequestItem {
  max-width: 223px;
}

.leaveRequestItem:nth-child(3) {
  max-width: 112px;
}

.leaveRequestItem:nth-child(4) {
  max-width: 109px;
}

.leaveRequestItem span {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  margin-bottom: 43px;
}

.leaveRequestItemTitle {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-white);
  line-height: 20px;
}
.documents_section {
  padding: 150px 0;
}

.documentsTitle {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-main);
  text-align: center;
  margin-bottom: 16px;
}

.documentsDesc {
  font-size: 18;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  color: #9795b5;
  text-align: center;
  max-width: 613.67px;
}

.documentsTextContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.documentsItems {
  row-gap: 28px;
  justify-content: space-between;
}

.documentsItem {
  width: 100%;
  max-width: 388px;
  padding: 40px 32px;
  border: 1px solid rgba(212, 210, 227, 1);
  border-radius: 24px;
}
.documentsItemImg {
  width: 72px;
  height: 72px;
  margin-bottom: 24px;
}

.documentsItemTitle {
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  color: var(--color-main);
  margin-bottom: 8px;
}

.documentsItemDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  color: #9795b5;
}

.price_section {
  padding: 106px 0;
}

.priceTextContent {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.priceTitle {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
  color: var(--color-main);
}

.priceDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  color: #9795b5;
  max-width: 706.82px;
  text-align: center;
}

.priceItem {
  width: 100%;
  max-width: 388px;
}

.priceItemWrapper {
  border: 1px solid rgba(212, 210, 227, 1);
  border-radius: 24px;
}

.priceItemPriceContent {
  padding-top: 48px;
  padding-bottom: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(249, 249, 255, 1);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.priceItemPriceContentTarif {
  font-size: 28px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
  line-height: 38px;
  color: var(--color-main);
}
.priceItemPriceContentPrice {
  font-size: 56px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
  line-height: 66px;
  color: var(--color-main);
}
.priceItemPriceContentDate {
  font-size: 20px;
  font-weight: 500;
  font-family: "DM Sans", sans-serif;
  line-height: 20px;
  color: #8d8ba7;
  margin-bottom: 32px;
}

.priceItemPriceContentLink {
  width: 308px;
  min-height: 76px;
  font-size: 20px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
  line-height: 20px;
  color: var(--color-white);
  background-color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 47.27px;
  transition: opacity 0.3s;
}

.priceItemPriceContentLink:hover {
  opacity: 0.8;
}

.priceItemPriceBody {
  padding: 31px 0;
}
.priceItemPriceBodyList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.priceItemPriceBodyItem img {
  width: 26px;
  height: 26px;
}

.priceItemPriceBodyItem {
  display: flex;
  align-items: center;
  gap: 19px;
  width: 100%;
  max-width: 312px;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  color: var(--color-main);
}

.priceItems {
  gap: 56px;
  justify-content: center;
}

.faq_section {
  padding: 150px 0 97px 0;
}

.faqTitle {
  font-size: 36px;
  font-weight: 700;
  color: var(--color-main);
  margin-bottom: 16px;
}

.faqDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  color: rgba(151, 149, 181, 1);
  max-width: 596px;
}

.faqTextContent {
  margin-bottom: 80px;
}

.faq {
  width: 100%;
  max-width: 1013px;
  margin: 0 auto;
}

.faqItems {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.form_section {
  padding: 106px 0;
  position: relative;
}

.form_section::before {
  content: "";
  width: 410.94px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-secondary);
  z-index: -1;
}

.formItems {
  display: flex;
  gap: 106px;
}

.formItem {
  width: 50%;
}

.formItem img {
  width: 100%;
  max-width: 618.61px;
  max-height: 567.67px;
}

.contactText {
  font-size: 18px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
  color: #8d8ba7;
  margin-bottom: 8px;
}

.formTitle {
  font-size: 40px;
  font-weight: 700;
  color: var(--color-main);
  margin-bottom: 16px;
  line-height: 50px;
}

.formDesc {
  max-width: 432.29px;
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  color: #9795b5;
  margin-bottom: 41px;
}

.formInput {
  padding: 16px 24px;
  background-color: #f9f9ff;
  border-radius: 32px;
  width: 100%;
  max-width: 416px;
  height: 50px;
  font-size: 16px;
  font-family: "DM Sans", sans-serif;
}

.formInput::placeholder {
  color: #adabc3;
}

.formGroup {
  margin-bottom: 24px;
}

.formButton {
  padding: 18px 24px;
  width: 100%;
  max-width: 222px;
  min-height: 54px;
  font-size: 16px;
  line-height: 18px;
  font-family: "Gilroy", sans-serif;
}

.footer {
  padding: 113px 0;
  background-color: var(--color-main);
}

.footerItems {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>
