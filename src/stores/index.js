import { createStore } from "vuex";

import CountStore from "./CountStore";

const store = createStore({
  modules: {
    CountStore,
  },
});

export default store;
