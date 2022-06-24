import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

//引入接口地址
import {dizhi} from '../public/dizhi'
//vue-quill富文本
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// element
import elementPlus from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.config.globalProperties.$httpUrl = dizhi
app.use(elementPlus)
axios.defaults.baseURL = dizhi;
app.use(VueAxios, axios)
app.component('QuillEditor', QuillEditor)
app.mount('#app')
