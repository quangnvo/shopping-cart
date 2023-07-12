import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppModal from "./components/AppModal.vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faCartShopping, faTrash, faDownLong, faUpLong } from '@fortawesome/free-solid-svg-icons'
import { DatePicker } from "ant-design-vue";

library.add(faXmark, faCartShopping, faTrash, faDownLong, faUpLong)

const app = createApp(App)

app.use(DatePicker);
app.component("app-modal", AppModal)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')











