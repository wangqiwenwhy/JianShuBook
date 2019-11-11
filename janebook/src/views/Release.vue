<template>
    <div class="backgrpudn">
        
        <div class="release">
            <!-- 写文章 -->
            <router-link to="/home"> <div class="gohome">回到首页</div></router-link>
            <div class="zjsd">写文章</div>
            <div class="releaseok" @click="releaseok">发布</div>
        </div>
        <div class="xiambuf">       
            <div class="youbian">
                <div v-for="(i,index) of Release" :key="index" class="hezi">
                    <p class="bta">{{i.title}}</p>
                    <p class="nra">{{i.content}}</p>
                    <div>
                        <button @click="DeleteArticle(i._id)">删除</button>
                       <router-link :to="{path:'/editor',query:{id:i._id}}">
                        <button>编辑</button>
                       </router-link>
                    </div>
                </div>
            </div>
            <div class="zuobian">
                <!-- 标题 -->
                <div class="Title">
                    <input type="text" placeholder="请写入标题" v-model="title">
                    <textarea class="txexxs" v-model="content" placeholder="请输入内容"></textarea>
                    <!-- <p class="po">ss </p> -->
                </div>
            </div>
        </div>
    </div>
    
</template>
<style>
button{
    width: 50%;
}
.bta{
    background-color: aliceblue;
}
.txexxs{
    width: 100%;
    height: 300px;
    border:0;
    background-color: #cccccc36;
}
.Title input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #f7f7f7;
    }
.Title{
    width: 100%;
    height: 100px;
    background-color: darkcyan
}
.zjsd{
        margin-top: 25px;
        font-size: 24px;
        font-weight: 800;
}
.releaseok{
    height: 50px;
    width: 200px;
    border-radius: 20px;
    border: 1px solid #dbdbdb;
    line-height: 50px;
    text-align: center;
    background-color: #dbdbdb;
    margin-top: 25px;
    
}
.xiambuf{
    display: flex
}
.zuobian{
    width: 70%;
    height: 500px;
    background-color: #d2d2d217;
    
}
.youbian{
    width: 30%;
}
.backgrpudn{
    background-color: white;
    height: 500px;
    position: relative;
    overflow: hidden;
}
.release{
    height: 100px;
    background-color: white;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    /* text-align: center */
}
.gohome{
    height: 50px;
    width: 200px;
    border-radius: 20px;
    border: 1px solid #dbdbdb;
    line-height: 50px;
    text-align: center;
    background-color: #dbdbdb;
    margin-top: 25px;
    /* float:right; */

}
</style>
<script>

import axios from 'axios'

export default {
        data(){
            return{
                int:null,
                title:"",
                content:"",
                txes:null,
                Release:[],
            }
        },
    // 事件
    methods:{
        releaseok(){
            var  that = this;
            this.int = this.title ;
            this.txes = this.content;
            let int = this.int
            var txes = this.txes
            console.log(int)
            console.log(txes)

            // 请求
        axios.post('http://localhost:4000/api/saveArtical/user',{   
            title:int,
            content:txes
        })  
        .then(function () {
            alert("发布成功")
                axios.get('http://localhost:4000/api/readArticle/user')
                .then(function (res) {
                var arr = res.data.data
 
                     that.Release=arr;

                  console.log(that.Release,'test')
                })
                .catch(function (error) {
                console.log(error);
                })
        })
        .catch(function (error) {
             console.log(error);
        })
        
     },
     DeleteArticle(id){
         var that = this;
         axios.get('http://localhost:4000/api/onlyDeleteArticle/user',{   
           params:{
               _id:id
           } 
        }).then(function(){
            axios.get('http://localhost:4000/api/readArticle/user')
        .then(function (res) {
        // console.log(res.data.data);
        var arr = res.data.data
          that.Release = arr;
          console.log(that.Release)
        })
        .catch(function (error) {
        console.log(error);
        })
        })

     }


 },
 mounted(){
         var that = this;
        axios.get('http://localhost:4000/api/readArticle/user')
        .then(function (res) {
        // console.log(res.data.data);
        var arr = res.data.data
          that.Release = arr;
          console.log(that.Release)
        })
        .catch(function (error) {
        console.log(error);
        })
        },
    
}
</script>



