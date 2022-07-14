<template>
  <div class="header">
    <!-- 判断是否是社区精选页面，如果是就是字色#555,其余的组件都是#fff，还有logo和下拉箭头的颜色也的改变 -->
    <div :class="['header-content', { justify: isCommunity }]">
      <div class="red-logo">
        <router-link to="/home">
          <img
            v-if="!isCommunity"
            src="../../static/images/redlogo.png"
            alt="小红书"
          />
          <img
            v-if="isCommunity"
            src="../../static/images/join01.png"
            alt="小红书"
          />
        </router-link>
      </div>
      <ul class="navbar">
        <!-- 和Aboutme组件里面点击样式切换一样的
        💥但是不知道是不是点击每个模块去新的路由组件会重新加载一次，每次点击完都是在首页，二次点击才生效
        解决：active写成props传参而不是数据，因为数据默认是home页，每次点击一个组件都是home页 -->
        <li
          :class="[{ 'nav-active': reallyactive === 'home' }]"
          @click="getActive('home')"
        >
          <router-link to="/">首页</router-link>
        </li>
        <li
          :class="[{ 'nav-active': reallyactive === 'community' }]"
          @click="getActive('community')"
        >
          <router-link to="/community">社区精选</router-link>
        </li>
        <li class="cooperation">
          <a href="##">业务合作</a><i class="iconfont icon-xiajiantou"></i>
          <div class="drop-down">
            <div class="drop-down-content">
              <a href="">专业号</a>
              <a href="">推广合作</a>
              <a href="">蒲公英</a>
              <a href="">商家入驻</a>
              <a href="">MCN入驻</a>
            </div>
          </div>
        </li>
        <li class="creator">
          <div class="v-upload">视频上传</div>
          <a href="##">创作者服务</a><i class="iconfont icon-xiajiantou"></i>
          <div class="drop-down">
            <div class="drop-down-content">
              <a href="">数据查看</a>
              <a href="">视频上传</a>
              <a href="">电脑直播</a>
              <a href="">直播管理</a>
            </div>
          </div>
        </li>
        <li
          :class="[{ 'nav-active': reallyactive === 'news' }]"
          @click="getActive('news')"
        >
          <router-link to="/news">新闻中心</router-link>
        </li>
        <li
          :class="[{ 'nav-active': reallyactive === 'about' }]"
          @click="getActive('about')"
        >
          <router-link to="/aboutme">关于我们</router-link>
        </li>
        <li
          :class="[{ 'nav-active': reallyactive === 'social' }]"
          @click="getActive('social')"
        >
          <router-link to="/social">社会责任</router-link>
        </li>
        <li>
          <router-link target="_blank" to="/joinus">加入我们</router-link>
        </li>
        <li class="english">
          <a href="##">中文</a><i class="iconfont icon-xiajiantou"></i>
          <div class="drop-down">
            <div class="drop-down-content">
              <a href="##">English(US)</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aHeader',
  props: {
    isCommunity: {
      type: Boolean,
      default: false,
    },
    active: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
      reallyactive: this.active
    }
  },
  methods: {
    getActive (value) {
      if (value) {
        this.reallyactive = value
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    // position: fixed;
    // position: relative;
    position: absolute;
    width: 100%;
    height: 106px;
    top: 0;
    font-weight: 500;
    // background-color: rgba(0, 0, 0, 0.02);
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
        img {
          width: 72px;
        }
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
          // 下拉框隐藏，hover业务合作后显示
          .drop-down {
            display: none;
            position: absolute;
            left: -32px;
            top: 22px;
            .drop-down-content {
              margin-top: 30px;
              background-color: #fff;
              z-index: 1001;
              border-radius: 10px;
              overflow: hidden;
              a {
                display: block;
                color: #333;
                white-space: nowrap;
                font-weight: 300;
                cursor: pointer;
                padding: 12px 30px;
                transition: all 0.3s;
                &:hover {
                  background-color: #fbfbfb;
                }
              }
            }
          }
          // 视频上传
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
            cursor: text;
          }
        }
        // 业务合作
        .cooperation:hover .drop-down {
          display: block;
        }
        // 创作者服务
        .creator:hover .drop-down {
          display: block;
        }
        // 中英文切换
        .english:hover .drop-down {
          display: block;
        }
        // 点击后样式
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
    // 判断是否是社区精选组件
    .justify {
      .red-logo {
        width: 150px;
        img {
          width: 72px;
        }
      }
      .navbar {
        li {
          cursor: pointer;
          position: relative;
          a {
            text-decoration: none;
            color: #555;
          }
          .iconfont {
            font-size: 10px;
            color: #555;
          }
        }
        // 点击后样式
        .nav-active::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          top: 30px;
          background-color: #ff2442;
        }
      }
    }
  }
</style>