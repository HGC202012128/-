<template>
  <div class="middle_2">
    <el-card>
      <div slot="header">
        <span class="card_head">报考必读</span>
      </div>
      <div v-for="policy in policys" :key="policy.id" class="policy">
        <el-link :href="policy.url">
          {{policy.title}}
        </el-link>
      </div>
      <a href="#"><img src="../../assets/img/go.png" class="go_png"></a>
    </el-card>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name:'middle_2',
  data(){
    return {
      policys:[
        {id:nanoid(),title:'填报志愿：远见与想象力',url:'http://www.baidu.com'},
        {id:nanoid(),title:'报志愿要首选学校，次选专业',url:'http://www.baidu.com'},
        {id:nanoid(),title:'校园开放日（政策发布）',url:'http://www.baidu.com'},
        {id:nanoid(),title:'更多...',url:'http://www.baidu.com'},
      ]
    }
  }
}
</script>

<style scoped>
  .middle_2{
    float: left;
    display: block;
    width: 100%;
    height: 300px;
  }
  .el-card{
    height: 300px;
    background-color: #f9f9f9;
  }
  .go_png{
    float:right;
    bottom: -10px;
  }
  .policy{
    text-align: center;
    position: relative;
    bottom: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>