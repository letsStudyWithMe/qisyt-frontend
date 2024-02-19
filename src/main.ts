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
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入pinia仓库
import pinia  from '@/store'
const app = createApp(App);
app.component('HospitalTop', HospitalTop) // 注册全局组件顶部
app.component('HospitalBottom', HospitalBottom) // 注册全局组件底部
app.use(router)
app.use(ElementPlus,{
    locale:zhCn,
})
app.use(pinia)
app.mount('#app')