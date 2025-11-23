<script>
export default {
  mounted() {

  },
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  computed:{
    doubleCounter(){
      console.log('doubleCounter computed...');
      return this.counter * 2;
    },
    computedNow(){
      return new Date(Date.now()).toLocaleString('ko-KR');
    },
    computedNow1(){
      return new Date(Date.now()).toLocaleString('ko-KR') + "+ 0(상수)";
    },
    computedNow2(){
      return new Date(Date.now()).toLocaleString('ko-KR') + "+ "+ this.counter +"(반응형변수)";
    },
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    doubleCounterMethod(){
      console.log('doubleCounter method...');
      return this.counter * 2;
    },
    addCounter2() {
      this.counter2++;
    },
  },
};
</script>

<template>
  <header>
    <div>computed test page..</div>


    <hr></hr>

    <div> counter : {{ counter }}</div>
    <div> doubleCounter(computed) : {{ doubleCounter }}</div>
    <div> doubleCounter(method) : {{ doubleCounterMethod() }} </div>
    <div>
      <button @click="addCounter">addCounter</button>
    </div>

    <hr></hr>

    <div> addCounter2 버튼 클릭 시 doubleCounter(method)는 computed와 다르게 계속 호출됨 </div>
    <div> counter2 : {{ counter2 }}</div>
    <div>
      <button @click="addCounter2">addCounter2</button>
    </div>

    <hr></hr>

    <div> computedNow : {{ computedNow }}</div>
    <div> computedNow1 : {{ computedNow1 }}</div>
    <div> computedNow2 : {{ computedNow2 }}</div>



  </header>
</template>

<style scoped></style>
