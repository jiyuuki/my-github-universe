import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './assets/tailwind.css'

const app = createApp(App)

const emitter = mitt()
app.provide('emitter', emitter)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
