import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from "vue-i18n";
import I18nMessages from "./locale";

Vue.config.productionTip = false
Vue.use(VueI18n);

// seting VueI18n
const i18n=new VueI18n({
  locale: 'en',
  messages:I18nMessages
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
