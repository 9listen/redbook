<template>
  <!-- 关于我们、社会责任、新闻中心图片+标题部分+背景阴影 -->
  <div class="about-center" :style="{ backgroundImage: `url(${banner})` }">
    <div class="bg-cover" :style="getStyle()"></div>
    <h1 class="about-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CommonTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    banner: {
      type: String,
      default: '',
    },
    bgcolor: {},
  },
  methods: {
    getStyle () {
      return "background-color:" + this.bgcolor
    }
  }
}

</script>

<style lang="less" scoped>
  .about-center {
    position: relative;
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .bg-cover {
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
</style>