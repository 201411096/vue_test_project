<script>
import LifeCycleChild01 from "../components/LifeCycleChild01.vue";
import LifeCycleChild02 from "../components/LifeCycleChild02.vue";
import lifeCycleMixin01 from "../js/lifeCycleMixin01";
import lifeCycleMixin02 from "../js/lifeCycleMixin02";

export default {
  components: {
    LifeCycleChild01,
    LifeCycleChild02,
  },
  setup(){
    console.log("lifecycle setup ...");
  },
  mixins:[
    lifeCycleMixin01, lifeCycleMixin02
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
    <LifeCycleChild01 v-if="showFg_child01"></LifeCycleChild01>
    <LifeCycleChild02></LifeCycleChild02>

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
