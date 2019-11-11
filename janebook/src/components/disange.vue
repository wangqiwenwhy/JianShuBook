<template>

    <ul class="ula">
        <li class="lia" v-for="(i,index) in heheh " :key="index">
            <div class="logol">
                
            </div>
            <div class="guanzu">+关注</div>
            <div class="tuiname">{{i.nameone}}</div>
            <div class="tuijiantxt">{{i.text}}</div>
        
        </li>
    </ul>
    <!-- </div> -->
</template>
<style>
/* *{
    list-style: none;
}
    .ula{
        width: 280px;
       
    }
    .lia{
    height: 78px;
    overflow: hidden;
    border-bottom: 1px solid;

    }

    .logol{
        height: 60px;
        width: 60px;
        margin-left: 20px;
        margin-top: 8px;
        float: left;
        border-radius: 50%;
        background-color: aqua;
    }
.tuiname{
    height: 20px;
    line-height: 45px;
    float: left;
    margin-left: 10px;
}
.guanzu{
    height: 20px;
    float: right;
    font-size: 15px;
    color: green;
    margin-top: 10px;
}
.tuijiantxt{
    height: 20px;
    float: left;
    font-size: 10px;
    margin-left: 10px;
    line-height: 60px;

} */
</style>
<script>
export default {
     props:{
        msg:String
    },
    data(){
        return{
            heheh:[{
                // logo:src='//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
                nameone:"媚世嘤",
                text:"写了623.4k字 · 12k喜欢"
            },
            {
                nameone:"冰千里",
                text:"写了349.8k字 · 4.3k喜欢"
            },{
                nameone:"只有一半影子的人",
                text:"写了255.9k字 · 1.2k喜欢"
            },{
                nameone:"三儿亡语",
               text:"写了670.8k字 · 21.2k喜欢"
            },{
                nameone:"Grace",
                text:"写了715k字 · 43.2k喜欢"
            }]
        }
    }
}
</script>


