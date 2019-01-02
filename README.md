# bill02

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



笔记
  1.props传递的是数据
  2.slot传递的是标签（父级占用块）
  3.@click="$router.back()"点击事件：路由返回上一级
  4.<FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    $route代表当前路由!
    在路由表中添加meta对象（默认就有），v-show可以选择是否显示
