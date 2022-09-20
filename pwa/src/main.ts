import { App as VueApp, createApp } from 'vue'
import App from './App.vue'
// import '@unocss/tailwind.css'
import 'uno.css'
import router from './bootstrap/router'

const app: VueApp = createApp(App)
app.use(router)
app.mount('#app')
