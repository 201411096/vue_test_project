<script>
import LifecycleChild01Child01 from "./lifecycle-child01-child01.vue";

export default {
  components: {
    LifecycleChild01Child01,
  },
  beforeCreate() {
    console.log("lifecycle child01 beforeCreate");
  },
  created() {
    console.log("lifecycle child01 created ...");
  },
  beforeMount() {
    console.log("lifecycle child01 beforeMount ...");
  },
  mounted() {
    console.log("lifecycle child01 mounted ...");
  },
  beforeUpdate() {
    console.log("lifecycle child01 beforeUpdate ...");
  },
  updated() {
    console.log("lifecycle child01 updated ...");
  },
  beforeUnmount() {
    console.log("lifecycle child01 beforeUnmount ...");
  },
  unmounted() {
    console.log("lifecycle child01 unmounted ...");
  },
};
</script>

<template>
  <header>
    <div>lifecycle child01</div>

    <LifecycleChild01Child01></LifecycleChild01Child01>
  </header>
</template>

<style scoped></style>
