import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import Toast, { POSITION } from 'vue-toastification';

import 'vue-toastification/dist/index.css';

/* add icons to the library */
library.add(faCartPlus)

const options = {
    // opções de configuração
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
};


const app = createApp(App)

app.use(router)
app.use(Toast, options);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
