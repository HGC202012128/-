<template>
  <div class="head_search">
    <el-link class="connect" href="http://www.baidu.com/" target="_blank">联系我们</el-link>
    <el-link class="about" href="http://www.baidu.com/" target="_blank">关于我们</el-link>
    <el-form id="search_form">
      <el-form-item id="search_item">
        <el-input placeholder="请输入内容" id="test3" v-model="input">
          <el-button slot="append">搜索</el-button>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "HeadSearch",
    data() {
      return {
        input: "",
      };
    },
  };
</script>

<style scoped>
  .head_search {
    margin-top: 1%;
    float: right;
    width: 100%;
  }
  #search_form,
  #search_item{
    border: none;
    float: right;
    margin-right: 1%;
  }
  .connect,.about{
    height: 40px;
    line-height: 40px;
    padding-left: 2%;
    padding-right: 2%;
    float: right;
  }
</style>