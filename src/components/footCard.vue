<template>
  <div class="foot">
    <h2><img src="../assets/img/footlogo.png" alt="footlogo" /></h2>
    <div class="foot_text">
      <p>
        电话: 010-123456789|监督电话（纪委办公室）: 010-123456789 | 地址:
        王岗大学中南海20层 |<a href="#"> 更多联系方式</a>
      </p>
      <p>CopyRight2030 王岗大学招生办公室 | 豫ICP备12345678号-8</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footCard",
};
</script>

<style scoped>
  div.foot_text>p>a:hover {
    text-decoration: underline;
}
  div.foot_text>p>a{
    text-decoration: none;
  }
div.foot {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    margin: auto;
}

div.foot_text {
    margin-left: 30px;
}
</style>