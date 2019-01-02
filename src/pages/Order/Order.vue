<template>
  <section class="order">
    <!--订单头部-->
    <HeaderTop title="订单列表"></HeaderTop>

    <!--订单中心-->
    <section class="order_no_login">
      <img src="./image/person.png">
      <h3>登陆查看订单</h3>
      <button>立即登陆</button>
    </section>

  </section>
</template>

<script>
  // 导入并映射HeaderTop组件
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    name: "Order",
    components: { HeaderTop},
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*使用自己的stylus需要导入*/
  @import "../../common/stylus/mixins.styl"
  .order
    width 100%
    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 40%
        margin-left 50%
        transform translate(-50%)
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
        margin-top 20px
      >button
        display inline-block
        background #02a774
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px



</style>
