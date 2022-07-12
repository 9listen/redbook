<template>
  <div :class="['footer', { 'footer-home': isHome }]">
    <div class="protocol">
      <ul class="protocol-four">
        <li>用户协议</li>
        <li>隐私政策</li>
        <li>侵权投诉指引</li>
        <li>社区规范</li>
      </ul>
    </div>
    <div class="content">
      <div>
        <span
          >沪ICP备 13030189号 Copyright © 2014-2022
          行吟信息科技（上海）有限公司</span
        >
        <span>| 地址：上海市黄浦区马当路388号C座</span>
        <span>| 电话：021-64224530</span>
        <span>| 自营经营者信息</span>
        <span
          >| 2022 沪公网安备 31010102002533号<img
            class="police"
            src="../../static/images/police.png"
            alt=""
        /></span>
      </div>
      <div>
        <span> 网络文化经营许可证：沪网文［2021］1545-113号</span>
        <span>| 增值电信业务经营许可证：沪B2-20150021|</span>
        <span
          ><img class="meal" src="../../static/images/meal.png" alt="" />
          网购(订餐)大家评</span
        >
      </div>
      <div>
        <span>医疗器械经营许可证：沪嘉食药监械经营许20187006号</span>
        <span
          >|
          医疗器械网络交易服务第三方平台备案:（沪）网械平台备字[2019]第00006号</span
        >
        <span>| 互联网药品信息服务资格证书：(沪)-经营性-2018-0011</span>
      </div>
      <div>
        <span>违法不良信息举报电话：(027) 8700 3878</span>
        <span>| 上海市互联网举报中心</span>
        <span>| 网上有害信息举报专区</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aFooter',
  props: {
    isHome: {
      type: Boolean,
      default: false,
    }
  }
}
</script> 

<style lang="less" scoped>
  .footer {
    position: relative;
    bottom: 0;
    // position: fixed;
    box-sizing: border-box;
    padding: 20px 180px 30px;
    white-space: nowrap;
    cursor: pointer;
    .protocol {
      font-size: 14px;
      font-weight: 700px;
      margin: 50px 0 20px 107px;
      .protocol-four {
        color: rgb(10, 7, 7);
        display: flex;
        list-style: none;
        li {
          float: left;
          margin-right: 200px;
        }
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #999;
      img {
        width: 18px;
        height: 18px;
        vertical-align: middle;
        margin-top: -3px;
        margin-left: 5px;
      }
    }
  }
  // 主页的底部用固定定位，其他页面底部用相对定位才可以
  .footer-home {
    position: fixed;
    .protocol {
      .protocol-four {
        color: #fff;
      }
    }
  }
</style>