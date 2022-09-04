<template>
  <div>
    <el-carousel class="lunbo"  :height="500 +'px'">
      <el-carousel-item v-for="item in imgwrap" :key="item.url">
        <img :src="item.url" class="bannerimg"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "HeadLunbo",
    data() {
      return {
        imgwrap: [
          {url:require("../assets/img/pic1.png")},
          {url:require("../assets/img/pic2.jpg")},
          {url:require("../assets/img/pic3.jpg")},
          {url:require("../assets/img/pic4.jpg")},
          {url:require("../assets/img/pic5.jpg")},
        ],
      };
    },
}
</script>

<style scoped>
  .lunbo{
    margin-top: 1%;
    margin-bottom: 1%;
    width: 100vw;
  }
  .bannerimg{
    width: 100vw;
    object-fit: cover;
    height: 100%;
  }
</style>