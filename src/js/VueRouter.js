import { createApp } from "vue";
import App from "/src/vue/VueRouter.vue";
import { router } from "/src/js/router.js"
// npm install vue-router@4

const app = createApp(App);

// 플러그인 추가

app.use(router);


app.mount("#app");
