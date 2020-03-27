<template>
  <div id="app">
    <!-- 路由展示 -->
    <div>
      <router-view />
    </div>
    <!-- 底部导航-->
    <div class="nav-bottom">
      <router-link to = "/home">
        <i class="icon iconfont"></i>
        <label>首页</label>
      </router-link>
      <router-link to = "/top">
        <i class="icon iconfont"></i>
        <label>发现</label>
      </router-link>
      <label>首页</label>
      <label>首页</label>

    </div>
  </div>
</template>


<!-- scoped 是私有的，别的不能应用-->
<style scoped> 
@import './assets/css/index.css'

.active{
  color:#red;
}
</style> 
