<script setup>
import { ref } from "vue";

const questions = [
  {
    question: "1. I ________________ from France.",
    variants: ["is", "are", "am", "be"],
  },
  {
    question: "2. I ________________ from England.",
    variants: ["is", "are", "am", "be"],
  },
  {
    question: "3. I ________________ from Finland.",
    variants: ["is", "are", "am", "be"],
  },
  {
    question: "4. I ________________ from Uzbekistan.",
    variants: ["is", "are", "am", "be"],
  },
];

const step = ref(0);

const nextStep = () => {
  if (step.value === questions.length - 1) return;
  step.value++;
};

const prevStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};
</script>

<template>
  <div class="studyTemplateWrapper">
    <div class="container">
      <section class="banner_section">
        <div class="banner">
          <img src="../../../assets/images/landing/banner.png" alt="" />
          <div class="bannerTextContent">
            <h2 class="bannerTitle">Определите свой уровень английского</h2>
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

      <section class="test_section">
        <div class="test">
          <h2 class="testTitle">Тест по определению уровня</h2>

          <div class="testContent">
            <div class="testStep">{{ step + 1 }}/{{ questions.length }}</div>
            <h2 class="testQuestion">{{ questions[step]?.question }}</h2>

            <div class="testItems">
              <div class="testItem">
                <input type="radio" id="is" name="verb" />
                <label for="is">is</label>
              </div>
              <div class="testItem">
                <input type="radio" id="am" name="verb" />
                <label for="am">am</label>
              </div>
              <div class="testItem">
                <input type="radio" id="are" name="verb" />
                <label for="are">are</label>
              </div>
              <div class="testItem">
                <input type="radio" id="be" name="verb" />
                <label for="be">be</label>
              </div>
            </div>

            <div class="testActions">
              <button class="testButton" @click="prevStep" type="button">
                назад
              </button>
              <button class="testButton" @click="nextStep" type="button">
                вперед
              </button>
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
  max-width: 744px;
}

.bannerTitle {
  font-size: 67px;
  font-weight: 700;
  line-height: 52px;
  margin-bottom: 16px;
}

.bannerDesc {
  font-size: 18px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  line-height: 30px;
  padding-bottom: 44px;
  max-width: 574px;
  margin: 0 auto;
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

.test_section {
  padding: 107px 0;
}

.testContent {
  padding: 26px 70px 58px 70px;
  background-color: #fafaff;
  border-radius: 26px;
}

.testTitle {
  font-size: 44px;
  font-weight: 600;
  text-align: center;
  color: var(--color-main);
  margin-bottom: 44px;
}

.testItems {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 25px;
  margin-bottom: 40px;
}

.testQuestion {
  font-size: 28px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 36px;
}

.testItem {
  width: 48%;
  height: 96px;
  display: flex;
  align-items: center;
  border: 1px solid #bcbacd;
  padding: 0 40px;
  border-radius: 50px;
}

label {
  font-size: 28px;
  font-weight: 600;
  margin-left: 27px;
  color: #000000;
  width: 90%;
  cursor: pointer;
}

input[type="radio"] {
  width: 24px;
  height: 24px;
}

.testActions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.testButton {
  width: 100%;
  max-width: 330px;
  height: 76px;
  background-color: var(--color-main);
  font-size: 28px;
  font-weight: 600;
  color: var(--color-white);
  border-radius: 40px;
}

.testStep {
  font-size: 28px;
  font-weight: 600;
  color: #000000;
  text-align: end;
}

.testDisabled {
  background-color: #5d5a88;
  cursor: no-drop;
}
</style>
