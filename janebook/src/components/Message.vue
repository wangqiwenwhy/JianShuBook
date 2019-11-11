<template>
  <ul>
    <router-link :to="messg">
    <li class="person_list" v-for="(p1,index) in person" :key="index" @click="asda(index)">
      <div class="person_logo">
        <i class="iconfont ic-chats"></i>
      </div>
      <div class="person_name">{{p1.name}}</div>
      <div class="person_right"></div>
    </li>
    </router-link>
  </ul>
</template>
<style>
ul,
li {
  list-style: none;
}
.person_list {
  width: 100%;
  height: 50px;
}
.person_list:hover{
  background-color: rgb(211, 208, 208)
}
.person_logo {
  width: 30%;
  height: 100%;
  float: left;
  padding: 15px 0;
  color: orangered
}
.person_name {
  width: 55%;
  height: 100%;
  float: left;
  font-size: 14px;
  padding: 16px 0px;
  text-align: left;
}
.person_right{
    width: 15%;
    height: 100%;
    float: left;
    color: gray;
    padding: 10px;
}
</style>
<script>
import logos from "../assets/1.png"
import logos1 from "../assets/1.png"
import logos2 from "../assets/1.png"
import logos3 from "../assets/1.png"
import logos4 from "../assets/1.png"
import logos5 from "../assets/1.png"
export default {
    data(){
        return{
          messg:"",
            person:[{
                headlogo:logos,
                name:"评论",
            },{
                headlogo:logos,
                name:"简信",
            },{
                headlogo:logos1,
                name:"投稿请求",
                number:100
            },{
                headlogo:logos2,
                name:"喜欢和赞",
            },{
                headlogo:logos3,
                name:"关注",
                number:91
            },{
                headlogo:logos4,
                name:"赞赏和付费",
                number:30
            },{
                headlogo:logos5,
                name:"其它提醒",
                number:94
            }]
        }
    },
     methods: {
    // <li class="person_list" v-for="(p1,index) in person" :key="index" @click="asda(index)">
    asda(index) {
      if (index == 0) {
        this.messg = "/home/information/Discuss1";
      } else if (index == 1) {
        this.messg = "/home/information/Discuss";
      }
    }
  }
}
</script>


