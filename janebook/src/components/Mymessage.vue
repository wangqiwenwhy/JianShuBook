<template>
  <div class="top">
    <div>
      <Message/>
    </div>
  </div>
</template>
<style>
.top {
  width: 100%;
}
.top_one {
  width: 100%;
  height: 50px;
  display: flex;
  line-height: 50px;
}
.top_one div:nth-of-type(1) {
  font-size: 15px;
  flex-grow: 1;
}
.top_one div:nth-of-type(2) {
  font-size: 13px;
  flex-grow: 1;
}
</style>
<script>
import Message from "../components/Message.vue";
export default {
  components: {
    Message
  }
};
</script>

