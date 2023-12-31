import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard, faCartShopping, faCircleChevronDown, faEye, faHeadset, faHeart, faHouse, faLock, faRotate,
     faSearch, faShuffle, faTruckFast, faUser, faUserSecret, faX, faBars, faStar, faRightFromBracket, faPersonWalkingDashedLineArrowRight,
     faHandshake, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";
import Button from "primevue/button"
import Avatar from 'primevue/avatar';
import 'primeicons/primeicons.css'
import Toast from 'primevue/toast'
import Rating from 'primevue/rating'
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice'
import AnimateOnScroll from 'primevue/animateonscroll'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faEye, faUser, faSearch,faBars,
    faHeart, faShuffle, faCartShopping, faX, faTruckFast,
    faRotate, faLock, faHeadset, faHouse, faCircleChevronDown,
    faAddressCard, faStar, faInstagram, faTwitter, faWhatsapp, faFacebook,
    faTrashCan, faRightFromBracket, faTruckFast, faPersonWalkingDashedLineArrowRight,
    faHandshake, faEyeSlash, faCheck)
const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);   
app.use(ToastService);
app.use(ElementPlus)
app.directive('animateonscroll', AnimateOnScroll)
app.component('Toast', Toast);
app.component('Rating', Rating);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Button', Button);
app.component('Avatar', Avatar);
app.component('InputText', InputText);
app.mount('#app');
