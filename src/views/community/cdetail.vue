<template>
  <div class="cdetail">
    <Header :isCommunity="isCommunity" />
    <div class="notes">
      <div class="note-box">
        <div class="box">
          <div class="left">
            <!-- 轮播图部分 -->
            <div class="bottom-gap">
              <div class="swiper">
                <!-- 轮播图 -->
                <el-carousel
                  indicator-position="outside"
                  trigger="click"
                  arrow="always"
                  :autoplay="false"
                >
                  <el-carousel-item
                    v-for="(item, index) in imglist"
                    :key="index"
                  >
                    <h3 class="small">
                      <img :src="item.url" />
                    </h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <!--文章部分  -->
            <div class="article">
              <div class="title">今日读星野道夫《旅行之木》🪵</div>
              <div class="content">
                <p>上次露营翻翻看朋友随身带的 ——</p>
                <p>
                  《森林、冰河与鲸》星野道夫写到好美，像孩童一样感受着自然。
                </p>
                <p>
                  沉迷于渡鸦的传说，静静仁立在海边直至消亡的古老图腾柱、夜幕中的繁星闪烁、阿拉斯加和梦中的熊…让许久没有去长途旅行的我心生向往。
                </p>
                <p>
                  而这本《旅行之木》也是在更久以前他为了进入阿拉斯加大学，为念想起航后的故事。红崖海湾、北国之秋、加拉帕戈斯的落日、萨尔茨堡的奇妙境遇…
                </p>
                <p>
                  文字感染力十足，让我读时画面感连篇，我仿佛也随着船舶进入了狭窄入口，每座海湾，都是原生自然的世界，在被错综复杂的峽湾地形环绕的内海，漂浮着无数大小不的岛峭，它们的表面完全被茂密的原生林与冰川所覆盖……
                </p>
                <p>我想在这片海域旅行的一大乐趣，</p>
                <p>也许就是每天选择不同的海湾下锚吧。</p>
                <p>
                  他说：“通过流转的季节，我们能真真切切地感觉到朝无尽的彼方流淌的时间。我觉得大自然的这套机制真是再妙不过了。
                </p>
                <p>
                  一年一度，转瞬即逝，教人依依不舍的季节，我还能在人世间与它相逢几回？也许清算剩余的次数，才最能让我们痛感人生的短暂。”
                </p>
                <p>颇有几分禅意，大环境当下读来又是如此透彻。</p>
                <p>那就写到这儿吧，改日再聊。</p>
                <p>#旅行 #书单 #我的私人书单</p>
                <p>#阅读书单 #星野道夫</p>
                <p>#拍出氛围感 #可持续生活</p>
                <p>#TOMMYCOFFEE</p>
              </div>
              <!-- 发布时间 -->
              <div class="release-time">
                <div class="publish">
                  <span>发布于 2022-07-11 17:47</span>
                </div>
              </div>
              <!-- 一起来分享给朋友们看看吧 固定盒子 -->
              <div class="share">
                <div class="author-info">
                  <div class="avatar">
                    <img src="../../../static/images/cavatar.jpg" alt="头像" />
                  </div>
                  <div class="author-name">橘子洲头🍊</div>
                </div>
                <div class="share-time">
                  <span class="bar"></span>
                  <div class="friends">一起来分享给朋友们看看吧：</div>
                  <div class="iconfont">
                    <div class="weixin icon"></div>
                    <div class="weibo icon"></div>
                    <div class="qq icon"></div>
                  </div>
                </div>
              </div>
              <!-- 笔记评论盒子 -->
              <div class="comment">
                <div class="comment-title">笔记评论</div>
                <!-- 所有评论 -->
                <div class="comment-content">
                  <!-- 每条评论 -->
                  <div class="content">
                    <div class="top">
                      <div class="author">
                        <div class="author-avatar">
                          <img src="../../../static/images/cavatar.jpg" />
                        </div>
                        <div class="comment-column">
                          <div class="author-name">橘子洲头🍊(作者)</div>
                          <div class="date">07-11</div>
                        </div>
                      </div>
                      <div class="response">回复</div>
                    </div>
                    <div class="comment-center">
                      <div class="desc">
                        Shoes | Hereu Bag | songmont崧*杏色Top | COSPants |
                        Andneeds📷｜Leica M10-P
                      </div>
                    </div>
                  </div>
                  <!-- 第二条评论-->
                  <div class="content content-two">
                    <div class="top">
                      <div class="author">
                        <div class="author-avatar">
                          <img src="../../../static/images/cavatar2.jpg" />
                        </div>
                        <div class="comment-column">
                          <div class="author-name">Being的生活实验室</div>
                          <div class="date">07-11</div>
                        </div>
                      </div>
                      <div class="response">回复</div>
                    </div>
                    <div class="comment-center">
                      <div class="desc">
                        “不同的人，即使站在同一个地方，透过各自的人生，看到的风景也有所不同。”
                        这句在我小本子上记了很多年
                      </div>
                    </div>
                    <!-- 每条回复 -->
                    <div class="replies">
                      <div class="reply">橘子洲头🍊(作者)：说得真好</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="note-author">
              <div class="text">笔记作者</div>
              <div class="author">
                <div class="avatar">
                  <img src="../../../static/images/cavatar.jpg" alt="头像" />
                </div>
                <div class="author-name">橘子洲头🍊</div>
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
export default {
  name: 'cDetail',
  components: { Header, RedFooter },
  data () {
    return {
      isCommunity: true,
      imglist: [
        { url: require('../../../static/images/1.jpg') },
        { url: require('../../../static/images/2.jpg') },
        { url: require('../../../static/images/3.jpg') },
        { url: require('../../../static/images/4.jpg') },
        { url: require('../../../static/images/5.jpg') },
        { url: require('../../../static/images/6.jpg') },
        { url: require('../../../static/images/7.jpg') },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .notes {
    background-color: #fbfbfb;
    .note-box {
      width: 850px;
      margin: 100px auto 0;
      padding: 10px 0 36px 0;
      // background-color: rgb(122, 107, 107);
      .box {
        // background-color: #eab5b5;
        display: flex;
        justify-content: space-around;
        // 左边部分
        .left {
          margin-top: 20px;
          //   轮播图部分
          .bottom-gap {
            margin-bottom: 20px;
            .swiper {
              width: 500px;
              height: 553px;
              // background-color: rgba(242, 188, 188, 0.2);
              .el-carousel {
                width: 500px;
                height: 600px;
                /deep/ .el-carousel__container {
                  height: 500px;
                  .el-carousel__arrow {
                    background-color: #fff;
                    width: 30px;
                    height: 30px;
                    border-bottom: 2px solid #ccc;
                    // box-shadow: 0 1px 20px 0 rgb(0 0 0 / 5%);
                    .el-icon-arrow-left,
                    .el-icon-arrow-right::before {
                      color: #ccc;
                      font-size: 20px;
                      font-weight: 700;
                    }
                  }
                  .el-carousel__item {
                    width: 500px;
                    height: 500px;
                    display: flex;
                    justify-content: center;
                    .small {
                      img {
                        width: 356px;
                        height: 500px;
                      }
                    }
                  }
                }
                /deep/ .el-carousel__indicators {
                  .el-carousel__indicator {
                    padding: 12px 5px;
                    .el-carousel__button {
                      width: 40px;
                      height: 40px;
                      background-image: url("../../../static/images/1.jpg");
                      background-repeat: no-repeat;
                      background-size: cover;
                      border-radius: 4px;
                    }
                  }
                }
              }
            }
          }
          //   文章部分
          .article {
            width: 500px;
            margin-top: 18px;
            .title {
              font-size: 24px;
              font-weight: 500;
              overflow: hidden;
              margin: 15px;
            }
            .content {
              font-size: 14px;
              p {
                margin: 14px 0;
                line-height: 20px;
              }
            }
            // 发布时间
            .release-time {
              margin-bottom: 30px;
              .publish {
                margin-top: 30px;
                color: #999;
              }
            }
            // 固定的：一起分享。。盒子
            .share {
              //   position: fixed;
              width: 500px;
              height: 50px;
              border-radius: 25px;
              box-shadow: 0 1px 20px 0 rgb(0 0 0 / 5%);
              display: flex;
              justify-content: space-between;
              align-items: center;
              background-color: #fff;
              margin: 0 0 16px;
              .author-info {
                margin: 13px 11px 0;
                padding: 0 0 10px;
                cursor: pointer;
                color: #333;
                display: flex;
                align-items: center;
                .avatar {
                  position: relative;

                  // 关注的那个✅
                  &::after {
                    content: "";
                    position: absolute;
                    width: 15px;
                    height: 15px;
                    background-image: url("../../../static/images/8circle.png");
                    background-repeat: no-repeat;
                    background-size: cover;
                    bottom: 2px;
                    right: 0;
                  }
                  img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                  }
                }
                .author-name {
                  margin: 2px 0 0 15px;
                  font-weight: 500;
                  white-space: nowrap;
                  font-size: 14px;
                }
              }
              .share-time {
                font-size: 14px;
                line-height: 50px;
                margin-left: 22px;
                margin-right: 6px;
                display: flex;
                justify-content: center;
                align-items: center;
                .bar {
                  display: inline-block;
                  width: 3px;
                  height: 19px;
                  border-radius: 1.5px;
                  margin: 4px 5px 0 0;
                  background-color: #d8d8d8;
                }
                .friends {
                  height: 20px;
                  line-height: 23px;
                  padding-left: 20px;
                  color: #333;
                }
                .iconfont {
                  display: flex;
                  margin-left: 7px;
                  .icon {
                    background-repeat: no-repeat;
                    background-size: contain;
                    width: 26px;
                    height: 26px;
                    margin-right: 6px;
                    cursor: pointer;
                  }
                  .weixin {
                    background-image: url("../../../static/images/cweixin.png");
                  }
                  .weibo {
                    background-image: url("../../../static/images/cweibo.png");
                  }
                  .qq {
                    background-image: url("../../../static/images/cqq.png");
                  }
                }
              }
            }
            // 笔记评论盒子
            .comment {
              width: 500px;
              // 笔记评论
              .comment-title {
                font-weight: 700;
                margin-bottom: 20px;
                position: relative;
                &::before {
                  content: "";
                  width: 5px;
                  height: 16px;
                  background-color: #ff2442;
                  position: absolute;
                  left: -10px;
                  top: 4px;
                }
              }
              // 评论区
              .comment-content {
                width: 500px;
                // 每条评论
                .content {
                  padding: 0 0 20px;
                  border-bottom: 1px solid #eee;
                  margin-left: 15px;
                  //   background-color: #fff;
                  //   上面部分
                  .top {
                    display: flex;
                    justify-content: space-between;
                    // 左边作者+日期+头像
                    .author {
                      display: flex;
                      .author-avatar {
                        img {
                          width: 30px;
                          height: 30px;
                          border-radius: 50%;
                        }
                      }
                      .comment-column {
                        display: flex;
                        flex-direction: column;
                        margin-left: 10px;
                        .author-name {
                          font-size: 14px;
                          cursor: pointer;
                        }
                        .date {
                          margin-top: 5px;
                          font-size: 12px;
                          line-height: 14px;
                          color: #999;
                        }
                      }
                    }
                    // 回复
                    .response {
                      color: #666;
                      cursor: pointer;
                    }
                  }
                  //   评论区具体言论
                  .comment-center {
                    .desc {
                      margin: 10px 0 0 40px;
                    }
                  }
                }
                // 第二条评论
                .content-two {
                  padding: 20px 0;
                  .replies {
                    padding: 0 10px;
                    margin: 10px 0 0 40px;
                    background-color: #f5f8fa;
                    .reply {
                      padding: 10px 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .right {
        margin: 20px 0;
        width: 320px;
        //   background-color: #fff;
        .note-author {
          width: 320px;
          height: 176px;
          border: 1px solid #eee;
          border-radius: 4px;
          background-color: #fff;
          .text {
            //笔记作者-
            font-weight: 500;
            padding: 10px 0 10px 20px;
            border-bottom: 1px solid #eee;
          }
          .author {
            margin: 10px 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
            display: flex;
            .avatar {
              position: relative;
              // 关注的那个✅
              &::after {
                content: "";
                position: absolute;
                width: 15px;
                height: 15px;
                background-image: url("../../../static/images/8circle.png");
                background-repeat: no-repeat;
                background-size: cover;
                bottom: 2px;
                right: 0;
              }
              img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
              }
            }
            .author-name {
              margin: 2px 0 0 15px;
              font-weight: 500;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
</style>