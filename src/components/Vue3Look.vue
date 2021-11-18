<script>
    // Vue3 的设计模式给予开发者们按需引入需要使用的依赖包。这样一来就不需要多余的引用导致性能或者打包后太大的问题。Vue2就是有这个一直存在的问题。

    // 3.1 从Vue中引入reactive 5.1 生命周期钩子 6.1 计算属性 9.1 ref响应式对象 10.3 inject
    import { reactive, onMounted, computed, ref, inject } from 'vue'
    export default {
        name: 'NewComponent',
        // 7.1 在props中定义当前组件允许外界传递过来的参数名
        props: {
            title: String
        },
        // 注意：在 setup() 函数中无法访问到this

        // 2.使用setup()方法提供了统一的入口，合成了data、computed、methods、生命周期钩子
        // 7.2 在setup()方法中，声明参数props
        setup(props, { emit }) {
            // 3. Vue2的响应式数据Vue.observable() VS Vue3中的反应数据是保存在一个反应状态变量中，所以我们需要访问这个反应状态变量来获取数据值
            // 3.2 使用reactive()方法来声明我们的数据为反应数据
            const state = reactive({
                username3: '小明',
                password3: '',

                // 6. Vue的计算属性 VS Vue3中使用计算属性也需要从Vue中引入，使用时和反应数据一样，在state中加入一个计算属性
                lowerCaseUsername: computed(() => state.username.toLowercase())
            })
            // 9. ref() 函数用来创建响应式数据对象count，初始值为 0
            const count = ref(0)
            // 4. Vue2的methods VS Vue3中需要先声明一个方法然后在setup()方法中返回，这样我们就可以在组件内调用这个方法了。
            // 4.1 先声明一个方法
            const login = () => {
                //方法处理
                // 8. Vue2事件用this.$emit('事件名',{参数名:参数值,}) VS Vue3在setup()的第二个参数中使用对象解构的方法取出{emit},就可以随意使用了
                emit('login', {
                    username3: state.username3,
                    password3: state.password3
                })
            }
            // 5. Vue2的生命周期钩子 VS　Vue3中生命周期钩子不再是全局可调用的了，需从Vue中引入，和刚刚引入reactive一样。
            // Vue2：beforeCreate created beforeMount mounted beforeUpdate updated beforeDestroy destroyed activated deactivated
            // Vue3：onBeforeMount onMounted onBeforeUpdate onUpdated onBeforeUnmount onUnmounted onActivated onDeactivated
            onMounted(() => {
                console.log('组件已挂载！')
                // 7.Vue2用this.XXX VS Vue3中setup(props,context){}的两个参数，props接收不可变的组件参数，context接收Vue3暴露出来的属性，像emit\slots\attrs\refs
                // 7.3 使用props.XXX
                console.log('title' + props.title)
            })
            // 10.4  调用 inject 函数时，通过指定的数据名称，获取到父级共享的数据
            const themeColor = inject('globalColor')
            const title = inject('title')

            return {
                // 3.3 使用setup()方法来返回我们的反应数据，从而可以在template中获取这些数据
                state,
                // 4.2 返回方法
                login,
                // 10.5 把接收到的共享数据return给Template使用
                themeColor,
                title
            }
        }
    }
    // 总结：vue2与vue3其实概念与理念都是一样的。只是有一些属性获取方式及声明和定义方式稍微变了。使用弹性、按需引入、性能提升、打包体积小
</script>

<template>
    <!-- 1.Vue3不要求必须有一个div根元素包裹组件，支持多个根节点了 -->
    <!-- 3.4 在template中，可以通过state.username和state.password获得数据的值 -->
    <div class='form-element'>

        <!-- 10.6 通过属性绑定，将标签设置为红色 -->
        <h2 :style="{color: themeColor}"> zhe+{{title }} </h2>
        <input type='text' v-model='state.username3' placeholder='Username' />

        <input type='password' v-model='state.password3' placeholder='Password' />

        <button @click='login'>
            Submit
        </button>
        <p>
            Values: {{ state.username3 + ' ' + state.password3 }}
        </p>
    </div>

</template>

<style scoped></style>