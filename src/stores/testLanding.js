import { defineStore } from "pinia";
import { createUserTest } from "@/api/modules/landing/requests/createUserTest";

export const useTestLandingStore = defineStore("testLanding", {
  state: () => {
    return {
      testId: "",
    };
  },

  actions: {
    async getTestId(testId) {
      try {
        const response = await createUserTest(testId);
        this.testId = response?.data?.test_id;
      } catch (err) {}
    },
  },
});
