<template>
  <el-card>
    <div class="ziliao">
      <div class="ziliao_top"><a href="tiaozhuan.html">资料下载</a></div>
      <p class="pic_ziliao">资料下载</p>
      <ul class="ziliao_bott">
        <li v-for="(data, index) in tableData" :key="index" class="ziliao_item">
          <a href="#">
            {{ data.item1 }}
          </a>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a href="#">{{ data.item2 }}</a>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "middle_1",
  data() {
    return {
      tableData: [
        {
          item1: "保送生",
          item2: "自主招生",
        },
        {
          item1: "高水平运动队",
          item2: "逐梦计划",
        },
        {
          item1: "高水平艺术团",
          item2: "博雅计划",
        },
        {
          item1: "港澳台侨",
          item2: "留学生",
        },
      ],
      imgSrc: require("../../assets/img/xinxi.jpg"),
    };
  },
};
</script>

<style scoped>
.el-card{
  background-color: #00a8e1;
  height: 250px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.ziliao {
  margin-top: -30px;
  float: left;
  width: 250px;
  height:250px;
  text-align: center;
  overflow: auto;
  background-image: url("../../assets/img/xinxi.jpg");
  background-repeat: no-repeat;
  background-position: center;
}
.ziliao_top,
.ziliao_bott {
  display: none;
}
.ziliao:hover > .ziliao_top,
.ziliao:hover > .ziliao_bott {
  display: inline-block;
}
.ziliao:hover > .pic_ziliao {
  display: none;
}
.ziliao:hover {
  background-image: none;
  background-color: #00a8e1;
}
.pic_ziliao {
  font-size: 28px;
  color: white;
  display: inline-block;
  text-align: center;
  position: relative;
  bottom: -125px;
}
div.ziliao_top {
  height: 50px;
  width: 120px;
  color: white;
  display: none;
  text-align: center;
  position: relative;
  top: 25px;
}

.ziliao_top > a {
  font-size: 24px;
  color: white;
  text-decoration: none;
}
.ziliao_bott > li > a:hover {
  text-decoration: underline;
}
.ziliao_bott > li {
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  left: -20px;
}
.ziliao_bott > li > a {
  color: white;
  text-decoration: none;
}
.ziliao_bott>li{
  list-style: none;
}
.ziliao_bott>span{
  color: aliceblue;
}
</style>