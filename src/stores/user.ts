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
    showUsers: (state) => console.log(state.userBank),
  },
  actions: {
    addPerson(user: {
      email: string;
      firstname: string;
      lastname: string;
      password: string;
    }) {
      this.userBank.push(user);
    },

    authUser(email: string, password: string) {
      //check if email& password matches
      for (const user in this.userBank) {
        console.log(this.userBank[user].email);
        if (
          email === this.userBank[user].email &&
          password === this.userBank[user].password
        ) {
          alert("Log in successfull");
          return;
        }
      }

      alert("username or password did not match");
    },
  },
  persist: true,
});
