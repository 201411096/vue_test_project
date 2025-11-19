<script>
import LifecycleChild01 from "./lifecycle-child01.vue";
import LifecycleChild02 from "./lifecycle-child02.vue";
import lifecycleMixin01 from "@/js/lifecycle-mixin01";
import lifecycleMixin02 from "@/js/lifecycle-mixin02";

export default {
  components: {
    LifecycleChild01,
    LifecycleChild02,
  },
  setup(){
    console.log("lifecycle setup ...");
  },
  mixins:[
    lifecycleMixin01, lifecycleMixin02
  ],
  beforeCreate() {
    console.log("lifecycle beforeCreate ...");
  },
  created() {
    console.log("lifecycle created ...");
  },
  beforeMount() {
    console.log("lifecycle beforeMount ...");
  },
  mounted() {
    console.log("lifecycle mounted ...");
  },
  beforeUpdate() {
    console.log("lifecycle beforeUpdate ...");
  },
  updated() {
    console.log("lifecycle updated ...");
  },
  beforeUnmount() {
    console.log("lifecycle beforeUnmount ...");
  },
  unmounted() {
    console.log("lifecycle unmounted ...");
  },
  data() {
    return {
      counter: 0,
      showFg_child01:true
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    toggle_child01(){
      this.showFg_child01 = !this.showFg_child01;
    }
  },
};
</script>

<template>
  <header>
    <div>lifecycle test page..</div>
    <LifecycleChild01 v-if="showFg_child01"></LifecycleChild01>
    <LifecycleChild02></LifecycleChild02>

    <div>
      <label></label>
      <button @click="toggle_child01">toggle_child01</button>
    </div>

    <hr></hr>

    <div> page counter : {{ counter }}</div>
    <div>
      <button @click="addCounter">addCounter</button>
    </div>

    <hr></hr>
    <div> mixin01 counter : {{ mixInCounter01 }}</div>
    <div>
      <label>lifecycle-mixin01 에서 병합된 함수</label>
      <button @click="addMixinCounter01">addMixinCounter01</button>
    </div>

    <hr></hr>
    <div> mixin02 counter : {{ mixInCounter02 }}</div>
    <div>
      <label>lifecycle-mixin02 에서 병합된 함수</label>
      <button @click="addMixinCounter02">addMixinCounter02</button>
    </div>

    <div> child01 counter : {{ child01Counter }}</div>

  </header>
</template>

<style scoped></style>
