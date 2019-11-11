<template>
<div>
    <!-- <diyige /> -->
    <div class="tuijian">推荐作者</div>
    <div class="qiehuan">
      <span  @click="change">
        <i class="iconfont ic-search-change" style="transform: rotate(0deg);"></i>
        换一批
      </span>
    </div>
    <div>
        <component :is="currentView"></component>
    </div>
  
<!-- <div></div> -->
</div>
</template>

<script>
import diyige from "./diyige.vue"
import dierge from "./dierge.vue"
import disange from "./disange.vue"
// var diyige = {template:'<div>第一个</div>'};
// var dierge = {template:'<div>第二个</div>'};
// var disange = {template:'<div>第三个</div>'};
export default {
  components: {
    diyige,
    dierge,
    disange,
  },
  data(){
      return{
            index:0,
            arr:['diyige','dierge','disange'],
      }
   
  },
   computed:{
    currentView(){
        return this.arr[this.index];
    }
  },
  methods:{
    change(){
      this.index = (++this.index)%3;
    }
  }
}
</script>

<style>
.tuijian{
  float: left;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
}
.qiehuan{
height: 30px;
    width: 100%;
}
.qiehuan span{
  height: 30px;
  line-height: 30px;
  float: right;
  cursor:pointer;
}

</style>


