<template>
  <div class="box1">
    <div class="box1_left">
      <Mymessage/>
    </div>
    <div class="box1_rigth">
       <div class="box1_rigth_one">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style>
.box1 {
  width: 960px;
  height: 600px;
  margin: 0 auto;
  margin-top: 58px;
}
.box1_left {
  width: 20%;
  float: left;
}
.box1_rigth {
  width: 75%;
  float: right;
  height: 200px;
}
.box1_rigth_one {
  width: 85%;
  padding: 10px 25px;
}
</style>
<script>
import Mymessage from "../components/Mymessage.vue";
import Discuss1 from "../components/Discuss1.vue";
export default {
  components: {
    Mymessage,
    Discuss1
  }
};
</script>

