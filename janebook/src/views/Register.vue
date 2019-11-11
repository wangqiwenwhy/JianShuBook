<template>
  <div class="sign">
    <div class="logo">
      <a href="/">
        <img
          src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
          alt="Logo"
        >
      </a>
    </div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <router-link to="/Login">登录</router-link>
          <b>·</b>
          <router-link to="/register" class="active">注册</router-link>
        </div>
      </h4>

      <div class="js-sign-up-container">
        <form class="new_user" id="new_user">
          <input name="utf8" type="hidden" value="✓">
          <input
            type="hidden"
            name="authenticity_token"
            value="GTR42qIoFSFkkYyLtLlVRQ8vEzSDlTo6mlca+eku7sM3LcaQ2g25Uu9v1ceYWQb8lRqMO6jHAc7EELsQuyCYfg=="
          >
          <div class="input-prepend restyle">
            <input
              v-model="obj.nickName"
              placeholder="你的昵称"
              type="text"
              value
              name="user[nickname]"
              id="user_nickname"
            >
            <i class="iconfont ic-user"></i>
          </div>
          <div class="input-prepend restyle no-radius js-normal">
            <input
              type="hidden"
              value="CN"
              name="user[mobile_number_country_code]"
              id="user_mobile_number_country_code"
            >
            <input
              v-model="obj.userName"
              placeholder="手机号"
              type="tel"
              name="user[mobile_number]"
              id="user_mobile_number"
            >
            <i class="iconfont ic-phonenumber"></i>
          </div>
          <input type="hidden" name="oversea" id="oversea" value="false">
          <input type="hidden" name="force_user_nonexist" id="force_user_nonexist" value="true">
          <div class="input-prepend restyle no-radius security-up-code js-security-number hide">
            <input type="text" name="sms_code" id="sms_code" placeholder="手机验证码">
            <i class="iconfont ic-verify"></i>
            <a
              tabindex="-1"
              class="btn-up-resend js-send-code-button disable"
              href="javascript:void(0);"
              id="send_code"
            >发送验证码</a>
            <div>
              <div class="captcha">
                <input
                  name="captcha[validation][challenge]"
                  autocomplete="off"
                  type="hidden"
                  value="9bec589efeae11ad9226fcb56c1d35c5"
                >
                <input
                  name="captcha[validation][gt]"
                  autocomplete="off"
                  type="hidden"
                  value="ec47641997d5292180681a247db3c92e"
                >
                <input name="captcha[validation][validate]" autocomplete="off" type="hidden" value>
                <input name="captcha[validation][seccode]" autocomplete="off" type="hidden" value>
                <input name="captcha[id]" autocomplete="off" type="hidden" value>
                <div id="geetest-area" class="geetest"></div>
              </div>
            </div>
          </div>
          <input type="hidden" name="security_number" id="security_number">
          <div class="input-prepend">
            <input
              v-model="obj.pwd"
              placeholder="设置密码"
              type="password"
              name="user[password]"
              id="user_password"
            >
            <i class="iconfont ic-password"></i>
          </div>
          <div
            @click="getRegister"
            type="submit"
            name="commit"
            value="注册"
            class="sign-up-button"
            id="sign_up_btn"
            data-disable-with="注册"
          >注册</div>
          <p class="sign-up-msg">
            点击 “注册” 即表示您同意并愿意遵守简书
            <br>
            <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a> 和
            <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。
          </p>
        </form>
        <!-- 更多注册方式 -->
        <div class="more-sign">
          <h6>社交帐号直接注册</h6>
          <ul>
            <li>
              <a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat">
                <i class="iconfont ic-wechat"></i>
              </a>
            </li>
            <li>
              <a id="qq" class="qq" target="_blank" href="/users/auth/qq_connect">
                <i class="iconfont ic-qq_connect"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import { mapActions } from 'vuex';
// import { register } from '../../api';
const { register } = require("../../api/user/register");
export default {
  name: "register",
  data() {
    return {
      obj: {
        nickName: null,
        userName: null,
        pwd: null
      }
    };
  },
  methods: {
    getRegister: function() {

      let info = {
        nickName: this.obj.nickName,
        userName: this.obj.userName,
        pwd: this.obj.pwd
      };
      register(info).then(res => {
        console.log(res, "Yongh");
        if (res.data.code == 0) {
          location.href='/Login'
        }
      });
    }
  }
};
</script>
