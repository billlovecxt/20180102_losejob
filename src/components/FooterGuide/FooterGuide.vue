<template>
  <div class="footer_guide">
    <!--首页按钮-->
    <!--使用判断类名是否等于路由路径-->
    <!--使用v-on：click触发事件-->
    <a href="javascript:;" class="guide_item" :class="{on: '/msite'===$route.path}" @click="GoTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <!--搜索按钮-->
    <a href="javascript:;" class="guide_item" :class="{on: '/search'===$route.path}" @click="GoTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <!--订单按钮-->
    <a href="javascript:;" class="guide_item" :class="{on: '/order'===$route.path}" @click="GoTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <!--用户按钮-->
    <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="GoTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods: {
      GoTo(path){
        // 1.$router.push({path:'home'});本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录
        //   $router.replace({path:'home'});替换路由，没有历史记录
        // 2.route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等
        // console.log(this.$router)
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*使用自己的stylus需要导入*/
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #0060ff
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px

</style>
