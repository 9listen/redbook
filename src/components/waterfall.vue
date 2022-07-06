<template>
  <div name="waterfall" ref="waterfall" class="waterfall">
    <div ref="waterfallContent" class="waterfall-content">
      <div
        class="item"
        v-for="(item, index) in waterfallListTemp"
        :key="index"
        :style="[
          { top: item.top + 'px' },
          { left: item.left + 'px' },
          { width: 100 / clos + '%' },
        ]"
      >
        <img
          class="item-img"
          :style="{ height: item.height + 'px' }"
          :src="item.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TiWaterfall',
  props: {
    imagelists: {//图片数据
      type: Array,
      default: () => [],
    },
    clos: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      waterfallList: [], //  瀑布流渲染数据
      waterfallListTemp: [], // 瀑布流临时数据
    }
  },
  watch: {
    clos () {
      this.waterfallList = [];
      this.waterfallListTemp = [];
      this.imageInit(this.imagelists)
    }
  },
  computed: {
    waterfallDeviationHeight () { //  记录瀑布流高度
      let arr = [];
      for (let i = 0; i < this.clos; i++) {
        arr.push(0)
      }
      return arr
      // 🍁方法2 let arr = Array(clos).fill(0)
    }
  },
  methods: {
    imageInit (imagelists) {//这是考虑图片大小变化比例
      imagelists.forEach((item) => {
        item.top = 0
        item.left = 0
        const loadImage = new Image()//创建图片元素  // old
        loadImage.src = item.url
        loadImage.onload = () => {//🌺
          const imgData = {} // 新图片
          imgData.height = Math.floor(
            (this.$refs.waterfallContent.clientWidth / this.clos / loadImage.width) *
            loadImage.height
          )//获取等比例图片高度： 新图高度 =( 新图宽度 / 旧图宽度) * 旧图高度
          imgData.imageUrl = item.url
          this.rankImg(imgData)
        }
      })
      this.waterfallList = this.waterfallListTemp
    },

    rankImg (imgdata) {
      const minCol = this.filterMin()//高度最小列 索引0，1，2，3，，
      imgdata.top = this.waterfallDeviationHeight[minCol]
      imgdata.left =
        minCol * Math.floor(this.$refs.waterfallContent.clientWidth / this.clos)//最小值的位置*图片容器宽度
      this.waterfallDeviationHeight[minCol] += imgdata.height//容器最小值高度+下一张图片高度
      this.waterfallListTemp.push(imgdata)
    },

    filterMin () {
      const min = Math.min(...this.waterfallDeviationHeight)
      return this.waterfallDeviationHeight.indexOf(min)
    }
  },

  async mounted () {
    this.imageInit(this.imagelists)
  },
}
</script>

<style lang="less" scoped>
  .waterfall {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .waterfall-content {
    position: relative;
    width: 100%;
    .item {
      position: absolute;
      font-size: 0;
      padding: 6px 3px;
      transition: all 0.2s;
      background-color: #fff;
      box-sizing: border-box;
      margin-bottom: 20px;
      .item-img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
