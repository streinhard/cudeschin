import Vue from 'vue';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import 'framework7/css/framework7.bundle.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

Framework7.use(Framework7Vue);

import 'framework7-icons';
import './css/main.scss';

import App from './app.vue';

import article_cards from './components/article-cards';
import article_list from './components/article-list';

Vue.component('article-cards', article_cards);
Vue.component('article-list', article_list);

new Vue({
  render: h => h(App),
  components: {
    app: App
  }
}).$mount("#app");
