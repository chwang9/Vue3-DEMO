import { createApp } from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import '@/router/permission'
import store from './store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'

const app = createApp(App)
SvgIcon(app)
app.use(store).use(router).use(ElementPlus).mount('#app')
