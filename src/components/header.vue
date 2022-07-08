<template>
  <div class="header">
    <div class="header-content">
      <div class="red-logo">
        <router-link to="/home">
          <img src="../../static/images/redlogo.png" alt="小红书" />
        </router-link>
      </div>
      <ul class="navbar">
        <li class="nav-active"><router-link to="/home">首页</router-link></li>
        <li><router-link to="/community">社区精选</router-link></li>
        <li>
          <a href="##">业务合作</a><i class="iconfont icon-xiajiantou"></i>
        </li>
        <li>
          <div class="v-upload">视频上传</div>
          <a href="##">创作者服务</a><i class="iconfont icon-xiajiantou"></i>
        </li>
        <li><router-link to="/news">新闻中心</router-link></li>
        <li><router-link to="/aboutme">关于我们</router-link></li>
        <li><a href="##">社会责任</a></li>
        <li><a href="##">加入我们</a></li>
        <li><a href="##">中文</a><i class="iconfont icon-xiajiantou"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aHeader'
}
</script>

<style lang="less" scoped>
  .header {
    position: fixed;
    // position: relative;
    width: 100%;
    height: 106px;
    top: 0;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.02);
    z-index: 100;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 1080px;
      width: 90%;
      .red-logo {
        width: 150px;
      }
      .navbar {
        display: flex;
        list-style: none;
        justify-content: space-between;
        width: calc(100% - 300px);
        li {
          cursor: pointer;
          position: relative;
          a {
            text-decoration: none;
            color: #fff;
          }
          .iconfont {
            font-size: 10px;
            color: #fff;
          }
          .v-upload {
            position: absolute;
            width: 100px;
            height: 54px;
            line-height: 44px;
            top: -38px;
            right: -46px;
            font-size: 19px;
            color: #fff;
            text-align: center;
            background-image: url("../../static/images/video-upload.png");
            background-size: cover;
            background-repeat: no-repeat;
            transform: scale(0.5);
          }
        }
        .nav-active::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          top: 30px;
          background-color: hsla(0, 0%, 100%, 0.5);
        }
      }
    }
  }
</style>