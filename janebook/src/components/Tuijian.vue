<template>
  <!-- <div class="one-a">
                    
  </div>-->
  <section>
  <div class="onea"  v-for="(i,index) in onea" :key="index">
    <ul class="add-follow-list" >
      <li class="itemss">
        <div @click="red(i)"> 
            <p v-if="i.show == 'false'">
              <a class="btn btn-success follow">
                <span>已关注</span>
              </a>
            </p>
            <p v-else>
              <a class="btn btn-success follow">
                <i class="iconfont ic-follow"></i>
                <span>关注</span>
              </a>
            </p>
          
          <div class="tag">
            <i class="iconfont ic-recommend-collection"></i>
            <span>简书推荐专题</span>
          </div>
          <a target="_blank" class="avatar-collection">
            <img   :src='i.imgm' >
          </a>
          <div class="info">
            <a href="/c/yD9GAd" target="_blank" class="name">{{i.titlee}}</a>
            <p>{{i.textt}}</p>
            <a href="/c/yD9GAd" target="_blank">
              <i class="iconfont ic-collection-s"></i>
              <span>{{i.one}}</span>
            </a>
            <!---->
          </div>
        </div>
      </li>
    </ul>
  </div>
  </section>
</template>



<script>
import imgz from "../assets/tu1.jpg"
export default {
    name:"tuijian",
        props:{
        msg:String
    },
     data(){
        return{
            onea:[{
                show:true,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
            {
               show:false,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
            {
               show:true,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
            {
               show:false,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
            {
               show:false,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
            {
               show:false,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
             {
                show:false,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
             {
                show:false,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
             {
                show:false,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },
             {
                show:false,
                titlee:"读书",
                textt:"读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...",
                one:"299.7K篇文章 · 4188.9K人关注",
                imgm:imgz
            },]
    }
},
methods:{
    red(i){
      i.show = i.show == "false"?"true":"false"
    }
}
}
</script>


<style>
.onea {
  height: 116px;
  width: 100%;
  background-color:white;
  border-bottom:1px solid #f0f0f0; 
}
.onea p {
  font-size: 10px;
  color: #969696;
  margin-left: 10px;
}
.follow{
    float: right;
    margin-top: 10px;
}
.tag{
    font-size: 14px;
    height: 36px;
    margin-left: 49px;
    line-height: 36px;
    color: #ec6e56;
}
/* .avatar-collection{
    float: left;
    margin-left: 60px;
} */
.avatar-collection {
    width: 48px;
    height: 48px;
        margin-right: 20px;
    display: block;
    float: left;
    cursor: pointer;
    margin-left: 50px;
    }
.add-follow-list li{
    line-height: 19px;
}
</style>

