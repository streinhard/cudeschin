import Vue from 'vue';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import 'framework7/css/framework7.bundle.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

Framework7.use(Framework7Vue);

import './css/fonts.css';
import './css/main.scss';

import App from './app.vue';

import article_cards from './components/article-cards';

Vue.component('article-cards', article_cards);

new Vue({
  render: h => h(App),
  components: {
    app: App
  }
}).$mount("#app");
