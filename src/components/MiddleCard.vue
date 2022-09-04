<template>
  <div class="middle_card">
    <middle_1/>
    <middle_2/>
    <middle_3/>
  </div>
</template>

<script>
  import middle_1 from './middle/middle_1.vue'
  import middle_2 from './middle/middle_2.vue'
  import middle_3 from './middle/middle_3.vue'
  export default {
    components: { middle_1, middle_2 ,middle_3},
    name:'MiddleCard',
  }
</script>

<style scoped>
  .middle_card{
    float: left;
    width: 18%;
    margin-left: 1.5%;
  }
</style>