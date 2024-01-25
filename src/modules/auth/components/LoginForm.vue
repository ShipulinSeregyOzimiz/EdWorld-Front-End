<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Input from "@/common/components/Input.vue";

const formData = ref({
  phoneNumber: "",
  password: "",
});
</script>

<template>
  <div class="formContent">
    <h2 class="formTitle">Вход</h2>
    <p class="formDesc">Введите номер телефона и пароль, чтобы войти!</p>
    <form class="form">
      <div class="formGroup">
        <label for="">Номер телефона<span>*</span></label>
        <Input
          v-model="formData.phoneNumber"
          placeholder="+7 777 777 77 77"
          class="input"
        />
      </div>
      <div class="formGroup">
        <label for="">Пароль<span>*</span></label>
        <div class="passwordWrapper">
          <Input
            v-model="formData.phoneNumber"
            placeholder="Мин. 8 символов"
            class="input passwordInput"
            htmlType="password"
          />
          <img src="../../../assets/images/auth/eyes.png" class="eyes" alt="" />
        </div>
      </div>
      <div class="formActions mt-10">
        <div class="flex">
          <input type="checkbox" id="savePassword" class="savePass" />
          <label for="savePassword" class="savePassword uppercase"
            >Не выходить из системы</label
          >
        </div>
        <RouterLink class="removePassword" to="/auth/login"
          >Забыли пароль?</RouterLink
        >
      </div>

      <button class="submitBtn" type="submit">Вход</button>

      <div class="pod">
        У вас нет учетной записи?
        <RouterLink class="podLink" to="/auth/registration">Зарегистрироваться</RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
.formContent {
  width: 100%;
  max-width: 410px;
}

.formGroup {
  margin-bottom: 24px;
}
.input {
  border: 1px solid #e0e5f2;
  border-radius: 16px;
  margin-top: 13px;
}

.formTitle {
  font-size: 36px;
  font-weight: 700;
  line-height: 56px;
  color: #2b3674;
  margin-bottom: 8px;
}

.formDesc {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -2%;
  line-height: 16px;
  color: #a3aed0;
  margin-bottom: 44px;
}

label {
  font-size: 14px;
  color: #38437d;
  font-weight: 500;
}

label span {
  color: #372e5f;
}

.savePassword {
  color: var(--color-main);
  font-size: 14px;
}
.savePass {
  width: 18px;
  height: 18px;
  margin-right: 11px;
}

.passwordWrapper {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e5f2;
  border-radius: 16px;
  padding: 0 24px;
}

.passwordWrapper img {
  width: 20px;
  height: 20px;
}

.passwordInput {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
}
.formActions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.removePassword {
  font-size: 14px;
  font-weight: 500;
  color: #4318ff;
}

.submitBtn {
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background-color: #4318ff;
  font-size: 14px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
  margin-bottom: 33px;
  margin-top: 33px;
  border-radius: 16px;
}

.eyes {
  cursor: pointer;
}

.pod {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-main);
  margin-top: 33px;
}

.podLink {
    color: #4318FF;
}
</style>
