<script>
import { usePiniaStore } from "/src/js/piniaStore.js";

export default {
  components: {},
  setup() {
    return {
      piniaStore: usePiniaStore(),
    };
  },
  mounted() {},
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    addStoreCounter() {
      this.piniaStore.increment();
    },
  },
};
</script>

<template>
  <header>
    <hr></hr>
    <div>
      <span>pinia counter-child01 : </span>
      <span id="piniaCounter">{{ this.piniaStore.count }} </span>
    </div>
    <div>
      <span>pinia doublecounter-child01 : </span>
      <span id="piniaCounter">{{ this.piniaStore.doubleCount }} </span>
    </div>
    <div>
      <button @click="addStoreCounter">addStoreCounter</button>
    </div>
  </header>
</template>

<style scoped></style>
