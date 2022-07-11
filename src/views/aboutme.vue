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
            <!-- 每个地址 -->
            <div class="address">
              <span
                :class="['office', { current: active === 'shanghai' }]"
                @click="getActive('shanghai')"
                >上海总部</span
              >
              <span
                :class="['office', { current: active === 'beijin' }]"
                @click="getActive('beijin')"
                >北京</span
              >
              <span
                :class="['office no-right', { current: active === 'wuhan' }]"
                @click="getActive('wuhan')"
                >武汉</span
              >
            </div>
            <!-- 每份图片 -->
            <div class="address-img">
              <div
                class="img-wrapper"
                v-for="(tab, index) in renderlist"
                :key="index"
              >
                <img class="img-list" :src="tab.src" />
              </div>
            </div>
          </div>
        </div>
        <!-- 🌈小红书发展史-->
        <div class="hot redbook history">
          <div class="hot-title">小红书发展史</div>
          <!-- 样式和公司环境一样 -->
          <div class="time">
            <!-- 时间 -->
            <div class="timeline">
              <div class="left-arrow" @click="goPre">&lt;</div>
              <div
                :class="['time-detail', { current: curyear === 0 }]"
                @click="getCuryear(0)"
              >
                {{ timeline }}
              </div>
              <div
                :class="['time-detail', { current: curyear === 1 }]"
                @click="getCuryear(1)"
              >
                {{ timeline + 1 }}
              </div>
              <div
                :class="['time-detail', { current: curyear === 2 }]"
                @click="getCuryear(2)"
              >
                {{ timeline + 2 }}
              </div>
              <div
                :class="['time-detail', { current: curyear === 3 }]"
                @click="getCuryear(3)"
              >
                {{ timeline + 3 }}
              </div>
              <div class="right-arrow" @click="goNext">&gt;</div>
            </div>
            <!-- 每份时间对应内容 -->
            <div class="time-con">
              <div class="year">2013年大事件</div>
              <div class="item-wrapper">
                <div class="each-item">
                  <div class="month">6月</div>
                  <div class="progress">
                    <div class="dot"></div>
                    <div class="line"></div>
                  </div>
                  <div class="content">小红书在上海成立</div>
                </div>
                <div class="each-item">
                  <div class="month">12月</div>
                  <div class="progress">
                    <div class="dot"></div>
                    <!-- <div class="line"></div> -->
                  </div>
                  <div class="content">小红书推出海外购物分享社区</div>
                </div>
              </div>
            </div>
          </div>
          <!-- element-ui引入tab样式 -->
        </div>
        <!--🌈 合作邮箱 -->
        <div class="hot story">
          <div class="hot-title story-title">合作邮箱</div>
          <div class="emails">
            <div class="email" v-for="(item, index) in emails" :key="index">
              <div class="email-name">{{ item.name }}</div>
              <div class="email-address">{{ item.address }}</div>
            </div>
          </div>
        </div>
        <!--🌈 我们在这里 -->
        <div class="hot redbook here">
          <div class="hot-title">我们在这里</div>
          <div class="local">
            <div
              class="local-three"
              v-for="(item, index) in locals"
              :key="index"
            >
              <div class="head">{{ item.home }}</div>
              <div class="detail">{{ item.address }}</div>
            </div>
          </div>
        </div>
        <!--🌈 小红书关心每一位用户与合作伙伴的声音-->
        <div class="hot story voice">
          <div class="hot-title story-title">
            小红书关心每一位用户与合作伙伴的声音
          </div>
          <div class="letters">
            <div class="ceo">
              如您在小红书的使用或与小红书的合作中遇到难以解决的问题，以及任何对平台发展有益的意见及建议，欢迎您直接写信到CEO邮箱：
              <strong>ceo@xiaohongshu.com。</strong>
            </div>
            <div class="message">
              <div class="mark">
                为了您的来信能够得到更高效的处理，请您在邮件中标注以下信息：
              </div>
              <div class="list">
                <div class="list-item">
                  您的个人或工作单位信息（公司/品牌/部门/岗位/姓名 等）
                </div>
                <div class="list-item">
                  您的联系方式（邮箱地址/直线电话 等）
                </div>
                <div class="list-item">
                  相关问题、意见或建议的具体描述（背景/案例/各类支持性材料 等）
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--🌈 更多方式关注小红书 -->
        <div class="hot redbook more">
          <div class="hot-title">更多方式关注小红书</div>
          <div class="channels">
            <div class="channel" v-for="(item, index) in channels" :key="index">
              <div class="logo">
                <img :src="item.src" />
              </div>
              <div class="desc">{{ item.desc }}</div>
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
      // 小红书发展史
      activeName: 'first',
      timeline: 2013,
      curyear: 0,
      emails: [
        { name: '美妆', address: 'bd_beauty@xiaohongshu.com' },
        { name: '家居', address: 'bd_home@xiaohongshu.com' },
        { name: '母婴', address: 'bd_baby@xiaohongshu.com' },
        { name: '食品/保健', address: 'bd_food@xiaohongshu.com' },
        { name: '时尚轻奢', address: 'bd_fashion@xiaohongshu.com' },
        { name: '家电数码', address: 'bd_appliance@xiaohongshu.com' },
        { name: '仓储物流', address: 'bd_storage@xiaohongshu.com' },
        { name: '薯队长', address: 'shuduizhang@xiaohongshu.com' },
        { name: '人事/招聘', address: 'career@xiaohongshu.com' },
        { name: '媒体/采访', address: 'media@xiaohongshu.com' },
        { name: '市场/品牌', address: 'marketing@xiaohongshu.com' },
        { name: '产品反馈', address: 'app_feedback@xiaohongshu.com' },
        { name: '社区反馈', address: 'community@xiaohongshu.com' },
        { name: '客服反馈', address: 'service@xiaohongshu.com' },
        { name: '明星入驻', address: 'superstar@xiaohongshu.com' },
        { name: '推广合作', address: 'RED.AD@xiaohongshu.com' },
        { name: '蒲公英平台', address: 'influencer@xiaohongshu.com' },
        { name: '品牌号', address: 'brandaccount@xiaohongshu.com' },
        { name: '广告合作', address: 'red.ad@xiaohongshu.com' },
      ],
      locals: [
        { home: '上海总部', address: '上海市 黄浦区 马当路388号 SOHO复兴广场C座' },
        { home: '北京', address: '北京市 朝阳区 安定路 中海国际B座18楼' },
        { home: '武汉', address: '武汉市 光谷大道 现代光谷世贸中心B座10楼' },
      ],
      channels: [
        { src: require('../../static/images/about07.png'), desc: '下载小红书' },
        { src: require('../../static/images/about09.png'), desc: '关注小红书微博' },
        { src: require('../../static/images/about10.png'), desc: '关注微信公众号' },
        { src: require('../../static/images/about11.png'), desc: '关注微信小程序' },
      ]
    }
  },
  methods: {
    getActive (value) {
      //console.log('🔥log=>aboutme=>193:value:%o', value)
      if (value)
        this.active = value
    },
    getCuryear (value) {
      if (value || value === 0)//判断第几项，因为0系统会默认false，所以单独写出来
        this.curyear = value
    },
    // 1.点击箭头时间timeline会加减， 2013<timeline<2019
    // 2.点击箭头当前项curyear的类名current会变（背景颜色和字色）
    goPre () {
      // 1.点击goPre先判断灰色样式curyear能不能动，如果curyear不能动，就判断timeline能不能动，如果timeline不能动，就移动curyear,
      //当curyear > 2以后就在2的位置不动了
      if (this.curyear - 1 > 1) {//🍄curyear设计的是0开头，当curyear=2的时候就不减了
        this.curyear--;
      } else {//
        if (this.timeline - 1 >= 2013) {
          this.timeline--
        } else {
          this.curyear--
          if (this.curyear < 0) this.curyear = 0
        }
      }
    },
    goNext () {
      // 1.判断样式curyear是否到第三个，如果没有，就只移动样式，如果到了就样式+时间一起动
      if (this.curyear + 1 < 3) {//🍄
        this.curyear++
      } else {
        if (this.timeline + 1 <= 2019 - 3) {//🌾timeline的值=2016就不会再加了
          this.timeline++
        } else {//🌾timeline的值=2016，时间不会再变，样式还得加到2017、2018、2019
          this.curyear++
          if (this.curyear > 3) this.curyear = 3
        }
      }


    },
  },
  computed: {
    renderlist () {//🌸7.8利用计算属性动态取tablist对象里面的三个数组
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
        // 公司环境+小红书发展历史
        .company,
        .time {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .address,
          .timeline {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
            cursor: pointer;
            // 具体时间
            .office,
            .time-detail {
              display: inline-block;
              width: 216px;
              height: 76px;
              line-height: 76px;
              text-align: center;
              border: 1px solid #ccc;
              border-right: none;
              color: #666;
              //   font-size: 16px;
            }
            .office:hover {
              color: #ff2441;
              background-color: #e6e6e6;
            }
            .current {
              color: #ff2441;
              background-color: #e6e6e6;
            }
            .no-right {
              border-right: 1px solid #ccc;
            }
            // 左右箭头
            .left-arrow,
            .right-arrow {
              border: 1px solid #ccc;
              width: 70px;
              height: 76px;
              color: #000;
              line-height: 76px;
              text-align: center;
              font-size: 24px;
              color: #666;
            }
          }
          //   每份图片
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
          }
          //  🌸每个时间对应的内容
          .time-con {
            width: 864px;
            padding: 0 50px 0 100px;
            display: flex;
            flex-direction: column;
            .year {
              font-size: 20px;
              line-height: 28px;
              color: #ff2741;
              margin: 0 0 30px 70px;
            }
            .item-wrapper {
              display: flex;
              flex-direction: column;
              width: 600px;
              .each-item {
                display: flex;
                flex-direction: row;
                color: #555;
                justify-content: center;
                align-items: flex-start;
                margin-bottom: 4px;
                .month {
                  width: 100px;
                  color: #000;
                  font-weight: 500;
                  margin-right: 18px;
                  line-height: 24px;
                  text-align: right;
                }
                .progress {
                  .dot {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background-color: #ccc;
                    margin: 10px auto 0;
                  }
                  .line {
                    width: 1px;
                    height: 45px;
                    background-color: #eee;
                    margin: 10px auto 0;
                  }
                }
                .content {
                  width: 628px;
                  margin-left: 30px;
                  line-height: 24px;
                  font-size: 14px;
                }
              }
            }
          }
        }
        // 合作邮箱
        .emails {
          width: 960px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 0 auto -30px;
          .email {
            width: 240px;
            height: 50px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            .email-name {
              font-size: 16px;
              line-height: 20px;
              font-weight: 700;
            }
            .email-address {
              font-size: 14px;
              line-height: 20px;
              color: #555;
            }
          }
        }
        // 我们在这里
        .local {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .local-three {
            margin-bottom: 30px;
            line-height: 20px;
            color: #555;
            .head {
              color: #000;
              font-weight: 500;
              margin-bottom: 10px;
            }
            .detail {
              line-height: 20px;
            }
          }
        }
        // 声音
        .letters {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          position: relative;
          &::before {
            position: absolute;
            top: -10px;
            left: -19px;
            content: "";
            width: 16px;
            height: 14px;
            background-image: url("../../static/images/voice.png");
            background-size: contain;
          }
          .ceo {
            margin-bottom: 30px;
            width: 1021px;
            font-size: 20px;
            line-height: 30px;
          }
          .message {
            margin-bottom: 0;
            .mark {
              font-size: 20px;
              line-height: 30px;
            }
            .list {
              margin: 15px 0 0;
              .list-item {
                width: 1002px;
                line-height: 19px;
                margin: 0 0 15px 19px;
                color: #555;
                position: relative;
                &::before {
                  position: absolute;
                  content: "";
                  width: 4px;
                  height: 4px;
                  border-radius: 4px;
                  background-color: #ff2442;
                  left: -8px;
                  top: 7px;
                }
              }
            }
          }
        }
        //更多方式关注小红书
        .channels {
          display: flex;
          justify-content: center;
          align-items: center;
          .channel {
            width: 180px;
            height: 180px;
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
              margin-top: 30px;
              width: 90px;
              height: 90px;
            }
            .desc {
              margin-top: 20px;
              color: #555;
              line-height: 18px;
              font-weight: 400;
            }
          }
        }
        // 小红书发展史
      }
      // 什么是小红书
      .redbook {
        margin-top: 0;
        margin-bottom: 75px;
      }
      // 小红书发展史+更多方式关注小红书
      .history,
      .more {
        padding: 100px 0;
        margin-bottom: 0;
      }
      // 我们在这里
      .here {
        width: 960px;
        margin: 0 auto;
        padding: 49px 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
      // 有背景颜色
      .story {
        margin-top: 100px;
        background-color: #fbfbfb;
        padding-bottom: 100px;
        .story-title {
          margin-top: 100px;
        }
      }
      //用户与合作伙伴的声音
      .voice {
        margin-top: 0;
      }
    }
  }
</style>