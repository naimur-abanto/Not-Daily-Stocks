import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: [{ email: "", password: "" }],
  }),
  getters: {
    userCount: (state) => state.user.length,
  },
  actions: {
    receieve(data: any) {
      this.user.push(data);
    },
  },
});
