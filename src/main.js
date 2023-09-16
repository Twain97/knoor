import './assets/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faEye, faHeadset, faHeart, faHouse, faLock, faRotate,
     faSearch, faShuffle, faTruckFast, faUser, faUserSecret, faX,  } from '@fortawesome/free-solid-svg-icons'
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

library.add(faUserSecret, faEye, faUser, faSearch,
    faHeart, faShuffle, faCartShopping, faX, faTruckFast,
    faRotate, faLock, faHeadset, faHouse )
const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue)   
app.use(ToastService)
app.component('Toast', Toast)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Button', Button);
app.mount('#app')
