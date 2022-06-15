import '../styles/element/index.scss'
import ElementPlus from 'element-plus';
import { App } from 'vue';

export default{
    install(app:App){
        app.use(ElementPlus)
    }
}