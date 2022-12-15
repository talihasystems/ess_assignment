import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import axios from "axios";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast, {
  position: 'bottom',
  duration: 3000,
  dismissible: true
});

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


const firebaseConfig = {
  apiKey: "AIzaSyBv1S38C7hYhhKCBxeOEu9-i4sxIqpGGCg",
  authDomain: "ess-systems.firebaseapp.com",
  projectId: "ess-systems",
  storageBucket: "ess-systems.appspot.com",
  messagingSenderId: "381252804881",
  appId: "1:381252804881:web:4514e6637943212b24ecb0",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
