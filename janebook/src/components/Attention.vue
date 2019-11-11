<template>
    <div id="w">
        <div class="this-left">
          <a href="#">全部关注</a>
          <router-link to="/home/Attention/Quanbu">
          <div class="tuijiann">
              <div class="avatar">
                <img src="//cdn2.jianshu.io/assets/web/addfollow-fc392ec918dda9d19818181ca42d2d7e.png" alt="">
              </div>
              <div class="namer">
                添加关注
              </div>
          </div>
          </router-link>
            <ul class="found_ul">
                 <router-link :to ="luj">
                 <li v-for="(item,index) in items"  :key="index" :class="{'clickBg':index==clickIndex}"  @click="xuanzhong(index,item)" @mouseout="hoverIndex = -1">
                    <img :src="item.img" alt="">
                    <p>{{item.name}}</p>
                </li>
               </router-link>
            </ul>
        </div>
        <div class="this-right">
          <router-view />
        </div>
         
    </div>
</template>



<script>
// import Quanbu from "@/components/Quanbu.vue";

import img1 from "../assets/tu1.jpg"
import img2 from "../assets/tu2.jpg"
import img3 from "../assets/tu3.jpg"
export default{
        props: {
            msg: String
        },

        methods:{
            xuanzhong(index){
                if(index==0){
                    this.luj = "/home/Attention/Zhiye"
                    //  console.log(this.luj)
                }else if(index==1){
                    this.luj = "/home/Attention/Zhiye1"
                    // console.log(11)
                }else{
                    this.luj = "/home/Attention/Zhiye2"
                }
            }
        },

        data(){
            return{
                luj:"",
                clickIndex: -1, //表示当前点击的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
                items:[{
                    name:"简友圈",
                    img:img1,
                },{
                    name:"读书",
                    img:img2,
                },{
                    name:"美食",
                    img:img3,
                }]
            }
        }

}
</script>


<style>
#w{
    width: 948px;
    margin-top: 55px;
    overflow: hidden;
    margin: 0 auto;
}
.this-left{
    width: 280px;
    float: left;
    margin-top: 90px;
}
.this-right{
     width: 668px;
    float: right;
    margin-top: 90px;
    border-left: 1px solid #f0f0f0;
    background-color: white;
}

.onetwo{
  width: 100%;
}
.this-left a{
  margin-left: 15px;
  font-size: 15px;
}
.tuijiann{
    height: 70px;
    margin-top: 7px;
    list-style: none;
    background-color: #f0f0f0;
    border-top: 1px solid #f0f0f0;
}
.avatar{
      width: 40px;
    height: 40px;
    float: left;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 8px;
}
.avatar img{
      width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
}
.namer{
   margin-top: 24px;
}
.wrapp{
  background-color: #f0f0f0;
}

.guanzhuyi{height: 30px;width: 100%;background-color: #646464;}


    .found_ul{
        width: 100%;
        height: 100%;
    }
    .found_ul li{
        height: 60px;
        line-height: 60px;
        cursor:pointer;
        color: black;
    }
    .found_ul li:hover{
        background-color: #f1f1f1;
    }
    .clickBg{
        background: #f8f8f8;
    }
    .found_ul li img{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        float: left;
    }
 
</style>

