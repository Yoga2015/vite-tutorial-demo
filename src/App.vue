<template>
  <!-- vue3.x中，<template> 中支持定义多个根节点-->
  <div id="app-container">
    <h1>这是 APP组件 属于 {{ username }}</h1>
    <h3>count的值 :{{ count }}</h3>
    <button @click="addCount"> +1 </button>
    <button @click="subCount"> -1 </button>
    <hr>
    <!-- v-bind 单向绑定 数据驱动视图 -->
    <Article :articleTitle="info.title" :articleAuthor="info.author"></Article>
    <!-- v-model 双向绑定 响应式数据 -->
    <input type="text" v-model="tips">

  </div>
</template>

<script>
// 导入 Article组件 ，将来 局部注册
import Article from './components/Article.vue';
export default {
  // name 节点 指向的是 当前组件的名称 （建议：每个单词的首字母大写）
  name: 'MyApp',
  // data 节点：组件的数据（data 方法中 return 出去的对象，就是当前组件渲染期间需要用到的数据对象）
  data() {
    return {
      username: 'lisi',
      tips: '请输入内容',
      count: 0,
      info: {
        title: 'abc',
        author: 'walking'
      }
    }
  },
  // 组件中的事件处理函数，必须定义到 methods 节点中，
  methods: {
    addCount() {
      this.count++;
    },
    subCount() {
      this.count--;
    }
  },
  // components 节点：局部注册
  components: {
    Article,
  }
}
</script>

<style lang="less" scoped >
#app-container {
  background-color: bisque;

  /deep/ h3 {
    background-color: aqua;
  }
}
</style>