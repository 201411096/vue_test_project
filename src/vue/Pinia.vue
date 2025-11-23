<script>
import { usePiniaStore } from "/src/js/piniaStore.js";
import PiniaChild01 from "./PiniaChild01.vue";

export default {
  components: {PiniaChild01},
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
      <span>pinia counter : </span>
      <span id="piniaCounter">{{ this.piniaStore.count }} </span>
    </div>
    <div>
      <span>pinia doublecounter : </span>
      <span id="piniaCounter">{{ this.piniaStore.doubleCount }} </span>
    </div>
    <div>
      <button @click="addStoreCounter">addStoreCounter</button>
    </div>

    <PiniaChild01></PiniaChild01>
    
  </header>
</template>

<style scoped></style>
