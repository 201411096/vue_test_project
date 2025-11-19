<script>
import { nextTick } from "vue";

export default {
  components: {},
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    async addCounter() {
      this.counter++;
      console.log("counter : ", document.getElementById("counter").textContent);
      await nextTick();
      console.log(
        "counter after nextTick() : ",
        document.getElementById("counter").textContent
      );
      console.log(
        "--------------------------------------------------------------------------------"
      );
    },
  },
};
</script>

<template>
  <header>
    <div>nextTick test page..</div>

    <div>
      <span>counter : </span>
      <span id="counter">{{ counter }} </span>
    </div>
    <div>
      <button @click="addCounter">addCounter</button>
    </div>
  </header>
</template>

<style scoped></style>
