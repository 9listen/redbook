<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="article-wrapper">
          <div
            class="article-column"
            v-for="(columns, index) in imglists"
            :key="index"
          >
            <div class="note-con" v-for="(column, i) in columns" :key="i">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'aWater',
  props: {
    clos: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      waterfallHeight: Array(this.clos).fill(0),//收集每列整体高度
      imglists: Array(this.clos).fill([])// [[],[],[],[],[]]  //clos-5列整体数组-包含每份图片信息
    }
  },
  watch: {
    clos (val) {
      this.waterfallHeight = Array(val).fill(0)
      this.imglists = Array(this.clos)
    }
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
          margin: 0 20px 0 0;
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
            background-color: #fff;
            overflow: hidden;
            border-radius: 8px;
            position: relative;
            .note {
              //图片+描述
              width: 100%;
              display: flex;
              flex-direction: column;
              .note-img {
                width: 220px;
                // height: 300px;
                overflow: hidden;
                img {
                  width: 220px;
                  //   height: 300px;
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
        }
      }
    }
  }
</style>