import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)

registerPlugins(app)

app.use(router).use(store).mount('#app')
