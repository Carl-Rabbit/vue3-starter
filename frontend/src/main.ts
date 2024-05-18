import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import them as ElMessage bug
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
