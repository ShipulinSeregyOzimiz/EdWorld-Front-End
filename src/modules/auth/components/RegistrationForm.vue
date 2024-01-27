<script setup>
import { ref, defineProps, defineEmits } from "vue";
import { RouterLink } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import Input from "@/common/components/Input.vue";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["onSubmit"]);

const formData = ref({
  name: "",
  phone: "",
  password: "",
});

const validations = ref({
  name: { required: helpers.withMessage("Обязательное поле", required) },
  phone: { required: helpers.withMessage("Обязательное поле", required) },
  password: {
    required: helpers.withMessage("Обязательное поле", required),
    minLength: helpers.withMessage("Минимум 8 символов", minLength(8)),
  },
});

const v$ = useVuelidate(validations.value, formData.value);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    emits("onSubmit", formData.value);
  }
};
</script>

<template>
  <div class="formContent">
    <h2 class="formTitle">Регистрация</h2>
    <p class="formDesc">Введите данные и пароль</p>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="formGroup">
        <label for="">ФИО<span>*</span></label>
        <Input
          v-model="formData.name"
          placeholder="Асанова Асем Раимкулова"
          class="input"
          :class="{ error: v$.name.$errors.length }"
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
        <label for="">Почта<span>*</span></label>
        <Input placeholder="asanasem@gmail.com" class="input" />
      </div>
      <div class="formGroup">
        <label for="">Номер телефона<span>*</span></label>
        <Input
          v-model="formData.phone"
          placeholder="+7 777 777 77 77"
          v-mask="'+7 (###) ### ## ##'"
          class="input"
          :class="{ error: v$.phone.$errors.length }"
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
        <label for="">Пароль<span>*</span></label>
        <div
          class="passwordWrapper"
          :class="{ error: v$.phone.$errors.length }"
        >
          <Input
            v-model="formData.password"
            placeholder="Мин. 8 символов"
            class="input passwordInput"
            htmlType="password"
          />
          <img src="../../../assets/images/auth/eyes.png" class="eyes" alt="" />
        </div>
        <div
          class="input-errors"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
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
          >У меня есть аккаунт</RouterLink
        >
      </div>

      <button class="submitBtn" type="submit" :disabled="loading">
        <template v-if="loading"> ..loading</template>
        <template v-else>Регистрация</template>
      </button>
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
  color: #4318ff;
}
</style>
