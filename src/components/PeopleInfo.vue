<template>
  <div>
    <img :src="info[this.peopleIndex].img_url" class="people_img">
    <div class="people_intro">
      <a href="#" class="people_link">
        <h3>{{info[this.peopleIndex].name}}</h3>
        <p>{{info[this.peopleIndex].introduction}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  export default {
    name:'PeopleInfo',
    props:['peopleIndex'],
    data(){
      return {
        info:[
          {id:nanoid(),name:'张三',introduction:'1995级心理学系本科生，现任中山大学岭南学院管理学教授',img_url:require('../assets/people/people1.jpg')},
          {id:nanoid(),name:'李四',introduction:'1996级机械系系本科生，卡塞尔学院进修',img_url:require('../assets/people/people2.jpg')},
          {id:nanoid(),name:'王麻子',introduction:'1997级工程系本科生，地月电梯工程总负责人',img_url:require('../assets/people/people3.jpg')},
          {id:nanoid(),name:'牛二',introduction:'1998级黑魔法系本科生，现任霍克沃兹魔导师',img_url:require('../assets/people/people4.jpg')},
        ]
      }
    },
    methods:{
      return_length(){
        this.$emit('get_info_length',this.info.length)
      }
    },
    mounted(){
      this.return_length()
    }
  }
</script>

<style scoped>
  .people_img{
    width: 30%;
    margin-left: 5%;
  }
  .people_intro{
    float: right;
    width: 50%;
    margin-right: 5%;
  }
  .people_link{
    text-decoration: none;
    color: black;
  }
  .people_link>h3{
    font-weight: 400;
  }
</style>