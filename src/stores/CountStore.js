const CountStore = {
  namespaced: true,
  state: {
    num: 2,
  },
  getters: {
    summary(state) {
      return state.num * 3;
    },
  },
  mutations: {
    addCount(state) {
      console.log(3);
      state.num += 2;
    },
  },
  actions: {
    addCount(context) {
      context.commit("addCount");
    },
  },
};

export default CountStore;
