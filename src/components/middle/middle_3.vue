<template>
  <div class="middle_3">
    <el-card>
      <div slot="header">
        <span class="card_head">资料下载</span>
      </div>
      <div v-for="ziliao in ziliaos" :key="ziliao.id" class="ziliao">
        <el-link :href="ziliao.url">
          {{ziliao.title}}
        </el-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name:'middle_3',
  data(){
    return {
      ziliaos:[
        {id:nanoid(),title:'2022年招生简章暨报考指南',url:'http://www.baidu.com'},
        {id:nanoid(),title:'2021年招生简章暨报考指南',url:'http://www.baidu.com'},
        {id:nanoid(),title:'2020年招生简章暨报考指南',url:'http://www.baidu.com'},
        {id:nanoid(),title:'更多...',url:'http://www.baidu.com'},
      ]
    }
  }
}
</script>

<style scoped>
  .middle_3{
    float: left;
    display: block;
    width: 100%;
    height: 250px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .el-card{
    height: 240px;
    background-color: #fc5474;
  }
  .go_png{
    float:right;
    bottom: -10px;
  }
  .ziliao{
    text-align: center;
    position: relative;
    bottom: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .el-link,.card_head{
    color: white;
  }
  .card_head{
    font-size: 20px;
    font-weight: 400;
  }
</style>