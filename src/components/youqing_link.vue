<template>
  <div class="lianjie">
    <p>
      <span>友情链接:</span><a href="#">岗大</a><span>|</span>
      <a href="#">王岗国际交流</a><span>|</span>
      <a href="#">岗大@Coursera</a><span>|</span>
      <a href="#">岗大@Edx</a><span>|</span>
      <a href="#">岗大学生资助</a><span>|</span>
      <a href="#">岗大就业</a><span>|</span>
      <a href="#">岗大校友网</a><span>|</span>
      <a href="#">岗大研究生招生</a><span>|</span>
      <a href="#">岗大医学部</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "youqing_link",
};
</script>

<style scoped>
  div.lianjie {
    height: 50px;
    width: 100%;
    margin-top: 120px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }

  div.lianjie>p>span {
      margin-left: 12px;
      margin-right: 12px;
  }
  div.lianjie>p>a{
    text-decoration: none;
    color: black;
  }
  div.lianjie>p>a:hover{
      text-decoration: underline;
  }
</style>