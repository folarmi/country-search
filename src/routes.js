import home from './components/Home.vue';
import country from './components/Country.vue';

export default[
    { path:'/', component:home},
    { path: '/country/:country', component:country}
]


