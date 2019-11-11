<template>
  <div class="block">
    <el-carousel trigger="click" height="265px">
      <el-carousel-item v-for="item in 4" :key="item">

      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
.block{
  overflow: hidden;
  border-radius: 10px;
}
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
     background-image: url(../assets/1.png);
     background-size: 100% 100%;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
     background-image: url(../assets/2.jpg);
      background-size: 100% 100%;
  }


</style>