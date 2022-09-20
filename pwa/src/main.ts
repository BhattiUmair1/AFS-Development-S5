import { App as VueApp, createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import router from './bootstrap/router'
import useAuthentication from './composables/useAuthentication'


// console.log(import.meta.env)
(async () => {
    const app: VueApp = createApp(App)
    const { restoreUser } = useAuthentication()
    await restoreUser()
    app.use(router)
    app.mount('#app')
})()
