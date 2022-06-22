import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user",
  state: () => ({
    user: [{ email: "", password: "" }],
  }),
  getters: {
    userCount: (state) => state.user.length,
  },
});
