import { defineStore } from "pinia";

export const useCounterStore = defineStore("main", {
  state: () => ({ counter: 0, name: "undertaker" }),
  getters: {
    doubleCount: (state) => {
      state.counter * 2;
    },
  },

  actions: {
    reset() {
      this.counter = 0;
    },

    addOne() {
      this.counter++;
      console.log(this.name);
    },
  },
});
