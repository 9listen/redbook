<template>
  <div>
    <Header active="social" />
    <div class="social">
      <!-- 社会责任公共标题和图片部分 -->
      <CommonTitle
        :title="title"
        :banner="banner"
        bgcolor="rgba(51,51,51,0.3)"
      />
      <div class="social-body">
        <div class="social-content"> 
          <!-- 每一个热点 -->
          <div
            class="social-item"
            v-for="(item, index) in dutylist"
            :key="index"
          >
            <div class="img-wrapper">
              <img :src="item.src" alt="" />
            </div>
            <div class="text-wrapper">
              <div class="title">{{ item.text.title }}</div>
              <div class="desc">{{ item.text.desc }}</div>
              <div class="time">{{ item.text.time }}</div>
            </div>
          </div>
          <!-- 分页器 -->
          <div class="pagination">
            <div class="block">
              <el-pagination
                layout=" prev, pager, next,total"
                background
                prev-text="上一页"
                next-text="下一页"
                :total="searchParams.total"
                :page-size="searchParams.pageSize"
                :current-page="searchParams.pageNo"
                @current-change="handlePageChange"
                @size-change="handleSizeChange"
              >
              </el-pagination>
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
import { mapGetters } from 'vuex'
export default {
  name: 'aSocial',
  components: { Header, CommonTitle, RedFooter },
  data () {
    return {
      title: '社会责任',
      banner: require('../../static/images/social01.jpeg'),
      // total: 8, //共多少条数据
      searchParams: {
        'pageNo': 1, //页码
        'pageSize': 5,//每页默认展示5条数据,
        "total":30
      },
      listData: [],
    }
  },
  /* 组件有页数和条数的事件。在这两个绑定事件中把值赋予你data里传给后端的pagesize和pagenumber。然后都触发调接口 */
  methods: {
    // 根据参数不同向服务器发请求返回不同的数据展示 ,把这次请求封装为函数，需要的时候调用即可
    getData () {
      this.$store.dispatch('social/getSearchlist', this.searchParams)//得到searchlist=result.data,
    },
    // 点击分页器的页数进行列表数据渲染
    handlePageChange (cur) {
      // 1.更新页数
      console.log(cur);
      this.searchParams.pageNo = cur
      // 2.重新发请求
      this.getData()
    },
    // 每页显示多少条数据
    handleSizeChange (val) {
      // 1.更新每页条数
      this.searchParams.pageSize = val
      console.log(val);
      this.getData()
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    ...mapGetters('social', ['dutylist'])
  },
}
</script>

<style lang="less" scoped>
  .social {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // background-color: rgba(227, 176, 176, 0.2);
    //  commontitle组件里面的图片和标题部分插入这里
    // 下边部分
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
          margin-top: 12px;
          /deep/ .block {
            .el-pagination {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              .btn-prev,
              .el-pager .number,
              .btn-next {
                height: 40px;
                line-height: 40px;
                margin-left: 15px;
                font-size: 14px;
                border-radius: 4px;
                border: 1px solid #eee;
                font-weight: 400;
                span {
                  line-height: 40px;
                }
              }
              .btn-prev:hover,
              .el-pager .number:hover,
              .btn-next:hover {
                color: #ff2442;
                border-color: #ff2442;
              }
              .btn-prev,
              .btn-next {
                width: 76px;
              }
              .el-pager .number {
                width: 40px;
              }
            }
          }
        }
      }
    }
  }
</style> 