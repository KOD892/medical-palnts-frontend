import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import { createStore } from "vuex";
import store from "./store";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const app = createApp(App);

// // Create a new store instance.
// const store = createStore({
//   state() {
//     return {
//       isAuth: false,
//     };
//   },
//   mutations: {
//     setAuthentication(state, status) {
//       state.isAuth = status;
//     },
//   },
// });
app.use(store);
app.use(router);
app.mount("#app");
