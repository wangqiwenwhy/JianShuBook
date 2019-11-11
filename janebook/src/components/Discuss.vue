<template>
  <div class="discuss">
    <div class="discuss_title">全部简信</div>
    <ul>
      <li class="mymsg">
        <div class="mymsg_one">
          <img src="../assets/1.png">
        </div>
        <div class="mymsg_two">
          <p>简宝玉 <span class="time">04.29 14:23</span></p>
          <p>欢迎加入丰富多彩的原创内容社区—简书。新手有关简书的任何疑问请点击链接查看 http://ww...</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style>
.discuss {
  width: 100%;
  height: 300px;
}
.discuss_title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid gray;
}
.mymsg {
  width: 100%;
  height: 88px;
  padding: 10px 0;
}
.mymsg_one {
  width: 20%;
  height: 100%;
  float: left;
}
.mymsg_one img {
  width: 47px;
  height: 47px;
  border-radius: 50%;
}
.mymsg_two {
  width: 80%;
  height: 100%;
  float: left;
  text-align: left;
  line-height: 16px;
}
.mymsg_two p:nth-of-type(1) {
  font-size: 15px;
}
.mymsg_two p:nth-of-type(2) {
  font-size: 12px;
}
.mymsg_three {
  width: 20%;
  height: 100%;
  background-color: rgb(60, 82, 39);
  float: left;
  line-height: 47px;
}
.time{
    font-size: 13px;
    text-align: left
}
.iconfont{
    font-size: 14px;
}
.ic-show:hover .dropdown-menu{
    display: block
}
</style>

