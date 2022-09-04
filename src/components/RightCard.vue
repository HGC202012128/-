<template>
  <div class="right">
    <right_1/>
    <right_2/>
    <right_3/>
  </div>
</template>

<script>
  import right_1 from './right/right_1.vue'
  import right_2 from './right/right_2.vue'
  import right_3 from './right/right_3.vue'
  export default {
    name:'RightCard',
    components:{right_1,right_2,right_3}
  }
</script>

<style>
  .right{
    float: left;
    width: 20%;
    margin-left: 1.5%;
  }
</style>