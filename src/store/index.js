import { createStore } from "vuex";

export default createStore({
  state: {
    isAuth: false,
  },
  getters: {},
  mutations: {
    setAuthentication(state, status) {
      state.isAuth = status;
    },
  },
  actions: {},
  modules: {},
});
