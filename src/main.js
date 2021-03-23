import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from "vue-i18n";
import I18nMessages from "./locale";
import { DEFAULT_LANG } from './type/constants';

Vue.config.productionTip = false
Vue.use(VueI18n);

// init VueI18n
const i18n=new VueI18n({
  locale: window.localStorage.getItem('lang')?window.localStorage.getItem('lang'):DEFAULT_LANG,
  messages:I18nMessages
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
