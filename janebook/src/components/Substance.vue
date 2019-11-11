<template>
  <section>
    <div class="items" v-for="(i,index) in items" :key="index">
      <!-- <div  v-for="(i,index) in items" :key="index"> -->
      <div class="one">
        <p class="titleg">{{i.title}}</p>
        <p class="text">{{i.content}}</p>
        <div class="praise">
          <p>
            <i class="iconfont ic-paid1"></i>
          </p>
          <p></p>
          <p>
            <i class="iconfont ic-list-comments"></i>
          </p>
          <p>
            <i class="iconfont ic-list-like"></i>
          </p>
        </div>
      </div>
      <!-- <img class="onetu" :src='' > -->
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
import 'whatwg-fetch'
export default {
    name:"Bar",
    props:{
        msg:String
    },
    data(){
        return{
          items:[]
        }
    },
    mounted(){
        var that = this;
        // axios.get('http://localhost:4000/api/readArticle/user', {
            
        // })
        // .then(function (response) {
        //     console.log(response);
        //     var str = response.data.data
        //     console.log(str)
        //     that.items=str;
        //     console.log(that.items)
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
        //另一种请求方式
        fetch('http://localhost:4000/api/readArticle/user')
          .then(function(response) {
            return response.json();
          })
          .then(function(Json) {
            console.log(Json);
            var str = Json.data;
            console.log(str)
            that.items=str;
            console.log(that.items)
          })
          .catch(function (error) {
           console.log(error);
        });

          
    },
    methods:{
        // bianji(id){
        //    var that = this;
        //  axios.get('http://localhost:4000/api/readArticle/user',{   
        //    params:{
        //        _id:id
        //    } 
        // }).then(function(){
        //     axios.get('http://localhost:4000/api/readArticle/user')
        // .then(function (res) {
        // // console.log(res.data.data);
        // var arr = res.data.data
        //   that.Release = arr;
        //   console.log(that.Release)
        // })
        // .catch(function (error) {
        // console.log(error);
        // })
        // })

        // }
     }
   
    
}

</script>


<style>
.items {
  height: 200px;
  width: 100%;
  /* margin-top: 30px; */
  background-color: white;
  border-bottom: 1px solid #dddddd;
}
.one {
  height: 200px;
  width: 60%;
  float: left;
}
.titleg {
  margin-top: 26px;
  font-weight: 600;
}
.text {
  font-size: 12px;
}
.praise {
  display: flex;
  font-size: 13px;
}
.praise p {
  width: 80px;
}
.onetu {
  height: 140px;
  width: 165px;
  border-radius: 10px;
  margin-top: 34px;
  float: left;
  margin-left: 36px;
}
.ic-paid1 {
  color: #ff5a03;
}
</style>

