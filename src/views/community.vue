<template>
  <div class="container">
    <div class="content">
      <div class="article-con">
        <div class="note">
          <div class="note-con">
            <div class="note-img">
              <img src="../../static/images/community-2.png" alt="" />
            </div>
            <div class="note-info">
              27岁独居时刻 | 请参观我家✨奶油色治愈客厅
            </div>
          </div>
          <div class="note-author">熊熊</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aCommunity'
}
</script>

<style lang="less" scoped>
  .container {
    margin-top: 108px;
    border-top: 1px solid #ccc;
    padding-bottom: 50px;
    width: 100%;
    // background-color: #fff;
    .content {
      margin-top: 30px;
      .article-con {
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 90%;
        margin: 0 100px;
        background-color: rgb(240, 179, 179);
        .note {
          width: 220px;
          margin: 0, 0, 20px;
          border-radius: 8px;
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          background-color: rgb(205, 236, 167);
          cursor: pointer;
          overflow: hidden;
          .note-con {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: #fff;
            .note-img {
              width: 220px;
              height: 300px;
              img {
                width: 220px;
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
        }
      }
    }
  }
</style>