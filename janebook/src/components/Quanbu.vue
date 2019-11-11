<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="全部推荐" name="first">
                <div class="onetwo">
                  <Tuijian/>
                </div>
              </el-tab-pane>
              <el-tab-pane label="推荐作者" name="second"> <div class="onetwo">
                  <Tuijianone/>
                </div></el-tab-pane>
              <el-tab-pane label="推荐专题" name="third"> <div class="onetwo">
                  <Tuijiantwo/>
                </div></el-tab-pane>
            </el-tabs>
</template>


<script>
import Tuijian from "@/components/Tuijian.vue";
import Tuijianone from "@/components/Tuijianone.vue";
import Tuijiantwo from "@/components/Tuijiantwo.vue";
  export default {
    
    data() {
      return {
        activeName: 'first'
      };
    },
     components:{
       Tuijian,
       Tuijianone,
       Tuijiantwo,
     },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
.el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #E4E7ED;
    z-index: 1;
    }
.el-tabs__nav-scroll {
    margin-left: 60px;
}
.el-tabs__active-bar {
  background-color: #646464;
}
.el-tabs__item{
color: #7c7c7c;
font-weight: 700;
}
.el-tabs__nav a{
  color: #5b5b5b;
}
.el-tabs__nav-scroll a{
color: #5b5b5b;
}
</style>

