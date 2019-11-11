<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="width-limit">
      <!-- 左上方 Logo -->
      <a class="logo" href="/">
        <img
          src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
          alt="Nav logo"
        >
      </a>

      <!-- 右上角 -->
      <!-- 登录显示写文章 -->
      <router-link to="/Release" >
      <a class="btn write-btn" target="_blank" href="/writer#/">
        <i class="iconfont ic-write"></i>写文章
      </a>
      </router-link>
      <!-- 如果用户登录，显示下拉菜单 -->
      <div class="user">
        <div data-hover="dropdown">
          <a class="avatar" href="/u/3294770ceda0">
            <img 
              src="//upload.jianshu.io/users/upload_avatars/17601817/b52212d5-94c3-49fa-8a5a-55af03c81846?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
              alt="120"
            >
          </a>
        </div>
        <ul class="dropdown-menu">
          <li>
            <a href="/u/3294770ceda0">
              <i class="iconfont ic-navigation-profile"></i>
              <span>我的主页</span>
            </a>
          </li>
          <li>
            <!-- TODO bookmarks_path -->
            <a href="/bookmarks">
              <i class="iconfont ic-navigation-mark"></i>
              <span>收藏的文章</span>
            </a>
          </li>
          <li>
            <a href="/users/3294770ceda0/liked_notes">
              <i class="iconfont ic-navigation-like"></i>
              <span>喜欢的文章</span>
            </a>
          </li>
          <li>
            <a href="/my/paid_notes">
              <i class="iconfont ic-paid"></i>
              <span>已购内容</span>
            </a>
          </li>
          <li>
            <a href="/wallet">
              <i class="iconfont ic-navigation-wallet"></i>
              <span>我的钱包</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <i class="iconfont ic-navigation-settings"></i>
              <span>设置</span>
            </a>
          </li>
          <li>
            <a href="/faqs">
              <i class="iconfont ic-navigation-feedback"></i>
              <span>帮助与反馈</span>
            </a>
          </li>
          <li>
            <a rel="nofollow" data-method="delete" href="/sign_out">
              <i class="iconfont ic-navigation-signout"></i>
              <span>退出</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="nqzzJ71pC-jOnJKAfdtr6_0">
        <a class="_3tScN0zmSdGLaUAH4SxTbM_0">
          <img
            src="//cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png"
            class="_3f806byixOPpOPWnx8HiQP_0"
          >
        </a>
        <!---->
      </div>

      <div class="style-mode">
        <a class="style-mode-btn">
          <i class="iconfont ic-navigation-mode"></i>
        </a>
        <div class="popover-modal" style="left: 0px; display: none;">
          <div class="meta">
            <i class="iconfont ic-navigation-night"></i>
            <span>夜间模式</span>
          </div>
          <div class="switch day-night-group">
            <a class="switch-btn">开</a>
            <a class="switch-btn active">关</a>
          </div>
          <hr>
          <div class="switch font-family-group">
            <a class="switch-btn font-song">宋体</a>
            <a class="switch-btn font-hei active">黑体</a>
          </div>
          <div class="switch">
            <a class="switch-btn active">简</a>
            <a class="switch-btn">繁</a>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#menu"
            aria-expanded="false"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="nav navbar-nav">
            <li class="tab active">
               <router-link to="/home/Discover" >
                发现
                <i class="iconfont ic-navigation-discover menu-icon"></i>
              </router-link>
            </li>
            <li class="tab">
             <router-link to="/home/Attention" >
                关注
                <i class="iconfont ic-navigation-follow menu-icon"></i>
             </router-link>
            </li>
            <li class="tab notification">
               <router-link to="/home/information" >
                <span class="menu-text el-dropdown-link">消息</span>
                <i class="iconfont ic-navigation-notification menu-icon"></i>
                <!---->
                <span class="badge">1</span>
              </router-link>
              <ul class="dropdown-menu">
                <li>
                  <a href="/notifications#/comments">
                    <i class="iconfont ic-comments"></i>
                    <span>评论</span>
                    <!---->
                  </a>
                </li>
                <li>
                  <a href="/notifications#/chats">
                    <i class="iconfont ic-chats"></i>
                    <span>简信</span>
                    <span class="badge">1</span>
                  </a>
                </li>
                <li>
                  <a href="/notifications#/requests">
                    <i class="iconfont ic-requests"></i>
                    <span>投稿请求</span>
                    <!---->
                  </a>
                </li>
                <li>
                  <a href="/notifications#/likes">
                    <i class="iconfont ic-likes"></i>
                    <span>喜欢和赞</span>
                    <!---->
                  </a>
                </li>
                <li>
                  <a href="/notifications#/follows">
                    <i class="iconfont ic-follows"></i>
                    <span>关注</span>
                    <!---->
                  </a>
                </li>
                <li>
                  <a href="/notifications#/money">
                    <i class="iconfont ic-money"></i>
                    <span>赞赏和付费</span>
                    <!---->
                  </a>
                </li>
                <li>
                  <a href="/notifications#/others">
                    <i class="iconfont ic-others"></i>
                    <span>其它提醒</span>
                    <!---->
                  </a>
                </li>
              </ul>
            </li>
            <li class="search">
              <form >
                <input name="utf8" type="hidden" value="✓">
                <input
                  type="text"
                  name="q"
                  id="q"
                  value
                  autocomplete="off"
                  placeholder="搜索"
                  class="search-input"
                >
                <a class="search-btn" href="javascript:void(null)">
                  <i class="iconfont ic-search"></i>
                </a>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.notification:hover .dropdown-menu{
  display: block
}
.user:hover .dropdown-menu{
  display: block
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  float: right;
}
._3f806byixOPpOPWnx8HiQP_0 {
  height: 30px;
  margin-top: 13px;
}
// .container {
//   justify-content: space-around;
// }
// .router-link-active{
//   z-index: 5;
//   background-color: #ea6f5a;
// }
</style>
