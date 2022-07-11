<template>
  <div>
    <Header />
    <div class="social">
      <div class="social-center">
        <div class="bg-cover"></div>
        <h1 class="social-title">社会责任</h1>
      </div>
      <div class="social-body">
        <div class="social-content">
          <!-- 每一个热点 -->
          <div class="social-item" v-for="(item, index) in items" :key="index">
            <div class="img-wrapper">
              <img :src="item.src" alt="" />
            </div>
            <div class="text-wrapper">
              <div class="title">{{ item.text.title }}</div>
              <div class="desc">{{ item.text.desc }}</div>
              <div class="time">{{ item.text.time }}</div>
            </div>
          </div>
          <div class="pagination">11</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  name: 'aSocial',
  components: { Header, },
  data () {
    return {
      items: [
        {
          src: require('../../static/images/social02.png'),
          text: {
            title: '小红书联合中国扶贫基金会、真爱梦想基金会支持河南重建',
            desc: '8月20日，小红书公布了向河南灾区捐款的最新进展。其中捐赠给中国扶贫基金会的600万元，用于支持灾后重建修复工作，帮助当地民众的生活早日恢复；向上海真爱梦想公益基金会捐赠的400万元，用于支持河南地区儿童安全及美育教育，助力更多灾区小朋友的梦想成真。目前两家基金会正在积极推动援助项目的落地实施。',
            time: '2021-08-20 12:00'
          }
        },
        {
          src: require('../../static/images/social03.png'),
          text: {
            title: '小红书新一批援助物资运达武汉 已定向捐赠同济、协和等四家医院',
            desc: '2月17日，继首批20万件物资运达武汉后，小红书的第二批援助物资也于日前运达武汉。这批9万件N95医用口罩已定向捐赠给同济医院中法新城院区、协和医院西院、武汉大学人民医院东院、同济医院光谷院区四家医院，用于新型冠状肺炎的疫情防疫工作。',
            time: '2020-02-17 12:00'
          }
        },
        {
          src: require('../../static/images/social04.png'),
          text: {
            title: '小红书上线抗疫心理援助平台 逾千名咨询师提供免费心理咨询',
            desc: '2月10日，小红书上线抗疫心理援助平台，为受疫情影响的一线医护人员、患者及有需求的普通公众提供7*24小时的免费心理咨询。小红书会将援助专题页定向推送给湖北地区用户，以帮助热线直达疫情严重地区。',
            time: '2020-02-10 12:00'
          }
        },
        {
          src: require('../../static/images/social05.jpeg'),
          text: {
            title: '小红书出资1000万元用于新冠肺炎专项援助 支援武汉疫区',
            desc: '1月31日，由小红书捐赠武汉疫区的首批20万件防护口罩已陆续到达武汉，相关物资已移交武汉东湖高新区防控指挥部，统一调度配给急需物资的医院及社区。同时，小红书在海外采购的包括欧标FFP2医用口罩在内的超过10万件医疗防疫物资，也已启程发往国内。',
            time: '2020-02-01 12:00'
          }
        },
        {
          src: require('../../static/images/social06.jpeg'),
          text: {
            title: '小红书积极响应“争做中国好网民 上海网民在行动”网络举报宣传月活动',
            desc: '9月10日上午，2019年上海市网络举报宣传月启动式暨网络举报志愿者培训开班仪式在上海报业大厦2楼报告厅举行，网络举报知识竞赛也同日上线。该活动由上海市委网信办指导，新民晚报新民网和上海互联网新闻研究中心（上海市互联网违法和不良信息举报中心）主办。这也是2019年上海市“争做中国好网民 上海网民在行动”有关“网络乱象我举报”活动的重要组成部分。',
            time: '2019-9-10 12:00'
          }
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .social {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // background-color: rgba(227, 176, 176, 0.2);
    .social-center {
      position: relative;
      width: 100%;
      height: 500px;
      background-image: url("../../static/images/social01.jpeg");
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
      .social-title {
        // position: absolute;
        display: inline-block;
        font-size: 48px;
        color: #fff;
        z-index: 1;
      }
    }
    .social-body {
      background-color: #fafafa;
      padding: 100px 0 50px 0;
      .social-content {
        padding-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .social-item {
          width: 940px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          margin: 0 0 58px;
          cursor: pointer;
          .img-wrapper {
            height: 100%;
            img {
              width: 310px;
              height: 100%;
            }
          }
          .text-wrapper {
            margin-left: 36px;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .title {
              font-size: 24px;
              line-height: 28px;
              font-weight: 700;
            }
            .desc {
              color: #666;
              font-size: 14px;
              line-height: 24px;
              width: 580px;
              height: 48px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .time {
              color: #999;
              font-size: 14px;
            }
          }
        }
        .pagination {
          width: 940px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: 12px;
        }
      }
    }
  }
</style> 