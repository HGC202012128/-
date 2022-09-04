<template>
  <div id="app">
    <HeadSearch/>
    <HeadNav/>
    <HeadLunbo/>
    <div class="main_body">
      <LeftCard/>
      <MiddleCard/>
      <RightCard/>
    </div>
    <youqing_link/>
    <footCard/>
  </div>
</template>

<script>
  import HeadSearch from "./components/HeadSearch";
  import HeadNav from "./components/HeadNav";
  import HeadLunbo from './components/HeadLunbo.vue'
  import LeftCard from './components/LeftCard.vue'
  import MiddleCard from './components/MiddleCard.vue'
  import RightCard from './components/RightCard.vue'
  import youqing_link from './components/youqing_link.vue'
  import footCard from './components/footCard.vue'
  export default {
    name: "App",
    components: {HeadSearch,HeadNav,HeadLunbo,LeftCard,MiddleCard,RightCard,youqing_link,footCard},
  };
</script>

<style>
  body{
    margin: 0;
    width: 100%;
    overflow-x:hidden
  }
  .card_head{
     color:#555b72;
     font-weight:700
  }
  .main_body{
    width: 100%;
    height: 100%;
    float: left;
    margin-left: 13%;
    margin-top: 2%;
  }
  .LeftCard,.MiddleCard,.RightCard {
    float: left;
}
</style>
