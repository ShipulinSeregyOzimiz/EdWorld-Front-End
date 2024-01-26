<script setup>
import { ref } from "vue";
import RegistrationForm from "../components/RegistrationForm.vue";
import { useAuthUserStore } from "@/stores/authUser";
import { registerUser } from "@/api/modules/auth/requests/";
import { errorNotify } from "@/common/utils/notifications";

const authUserStore = useAuthUserStore();

const loading = ref(false);

const handleSubmit = async ({ name, phone, password }) => {
  loading.value = true;

  try {
    const response = await registerUser(name, phone, password);

    // Вернуть данные в map формате
    const dto = {
      fullName: response?.user?.name,
      roleId: response?.user?.role_id,
      token: response?.token,
    };

    authUserStore.setUser(dto);
  } catch (err) {
    errorNotify("Произошла ошибка. Проверьте данные");
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <registration-form @on-submit="handleSubmit" :loading="loading" />
</template>

<style scoped></style>
