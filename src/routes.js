import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Locatie from './components/Locatie.vue';
import Omgeving from './components/Omgeving.vue';
import Voorzieningen from './components/Voorzieningen.vue'

export const routes = [
    { path: '/home', component: Home },
    { path: '/contact', component: Contact },
    { path: '/locatie', component: Locatie },
    { path: '/omgeving', component: Omgeving },
    { path: '/voorzieningen', component: Voorzieningen },
    { path: '*', redirect:'/home'}]