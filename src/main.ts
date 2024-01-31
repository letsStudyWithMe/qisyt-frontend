import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
// 引入vue-router
import router from '@/router'
// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.component('HospitalTop', HospitalTop) // 注册全局组件顶部
app.component('HospitalBottom', HospitalBottom) // 注册全局组件底部
app.use(router)
app.use(ElementPlus)
app.mount('#app')