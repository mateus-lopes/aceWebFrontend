// vue
import { createApp } from 'vue';
import App from './App.vue';
// plugins
import { createPinia } from 'pinia'
import router from './router'
// css
import './assets/main.css'

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.mount('#app');
