import App from "@/App.vue";
import { createApp } from "vue";
import router from "@/routes";
// import { createPinia } from "pinia";

createApp(App).use(router).mount("#app");
