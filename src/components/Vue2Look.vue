 <!-- 1.Vue3不要求必须有一个div根元素包裹组件，支持多个根节点了 -->
 <template>
     <div class='form-element'>
         <h2> {{ title }} </h2>
         <el-button type="primary">ElButton</el-button>
         <input type='text' v-model='username' placeholder='Username' />

         <input type='password' v-model='password' placeholder='Password' />

         <button @click='login'>
             Submit
         </button>
         <p>
             Values: {{ username + ' ' + password }}
         </p>
     </div>
 </template>
 <!-- 2.分割式定义 -->
 <script>
     export default {
         // 7.1 接收组件props参数传递
         props: {
             title: String
         },
         // 3. Vue2的data VS Vue3中的反应数据是保存在一个反应状态变量中，所以我们需要访问这个反应状态变量来获取数据值
         data() {
             return {
                 username: '',
                 password: ''
             }
         },
         // 5. Vue2的生命周期钩子 VS　Vue3中生命周期钩子不再是全局可调用的了，需从Vue中引入，和刚刚引入reactive一样。
         mounted() {
             // 7.Vue2用this.XXX VS Vue3中setup(props,context){}的两个参数，props接收不可变的组件参数，context接收Vue3暴露出来的属性，像emit\slots\attrs
             console.log('title: ' + this.title)
         },
         // 6. Vue的计算属性 VS Vue3中使用计算属性也需要从Vue中引入，使用时和反应数据一样，在state中加入一个计算属性
         computed: {
             lowerCaseUsername() {
                 return this.username.toLowerCase()
             }
         },
         // 4. Vue2的methods VS Vue3中需要先声明一个方法然后在setup()方法中返回，这样我们就可以在组件内调用这个方法了。
         methods: {
             login() {
                 // 8. Vue2事件用this.$emit('事件名',{参数名:参数值,}) VS Vue3在setup()的第二个参数中使用对象解构的方法取出{emit},就可以随意使用了
                 this.$emit('login', {
                     username: this.username,
                     password: this.password
                 })
             }
         }
     }
 </script>
 <style scoped>
 </style>