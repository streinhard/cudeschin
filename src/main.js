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

import aktivitat_durchfuhren from './components/aktivitat_durchfuhren';
import aktivitat_planen from './components/aktivitat_planen';
import auswertung from './components/auswertung';
import elternkontakt from './components/elternkontakt';
import hock from './components/hock';
import quartalsprogram from './components/quartalsprogram';
import sicherheit from './components/sicherheit';

Vue.component('aktivitat-durchfuhren', aktivitat_durchfuhren);
Vue.component('aktivitat-planen', aktivitat_planen);
Vue.component('auswertung', auswertung);
Vue.component('elternkontakt', elternkontakt);
Vue.component('hock', hock);
Vue.component('quartalsprogram', quartalsprogram);
Vue.component('sicherheit', sicherheit);

new Vue({
  render: h => h(App),
  components: {
    app: App
  }
}).$mount("#app");
