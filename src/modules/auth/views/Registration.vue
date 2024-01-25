<script setup>
import { ref } from "vue";
import RegistrationForm from "../components/RegistrationForm.vue";
import { useAuthUserStore } from "@/stores/authUser";
import { registerUser } from "@/api/modules/auth/requests/";

const authUserStore = useAuthUserStore();

const loading = ref(false);

const handleSubmit = async ({ name, phone, password }) => {
  loading.value = true;

  try {
    const response = await registerUser(name, phone, password);

    const dto = {
      fullName: response?.user?.name,
      roleId: response?.user?.role_id,
      token: response?.token,
    };

    authUserStore.setUser(dto);
  } catch (err) {
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <registration-form @on-submit="handleSubmit" :loading="loading" />
</template>

<style scoped></style>
