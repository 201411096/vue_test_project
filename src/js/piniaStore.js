import { defineStore } from "pinia";

export const usePiniaStore = defineStore("piniaStore", {
  // state = data
  state: () => {
    return { count: 0 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })

  // getters = computed
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },

  // actionds = methods
  // getters와 다르게 비동기일 수 있으며, await 사용 가능
  actions: {
    increment() {
      this.count++;
    },
  },
});
