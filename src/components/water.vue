<template>
  <div class="water">
    <div class="container">
      <div class="content">
        <div class="article-wrapper">
          <!-- imglists所有列，columns每一列 ,column列里面每个笔记容器-->
          <div
            class="article-column"
            v-for="(columns, index) in imglists"
            :key="index"
          >
            <div class="note-con" v-for="(column, i) in columns" :key="i">
              <div class="note">
                <div class="note-img">
                  <img :src="column.cover" alt="" />
                </div>
                <div class="note-info">
                  {{ column.title }}
                </div>
              </div>
              <div class="note-author">
                <div class="user">
                  <div class="user-img">
                    <img :src="column.userinfo.avatar" alt="" />
                  </div>
                  <div class="user-name">{{ column.userinfo.username }}</div>
                </div>
              </div>
            </div>
            <!-- <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div> -->
          </div>
          <!-- <div class="article-column">
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
        </div>
        <div class="article-column">
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
        </div>
        <div class="article-column">
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
        </div>
        <div class="article-column">
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
          <div class="note-con">
            <div class="note">
              <div class="note-img">
                <img src="../../static/images/community-2.png" alt="" />
              </div>
              <div class="note-info">
                27岁独居时刻 | 请参观我家✨奶油色治愈客厅
              </div>
            </div>
            <div class="note-author">
              <div class="user">
                <div class="user-img">
                  <img src="../../static/images/avatar.jpg" alt="" />
                </div>
                <div class="user-name">小松鼠</div>
              </div>
            </div>
          </div>
        </div> -->
        </div>
      </div>
      <div class="more">查看更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aWater',
  props: {
    imgs: {
      type: Array,
      default: () => []
    },
    clos: {
      type: Number,
      default: 5
    },
  },
  data () {
    return {
      waterfallHeight: Array(this.clos).fill(0),//收集每列整体高度[0px,0px...]
      //#region
      imglists: Array(this.clos).fill(0)// [[],[],[],[],[]]  //clos-5列整体数组信息-包含每份图片信息
      //原始瀑布流数据测试代码
      //#region
      // imglists: [
      //   [{
      //     cover: require('../../static/images/co4.png'),
      //     title: '生活特别有劲头',
      //     userinfo: {
      //       avatar: require('../../static/images/avatar.jpg'),
      //       username: '阳春白雪',
      //     },
      //   }]
      // ]
      //#endregion
      //#endregion
    }
  },
  watch: {//监听列数变化，
    clos (val) {
      this.waterfallHeight = Array(val).fill(0)
      this.imglists = Array(val).fill(0)
    }
  },
  methods: {
    rankimgs () {
      this.imglists = Array(this.clos).fill(0)
      //图片300+用户信息height:28px+padding-bottom:10 + 动态文本高度 （24行高*n几行：一行在这里有11个字。文字长度/11）
      // 🌈遍历传入的图片信息
      for (let i = 0; i < this.imgs.length; i++) {
        //🌈取waterfallHeight最小高度
        const min = Math.min(...this.waterfallHeight);
        let minIndex = this.waterfallHeight.findIndex(x => x === min);
        // debugger调试时出现minIndex=-1的情况，索引不能为负
        // eslint-disable-next-line no-debugger
        // debugger
        if (minIndex === -1) minIndex = 0
        // 🌈如果不存在高度最小的容器
        if (!this.imglists[minIndex])//？这里imglists是每一列数据???
          this.imglists[minIndex] = []
        this.imglists[minIndex].push(JSON.parse(JSON.stringify(this.imgs[i])))
        // 计算文本高度
        const textHeight = Math.ceil(this.imgs[i].title.length / 11) * 24
        const noteHeight = 300 + 38 + textHeight
        this.waterfallHeight[minIndex] += noteHeight//最小高度列原始高度+新的笔记高度
      }
    }
  },
  mounted () {
    this.rankimgs() // 分配图片
    // let arr = Array(3).fill();
    // console.log(arr);

  }
}
</script>

<style lang="less" scoped>
  .container {
    margin-top: 108px;
    border-top: 1px solid #ccc;
    padding-bottom: 50px;
    width: 100%;
    box-sizing: border-box;
    // background-color: #fff;
    .content {
      margin-top: 30px;
      .article-wrapper {
        // 所有笔记盒子
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
        // background-color: rgb(240, 179, 179);
        .article-column {
          //一列笔记
          padding: 0 20px 0 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          //   background-color: rgb(205, 236, 167);
          cursor: pointer;
          //   overflow: hidden;
          .note-con {
            //单独的笔记
            width: 220px;
            margin: 0 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            // background-color: rgb(213, 164, 164);
            overflow: hidden;
            border-radius: 8px;
            position: relative;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
            .note {
              //图片+描述
              width: 100%;
              display: flex;
              flex-direction: column;
              .note-img {
                width: 220px;
                height: 300px;
                overflow: hidden;
                img {
                  width: 220px;
                  height: 300px;
                }
              }
              .note-info {
                padding: 0;
                margin: 10px 15px;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
              }
            }
            .note-author {
              // 图片作者
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-bottom: 10px;
              .user {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .user-img {
                  margin-left: 20px;
                  position: relative;
                  width: 28px;
                  height: 28px;
                  border-radius: 50%;
                  overflow: hidden;
                  img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                  }
                }
                .user-name {
                  width: 87px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  margin-left: 10px;
                }
              }
            }
          }
          // 单个笔记hover上去的阴影
          .note-con:hover::before {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 8px;
            margin: 0 0 20px;
            background-color: rgba(0, 2, 4, 0.2);
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
    .more {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      line-height: 40px;
      color: #ff2741;
      cursor: pointer;
    }
  }
</style>