import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './router/permission';
import store from './store'
import axios from './http';
import VueI18n from "vue-i18n";
import I18nMessages from "./locale";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { DEFAULT_LANG, LANG } from './type/constants';

Vue.config.productionTip = false;
Vue.prototype.$http=axios;
Vue.use(VueI18n);
Vue.use(Antd);

// init VueI18n
const i18n=new VueI18n({
  locale: window.localStorage.getItem(LANG)?window.localStorage.getItem(LANG):DEFAULT_LANG,
  messages:I18nMessages
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
