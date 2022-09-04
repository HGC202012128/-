<template>
  <div class="people">
    <el-card class="box-card">
      <div slot="header">
        <span class="card_head">岗大人寄语</span>
        <div class="people_head">
          {{xulie+1}}/{{xulie_length}}
          <button @click="inc" style="margin-left:8px;margin-right:8px"><i class="el-icon-caret-left"></i></button>
          <button @click="dec" style="margin-left:8px;margin-right:8px"><i class="el-icon-caret-right"></i></button>
        </div>
      </div>
      <PeopleInfo :peopleIndex="this.xulie" @get_info_length="get_length"/>
    </el-card>
  </div>
</template>

<script>
  import PeopleInfo from '../components/PeopleInfo.vue';
  export default {
    name:'PeopleIntro',
    components:{PeopleInfo},
    data(){
      return {
        xulie:0,
        xulie_length:0,
      }
    },
    methods:{
      get_length(length){
        this.xulie_length=length
      },
      dec(){
        if(this.xulie<this.xulie_length-1){
          this.xulie++;
        }
        else{
          this.xulie=0
        }
      },
      inc(){
        if(this.xulie>0){
          this.xulie--;
        }
        else{
          this.xulie=this.xulie_length-1
        }
      }
    },
  }
</script>

<style scoped>
  .people{
    height: 240px;
  }
  .el-card{
    background-color: #e7e8ea;
    float: left;
  }
  .box-card {
    width: 500px;
  }
  .people_head{
    display: inline;
    float: right;
  }
</style>