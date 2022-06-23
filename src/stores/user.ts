import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    userBank: [
      {
        email: "admin@admin.admin",
        firstname: "admin",
        lastname: "admin",
        password: "admin123",
      },
    ],
  }),
  getters: {
    userCount: (state) => state.userBank.length,
  },
  actions: {
    addPerson(user: {
      email: string;
      firstname: string;
      lastname: string;
      password: string;
    }) {
      this.userBank.push(user);
      console.log(this.userBank.length);
    },
  },
});
