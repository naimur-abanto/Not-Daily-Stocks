import { defineStore } from "pinia";
import router from "@/routes";

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
          router.push("/");
          return;
        }
      }
      this.messageLogin = "Username / Password incorrect";
    },

    editInfo() {
      this.currentUser.firstname = "I" + this.currentUser.firstname;
      this.currentUser.lastname = "Y" + this.currentUser.lastname;
    },

    logOut() {
      this.currentUser.email = "";
      this.currentUser.password = "";
      this.currentUser.firstname = "";
      this.currentUser.lastname = "";
      this.isLogged = false;
      router.push("/");
    },
  },
  persist: true,
});
