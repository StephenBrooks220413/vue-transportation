import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as mdb from "mdb-ui-kit";

createApp(App)
  .use(store)
  .use(router)
  .use(mdb)
  .mount("#app");
