import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user",
  state: () => ({
    username: "",
    password: "",
    id: 2,
  }),
  getters: {
    doSomething: (state) => (state.username = "newUsername"),
  },
  actions: {
    changeId() {
      this.id += 12900;
    },
  },
});
