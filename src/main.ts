import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Vue from 'vue' // in Vue 3
//引入接口地址
import { dizhi } from '../public/dizhi'
//vue-quill富文本
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.core.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
// element
import elementPlus from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//封装axios
import { Request } from './utils/request'
import VueAxios from 'vue-axios'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.config.globalProperties.$httpUrl = dizhi
app.use(VueAxios, Request.init())

app.use(router) 
app.use(elementPlus)
app.component('QuillEditor', QuillEditor)
app.mount('#app')
