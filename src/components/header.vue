<template>
  <div class="header">
    <div class="red-logo">
      <router-link to="/home">
        <img src="../../static/images/redlogo.png" alt="小红书" />
      </router-link>
    </div>
    <ul class="navbar">
      <li><a href="##">首页</a></li>
      <li><a href="##">社区精选</a></li>
      <li><a href="##">业务合作</a><i class="iconfont icon-xiajiantou"></i></li>
      <li>
        <div class="v-upload">视频上传</div>
        <a href="##">创作者服务</a><i class="iconfont icon-xiajiantou"></i>
      </li>
      <li><a href="##">新闻中心</a></li>
      <li><a href="##">关于我们</a></li>
      <li><a href="##">社会责任</a></li>
      <li><a href="##">加入我们</a></li>
      <li><a href="##">中文</a><i class="iconfont icon-xiajiantou"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'aHeader'
}
</script>

<style lang="less" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 106px;
    top: 0;
    font-weight: 500;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    .red-logo {
      margin-left: 80px;
    }
    .navbar {
      display: flex;
      list-style: none;
      margin-right: 50px;
      li {
        position: relative;
        float: left;
        margin: 30px;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #000;
        }
        .iconfont {
          font-size: 10px;
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
    }
  }
</style>