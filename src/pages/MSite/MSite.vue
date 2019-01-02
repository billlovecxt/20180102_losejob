<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop title="石岐区龙腾路9号">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>

      <span class="header_login" slot="right">
        <span class="header_login_text">登陆|注册</span>
      </span>
    </HeaderTop>

    <!--首页导航-->
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <!--swiper滑块包裹-->
        <div class="swiper-wrapper">
          <!--不同的滑块页面-->
          <div class="swiper-slide">
            <!--饮品图片-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/1.png">
              </div>
              <span>甜品饮品</span>
            </a>
            <!--超市便利-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/2.png">
              </div>
              <span>超市便利</span>
            </a>
            <!--美食-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/3.png">
              </div>
              <span>美食</span>
            </a>
            <!--简餐-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/4.png">
              </div>
              <span>简餐</span>
            </a>
            <!--新品特惠-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/5.png">
              </div>
              <span>新品特惠</span>
            </a>
            <!--准时达-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/6.png">
              </div>
              <span>准时达</span>
            </a>
            <!--预定早餐-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/7.png">
              </div>
              <span>预定早餐</span>
            </a>
            <!--土豪推荐-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/8.png">
              </div>
              <span>土豪推荐</span>
            </a>

          </div>
          <div class="swiper-slide">
            <!--甜品推荐-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/9.png">
              </div>
              <span>甜品推荐</span>
            </a>
            <!--超市便利-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/10.png">
              </div>
              <span>甜品推荐</span>
            </a>
            <!--美食推荐-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/11.png">
              </div>
              <span>美食推荐</span>
            </a>
            <!--快餐-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/12.png">
              </div>
              <span>快餐</span>
            </a>
            <!--日式寿司-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/13.png">
              </div>
              <span>日式寿司</span>
            </a>
            <!--水果生鲜-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/14.png">
              </div>
              <span>水果生鲜</span>
            </a>
            <!--面点-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/15.png">
              </div>
              <span>面点</span>
            </a>
            <!--买不起-->
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./image/nav/16.png">
              </div>
              <span>买不起</span>
            </a>
          </div>
        </div>
        <!--swiper分页器-->
        <div class="swiper-pagination swiper-pagination-bullets-dynamic"></div>
      </div>

    </nav>
    <!--商家信息-->
    <!--标题：附近商家-->
    <div class="msite_shop_list border-1px" >
      <!--商家列表头部-->
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <!--插入商家列表-->
      <ShopList/>
    </div>

  </section>
</template>

<script>
  // 导入swiper库
  import Swiper from 'swiper'
  //导入swiper的样式文件
  import 'swiper/dist/css/swiper.min.css'

  // 导入并映射HeaderTop组件
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    name: "MSite",
    components: {HeaderTop,ShopList},
    mounted() {
      //创建一个Swiper实例对象，来实现轮播
      new Swiper('.swiper-container',{
        // loop: true,  //可以循环
        //分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    height 100%
    .msite_nav
      margin-top 45px
      bottom-border-1px(#e4e4e4)
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          margin-top 5px
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          //让点下移5px
          bottom 5px
          >span.swiper-pagination-bullet-active
            background #02a774
          //改变样式使得大小不一，详情见swiper文档
          &.swiper-pagination-bullets-dynamic
            width 100%
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 1px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px


</style>
