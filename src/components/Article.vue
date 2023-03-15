<template>
  <div id="Article-container">
    <h3>Article组件</h3>
    <p>文章标题：{{ articleTitle }}</p>
    <p>文章作者：{{ articleAuthor }}</p>
    <Count></Count>
  </div>
</template>

<script>
import Count from './Count.vue';
export default {
  name: 'MyArticle',
  components: {
    Count
  },
  props: {
    articleTitle: {
      type: String,
      default: '',
      required: true
    },
    articleAuthor: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
#Article-container {
  width: 300px;
  height: 300px;
  background-color: pink;
}
</style>

