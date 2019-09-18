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

import aktivitat_durchfuhren from './articles/aktivitat_durchfuhren';
import aktivitat_planen from './articles/aktivitat_planen';
import auswertung from './articles/auswertung';
import elternkontakt from './articles/elternkontakt';
import hock from './articles/hock';
import quartalsprogram from './articles/quartalsprogram';
import sicherheit from './articles/sicherheit';
import article_cards from './components/article-cards';

Vue.component('aktivitat-durchfuhren', aktivitat_durchfuhren);
Vue.component('aktivitat-planen', aktivitat_planen);
Vue.component('auswertung', auswertung);
Vue.component('elternkontakt', elternkontakt);
Vue.component('hock', hock);
Vue.component('quartalsprogram', quartalsprogram);
Vue.component('sicherheit', sicherheit);
Vue.component('article-cards', article_cards);

new Vue({
  render: h => h(App),
  components: {
    app: App
  }
}).$mount("#app");
