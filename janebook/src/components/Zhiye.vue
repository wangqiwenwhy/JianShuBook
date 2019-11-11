<template>
  <div class="jionel">
    <div class="main-top">
      <a href="/c/yD9GAd" target="_blank" class="avatar-collection" style="height:80px;width:80px;">
        <img
          src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240/format/webp"
        >
      </a>
      <a href="/c/yD9GAd" target="_blank" class="btn btn-hollow">
        专题主页
        <i class="iconfont ic-link"></i>
      </a>
      <a class="btn btn-hollow">投稿</a>
      <div class="title">
        <a href="/c/yD9GAd" target="_blank" class="name">读书</a>
      </div>
      <div class="infol">
        <a href="/u/yZq3ZV" target="_blank">简书</a> 编 · 收录了301848篇文章 · 4191311人关注
      </div>
    </div>
    <!-- 导航栏 -->
     <div class="min-top">
         <ul class="op">
             <li @click="a"><i class="iconfont ic-articles"></i>最新收录</li>
             <li @click="b"><i class="iconfont ic-latestcomments"></i>最新评论</li>
             <li @click="c"><i class="iconfont ic-hot"></i>热门</li>
         </ul>
     </div>


    <component v-bind:is="show"></component>

  </div>
</template>

<script>
    import zuixinjilu from '@/components/Zuixinshoulu.vue'
    import zuixinpinlun from '@/components/Zuixinpinglun.vue'
    import remen from '@/components/Remen.vue'

    export default {
        data(){
            return{
                name: "DuShu",
                show :"zuixinjilu" ,
                arr:["zuixinjilu","zuixinpinlun","remen"]
            }
        },

        components:{
            zuixinjilu,
            zuixinpinlun,
            remen
        },
        methods:{
            a(){
                this.show = "zuixinjilu"
            },
            b(){
                this.show = "zuixinpinlun"
            },
            c(){
                this.show = "remen"
            }
        }
    }

</script>

<style>
.jionel {
  width: 100%;

}
.main-top{
     height: 100px;

}
.avatar-collection {
    /* width: 80px;
    height:80px; */
    margin-right: 20px;
    margin-top: 14px;
    display: block;
    float: left;
    cursor: pointer;
    margin-left: 50px;
    }
.title{
line-height: 60px;
    height: 50px;
    font-size: 24px;
    font-weight: 600;
}
.btn-hollow{
        margin-right: 50px;
    margin-top: 20px;
    padding: 11px 16px;
    float: right;
}
.infol{
font-size: 12px;
width: 300px;
}
.min-top{
    height: 50px;
    width: 100%;
    margin-top: 20px;
}
.op{
    height: 50px;
    line-height: 50px;
    display:flex;
    border-bottom: 1px solid #f0f0f0;
}
.op li{
    width: 140px;
    line-height: 50px;
    height: 50px;
    text-align: center;
    margin-left: 40px;
}
.op li:hover {
    border-bottom: 2px solid #646464;
}
</style>
