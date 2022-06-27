import { defineStore } from "pinia";
interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    messageLogin: "",
    messageSignup: "",
    isLogged: false,
    userBank: [
      {
        email: "admin@admin.admin",
        firstname: "admin",
        lastname: "admin",
        password: "admin123",
      },
    ],
    currentUser: {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
  }),
  getters: {
    userCount: (state) => state.userBank.length,
    showUsers: (state) => console.log(state.userBank),
    loggedStatus: (state) => state.isLogged,
  },
  actions: {
    addPerson(user: IUser) {
      this.userBank.push(user);
    },

    authUser(email: string, password: string) {
      //check if email& password matches
      for (const user in this.userBank) {
        if (
          email === this.userBank[user].email &&
          password === this.userBank[user].password
        ) {
          this.currentUser.email = this.userBank[user].email;
          this.currentUser.password = this.userBank[user].email;
          this.currentUser.firstname = this.userBank[user].firstname;
          this.currentUser.lastname = this.userBank[user].lastname;
          this.isLogged = true;
          this.messageLogin = "Login Successful";
          return;
        }
      }
      alert("username or password did not match");
    },
  },
  persist: true,
});
