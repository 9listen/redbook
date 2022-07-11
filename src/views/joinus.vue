<template>
  <div class="joinus">
    <div class="join-header">
      <div class="content">
        <img class="logo" src="../../static/images/join01.png" alt="" />
        <div class="nav-box">
          <a class="nav-active" href="#">首页</a>
          <a href="#">社会招聘</a>
          <a href="#">校园招聘</a>
          <a href="#">实习生招聘</a>
          <a href="#">应聘记录</a>
        </div>
        <div class="careus">关注我们</div>
      </div>
    </div>
    <div class="home-container">
      <!-- 上边部分 -->
      <div class="top">
        <div class="top-content">
          <div class="big-title"></div>
          <div class="search-wrapper">
            <div class="search-box">
              <input type="text" placeholder="请输入职位关键词" />
              <button class="search-btn">
                <img src="../../static/images/join03.png" alt="" />
              </button>
            </div>
            <div class="hot-search">
              <span class="hot">热门搜索：</span>
              <a href="#">技术</a>
              <a href="#">产品</a>
              <a href="#">运营</a>
              <a href="#">设计</a>
              <a href="#">销售</a>
              <a href="#">职能</a>
              <a href="#">其他</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 职位部分 -->
      <div class="notices">
        <div class="hot">
          <div class="hot-inner">
            <div class="title">热招职位</div>
            <div class="details">
              <div class="detail" v-for="(item, index) in hotlist" :key="index">
                <div class="job">{{ item.job }}</div>
                <div class="address">{{ item.address }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="update">
          <div class="update-inner">
            <div class="title">招聘动态</div>
            <div class="details">
              <div class="detail" v-for="(up, index) in uplist" :key="index">
                <div class="job">{{ up.activity }}</div>
                <div class="time">{{ up.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部 -->
      <div class="foot-bottom">
        <!-- 上面部分 -->
        <div class="inner-top">
          <div class="inner">
            <!-- 左边部分 -->
            <div class="left">
              <div class="logo"></div>
              <div class="icon">
                <div class="tab vchat">
                  <i class="iconfont icon-weixin"></i>
                </div>
                <div class="tab weibo">
                  <i class="iconfont icon-weibo"></i>
                </div>
                <div class="tab ios">
                  <i class="iconfont icon-changyonglogo35"></i>
                  <span class="name name-ios">ios</span>
                </div>
                <div class="tab android">
                  <i class="iconfont icon-android"></i>
                  <span class="name">安卓</span>
                </div>
              </div>
            </div>
            <!-- 右边部分 -->
            <div class="right">
              <div
                class="connect"
                v-for="(item, index) in conlist"
                :key="index"
              >
                <div class="tip-icon">
                  <i :class="['iconfont', item.ico]"></i>
                </div>
                <div class="message">
                  <div class="title">{{ item.title }}</div>
                  <div class="context">
                    <span v-for="(ch, index) in item.child" :key="index">{{
                      ch
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 下面部分 -->
        <div class="inner-bottom">
          <div class="inner">
            <div class="top-info">
              <span
                >沪ICP备 13030189号 Copyright © 2014-<span>2022</span>
                行吟信息科技（上海）有限公司</span
              >
              <span>| 地址：上海市黄浦区马当路388号C座</span>
              <span>| 电话：021-64224530</span>
            </div>
            <div class="info">
              <span>
                <img
                  src="../../static/images/互联网举报中心.png"
                  class="email"
                />上海市互联网举报中心</span
              >| <span>沪网文〔2018〕4086-308号</span>|
              <span>增值电信业务经营许可证：沪B2-20150021</span>
            </div>
            <div class="info">
              <span
                ><span>2022</span> 沪公网安备 31010102002533号<img
                  src="../../static/images/police.png"
                  class="police"
              /></span>
              |
              <span>违法不良信息举报电话：(027) 5931 3970</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aJoinus',
  data () {
    return {
      hotlist: [
        { job: '图形图像编辑&渲染资深工程师', address: '北京市,上海市' },
        { job: '电商直播主播运营（美妆/美食）', address: '北京市,上海市' },
        { job: '数据仓库工程师-【大数据部】', address: '北京市,上海市' },
        { job: '电商-数据分析师', address: '上海市' },
        { job: '社区信息流推荐算法工程师', address: '北京市,上海市' },
      ],
      uplist: [
        { activity: 'RED OASIS | 小红书造城记', time: '2019-01-22' },
        { activity: '2018年小红书搞过的大事情', time: '2018-12-30' },
        { activity: '小红书广告商业化热招ing', time: '2018-11-26' },
      ],
      conlist: [
        { ico: 'icon-gongsijianjie', title: '公司相关', child: ['加入我们', '招商合作', '关于我们'] },
        { ico: 'icon-fuwuneirong', title: '内容相关', child: ['社区精选', '媒体报道'] },
        { ico: 'icon-xieyi', title: '协议条款', child: ['注册协议', '隐私协议'] }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .joinus {
    box-sizing: border-box;
    .join-header {
      width: 100%;
      height: 50px;
      background-color: #fff;
      position: fixed;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1001;
      .content {
        min-width: 1080px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        color: #333;
        font-weight: 300;
        .logo {
          width: 72px;
          margin-right: 160px;
        }
        .nav-box {
          //   width: calc(100% - 300px);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 98px;
          a {
            padding: 5px 0;
            text-decoration: none;
            color: #333;
            margin-right: 50px;
            position: relative;
          }
          .nav-active::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            top: 30px;
            background-color: #ff2442;
          }
        }
        .careus {
          margin-left: 120px;
          font-size: 13px;
        }
      }
    }
    .home-container {
      //   background-color: rgb(246, 251, 246);
      width: 100%;
      margin-top: 50px;
      background-color: #fbfbfb;
      //   上边部分
      .top {
        height: 700px;
        margin-bottom: 50px;
        min-width: 1040px;
        background-image: url("../../static/images/join02.jpg");
        background-position: top;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: rgb(238, 241, 248);
        .top-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 250px;
          //   大字
          .big-title {
            background-image: url("../../static/images/joinus05.png");
            background-repeat: no-repeat;
            background-size: cover;
            width: 898px;
            height: 140px;
            margin-bottom: 38px;
          }
          //   搜索
          .search-wrapper {
            width: 640px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            padding: 20px;
            margin-top: 7px;
            // 搜索框
            .search-box {
              width: 600px;
              height: 36px;
              border: 1px solid #ddd;
              border-radius: 18px;
              display: flex;
              justify-content: space-between;
              background-color: #fff;
              padding-left: 18px;
              input {
                width: 500px;
                outline: none;
                border: none;
                background-color: transparent;
              }
              .search-btn {
                width: 26px;
                height: 26px;
                margin-right: 5px;
                outline: none;
                border: none;
                background-color: transparent;
                position: relative;
                img {
                  width: 26px;
                  height: 26px;
                  vertical-align: middle;
                  position: absolute;
                  top: 4px;
                  right: 0px;
                  cursor: pointer;
                }
              }
            }
            // 搜索的关键词
            .hot-search {
              margin-top: 20px;
              margin-left: 15px;
              color: #fff;
              font-size: 13px;
              font-weight: 300;
              .hot {
                margin-right: 24px;
              }
              a {
                color: #fff;
                margin-right: 20px;
                text-decoration: none;
                transition: color 0.3s;
                &:hover {
                  color: #ff2442;
                }
              }
            }
          }
        }
      }
      //   下边部分
      .notices {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 100px 76px;

        .hot,
        .update {
          width: 460px;
          margin-right: 72px;
          .hot-inner,
          .update-inner {
            background-color: #fff;
            padding: 30px 30px 20px;
            height: 298px;
            display: flex;
            flex-direction: column;
            .title {
              margin-bottom: 18px;
              font-size: 20px;
              font-weight: 700;
              position: relative;
              &::before {
                position: absolute;
                content: "";
                width: 4px;
                height: 20px;
                background-color: #ff2442;
                border-radius: 8px;
                left: -15px;
                top: 4px;
              }
            }
            .details {
              .detail {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
                cursor: pointer;
                font-weight: 300;
                &:hover {
                  color: #ff2442;
                }
              }
            }
          }
        }
      }
      //   底部
      .foot-bottom {
        width: 100%;
        background: #39393b;
        padding-bottom: 20px;
        .inner-top {
          padding: 50px 0;
          border-bottom: 1px solid rgba(113, 110, 110, 0.9);
          display: flex;
          justify-content: center;
          .inner {
            width: 940px;
            display: flex;
            justify-content: space-between;
            // 左边图片+图标部分
            .left {
              display: flex;
              flex-direction: column;
              //   标记你的生活部分
              .logo {
                background-image: url("../../static/images/joinus-footer01.png");
                background-repeat: no-repeat;
                background-size: cover;
                width: 214px;
                height: 84px;
              }
              //   图标部分
              .icon {
                margin-top: 20px;
                color: #fff;
                display: flex;
                // 四个小模块统一设置部分
                .tab {
                  margin-right: 10px;
                  background-color: #4d4d4f;
                  border: 1px solid #4d4d4f;
                  cursor: pointer;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  .icon-weixin,
                  .icon-weibo {
                    font-size: 20px;
                  }
                  .icon-changyonglogo35,
                  .android {
                    font-size: 24px;
                  }
                  //   ios和安卓 文字设置
                  .name {
                    margin-left: 3px;
                    color: #d5d5d5;
                    font-size: 14px;
                  }
                }
                // 微信和微博单独设置
                .vchat,
                .weibo {
                  padding: 8px;
                  border-radius: 50%;
                  position: relative;
                }
                // 苹果和安卓单独设置
                .ios,
                .android {
                  padding: 6px 9px 6px 9px;
                  border-radius: 17px;
                }
                // 微信单独设置伪元素，一张二维码
                .vchat::before {
                  opacity: 0;
                  content: "";
                  background-color: #fff;
                  width: 100px;
                  height: 100px;
                  position: absolute;
                  left: -108px;
                  top: -76px;
                }
                .vchat::after {
                  opacity: 0;
                  content: "";
                  background-image: url("../../static/images/ewm.png");
                  background-repeat: no-repeat;
                  background-size: cover;
                  width: 90px;
                  height: 90px;
                  position: absolute;
                  left: -103px;
                  top: -70px;
                }
                .vchat:hover::before,
                .vchat:hover::after {
                  opacity: 1;
                }
              }
            }
            // 右边是公司相关、内容相关、协议条款部分
            .right {
              color: #fff;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              .connect {
                display: flex;
                justify-content: space-between;
                margin-left: 55px;
                // 图标部分
                .tip-icon {
                  i {
                    font-size: 28px;
                    cursor: pointer;
                    margin-right: 20px;
                    color: #d5d5d5;
                  }
                }
                // 公司相关部分
                .message {
                  display: flex;
                  flex-direction: column;
                  color: #d5d5d5;
                  .title {
                    margin-bottom: 18px;
                    font-size: 14px;
                  }
                  .context {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    span {
                      font-size: 12px;
                      margin-bottom: 7px;
                      cursor: pointer;
                      font-weight: 300;
                    }
                  }
                }
              }
            }
          }
        }
        .inner-bottom {
          display: flex;
          justify-content: center;
          .inner {
            width: 940px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #d5d5d5;
            font-size: 12px;
            padding-top: 23px;
            font-weight: 300;
            .info {
              margin-top: 10px;
              img {
                width: 18px;
                height: 18px;
                margin-left: 6px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
</style>