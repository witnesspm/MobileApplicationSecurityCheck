import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// element
import elementPlus from './plugins/element-plus'


const app=createApp(App)

app.use(router)
app.use(elementPlus)
app.mount('#app')
