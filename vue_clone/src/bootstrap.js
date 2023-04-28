import { createApp } from 'vue'   //引用vue类库
import App from './app.vue'
import './assets/main.css'
export const mount = (el, data = {}) => {
    createApp(App, data).mount(el)
}
