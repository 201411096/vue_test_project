<script>
function waitTIme(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time); // 3000ms = 3초
  });
}


export default {
  beforeCreate() {
    console.log("lifecycle beforeCreate ...");
  },
  async created() {
    console.log("lifecycle created ...");
    await waitTIme(3000);
    console.log('wait time in created');
  },
  beforeMount() {
    console.log("lifecycle beforeMount ...");
  },
  async mounted() {
    console.log("lifecycle mounted ...");
    await waitTIme(1000);
    console.log('wait time in mounted');
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
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },

  },
};
</script>

<template>
  <header>
    <div>lifecycle test page2..</div>


    <hr></hr>

    <div> page counter : {{ counter }}</div>
    <div>
      <button @click="addCounter">addCounter</button>
    </div>

  </header>
</template>

<style scoped></style>
