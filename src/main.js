import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
//import $axios from './services/service'
import 'semantic-ui-css/semantic.min.css'

import '@/styles/style.css'


createApp(App)
.use(store)
// .use($axios)
.mount('#app')
