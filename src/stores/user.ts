import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    // fulluser: {email: as string, password: string}
    fulluser: [{ email: "admin@admin.admin", password: "admin123" }],
    users: ["Johncena"],
  }),
  getters: {
    userCount: (state) => state.users.length,
  },
  actions: {
    addUser() {
      this.users.push("kane");
      console.log(this.users);
    },

    addPerson(user: { email: string; password: string }) {
      this.fulluser.push(user);
      console.log(this.fulluser);
    },
  },
});
