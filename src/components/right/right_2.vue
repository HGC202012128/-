<template>
  <div class="right_2">
    <el-card>
      <div slot="header" class="clearfix">
        <span class="card_head">FAQ</span>
      </div>
      <div class="question">
        <p><a href="tiaozhuan.html" class="usual">常见问题</a></p>
        <p><a href="tiaozhuan.html" class="now_usu">近期常见问题</a></p>
        <p class="now_usu1">
          <a href="tiaozhuan.html">自主招生</a><span>|</span>
          <a href="tiaozhuan.html">保送生</a><span>|</span>
          <a href="tiaozhuan.html">特长生</a>
        </p>
        <p class="now_usu2">
          <a href="tiaozhuan.html">港澳台侨</a><span>|</span>
          <a href="tiaozhuan.html">普通高考</a>
        </p>
        <p class="now_usu3"><a href="tiaozhuan.html">更多</a></p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "right_2",
};
</script>

<style scoped>
.right_2{
  float: left;
  display: block;
  width: 100%;
  height: 300px;
  }
.el-card{
 height: 300px;
 background-color: #33cccc;
}
.question {
    height: 100%;
    width: 100%;
    overflow: auto;
    margin-left: 35px;
}
.usual {
    color: white;
    width: 100%;
    font-size: 17px;
}
.usual:hover,
.now_usu:hover,
.now_usu1>a:hover,
.now_usu2>a:hover,
.now_usu3>a {
    text-decoration: underline;
}
.usual,
.now_usu,
.now_usu1>a,
.now_usu2>a,
.now_usu3>a {
    text-decoration: none;
}

.now_usu {
    font-size: 18px;
    font-weight: normal;
    color: white;
    line-height: 20px;
    font-size: 17px;
}

.now_usu1 {
    line-height: 20px;
    font-size: 16px;
    color: white;
}

p.now_usu1>a {
    color: white;
    font-size: 17px;
}

.now_usu2 {
    line-height: 20px;
    font-size: 16px;
    color: white;
}

p.now_usu2>span ,.now_usu3>span,.now_usu1>span{
    margin-right: 15px;
    margin-left: 15px;
}

p.now_usu2>a {
    color: white;
    font-size: 17px;
}

p.now_usu3 {
    line-height: 20px;
    font-size: 16px;
    color: white;
}

p.now_usu3>a {
    color: white;
    font-size: 17px;
}
.el-card ::v-deep .el-card__header {
  background-color: #33cccc;
  color:#555b72;
  font-weight:700
}
.el-card ::v-deep .el-card__body {
  padding: 0px;
  background-color: #33cccc;
}

</style>