<template>
  <section class="search">
    <!--搜索头部-->
    <HeaderTop title="搜索">

    </HeaderTop>

    <!--搜索内容-->
    <form class="search_form" action="#">
      <input type="search" name="search" class="search_input" placeholder="请输入商家或者名称">
      <input type="submit" name="submit" class="search_submit">
    </form>
  </section>
</template>

<script>
  // 导入并映射HeaderTop组件
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    name: "Search",
    components: {HeaderTop},
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*使用自己的stylus需要导入*/
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      height 35px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774



</style>
