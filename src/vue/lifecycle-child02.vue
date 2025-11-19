<script>
export default {
  setup() {
    console.log("lifecycle child02 setup ...");
  },
  beforeCreate() {
    console.log("lifecycle child02 beforeCreate ...");
  },
  created() {
    console.log("lifecycle child02 created ...");
  },
  beforeMount() {
    console.log("lifecycle child02 beforeMount ...");
  },
  mounted() {
    console.log("lifecycle child02 mounted ...");
  },
  beforeUpdate() {
    console.log("lifecycle child02 beforeUpdate ...");
  },
  updated() {
    console.log("lifecycle child02 updated ...");
  },
  beforeUnmount() {
    console.log("lifecycle child02 beforeUnmount ...");
  },
  unmounted() {
    console.log("lifecycle child02 unmounted ...");
  },
};
</script>

<template>
  <header>
    <div>lifecycle child02</div>
  </header>
</template>

<style scoped></style>
