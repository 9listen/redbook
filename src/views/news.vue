<template>
  <div>
    <Header active="news" />
    <div class="news">
      <!-- 新闻中心标题部分 -->
      <CommonTitle
        :title="title"
        :banner="banner"
        bgcolor="rgba(51, 51, 51, 0.3)"
      />
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
                  <div class="left-items">
                    <!-- 左边轮播图 -->
                    <div class="carousel">
                      <div
                        class="carousel-content"
                        v-for="(item, index) in datalists"
                        :key="index"
                        v-show="item.index === currentIndex"
                      >
                        <span class="header">{{ item.header }}</span>
                        <span class="title">{{ item.title }}</span>
                        <span class="content">{{ item.content }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer">
                  <div class="left-arrow" @click="goPre(index)">←</div>
                  <div class="index">0 / 05</div>
                  <div class="right-arrow">→</div>
                </div>
              </div>
              <div class="middle-content">
                <div class="middle">
                  <!-- 五张图 -->
                  <div class="carousel">
                    <!-- 每一张图 -->
                    <div class="carousel-content">
                      <video
                        class="middle-video"
                        type="video/mp4"
                        src="../../static/images/piano-converted.mp4"
                        loop
                      ></video>
                      <div class="video-mask"></div>
                    </div>
                  </div>
                </div>
                <i class="play-button"></i>
              </div>
              <div class="right-content">
                <div class="right">
                  <div class="carousel">
                    <div class="carousel-content">
                      <span class="header">第二期</span>
                      <span class="title">有舞蹈，生活才有style！</span>
                      <div class="mask"></div>
                    </div>
                  </div>
                </div>
                <i class="play-button"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RedFooter />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import RedFooter from '@/components/redfooter.vue'
import CommonTitle from '@/components/commontitle/commontitle.vue'
import { reqGetNews } from '@/apis/index.js'
export default {
  name: 'aNews',
  components: { Header, CommonTitle, RedFooter },
  data () {
    return {
      title: '新闻中心',
      banner: require('../../static/images/news.png'),
      items: [],
      datalists: [
        { index: 0, header: '第一期:', title: '有音乐，生活才有style', content: '小红薯们合奏一曲在小红书上被pick了1200万次的单曲 I Remember，实力诠释什么叫有音乐，生活才有style' },
        { index: 1, header: '第二期:', title: '有舞蹈，生活才有style！', content: '怀孕四十周跳舞的孕妈、跳着舞步入婚姻殿堂的新婚夫妇、刚刚上学但已经拥有C位舞姿的小朋友……他们在车库、在海边、在广场上、甚至在小红书办公室，实力诠释了什么叫做有舞蹈，生活才有Style!' },
        { index: 2, header: '第三期:', title: '巴黎圣母院：感谢曾经屹立，期待来日重逢', content: '文明是脆弱的，但也是永恒的。在小红书上，有4700多位小红薯发布过关于巴黎圣母院的笔记，每一张照片、每一段视频，都是她在我们真实生活中美好的存在。小红书将这些和巴黎圣母院相关的记忆织成集锦，记录下和她有关的爱与美，愿美好永存，生活继续。' },
        { index: 3, header: '第四期:', title: '别让直男这个词，限制了你的想象力', content: '直男干嘛把人生浪费在买衣服上？”“整天研究穿搭，你不够man。”社会对直男的偏见，也太多了吧！小红书邀请四位很会生活的“新直男”用户实名diss社会上的各种直男标签：别让直男这个词，限制了你的想象力！' },
        { index: 4, header: '第五期:', title: '小红书上的宝藏妈妈', content: '谁能想到，那些小红书上精致的猪猪女孩，最后都变成了“宝藏妈妈”。她们读得了绘本，拼得出乐高，念得完博士，连得出腹肌，拼得成事业，抗得过抑郁。当得了妈妈，更做得好自己。她们在小红书上真实地分享这一切。母亲节，小红书记录了三位“宝藏妈妈”的生活片段，希望将温暖传递给更多人。' },
      ],
      currentIndex: 3,
      timer: null,
    }
  },
  // 🌈🌈🌈🌈🌈方法1直接调用该函数获取服务器数据，方法2:vuex去获取数据，页面请求的数据较多的时候方便管理
  mounted () {
    reqGetNews().then(res => {
      if (res.status === 200) {
        this.items = res.data
      }
    });
    // 轮播图
    // setInterval(() => {
    //   this.currentIndex++;
    //   if (this.currentIndex > this.datalists.length - 1) {
    //     this.currentIndex = 0
    //   }
    // }, 3000)
  },
  methods: {
    goPre (index) {
      this.currentIndex = index;
    }
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
    // 插入标题和背景图片部分在组件commontitle里面
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
        margin-bottom: 150px;
        .story-title {
          margin-top: 100px;
        }
        .music {
          box-sizing: border-box;
          display: flex;
          //   width: 80%;
          justify-content: center;
          align-items: flex-end;
          flex-direction: row;
          // background-color: rgb(220, 35, 164);
          .user-life {
            width: 1013px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .left-content {
              box-sizing: border-box;
              width: 332px;
              height: 415px;
              padding: 40px 34px;
              background-image: url("../../static/images/story1.jpeg");
              background-repeat: no-repeat;
              background-size: cover;
              color: rgb(18, 14, 1);
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              .left-info {
                width: 264px;
                height: 290px;
                position: relative;
                .left-items {
                  height: 290px;
                  max-width: 100%;
                  .carousel {
                    display: flex;
                    width: 1320px;
                    height: 290px;
                    position: relative;
                    .carousel-content {
                      width: 264px;
                      height: 290px;
                      display: flex;
                      justify-content: flex-start;
                      flex-direction: column;
                      font-size: 14px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      .header {
                        line-height: 20px;
                      }
                      .title {
                        font-size: 26px;
                        margin: 15px 0 35px;
                        line-height: 39px;
                        white-space: nowrap;
                        overflow: hidden;
                        // text-overflow: ellipsis;
                      }
                      .content {
                        width: 264px;
                        line-height: 21px;
                        //   overflow: hidden;
                      }
                    }
                  }
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
              display: none;
              position: relative;
              box-sizing: border-box;
              width: 464px;
              height: 260px;
              .middle {
                position: relative;
                // width: 464px;
                height: 260px;
                max-width: 100%;
                overflow: hidden;
                .carousel {
                  //五个视频并列
                  position: relative;
                  height: 260px;
                  margin: 0;
                  padding: 0;
                  .carousel-content {
                    position: relative;
                    width: 464px;
                    height: 260px;
                    overflow: hidden;
                    .middle-video {
                      position: absolute;
                      width: 464px;
                      height: auto;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                    }
                    .video-mask {
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      top: 0;
                      left: 0;
                      background-image: url("../../static/images/piano.jpeg");
                      background-repeat: no-repeat;
                      background-size: cover;
                    }
                  }
                }
              }
              .play-button {
                background-image: url("../../static/images/btn.png");
                background-repeat: no-repeat;
                background-size: cover;
                position: absolute;
                width: 64px;
                height: 64px;
                top: 98px;
                left: 200px;
                cursor: pointer;
              }
            }
            .right-content {
              display: none;
              width: 203px;
              height: 300px;
              position: relative;
              margin-left: 14px;
              //   background-color: rgb(235, 186, 186);
              .right {
                position: relative;
                overflow: hidden;
                .carousel {
                  //五张轮播图
                  position: relative;
                  margin: 0;
                  padding: 0;
                  .carousel-content {
                    position: relative;
                    width: 203px;
                    height: 300px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;
                    color: #333;
                    .header {
                      font-size: 14px;
                      font-weight: 500;
                      line-height: 16px;
                      margin-bottom: 20px;
                    }
                    .title {
                      font-size: 14px;
                      font-weight: 500;
                      margin-bottom: 14px;
                    }
                    .mask {
                      background-image: url("../../static/images/dance.jpeg");
                      background-repeat: no-repeat;
                      background-size: cover;
                      width: 203px;
                      height: 132px;
                    }
                  }
                }
              }
              .play-button {
                position: absolute;
                background-image: url("../../static/images/btn.png");
                background-repeat: no-repeat;
                background-size: cover;
                width: 26px;
                height: 26px;
                left: 88px;
                bottom: 53px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
</style>