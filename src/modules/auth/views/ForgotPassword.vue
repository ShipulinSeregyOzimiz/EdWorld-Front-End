<template>
  <div>
    <component :is="currentStepComponent" @on-submit="handleSubmit" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ForgotPasswordForm from "../components/ForgotPasswordForm.vue";
import ForgotPasswordPinCodeForm from "@/modules/auth/components/ForgotPasswordPinCodeForm.vue";
import ForgotPasswordResetForm from "@/modules/auth/components/ForgotPasswordResetForm.vue";
import ForgotPasswordNewForm from "@/modules/auth/components/ForgotPasswordNewForm.vue";

const step = ref(1);

const handleSubmit = (lStep) => {
  if (lStep) {
    step.value = lStep;
  }
};

const currentStepComponent = computed(() => {
  switch (step.value) {
    case 1:
      return ForgotPasswordForm;
    case 2:
      return ForgotPasswordPinCodeForm;
    case 3:
      return ForgotPasswordResetForm;
    case 4:
      return ForgotPasswordNewForm;
    default:
      return null;
  }
});
</script>
