import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("authUser", {
  state: () => ({
    fullName: localStorage.getItem("fullName") || "",
    roleId: localStorage.getItem("roleId") || null,
    token: localStorage.getItem("token") || "",
  }),
  getters: {
    fullUserDetails(state) {
      return {
        ...state,
      };

      // alternative if other modules are still in Vuex
      // return {
      //   ...state,
      //   fullName: this.fullName,
      //   ...vuexStore.state.auth.preferences,
      //   ...vuexStore.getters['auth/email'].details
      // }
    },
  },
  actions: {
    setUser(payload) {
      this.fullName = payload.fullName;
      this.roleId = payload.roleId;
      this.token = payload.token;

      this.setLocalStorage("fullName", this.fullName);
      this.setLocalStorage("roleId", String(this.roleId));
      this.setLocalStorage("token", this.token);
    },

    setLocalStorage(key, value) {
      localStorage.setItem(key, value);
    },
  },
});
