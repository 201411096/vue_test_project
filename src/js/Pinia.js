// import "/src/assets/main.css";

import { createApp } from "vue";
import App from "/src/vue/Pinia.vue";
import { createPinia } from "pinia";
//import { usePiniaStore } from "./piniaStore";

// createApp(pinia).mount("#app");

const app = createApp(App);
app.use(createPinia());
app.mount("#app");