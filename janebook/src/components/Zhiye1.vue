<template>
    <div class="jione">
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
.jione{
    width: 100%;
    /* background-color: rebeccapurple; */
}
</style>
