import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GlobalComponent from './Components/GlobalComponent.vue'
const app = createApp(App)
app.component('ComponentA',GlobalComponent)
app.use(router)

app.mount('#app')
