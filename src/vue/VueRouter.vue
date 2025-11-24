<template>
  <h1>Hello App!</h1>
  <p>
    <strong>현재 라우트 경로:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <div>
      <RouterLink to="/life-cycle">lifecycle 테스트 페이지</RouterLink>
    </div>
    <div>
      <RouterLink to="/life-cycle2">lifecycle 테스트 페이지2</RouterLink>
    </div>
    <div>
      <RouterLink to="/computed">computed 테스트 페이지</RouterLink>
    </div>
    <div>
      <RouterLink to="/template-ref">template ref 테스트 페이지</RouterLink>
    </div>
    
  </nav>
  <main class="main-content">
    <RouterView />
  </main>
</template>
<script>
export default{
  mounted(){
  },
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>
<style>
/* RouterView 영역 */
.main-content {
  flex: 1;
  padding: 20px;
  margin: 10px;
  border: 2px dashed #888; /* 테두리로 영역 확인 */
  border-radius: 8px;
  background-color: #fafafa;
  width:100%;
  height: 100%;
}
</style>