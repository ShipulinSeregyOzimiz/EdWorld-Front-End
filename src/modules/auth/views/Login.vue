<script setup>
import { ref } from "vue";
import LoginForm from "@/modules/auth/components/LoginForm.vue";
import { useAuthUserStore } from "@/stores/authUser";
import { loginUser } from "@/api/modules/auth/requests/";

const authUserStore = useAuthUserStore();

const loading = ref(false);

const handleSubmit = async ({ name, phone, password }) => {
  loading.value = true;

  try {
    const response = await loginUser(name, phone, password);

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
  <LoginForm @on-submit="handleSubmit" :loading="loading" />
</template>

<style scoped></style>
