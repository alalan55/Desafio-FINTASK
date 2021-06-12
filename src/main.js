import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'semantic-ui-css/semantic.min.css'

import '@/styles/style.css'


createApp(App)
.use(store)
.mount('#app')
