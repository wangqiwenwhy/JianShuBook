<template>
    <section>
        <div class="items" v-for="(i,index) in items" :key="index">
        <!-- <div  v-for="(i,index) in items" :key="index"> -->
            <div class="one" >
                <p class="titleg">{{i.title}}</p>
                <p class="text">{{i.text}}</p>
                <div class="praise">
                    <p><i class="iconfont ic-paid1">{{i.yi}}</i></p>
                    <p>{{i.er}}</p>
                    <p><i class="iconfont ic-list-comments">{{i.san}}</i></p>
                    <p><i class="iconfont ic-list-like">{{i.shi}}</i></p>
                </div>
            </div>
            <img class="onetu" :src='i.imgz'>
        </div>
    </section>
</template>

<script>
import img1 from "../assets/tu1.jpg"
import img2 from "../assets/tu2.jpg"
import img3 from "../assets/tu3.jpg"
import img4 from "../assets/tu4.jpg"
export default {
    name:"Bar",
    props:{
        msg:String
    },
    data(){
        return{
            items:[{
                title:"fafafsaf",
                text:"点击上方关注花好情感，情感创伤和难题，给你一个安放的角落和治愈的可能。 ——男人若是真心爱你，绝不会在这三件事上冷落你，女人别不清楚！ 在感情里...",
                yi:"1.8",
                er:"花好爱情",
                san:"评论",
                shi:"赞",
                imgz:img1
            },
            {
               title:"男人若是真心爱你，绝不会在这三件事上冷落你，女人别不清楚！",
                text:"点击上方关注花好情感，情感创伤和难题，给你一个安放的角落和治愈的可能。 ——男人若是真心爱你，绝不会在这三件事上冷落你，女人别不清楚！ 在感情里...",
                yi:"1.9",
                er:"花好爱情",
                san:"评论",
                shi:"赞",
                imgz:img2
            },
             {
              title:"男人若是真心爱你，绝不会在这三件事上冷落你，女人别不清楚！",
                text:"点击上方关注花好情感，情感创伤和难题，给你一个安放的角落和治愈的可能。 ——男人若是真心爱你，绝不会在这三件事上冷落你，女人别不清楚！ 在感情里...",
                yi:"3.5",
                er:"花好爱情",
                san:"评论",
                shi:"赞",
                imgz:img3
            },
             {
               title:"男人若是真心爱你，绝不会在这三件事上冷落你，女人别不清楚！",
                text:"点击上方关注花好情感，情感创伤和难题，给你一个安放的角落和治愈的可能。 ——男人若是真心爱你，绝不会在这三件事上冷落你，女人别不清楚！ 在感情里...",
                yi:"0.8",
                er:"花好爱情",
                san:"评论",
                shi:"赞",
                imgz:img4
            }
            ]
        }
    }
}
</script>


<style>
.items{
    height: 200px;
    width: 100%;
    /* margin-top: 30px; */
    background-color: white;
    border-bottom: 1px solid #dddddd;
}
.one{
    height: 200px;
    width: 60%;
    float: left;
}
.titleg{
    margin-top: 26px;
font-weight: 600;
}
.text{
    font-size: 12px;
}
.praise{
    display: flex;
    font-size: 13px;
}
.praise p{
    width: 80px;
}
.onetu{
    height: 140px;
    width: 165px;
    border-radius: 10px;
    margin-top: 34px;
    float: left;
    margin-left: 36px;
}
.ic-paid1{
    color: #ff5a03;
}
</style>

