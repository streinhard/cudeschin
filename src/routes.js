
import HomePage from './pages/home/home.vue';

import aktivitat_durchfuhren from './content/aktivitat_durchfuhren';
import aktivitat_planen from './content/aktivitat_planen';
import auswertung from './content/auswertung';
import elternkontakt from './content/elternkontakt';
import hock from './content/hock';
import quartalsprogram from './content/quartalsprogram';
import sicherheit from './content/sicherheit';

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