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
  emits("onSubmit", 3);
};
</script>

<template>
  <div class="formContent">
    <h2 class="formTitle">Забыли пароль</h2>
    <p class="formDesc">Мы отправили код на ваш номер телефона</p>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="formGroup">
        <Input
          v-model="formData.phone"
          placeholder="Введите 6-значный код"
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

      <button class="submitBtn" type="submit" :disabled="loading">
        <template v-if="loading"> ..loading</template>
        <template v-else>Проверить код</template>
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
