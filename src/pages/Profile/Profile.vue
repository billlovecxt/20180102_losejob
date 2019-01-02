<template>
  <section class="profile">
    <!--个人头部-->
    <HeaderTop title="个人中心"></HeaderTop>

    <!--个人中心-->
    <section class="profile-number">
      <!-- 利用router-link实现到Login组件的跳转 -->
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登陆/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>

    </section>

  </section>
</template>

<script>
  // 导入并映射HeaderTop组件
  import HeaderTop from '../../components/HeaderTop/HeaderTop'

  export default {
    name: "Profile",
    components: {HeaderTop},
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*使用自己的stylus需要导入*/
  @import "../../common/stylus/mixins.styl"
  .profile
    width 100%
    overflow hidden
    .profile-number
      margin-top 45.5px
      .profile-link
        clearFix()
        position relative
        display block
        background #02a774
        padding 20px 10px
        .profile_image
          float left
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          margin-left 25px
          .icon-person
            background #e4e4e4
            font-size 62px
        .user-info
          float left
          margin-left 30px
          p
            font-weight: 700
            font-size 18px
            color #fff
            &.user-info-top
              padding-bottom 8px
            .user-icon
              display inline-block
              margin-left -15px
              margin-right 5px
              width 20px
              height 20px
              .icon-mobile
                font-size 30px
                vertical-align text-top
            .icon-mobile-number
              font-size 14px
              color #fff
        .arrow
          width 12px
          height 12px
          position absolute
          right 15px
          top 40%
          .icon-jiantou1
            color #fff
            font-size 5px

</style>
