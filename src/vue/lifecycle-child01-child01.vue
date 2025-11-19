<script>
export default {
  beforeCreate() {
    console.log("lifecycle child01 child01 beforeCreate");
  },
  created() {
    console.log("lifecycle child01 child01 created ...");
  },
  beforeMount() {
    console.log("lifecycle child01 child01 beforeMount ...");
  },
  mounted() {
    console.log("lifecycle child01 child01 mounted ...");
  },
  beforeUpdate() {
    console.log("lifecycle child01 child01 beforeUpdate ...");
  },
  updated() {
    console.log("lifecycle child01 child01 updated ...");
  },
  beforeUnmount() {
    console.log("lifecycle child01 child01 beforeUnmount ...");
  },
  unmounted() {
    console.log("lifecycle child01 child01 unmounted ...");
  },
};
</script>

<template>
  <header>
    <div>lifecycle child01 child01..</div>
  </header>
</template>

<style scoped></style>
