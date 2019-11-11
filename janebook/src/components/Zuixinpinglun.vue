

<template>
    <div>
         <ul class="note-list">
      <li class="itemsi" v-for="(i,index) in itemsi" :key="index">
         <!---->
            <div class="content">
            <a target="_blank" class="title"> {{i.timy}} </a>
            <p class="abstract">{{i.wenben}}</p>
            <div class="meta">
                <a target="_blank" class="nickname">{{i.zzname}}</a>
                <!---->
                <a target="_blank">
                <i class="iconfont ic-list-comments"></i> {{i.pl}}
                </a>
                <span>
                <i class="iconfont ic-list-like"></i> {{i.zan}}
                </span>
                <!---->
                <!---->
            </div>
            </div>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
data(){
    return{
        itemsi:[
            {
                timy:"《四季的遐想》 第一篇:春天",
                wenben:"《四季的遐想》 一、春天 春天接受了风的亲吻，生命的希望在柳梢哇哇啼哭，天空的风筝是春天放飞的思绪，蕴着春雷的呐喊，欲震欲远...",
                zzname:"天狼星之楚天牧歌",
                pl:"999",
                zan:"999"
            },
             {
              timy:"《四季的遐想》 第一篇:春天",
                wenben:"《四季的遐想》 一、春天 春天接受了风的亲吻，生命的希望在柳梢哇哇啼哭，天空的风筝是春天放飞的思绪，蕴着春雷的呐喊，欲震欲远...",
                zzname:"天狼星之楚天牧歌",
                pl:"999",
                zan:"999"
            },
             {
              timy:"《四季的遐想》 第一篇:春天",
                wenben:"《四季的遐想》 一、春天 春天接受了风的亲吻，生命的希望在柳梢哇哇啼哭，天空的风筝是春天放飞的思绪，蕴着春雷的呐喊，欲震欲远...",
                zzname:"天狼星之楚天牧歌",
                pl:"999",
                zan:"999"
            },
             {
           timy:"《四季的遐想》 第一篇:春天",
                wenben:"《四季的遐想》 一、春天 春天接受了风的亲吻，生命的希望在柳梢哇哇啼哭，天空的风筝是春天放飞的思绪，蕴着春雷的呐喊，欲震欲远...",
                zzname:"天狼星之楚天牧歌",
                pl:"999",
                zan:"999"
            },
             {
                timy:"视其所以，观其所由",
                wenben:"希特勒的演讲，远比丘吉尔，斯大林等人的告全体人民书更具诱惑性。当虚无缥缈的幻境站在普通商量的人民面前的时候。没有人知道在其背后的恶毒之...",
                zzname:"夏沐行",
                pl:"999",
                zan:"999"
            }
        ]
    }
}
};
</script>

<style>

</style>

