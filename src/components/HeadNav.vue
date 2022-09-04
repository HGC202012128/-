<template>
  <div class="nav_menu">
    <a href="http://www.baidu.com"  class="head_img"><img src="../assets/img/head_img.jpg" alt="岗大招生"></a>
    <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
    >
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">招生信息</template>
      <el-menu-item index="2-1">招生公告</el-menu-item>
      <el-menu-item index="2-2">招生新闻</el-menu-item>
      <el-menu-item index="2-3">招生时间表</el-menu-item>
      <el-menu-item index="2-3">历年招生计划</el-menu-item>
      <el-menu-item index="2-3">历史分数线</el-menu-item>
      <el-menu-item index="2-3">报考必读</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">网上报名</el-menu-item>
    <el-menu-item index="4">学科专业</el-menu-item>
    <el-menu-item index="5">走进岗大</el-menu-item>
    <el-submenu index="6">
      <template slot="title">奖助学金</template>
      <el-menu-item index="6-1">招生公告</el-menu-item>
      <el-menu-item index="6-2">招生新闻</el-menu-item>
      <el-menu-item index="6-3">招生时间表</el-menu-item>
      <el-menu-item index="6-3">历年招生计划</el-menu-item>
      <el-menu-item index="6-3">历史分数线</el-menu-item>
      <el-menu-item index="6-3">报考必读</el-menu-item>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">来访信息</template>
      <el-menu-item index="7-1">开放日</el-menu-item>
      <el-menu-item index="7-2">团队来访</el-menu-item>
      <el-menu-item index="7-3">个人来访</el-menu-item>
      <el-menu-item index="7-4">地图</el-menu-item>
      <el-menu-item index="7-5">联系我们</el-menu-item>
    </el-submenu>
    <el-menu-item index="8">医学部</el-menu-item>
  </el-menu>
</div>
</template>

<script>
  export default {
    name: "HeadNav",
    data() {
      return {
        activeIndex: "1",
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style>
  .head_img{
    display: block;
    height: 100%;
  }
  img{
    text-align: center;
    height: 100%;
  }
  .nav_menu{
    clear:both;
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center;
  }
  .el-menu.el-menu--horizontal{
    margin-left: 1%;
    margin-bottom: 1%;
    border-bottom: none;
  }
  .el-menu-item,.el-submenu__title{
    font-size:17px;
    font-weight: 500;
    color:black;
  }
  .navmenu{
    display: inline-block;
    vertical-align:middle
  }
</style>