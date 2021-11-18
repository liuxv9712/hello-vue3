import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 按需引入element-plus
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//引入路径
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        // 设置路径别名
        alias: {
            '@': path.resolve(__dirname,'src')
        }
    },
    plugins: [
        vue(),
        // 按需引入element-plus
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ]
})
