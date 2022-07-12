<template>
  <div>
    <Header active="home" />
    <div class="home-container">
      <div class="bg-video">
        <video
          type="video/mp4"
          src="../../static/images/bg-video.mp4"
          autoplay
          muted
          loop
        ></video>
      </div>
      <div class="content">
        <div class="middle">
          <div class="middle-wrapper">
            <div class="phone">
              <div class="mp">
                <video
                  class="two-video"
                  type="video/mp4"
                  src="../../static/images/new5.27.mp4"
                  autoplay
                  muted
                  loop
                ></video>
              </div>
              <div class="bg-phone"></div>
            </div>
            <div class="mark-right">
              <div class="redlogo"></div>
              <h2 class="mark-life">标记我的生活</h2>
              <div class="ewm">
                <div class="ios">
                  <i class="iconfont icon-changyonglogo35"></i>
                  <span class="iosb">ios版</span>
                </div>
                <div class="android">
                  <i class="iconfont icon-android"></i>
                  <span>Android版</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RedFooter :isHome="isHome" />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import RedFooter from '@/components/redfooter.vue'
export default {
  name: 'aHome',
  components: { Header, RedFooter },
  data () {
    return {
      isHome: true,
    }
  }

}
</script> 

<style lang="less" scoped>
  .home-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .bg-video {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .content {
      .middle {
        width: 100%;
        height: 100%;
        .middle-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-60%, -60%);
          .phone {
            position: relative;
            width: 200px;
            height: 400px;
            .mp {
              position: absolute;
              width: 200px;
              height: 400px;
              z-index: -1;
              .two-video {
                position: absolute;
                width: 200px;
                height: 380px;
                top: 9px;
              }
            }
            .bg-phone {
              width: 200px;
              height: 400px;
              background-image: url("../../static/images/phone.png");
              background-repeat: no-repeat;
              background-size: 100%;
            }
          }
          .mark-right {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transform: scale(0.8);
            .redlogo {
              background-image: url("../../static/images/redlogo.png");
              background-repeat: no-repeat;
              background-size: contain;
              width: 143px;
              height: 50px;
            }
            .mark-life {
              font-size: 48px;
              color: #fff;
              margin-top: 10px;
              margin-bottom: 50px;
            }
            .ewm {
              display: flex;
              color: #333;
              .ios,
              .android {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                width: 150px;
                height: 40px;
                font-size: 19px;
                border: 1px solid #ccc;
                background-color: #fff;
                border-radius: 20px;
                .iconfont {
                  font-size: 33px;
                }
              }
              .android {
                margin-left: 10px;
              }
              .ios::before,
              .android::before {
                opacity: 0;
                content: "";
                position: absolute;
                width: 150px;
                height: 144px;
                top: 213px;
                background-color: #fff;
                border-radius: 0 0 20px 20px;
              }
              .android::before {
                right: 0px;
              }
              .ios::after,
              .android::after {
                opacity: 0;
                content: "";
                position: absolute;
                font-family: "iconfont" !important;
                background-image: url("../../static/images/ewm.png");
                width: 134px;
                height: 134px;
                top: 215px;
                border-radius: 12px;
                background-repeat: no-repeat;
                background-size: contain;
              }
              .android::after {
                right: 8px;
              }
              .ios:hover,
              .android:hover {
                border-radius: 20px 20px 0 0;
              }
              .ios:hover::before,
              .android:hover::before {
                opacity: 1;
              }
              .ios:hover::after,
              .android:hover::after {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
</style>