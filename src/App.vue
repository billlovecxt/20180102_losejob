<template>
  <div id="app">
    <!--路由首页-->
    <router-view></router-view>
    <!--页脚-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  // 导入页脚组件
import FooterGuide from "./components/FooterGuide/FooterGuide";

export default {
  name: 'App',
  components: {FooterGuide}
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
