<template>
  <div class="right_1">
    <el-card>
      <div class="message">
        <h2>信息公开专栏</h2>
        <ul class="xinxi">
            <li><a href="tiaozhuan.html">招生章程</a></li>
            <li>
              <a href="tiaozhuan.html">历年录取分数线</a><span><strong>|</strong></span><a href="tiaozhuan.html">名单公示</a>
            </li>
            <li><a href="tiaozhuan.html">历年招生计划</a></li>
            <li>
              <a href="tiaozhuan.html">招生名单</a><span><strong>|</strong></span>
              <a href="tiaozhuan.html">2030年录取查询</a></li>
            <li><a href="tiaozhuan.html">通知书查询</a></li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name:'right_1',
  }
</script>

<style scoped>
  .right_1{
    width: 100%;
    height: 250px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .el-card{
    width: 100%;
    height: 100%;
  }
  .message>h2
  {
    float: left;
    margin-left: 20px;
    display: block;
    color: #004e72;
    font-weight: 16px;
  }
  .message>ul>li{
    list-style: none;
    height: 25px;
  }
  .xinxi{
    display: block;
    float: left;
    padding: 0px;
    position: relative;
    right: -20px;
    bottom: 10px;
  }
  .message>ul>li>a
  {
    text-decoration: none;
    color: black;
  }
  .message>ul>li>span
  {
    margin-left: 10px;
    margin-right: 10px;
  }
  .message>ul>li>a:hover {
      text-decoration: underline;
  }
  div.message{
      display: inline-flexbox;
      width: 100%;
      overflow: auto;
  }
  .el-card{
    background-image: url(../../assets/img/nc.png);
    background-size: cover;
    width: 100%;
  }
</style>