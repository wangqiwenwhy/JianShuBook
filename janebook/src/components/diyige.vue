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
*{
    list-style: none;
}
    .ula{
        width: 280px;
        /* height: 40px; */
       
    }
    .lia{
    height: 78px;
    overflow: hidden;

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
    /* margin-top: 5px; */
}
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
                nameone:"颌裂柯蓝",
                text:"写了255.4k字 · 24.3k喜欢"
            },
            {
                nameone:"穆青龙",
                text:"写了309.9k字 · 2.1k喜欢"
            },{
                nameone:"畦灌",
                text:"写了66.5k字 · 472喜欢"
            },{
                nameone:"桥涵通",
               text:"写了213.8k字 · 3.2k喜欢"
            },{
                nameone:"阿文",
                text:"写了9999.9k字 · 99999k喜欢"
            }]
        }
    }
}
</script>


