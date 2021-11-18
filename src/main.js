// 1.按需导入createApp函数
import { createApp } from 'vue'
// 2.引入待渲染的根组件
import App from './App.vue'
// 5.1引入路由配置
import router from './router'
// 6.1引入Vuex配置
import store from './store'

// 3.通过Vue.createApp(根组件)来创建创建SPA应用的实例
// 4.调用mount()将应用挂载到DOM元素上
// 5.2使用路由
createApp(App).use(router).use(store).mount('#app')
