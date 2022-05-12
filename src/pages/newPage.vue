<template>
  <div>
    <div class="page_bg"></div>
    <div class="new_ctn">
      <div class="new_ctn-wrap">
        <h1>新闻中心</h1>
        <ul class="new-ctn-btn">
          <li @click="getList($event)" class="curActive" id="companyNews">
            <router-link to="/new#companyNews" target="_blank" @click.native="pageClick">公司新闻</router-link>
          </li>
          <li @click="getList($event)" id="IndustryNews">
            <router-link to="/new#IndustryNews" target="_blank" @click.native="pageClick">行业动态</router-link>
          </li>
          <li @click="getList($event)" id="HotspotNews">
            <router-link to="/new#HotspotNews" target="_blank" @click.native="pageClick">热点资讯</router-link>
          </li>
          <li @click="getList($event)" id="TechnologyNews">
            <router-link to="/new#TechnologyNews" target="_blank" @click.native="pageClick">技术相关</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newPage',
  methods: {
    pageClick () {
      this.$emit('pageClick')
    }
  }
}
</script>

<style scoped lang="less">
  @media only screen and (min-width:750px) {
    .page_bg {
      background: url("../assets/new/new_bg.jpg");
      background-size: 100% 100%;
    }
    .new_ctn-wrap h1:hover{
      cursor: pointer;
      text-shadow:0 0 0.2em #dcd3b6,
        -0 -0 0.2em #dcd3b6;
    }
    .new_ctn {
      position: relative;
      top: 45%;
      width: 68.75%;
      margin: 0 auto;
      h1 {
        text-align: center;
        margin-bottom: 30px;
      }
      .new-ctn-btn {
        display: flex;
        justify-content: center;
        li {
          float: left;
          border: 1px solid #ccc;
          border-radius: 25px;
          padding: 10px 17px;
          margin-right: 20px;
          &:last-child {
            margin-right: 20px;
          }
          &:hover {
            box-shadow: 0px 0px 10px #dcd3b6;
            text-shadow: 0 0 0.2em #dcd3b6,
              -0 -0 0.2em #dcd3b6
          }
        }
      }
    }
  }
</style>
