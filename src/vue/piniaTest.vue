<script>
import { usePiniaStore } from "/src/js/piniaStore.js";
import PiniaTestChild01 from "./piniaTest-child01.vue";

export default {
  components: {PiniaTestChild01},
  setup(){
    return{
      piniaStore:usePiniaStore()
    };
  },
  mounted(){
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    addStoreCounter(){
      this.piniaStore.increment();
    }
  },
};
</script>

<template>
  <header>
    <div>piniaStore test page..</div>

    <div>
      <span>counter : </span>
      <span id="counter">{{ counter }} </span>
    </div>
    <div>
      <button @click="addCounter">addCounter</button>
    </div>

    <hr></hr>

    <div>
      <span>piniacounter : </span>
      <span id="piniaCounter">{{ this.piniaStore.count }} </span>
    </div>
    <div>
      <button @click="addStoreCounter">addStoreCounter</button>
    </div>

    <PiniaTestChild01></PiniaTestChild01>
    
  </header>
</template>

<style scoped></style>
