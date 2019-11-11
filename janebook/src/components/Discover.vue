<template>
  <div id="o">
    <!-- 左边 -->
    <div class="the-left">
      <div class="banner">
        <Lunbo/>
      </div>
      <Substance/>

           <component :is="currentView"></component>
          <button @click="change"  v-if='xianshi' class="but">添加更多</button>
           <!-- 第二次显示 -->  
          <component :is="currentViews"></component>
          <button class="but" v-if='xianshis' @click="changeq">添加嘿嘿</button>  




      <Footer />
    </div>

    <!-- 右边 -->
    <div class="the-right">
      <!-- 遍历的侧边导航栏 -->
       <Bar/>
      <!-- 二维码 -->
      <div class="qrrcode">
           <img class="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode">
        <p>下载简书手机App<i class="iconfont ic-link"></i></p>
        <p>随时随地发现和创作内容</p>
      </div>
        <!-- 广告 -->
        <poster />
       <!-- 推荐作者 -->
        <Recommended />
    </div>
  </div>
</template>



<script>
import Bar from "@/components/Bar.vue";
import Lunbo from "@/components/Lunbo.vue";
import Substance from "@/components/Substance.vue";
import abcdeg from "@/components/abcdeg.vue";
import qwqq from "@/components/qwqq.vue";

import Poster from "@/components/Poster.vue";
import Recommended from "@/components/Recommended.vue";
import Footer from "@/components/Footer.vue";
export default {

  data(){
    return{
      currentView:"",
      currentViews:"",
      xianshi:true,
      xianshis:false

    }
  },
   methods:{
       change(){
            this.currentView = "abcdeg",
            this.xianshi = false,
            this.xianshis = true

        },
        changeq(){
          this.currentViews = "qwqq"
        },

      
   },


  name: "Discover",
  components: {
    Bar,
    Lunbo,
    Substance,
    Poster,
    Recommended,
    Footer,
    abcdeg,
    qwqq
  }
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
}
#yi {
  width: 624px;
  height: 300px;
  position: relative;
  overflow: hidden;
  /*	margin: 0 auto;*/
}

.but{
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background-color: rgb(165, 165,165);
  border: 0;
  outline: none;
}

#yi #er {
  width: 3120px;
  height: 300px;
  position: absolute;
  animation: roll 16s linear infinite;
  /*调用帧函数：动画名，动画整体周期时间，匀速，无限循环*/
}
#yi #er div {
  width: 624px;
  height: 300px;
  font-size: 200px;
  text-align: center;
  line-height: 300px;
  float: left;
  background-size: 100% 100%;
}
#o {
  height: 1500px;
  width: 948px;
  margin: 0 auto;
  margin-top: 55px;
  /* overflow: hidden; */
}
.the-left {
  /* height: 100%; */
  width: 624px;
  float: left;
  margin-top: 38px;

}
.the-right {
  width: 280px;
  float: right;
  margin-top: 38px;

}
.banner {
  height: 300px;
  width: 100%;
}
.right-bar {
  width: 100%;
  height: 50px;
}
.qrrcode{
    height: 80px;
    width: 100%;
    background-color: white;
    border: 1px solid #bdbdbd;
}
.qrcode{
    height: 60px;
    float: left;
    margin-top: 11px;
    margin-left: 15px;
}
.qrrcode p{
    float: left;
    margin-top: 12px;
    height: 10px;
    margin-left: 10px;
    line-height: 30px;
}
</style>

