<script>
export default {
  created(){
    console.log('this.$refs.input1(created)  : ', this.$refs.input1);
    console.log('this.input2(created) : ', this.input2);
  },
  // mounted 이후에 사용 가능
  mounted() {
    console.log('this.$refs.input1(mounted) : ', this.$refs.input1);
    console.log('this.input2(mounted) : ', this.input2);
  },
  data() {
    return {
      text1: 0,
      text2: 0,
      input2 : null,
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
    <div>Template Ref test page..</div>

    <hr></hr>
    <input v-model="text1" ref="input1">
    text1 : {{ text1 }}
    <hr></hr>
    <input v-model="text2" :ref="(el) => { this.input2 = el }" />
    text2 : {{ text2 }}
  </header>
</template>

<style scoped></style>
