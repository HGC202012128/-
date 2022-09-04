<template>
  <div class="right_3">
    <el-card>
      <el-carousel class="news_body" indicator-position="outside"  :height="200 +'px'" arrow="never" >
        <el-carousel-item v-for="(project,index) in projects" :key="index">
          <div class="project">
            <div class="pic_div">
              <img :src="project.pic" class="pic">
              <a href="#"> {{project.title}}</a>
            </div>
            <br>
          </div>
        </el-carousel-item>
      </el-carousel>
      <img src="../../assets/img/go.png" class="go">
    </el-card>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  export default {
    name:'right_3',
    data(){
      return{
        projects:
        [
          {id:nanoid(),pic:require("../../assets/img/project/dushu.png"),title:'在北大就这样读书'},
          {id:nanoid(),pic:require("../../assets/img/project/gongxue.png"),title:'北大学科，工学篇'},
          {id:nanoid(),pic:require("../../assets/img/project/huaxue.png"),title:'北大学科，化学篇'},
          {id:nanoid(),pic:require("../../assets/img/project/zhanfang.png"),title:'你的大学，绽放'},
          {id:nanoid(),pic:require("../../assets/img/project/zhexue.png"),title:'北大学科，哲学篇'},
        ]
      }
    }
  }
</script>

<style scoped>
  .right_3{
    float: left;
    display: block;
    width: 100%;
    height: 250px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 3%;
  }
  .el-card{
    height: 240px;
    background-color: #f9f9f9;
  }
  .pic{
    width: 50%;
    float: left;
  }
  .project{
    width: 100%;
    height: 100%;
  }
  .pic_div{
    display: flex;
    align-items: center;
    text-align: left;
    position: relative;
    top: 10%;
  }
  .pic_div>a{
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: black;
  }


</style>