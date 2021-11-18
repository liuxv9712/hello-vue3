import { createStore } from "vuex";

//引入Demo
import Demo from './modules/demo.js'

//创建一个新的store实例
const store = createStore({
    modules: {
        Demo
    }
})

//导出
export default store