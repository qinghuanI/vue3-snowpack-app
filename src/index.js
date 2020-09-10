import { createApp } from "vue";
import store from "stores/index.js";
import router from "routes/index.js";

import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}
