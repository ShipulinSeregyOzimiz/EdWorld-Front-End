<script setup>
import { onMounted, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import {
  fetchAllQuestions,
  sendAnswer,
  sendAnswerForm,
  createUserTest,
} from "@/api/modules/landing/requests/";
import Input from "../../../common/components/Input.vue";
import { useTestLandingStore } from "@/stores/testLanding";

const testStore = useTestLandingStore();

const questions = ref([]);
const selectedAnswerId = ref("");
const testId = ref("");

const step = ref(0);
const isVisibleForm = ref(false);
const formData = ref({
  test_id: "",
  name: "",
  email: "",
  phone: "",
  message: "",
});

const validations = ref({
  name: { required: helpers.withMessage("Обязательное поле", required) },
  email: { required: helpers.withMessage("Обязательное поле", required) },
  phone: { required: helpers.withMessage("Обязательное поле", required) },
  message: {
    required: helpers.withMessage("Обязательное поле", required),
  },
});

const v$ = useVuelidate(validations.value, formData.value);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    if (testId.value) {
      formData.value.test_id = testId.value;
    }
    try {
      const response = await sendAnswerForm(formData.value);
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
    }
  }
};

const nextStep = async () => {
  if (step.value === questions.value.length - 1) {
    isVisibleForm.value = true;
  }
  if (testId.value && selectedAnswerId.value) {
    await handleAnswer(testId.value, selectedAnswerId.value);
    step.value++;
  }
};

const prevStep = () => {
  if (step.value > 0) {
    step.value--;
  }
};

async function handleAnswer(userTestId, testAnswerId) {
  const dto = {
    userTestId,
    testAnswerId,
  };
  try {
    const response = await sendAnswer(dto);
    console.log(response);
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
  }
}

const loadQuestions = async () => {
  try {
    const response = await fetchAllQuestions();
    await testStore.getTestId(1);
    testId.value = testStore.$state.testId;
    console.log(testId.value);
    questions.value = response.data;
  } catch (err) {
  } finally {
  }
};

function handleChangeAnswerId(id) {
  selectedAnswerId.value = id;
}

onMounted(() => {
  loadQuestions();
});
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
          <h2 class="testTitle">
            <template v-if="isVisibleForm">
              ВЫ ЗАВЕРШИЛИ ТЕСТИРОВАНИЕ, ЗАПОЛНИТЕ ФОРМУ, ЧТОБЫ ПОЛУЧИТЬ
              РЕЗУЛЬТАТЫ</template
            >
            <template v-else> Тест по определению уровня </template>
          </h2>

          <div class="testContent">
            <template v-if="isVisibleForm">
              <div class="testSendForm">
                <form @submit.prevent="handleSubmit">
                  <div class="formGroup">
                    <Input
                      v-model="formData.name"
                      :class="{ error: v$.name.$errors.length }"
                      placeholder="John Carter"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.name.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                  <div class="formGroup">
                    <Input
                      v-model="formData.email"
                      :class="{ error: v$.email.$errors.length }"
                      placeholder="example@email.com"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.email.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                  <div class="formGroup">
                    <Input
                      v-model="formData.phone"
                      :class="{ error: v$.phone.$errors.length }"
                      v-mask="'+7 (###) ### ## ##'"
                      placeholder="(123) 456 - 789"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.phone.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                  <div class="formGroup">
                    <Input
                      v-model="formData.message"
                      :class="{ error: v$.message.$errors.length }"
                      placeholder="Please type your message here..."
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.message.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>

                  <button class="testSendButton" type="submit">
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </template>
            <template v-else-if="questions.length > 0">
              <div class="testStep">{{ step + 1 }}/{{ questions.length }}</div>
              <h2 class="testQuestion">
                {{ step + 1 }}. {{ questions[step]?.description }}
              </h2>

              <div class="testItems">
                <div
                  class="testItem"
                  v-for="question in questions[step]?.answers"
                  :key="question.id"
                >
                  <input
                    type="radio"
                    :id="question.id"
                    name="verb"
                    @click="handleChangeAnswerId(question.id)"
                  />
                  <label :for="question.id">{{ question.text }}</label>
                </div>
              </div>

              <div class="testActions">
                <button
                  class="testButton"
                  :class="{ testDisabled: step < 1 }"
                  @click="prevStep"
                  type="button"
                >
                  назад
                </button>

                <button
                  class="testButton"
                  @click="nextStep(questions[step]?.test_id)"
                  type="button"
                >
                  <template v-if="step === questions.length - 1">
                    Завершить
                  </template>
                  <template v-else> вперед</template>
                </button>
              </div>
            </template>
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

.testSendForm {
  width: 100%;
  max-width: 462.79px;
  padding: 50px 0;
  margin: 0 auto;
}

.formGroup {
  margin-bottom: 24px;
}

.testSendButton {
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-white);
  background-color: var(--color-main);
  margin-top: 12px;
  border-radius: 30px;
}
</style>
