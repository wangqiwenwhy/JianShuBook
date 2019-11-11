
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
          <router-link to="/Login" class="active">登录</router-link>
          <b>·</b>
          <router-link to="/register">注册</router-link>
        </div>
      </h4>
      <div class="js-sign-in-container">
        <form id="new_session" action="/sessions" accept-charset="UTF-8" method="post">
          <input name="utf8" type="hidden" value="✓">
          <input
            type="hidden"
            name="authenticity_token"
            value="C+z55uB+DLr3T1ZUV3L8UNJLhKy8nOUE3azyT3sr3Owl9UesmFugyXyxDxh7kq/pSH4bo5fO3vCD61OmKSWqUQ=="
          >

          <!-- 正常登录登录名输入框 -->
          <div class="input-prepend restyle js-normal">
            <input
              v-model="obj.userName"
              placeholder="手机号或邮箱"
              type="text"
              name="session[email_or_mobile_number]"
              id="session_email_or_mobile_number"
            >
            <i class="iconfont ic-user"></i>
          </div>

          <!-- 海外登录登录名输入框 -->

          <div class="input-prepend">
            <input
              v-model="obj.pwd"
              placeholder="密码"
              type="password"
              name="session[password]"
              id="session_password"
            >
            <i class="iconfont ic-password"></i>
          </div>
          <input value="false" type="hidden" name="session[oversea]" id="session_oversea">
          <div>
            <input
              id="sign-in-form-captcha-challenge"
              name="captcha[validation][challenge]"
              autocomplete="off"
              type="hidden"
            >
            <input
              id="sign-in-form-captcha-gt"
              name="captcha[validation][gt]"
              autocomplete="off"
              type="hidden"
            >
            <input
              id="sign-in-form-captcha-validate"
              name="captcha[validation][validate]"
              autocomplete="off"
              type="hidden"
            >
            <input
              id="sign-in-form-captcha-seccode"
              name="captcha[validation][seccode]"
              autocomplete="off"
              type="hidden"
            >
          </div>
          <div class="remember-btn">
            <input
              type="checkbox"
              value="true"
              checked="checked"
              name="session[remember_me]"
              id="session_remember_me"
            >
            <span>记住我</span>
          </div>
          <div class="forget-btn">
            <a class data-toggle="dropdown" href>登录遇到问题?</a>
            <ul class="dropdown-menu">
              <li>
                <a href="/users/password/mobile_reset">用手机号重置密码</a>
              </li>
              <li>
                <a href="/users/password/email_reset">用邮箱重置密码</a>
              </li>
              <li>
                <a target="_blank" href="/p/9058d0b8711d">无法用海外手机号登录</a>
              </li>
              <li>
                <a target="_blank" href="/p/498a9fa7da08">无法用 Google 帐号登录</a>
              </li>
            </ul>
          </div>

          <router-link to>
            <button
              @click="login(obj)"
              class="sign-in-button"
              id="sign-in-form-submit-btn"
              type="button"
            >
              <span id="sign-in-loading"></span>
              登录
            </button>
          </router-link>
        </form>
        <!-- 更多登录方式 -->
        <div class="more-sign">
          <h6>社交帐号登录</h6>
          <ul>
            <li id="weibo-link-wrap" class>
              <a class="weibo" id="weibo-link">
                <i class="iconfont ic-weibo"></i>
              </a>
            </li>
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
            <li class="js-more-method" id="more">
              <a href="javascript:void(0);">
                <i class="iconfont ic-more"></i>
              </a>
            </li>
            <li class="js-hide-method hide">
              <a class="douban" target="_blank" href="/users/auth/douban">
                <i class="iconfont ic-douban"></i>
              </a>
            </li>
          </ul>

          <div class="weibo-geetest-captcha"></div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// import HelloWorld from '@/components/HelloWorld.vue'

import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      obj: {
        userName: null,
        pwd: null
      }
    };
  },
  //往仓库里面放
  methods: {
    ...mapActions({
      login: "getLogin"
    })
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  }
};
</script>


 