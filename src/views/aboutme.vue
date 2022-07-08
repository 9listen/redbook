<template>
  <div>
    <Header />
    <div class="aboutme">
      <div class="about-center">
        <div class="bg-cover"></div>
        <h1 class="about-title">关于我们</h1>
      </div>
      <div class="about-body">
        <!-- 🌈什么是小红书 -->
        <div class="hot redbook">
          <div class="hot-title">什么是小红书</div>
          <div class="hot-content">
            <!-- 🌈简介 -->
            <div class="redbook-desc">
              小红书是年轻人的生活方式平台，由毛文超和瞿芳于2013年在上海创立。小红书以“InspireLives
              分享和发现世界的精彩”为使命，用户可以通过短视频、图文等形式记录生活点滴，分享生活方式，并基于兴趣形成互动。
              截至到2019年10月，小红书月活跃用户数已经过亿，其中70%用户是90后，并持续快速增长。
            </div>
            <!-- 🌈三张过度效果的图 -->
            <div class="redbook-container">
              <!-- 每份 -->
              <div
                class="card-wrapper"
                v-for="(wrapper, index) in wrappers"
                :key="index"
              >
                <div class="card">
                  <div
                    class="card-front"
                    :style="{ 'background-image': `url(${wrapper.src})` }"
                  >
                    <div class="mask-front">
                      <span class="index">{{ wrapper.index }}</span>
                      <span class="head">{{ wrapper.head }}</span>
                    </div>
                  </div>
                  <!-- 红色背景部分 -->
                  <div class="card-back">
                    <div class="mask-back">
                      <span class="index">{{ wrapper.index }}</span>
                      <span class="head">{{ wrapper.head }}</span>
                      <span class="line"></span>
                      <span class="desc">{{ wrapper.desc }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 🌈使命、愿景、企业价值观 -->
            <div class="redbook-item">
              <div
                class="every-wrapper"
                v-for="(data, title) in details"
                :key="title"
              >
                <div class="detail-wrapper">
                  <div class="img-wrapper">
                    <img :src="data.src" alt="" />
                  </div>
                  <div class="title">{{ data.title }}</div>
                  <div class="detail">{{ data.detail }}</div>
                </div>
                <div :class="[{ line: (line = data.line) }]"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 🌈公司环境 -->
        <div class="hot story">
          <div class="hot-title story-title">公司环境</div>
          <div class="company">
            <div class="address">
              <span
                class="office"
                :class="[{ current: this.active === 'shanghai' }]"
                @click="getActive('shanghai')"
                >上海总部</span
              >
              <span
                class="office"
                :class="[{ current: this.active === 'beijin' }]"
                @click="getActive('beijin')"
                >北京</span
              >
              <span
                class="office no-right"
                :class="[{ current: this.active === 'wuhan' }]"
                @click="getActive('wuhan')"
                >武汉</span
              >
            </div>
            <!-- 每份图片 -->
            <div class="address-img">
              <div
                class="img-wrapper img-current"
                v-for="(tab, index) in renderlist"
                :key="index"
              >
                <img class="img-list" :src="tab.src" />
              </div>
            </div>
          </div>
        </div>
        <!-- 🌈小红书发展史-->
        <div class="hot redbook">
          <div class="hot-title">小红书发展史</div>
        </div>
        <!--🌈 合作邮箱 -->
        <div class="hot story">
          <div class="hot-title story-title">合作邮箱</div>
        </div>
        <!--🌈 我们在这里 -->
        <div class="hot redbook">
          <div class="hot-title">我们在这里</div>
        </div>
        <!--🌈 小红书关心每一位用户与合作伙伴的声音-->
        <div class="hot story">
          <div class="hot-title story-title">
            小红书关心每一位用户与合作伙伴的声音
          </div>
        </div>
        <!--🌈 更多方式关注小红书 -->
        <div class="hot redbook">
          <div class="hot-title">更多方式关注小红书</div>
        </div>
      </div>
    </div>
    <!-- <RedFooter /> -->
  </div>
</template>

<script>
import Header from '@/components/header.vue'
// import RedFooter from '@/components/redfooter.vue'
export default {
  name: 'AboutMe',
  components: { Header, },
  data () {
    return {
      wrappers: [
        {
          index: '01',
          head: '社区',
          desc: '小红书社区目前内容覆盖时尚、个护、彩妆、美食、旅行、娱乐、读书、健身、母婴等各个生活方式领域，每天产生超过70亿次的笔记曝光，其中超过95%为UGC内容',
          src: require('../../static/images/about01.jpeg')
        },
        {
          index: '01',
          head: '企业号',
          desc: '小红书企业号部门围绕“企业号”这一核心产品，整合公司从社区营销一直到交易闭环的资源，更好地连接消费者和品牌，帮助品牌在小红书完成一站式闭环营销，提供全链条服务',
          src: require('../../static/images/about02.jpeg')
        },
        {
          index: '03',
          head: '福利社',
          desc: '小红书福利社是小红书的自营电商平台，在小红书福利社，用户可以一键购买来自全世界的优质美妆、时尚、家电、零食商品',
          src: require('../../static/images/about03.jpeg')
        },
      ],
      details: [
        {
          title: '使命',
          detail: 'Inspire Lives 分享和发现世界的精彩',
          src: require('../../static/images/about04.png'),
          line: true,
        },
        {
          title: '愿景',
          detail: '成为最受用户信任的互联网公司',
          src: require('../../static/images/about05.png'),
          line: true,
        },
        {
          title: '企业价值观',
          detail: '向上、走进用户、开放心态、务实、担当',
          src: require('../../static/images/about06.png'),
          line: false,
        },
      ],
      tablist: {
        shanghai: [
          { src: require('../../static/images/shanghai01.jpeg') },
          { src: require('../../static/images/shanghai02.jpeg') },
          { src: require('../../static/images/shanghai03.jpeg') },
        ],
        beijin: [
          { src: require('../../static/images/bei01.jpeg') },
          { src: require('../../static/images/bei02.jpeg') },
          { src: require('../../static/images/bei03.jpeg') },
        ],
        wuhan: [
          { src: require('../../static/images/wu01.jpeg') },
          { src: require('../../static/images/wu02.jpeg') },
          { src: require('../../static/images/wu03.jpeg') },
        ]

      },
      active: 'shanghai',
    }
  },
  methods: {
    getActive (value) {
      console.log('🔥log=>aboutme=>193:value:%o', value)
      if (value)
        this.active = value
    }
  },
  computed: {
    renderlist () {
      return this.tablist[this.active]
    }
  }
}
</script>

<style lang="less" scoped>
  .aboutme {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // background-color: rgba(227, 176, 176, 0.2);
    .about-center {
      position: relative;
      width: 100%;
      height: 500px;
      background-image: url("../../static/images/aboutme.png");
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
      .about-title {
        // position: absolute;
        display: inline-block;
        font-size: 48px;
        color: #fff;
        z-index: 1;
      }
    }
    .about-body {
      // &:not(:last-child){

      // }
      //   background-color: rgb(227, 229, 207);
      padding: 100px 0 0;
      width: 100%;
      position: relative;
      //一些公共设置
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
        // 什么是小红书
        .hot-content {
          .redbook-desc {
            width: 960px;
            color: #555;
            line-height: 24px;
            margin-bottom: 50px;
          }
          .redbook-container {
            display: flex;
            justify-content: center;
            //   每张图片容器
            .card-wrapper {
              width: 240px;
              height: 350px;
              .card {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                //   背景图片
                .card-front {
                  // display: none;
                  cursor: pointer;
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-image: url("../../static/images/about01.jpeg");
                  background-repeat: no-repeat;
                  background-size: cover;
                  transition: opacity 0.3s ease 0s;
                  // 背景
                  .mask-front {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: hsla(0, 0%, 100%, 0.6);
                    opacity: 0.8;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    //   文字
                    .index {
                      margin-bottom: 20px;
                      line-height: 24px;
                    }
                    .head {
                      color: #333;
                      font-size: 24px;
                      line-height: 30px;
                    }
                  }
                }
                .card-back {
                  opacity: 0; //🌸
                  position: absolute;
                  transition: opacity 0.6s ease 0s; //ease规定动画的速度曲线。慢慢出去
                  cursor: pointer;
                  width: 100%;
                  height: 100%;
                  .mask-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    background-color: #ff2442;
                    color: #fff;
                    transform: scale(1.3);
                    transition: transform 0.8s ease 0s; //字体慢慢变小
                    .index {
                      line-height: 24px;
                    }
                    .head {
                      margin-top: 16px;
                      font-size: 24px;
                      line-height: 30px;
                    }
                    .line {
                      width: 49px;
                      height: 1px;
                      border-radius: 1px;
                      background-color: #fff;
                      opacity: 0.5;
                      margin: 20px 0px;
                    }
                    .desc {
                      width: 200px;
                      font-size: 14px;
                      line-height: 25px;
                    }
                  }
                }
                &:hover .card-front {
                  opacity: 0;
                }
                &:hover .card-back {
                  opacity: 1;
                  transition: transform 0.6s ease 0s;
                  .mask-back {
                    transform: scale(1);
                    transition: transform 0.8s ease 0s;
                  }
                }
              }
            }
          }
          // 使命、愿景、企业价值观
          .redbook-item {
            margin: 44px auto 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            .every-wrapper {
              height: 124px;
              display: flex;
              justify-content: center;
              align-items: center;
              .detail-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                margin: 0 50px;
                height: 124px;
                .img-wrapper {
                  img {
                    width: 36px;
                    height: auto;
                    margin: auto;
                  }
                }
                .title {
                  font-weight: 700;
                  font-size: 20px;
                  line-height: 24px;
                  color: #333;
                }
                .detail {
                  color: #666;
                  line-height: 16px;
                }
              }
              .line {
                width: 1px;
                height: 100px;
                background-color: #ccc;
              }
            }
          }
        }
        // 公司环境
        .company {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .address {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
            cursor: pointer;
            .office {
              display: inline-block;
              width: 216px;
              height: 76px;
              line-height: 76px;
              text-align: center;
              border: 1px solid #ccc;
              border-right: none;
              color: #666;
              //   font-size: 16px;
              &:hover {
                color: #ff2441;
                background-color: #e6e6e6;
              }
            }
            .current {
              color: #ff2441;
              background-color: #e6e6e6;
            }
            .no-right {
              border-right: 1px solid #ccc;
            }
          }
          .address-img {
            display: flex;
            justify-content: center;
            align-items: center;
            .img-wrapper {
              //   display: none;
              .img-list {
                width: 320px;
                height: 298px;
              }
            }
            // 点击谁谁出现
            .img-current {
              display: block;
            }
          }
        }
      }
      // 什么是小红书
      .redbook {
        margin-top: 0;
        margin-bottom: 75px;
      }
      // 有背景颜色
      .story {
        margin-top: 100px;
        background-color: #fbfbfb;
        margin-bottom: 100px;
        .story-title {
          margin-top: 100px;
        }
      }
    }
  }
</style>