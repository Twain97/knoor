import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard, faCartShopping, faCircleChevronDown, faEye, faGreaterThan, faHeadset, faHeart, faHouse, faLock, faRotate,
     faSearch, faShuffle, faTruckFast, faUser, faUserSecret, faX, faBars, faStar  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import Button from "primevue/button"
import 'primeicons/primeicons.css'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faUserSecret, faEye, faUser, faSearch,faBars,
    faHeart, faShuffle, faCartShopping, faX, faTruckFast,
    faRotate, faLock, faHeadset, faHouse, faCircleChevronDown,
    faAddressCard, faStar, faInstagram, faTwitter, faWhatsapp, faFacebook)
const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue)   
app.use(ToastService)
app.component('Toast', Toast)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Button', Button);
app.mount('#app')
