// vue
import { createApp } from 'vue'
import App from './App.vue'
// plugins
import { createPinia } from 'pinia'
import router from './router'
// css
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
app.use(pinia)
app.use(router)
app.mount('#app')
