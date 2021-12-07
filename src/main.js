import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

const emitter = mitt()
const app = createApp(App)

app.provide('emitter', emitter)

app.use(store)
app.use(router)

app.use(ElementPlus)

app.mount('#app')
