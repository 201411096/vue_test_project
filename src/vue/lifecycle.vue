<script>
import LifecycleChild01 from "./lifecycle-child01.vue";
import LifecycleChild02 from "./lifecycle-child02.vue";

export default {
  components: {
    LifecycleChild01,
    LifecycleChild02,
  },
  beforeCreate() {
    console.log("lifecycle beforeCreate");
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
};
</script>

<template>
  <header>
    <div>lifecycle test page..</div>
    <LifecycleChild01></LifecycleChild01>
    <LifecycleChild02></LifecycleChild02>
  </header>
</template>

<style scoped></style>
