
import HomePage from './pages/home.vue';

import aktivitat_durchfuhren from './pages/content/aktivitat_durchfuhren';
import aktivitat_planen from './pages/content/aktivitat_planen';
import auswertung from './pages/content/auswertung';
import elternkontakt from './pages/content/elternkontakt';
import hock from './pages/content/hock';
import quartalsprogram from './pages/content/quartalsprogram';
import sicherheit from './pages/content/sicherheit';

export default [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/aktivitat_planen',
        component: aktivitat_planen
    },
    {
        path: '/aktivitat_durchfuhren',
        component: aktivitat_durchfuhren
    },
    {
        path: '/auswertung',
        component: auswertung
    },
    {
        path: '/elternkontakt',
        component: elternkontakt
    },
    {
        path: '/hock',
        component: hock
    },
    {
        path: '/quartalsprogram',
        component: quartalsprogram
    },
    {
        path: '/sicherheit',
        component: sicherheit
    }
]