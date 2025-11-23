<template>
  <h1>Hello App!</h1>

  <nav>
    <div>
      <button @click="current = 'LifeCyclePage'">lifecycle 테스트 페이지</button>
    </div>
    <div>
      <button @click="current = 'LifeCyclePage2'">lifecycle 테스트 페이지2</button>
    </div>
  </nav>

  <main class="main-content">
    <component :is="currentComponent" />
  </main>
</template>

<script>
// 정상적으로 import
import LifeCyclePage from './LifeCycle.vue'
import LifeCyclePage2 from './LifeCycle2.vue'

export default {
  data() {
    return {
      current: null, // 현재 표시할 컴포넌트 이름
      componentsMap: {
        LifeCyclePage,
        LifeCyclePage2,
      }
    }
  },
  computed: {
    currentComponent() {
      return this.componentsMap[this.current] || null
    }
  }
}
</script>

<style>
.main-content {
  flex: 1;
  padding: 20px;
  margin: 10px;
  border: 2px dashed #888;
  border-radius: 8px;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
}
</style>
