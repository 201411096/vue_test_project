<script>
import { nextTick } from "vue";

export default {
  components: {},
  data() {
    return {
      counter: 0,
      showFg_content01:false,
      showFg_content02:false,
    };
  },
  methods: {
    async addCounter() {
      this.counter++;
      console.log("counter : ", document.getElementById("counter").textContent);
      await nextTick();
      console.log("counter after nextTick() : ", document.getElementById("counter").textContent);
      console.log("--------------------------------------------------------------------------------");
    },

    async toggleConent01(){
      console.log('this.$refs.content01 : ', this.$refs.content01);
      this.showFg_content01 = !this.showFg_content01;
      await nextTick();
      console.log('this.$refs.content01 after nextTick() : ', this.$refs.content01);
      console.log("--------------------------------------------------------------------------------");
    },

    async toggleConent02(){
      console.log('this.$refs.content02 : ', this.$refs.content02);
      this.showFg_content02 = !this.showFg_content02;
      await nextTick();
      console.log('this.$refs.content02 after nextTick() : ', this.$refs.content02);
      console.log("--------------------------------------------------------------------------------");
    }
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

    <hr></hr>

    <div>
      <button @click="toggleConent01">toggleConent01</button>
    </div>
    <div v-if="showFg_content01" ref="content01">
      content01 ( v-if를 사용한 숨김 처리)
      <span></span>
    </div>

    <hr></hr>

    <div>
      <button @click="toggleConent02">toggleConent02</button>
    </div>
    <div v-show="showFg_content02" ref="content02">
      content02 ( v-show를 사용한 숨김 처리 )
      <span></span>
    </div>

    
  </header>
</template>

<style scoped></style>
