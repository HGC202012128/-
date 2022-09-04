<template>
  <div class="left_card">
    <!-- 上 -->
    <el-card class="box-card1">
      <div slot="header" class="clearfix">
        <span class="card_head">最新公告</span>
        <el-link style="float: right; padding: 3px 0" href="http://www.baidu.com">
          更多...
        </el-link>
      </div>
      <div v-for="news in new_pub" :key="news.id" class="text item">
        <span>
          {{news.time}}
        </span>
        <el-link :href="news.href_link">
          {{news.title}}
        </el-link>
      </div>
    </el-card>
    <!-- 中 -->
    <el-card class="box-card2">
      <div slot="header">
        <span class="card_head">最新公告</span>
        <el-link style="float: right; padding: 3px 0" href="http://www.baidu.com">
          更多...
        </el-link>
      </div>
      <el-carousel class="news_body" indicator-position="outside"  :height="200 +'px'">
        <el-carousel-item v-for="news_page in new_news" :key="news_page[0].id">
          <div class="news_total">
            <div class="news1">
              <img :src="news_page[0].pic" class="news_img">
              <el-link href="#">
                {{news_page[0].title}}
              </el-link>
            </div>
            <br>
            <div class="news2">
              <img :src="news_page[1].pic" class="news_img">
              <el-link href="#">
                {{news_page[1].title}}
              </el-link>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <!-- 下 -->
    <PeopleIntro/>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  import PeopleIntro from '../components/PeopleIntro.vue'
  export default {
    name: "LeftCard",
    components:{PeopleIntro},
    data() {
      return {
        new_pub:[
          {id:nanoid(),time:'08月01日',title:'暑期课堂（光华管理学院）初审结果查询',news_link:'http://www.baidu.com'},
          {id:nanoid(),time:'07月29日',title:'2020年中学生数学科学夏令营初审结果查询',news_link:'http://www.baidu.com'},
          {id:nanoid(),time:'07月24日',title:'强基计划（上海）测试和录取结果查询通知',news_link:'http://www.baidu.com'},
          {id:nanoid(),time:'07月23日',title:'2022年暑期课堂（化学）初审结果查询',news_link:'http://www.baidu.com'},
          {id:nanoid(),time:'07月17日',title:'2022年暑期课堂（国际关系）初审结果查询',news_link:'http://www.baidu.com'},
          {id:nanoid(),time:'07月16日',title:'2022年强基计划（上海）入围结果查询通知',news_link:'http://www.baidu.com'},
        ],
        new_news:
        [
          [
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic1.jpg"),title:'招生简报|顶尖考生选择岗大，河南学子相聚燕园'},
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic2.jpg"),title:'招生简报|岗大在赣招生圆满结束，江右青年才俊圆梦燕园'},
          ],
          [
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic3.jpg"),title:'招生简报|2022年岗大在山西招生录取圆满结束'},
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic4.jpg"),title:'招生简报|理想指引方向，少年扬帆起航'},
          ],
          [
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic5.jpg"),title:'招生简报|高原才俊齐聚燕园，百年岗大再添新颜'},
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic6.jpg"),title:'招生简报|刷新历史，文理开花，相聚燕园'},
          ],
          [
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic7.jpg"),title:'招生简报|寒窗初回响，燕园续华章'},
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic8.jpg"),title:'招生简报|岗大在苏招生工作圆满结束'},
          ],
          [
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic9.jpg"),title:'招生简报|岗大在辽宁高考招生录取圆满结束'},
            {id:nanoid(),pic:require("../assets/img/news_pic/news_pic10.jpg"),title:'2022年北京大学在甘招生工作圆满结束'},
          ],
        ],
      };
    },
  };
</script>

<style scoped>
  .left_card{
    float: left;
    width: 30%;
  }
  .el-carousel{
    margin-top: 1%;
    margin-bottom: 1%;
    width: 100vw;
  }
  .box-card1{
    /* 这里注意，宽度后需要再调整 */
    width: 500px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 250px;
  }
  .box-card2{
    /* 这里注意，宽度后需要再调整 */
    width: 500px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 300px;
  }
  .news_body{
    height: 100%;
    width: 100%;
  }
  .news_img{
    width: 80px;
    height: 80px;
    vertical-align:middle;
    margin-right: 10px;
  }
  .news_total{
    display: flex;
    flex-direction: column;
    height: 300px;
  }
</style>