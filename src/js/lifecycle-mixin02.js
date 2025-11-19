export default {
  beforeCreate() {
    console.log("lifecycle-mixin02 beforeCreate");
  },
  created() {
    console.log("lifecycle-mixin02 created ...");
  },
  beforeMount() {
    console.log("lifecycle-mixin02 beforeMount ...");
  },
  mounted() {
    console.log("lifecycle-mixin02 mounted ...");
  },
  beforeUpdate() {
    console.log("lifecycle-mixin02 beforeUpdate ...");
  },
  updated() {
    console.log("lifecycle-mixin02 updated ...");
  },
  beforeUnmount() {
    console.log("lifecycle-mixin02 beforeUnmount ...");
  },
  unmounted() {
    console.log("lifecycle-mixin02 unmounted ...");
  },
  data() {
    return {
      counter: 2,
      mixInCounter02: 22,
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    addMixinCounter02() {
      this.counter++;
      this.mixInCounter01++;
      this.mixInCounter02++;
    },
  },
};
