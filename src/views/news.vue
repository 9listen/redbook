<template>
  <div>
    <Header />
    <div class="news">
      <div class="news-center">
        <div class="bg-cover"></div>
        <h1 class="news-title">新闻中心</h1>
      </div>
      <div class="news-body">
        <!-- 🌈热门报道 -->
        <div class="hot">
          <div class="hot-title">热门报道</div>
          <div class="hot-content">
            <div class="hot-item" v-for="(item, index) in items" :key="index">
              <span class="detail">{{ item.detail }}</span>
              <span class="source">
                <span class="address">{{ item.address }}</span>
                <span class="date">{{ item.date }}</span>
              </span>
            </div>
            <span class="hot-more"
              >查看更多
              <span class="arrow">→</span>
            </span>
          </div>
        </div>
        <!-- 🌈近期动态 -->
        <div class="hot active">
          <div class="hot-title">近期动态</div>
          <div class="hot-content">
            <div class="hot-item" v-for="(item, index) in items" :key="index">
              <span class="detail">{{ item.detail }}</span>
              <span class="source">
                <span class="date">{{ item.date }}</span>
              </span>
            </div>
            <span class="hot-more"
              >查看更多
              <span class="arrow">→</span>
            </span>
          </div>
        </div>
        <!-- 🌈荣誉奖项 -->
        <div class="hot honor">
          <div class="hot-title">荣誉奖项</div>
          <div class="hot-content">
            <div class="hot-item" v-for="(item, index) in items" :key="index">
              <span class="detail">新商业引领者</span>
              <span class="source">
                <span class="address">36氪</span>
                <span class="date">2019.07</span>
              </span>
            </div>
            <span class="hot-more"
              >查看更多
              <span class="arrow">→</span>
            </span>
          </div>
        </div>
        <div class="hot story">
          <div class="hot-title story-title">用户故事</div>
          <div class="music">
            <div class="user-life">
              <div class="left-content">
                <div class="left-info">
                  <span class="header">第一期：</span>
                  <span class="title">有音乐，生活才有style</span>
                  <span class="content"
                    >小红薯们合奏一曲在小红书上被pick了1200万次的单曲 I
                    Remember，实力诠释什么叫有音乐，生活才有style</span
                  >
                </div>
                <div class="footer">
                  <div class="left-arrow">←</div>
                  <div class="index">0 / 05</div>
                  <div class="right-arrow">→</div>
                </div>
              </div>
              <div class="middle-content">
                <div class="middle">
                  <div></div>
                  <div>
                    <video
                      type="video/mp4"
                      src="../../static/images/piano-converted.mp4"
                      loop
                    ></video>
                  </div>
                </div>
              </div>
              <div class="right-content">22</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <RedFooter /> -->
  </div>
</template>

<script>
import Header from '@/components/header.vue'
// import RedFooter from '@/components/redfooter.vue'
import { reqGetNews } from '@/apis/index.js'
export default {
  name: 'aNews',
  components: { Header, },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    reqGetNews().then(res => {
      if (res.status === 200) {
        this.items = res.data.data
      }
    })
  }
}
</script>

<style lang="less" scoped>
  .news {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // background-color: rgba(227, 176, 176, 0.2);
    .news-center {
      position: relative;
      width: 100%;
      height: 500px;
      background-image: url("../../static/images/news.png");
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .bg-cover {
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .news-title {
        // position: absolute;
        display: inline-block;
        font-size: 48px;
        color: #fff;
        z-index: 1;
      }
    }
    .news-body {
      //   background-color: rgb(227, 229, 207);
      padding: 100px 0 0;
      width: 100%;
      position: relative;
      .hot {
        width: 100%;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .hot-title {
          font-size: 36px;
          line-height: 50px;
          font-weight: 700;
          margin-bottom: 50px;
          color: #333;
        }
        .hot-content {
          font-size: 14px;
          line-height: 16px;
          color: #333;
          //   background-color: rgb(225, 206, 198);
          width: 70%;
          margin: 0 auto;
          cursor: pointer;
          .hot-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 40px;
            &:hover {
              color: rgb(235, 46, 46);
            }
            .source {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              .address {
                margin-right: 50px;
                text-align: right;
              }
            }
          }
          .hot-more {
            display: flex;
            justify-content: flex-end;
            font-size: 16px;
            line-height: 16px;
            color: #ff2442;
            .arrow {
              font-size: 25px;
              padding: 0 0 0 20px;
            }
          }
        }
      }
      //近期动态单独设置的部分没有margin值
      .active {
        margin-top: 0;
      }
      // 用户故事
      .story {
        margin-top: 110px;
        background-color: #fbfbfb;
        .story-title {
          margin-top: 100px;
        }
        .music {
          box-sizing: border-box;
          display: flex;
          // width: 80%;
          justify-content: center;
          align-items: flex-end;
          flex-direction: row;
          // background-color: rgb(220, 35, 164);
          .user-life {
            width: 1013px;
            display: flex;
            justify-content: center;
            .left-content {
              box-sizing: border-box;
              width: 332px;
              height: 415px;
              padding: 40px 34px;
              background-image: url("../../static/images/story1.jpeg");
              background-repeat: no-repeat;
              background-size: cover;
              color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              .left-info {
                width: 264px;
                height: 290px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                font-size: 14px;
                .header {
                  line-height: 20px;
                }
                .title {
                  font-size: 26px;
                  margin: 15px 0 35px;
                  line-height: 39px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                .content {
                  width: 264px;
                  line-height: 21px;
                  overflow: hidden;
                }
              }
              .footer {
                width: 172px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 14px;
                line-height: 16px;
                .left-arrow,
                .right-arrow {
                  font-size: 20px;
                  cursor: pointer;
                }
              }
            }
            .middle-content {
              width: 464px;
              height: 260px;
              position: relative;
              .middle {
                height: 260px;
                max-width: 100%;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
</style>