<script>
    import Vue3Look from './components/Vue3Look.vue'
    import Vue2Look from './components/Vue2Look.vue'

    // 10. Vue3用provide()和inject()实现嵌套组件之间的数据传递。这两个函数只能在setup()中使用。
    // 父组件使用provide()函数向下传递数据，子组件使用inject()函数获取上层传递过来的数据
    // 10.1 按需引入provide
    import { provide } from 'vue'

    export default {
        name: 'App',
        // 组件注册的地方
        components: {
            Vue3Look,
            Vue2Look
        },
        setup() {
            // 10.2 App 根组件作为父级组件，通过 provide 函数向子级组件共享数据（不限层级）
            // provide('要共享的数据名称', 被共享的数据)
            provide('globalColor', 'red');
            provide('title', '好好学习');
        }

    }
</script>

<template>
    <router-view></router-view>
</template>

<style>
    #app {
        text-align: center;
        color: #2c3e50;
    }
</style>