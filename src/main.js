// 1、从 vue 中按需导入 createApp 函数
//  createApp 函数的作用：创建 vue 的'单页面应用程序实例'
import { createApp } from 'vue';

// 2、导入 待渲染的App组件
import App from './App.vue';

// 5、 Home组件 将 全局注册
import Home from './components/HOME.vue'

// 3、调用 createApp() 函数 来 创建 SPA应用的实例
//    调用 createApp() 函数，返回值 是 '单页面应用程序实例'，用常量 app进行接收 
const app = createApp(App);   // 同时 App组件 作为参数传给 createApp()函数，表示 要把 App组件 渲染到 index.html页面上

// 6、调用 component()方法 全局注册
app.component('my-home', Home)

// 4、调用 app 实例的 mount方法，用来指定 vue 实例要控制的区域
app.mount('#app');