import Vue from 'vue'
import Router from 'vue-router'
//导入组件
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(Router)

export default new Router({
  //所有路由（数组）
  routes: [
    //主页路由
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    //订单路由
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    //用户路由
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    //搜索路由
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    //使用默认路由引导
    {
      path:'/',
      redirect: '/msite'
    },
    //登陆页面路由
    {
      path:'/login',
      component: Login
    }
  ]
})
