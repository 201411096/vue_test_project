export default {
  beforeCreate() {
    console.log("lifecycle-mixin01 beforeCreate");
  },
  created() {
    console.log("lifecycle-mixin01 created ...");
  },
  beforeMount() {
    console.log("lifecycle-mixin01 beforeMount ...");
  },
  mounted() {
    console.log("lifecycle-mixin01 mounted ...");
  },
  beforeUpdate() {
    console.log("lifecycle-mixin01 beforeUpdate ...");
  },
  updated() {
    console.log("lifecycle-mixin01 updated ...");
  },
  beforeUnmount() {
    console.log("lifecycle-mixin01 beforeUnmount ...");
  },
  unmounted() {
    console.log("lifecycle-mixin01 unmounted ...");
  },
  data() {
    return {
      counter: 1,
      mixInCounter01: 11,
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    addMixinCounter01() {
      this.counter++;
      this.mixInCounter01++;
    },
  },
};
