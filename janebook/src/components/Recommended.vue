 
<template>
<!-- 推荐作者组件 -->
        <div class="recommended">
            <Forachange />
            <div class="gengduo">
              <a href="/recommendations/users?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="find-more">
      查看全部<i class="iconfont ic-link"></i></a>
            </div>
        </div>
</template>

<script>
import Forachange from "./Forachange.vue"

// @ is an alias to /src
export default {
  name: 'recommended',
  components: {
      Forachange
  }
}
</script>

<style>
.recommended{
height: 500px;
width: 100%;
/* background-color: aquamarine; */
}
.gengduo{
    text-align: center;
    padding: 7px 7px 7px 12px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
}
</style>

