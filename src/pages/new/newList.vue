<template>
  <div class="new-ctn">
    <ul class="new-ctn-btn new-wrap" id="new-wrap">
      <li @click="getList($event)" class="curActive" id="companyNews">公司新闻</li>
      <li @click="getList($event)" id="IndustryNews">行业动态</li>
      <li @click="getList($event)" id="HotspotNews">热点资讯</li>
      <li @click="getList($event)" id="TechnologyNews">技术相关</li>
    </ul>
    <ul class="new-ctn-item new-wrap">
      <!--<li v-for="(item, key) in newList" :key="key" @click="openNewDetails(item.key)">-->
      <li v-for="(item, key) in newList" :key="key">
        <router-link :to="{path: item.path}">
          <div class="new-ctn-item-img">
            <img :src="item.img" alt="">
          </div>
          <div class="new-ctn-item-ctn">
            <h4>{{item.title}}</h4>
            <p>{{item.ctn}}</p>
            <p class="time">{{item.time}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <page :max="listPage"
          @switch="getCurPageList($event)">
    </page>
  </div>
</template>

<script>
// import newDetail from '../new/newDetails'
import page from '../../components/switchPage'
export default {
  name: 'companyNews',
  components: {
    // newDetail,
    page
  },
  data () {
    return {
      listPage: 1,
      curPage: 0,
      isShow: false,
      newList: []
    }
  },
  mounted () {
    this.getPath()
  },
  methods: {
    getList (attr) {
      let ul = attr.target.parentNode
      let li = ul.getElementsByTagName('li')
      // 移除
      for (let i = 0, len = li.length; i < len; i++) {
        if (li[i].className.indexOf('curActive') !== -1) {
          li[i].classList.remove('curActive')
        }
      }
      // 添加
      if (attr.target.className.indexOf('curActive') === -1) {
        attr.target.classList.add('curActive')
      }
      // 调取接口获取列表数据
      this.getCurPageList(attr.target.id, 1)
    },
    // openNewDetails (attr) {
    //   this.isShow = true
    //   console.log(this.isShow)
    // },
    getPath () {
      let hash = this.$route.hash
      this.$router.push('/new')
      let wrapLi = document.getElementById('new-wrap').getElementsByTagName('li')
      if (hash.indexOf('#') !== -1) {
        for (let i = 0, len = wrapLi.length; i < len; i++) {
          if (wrapLi[i].className.indexOf('curActive') !== -1) {
            wrapLi[i].classList.remove('curActive')
          }
        }
        document.getElementById('' + hash.split('#')[1]).classList.add('curActive')
        this.getCurPageList('' + hash.split('#')[1], 1)
      } else {
        this.getCurPageList('companyNews', 1)
      }
    },
    getCurPageList (type, curPage) {
      // 获取当前页列表
      this.axios.get(this.GLOABL.URL + 'news/getAllNew', {
        params: {
          type: type,
          page: curPage
        }
      }).then((res) => {
        if (res) {
          this.listPage = res.data.listPage
          this.newList = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .new-wrap {
    width: 1200px;
    margin: auto;
  }
  .new-ctn{
    min-height: 400px;
    &-btn{
      display: flex;
      justify-content: center;
      margin-bottom: 27px;
      li{
        float: left;
        font-size: 18px;
        border: 1px solid #ccc;
        border-radius: 25px;
        padding: 9px 15px;
        margin-right: 20px;
        &:last-child{
          margin-right: 0px;
        }
        /*&:hover {
          box-shadow: 0px 0px 10px #dcd3b6;
          text-shadow:0 0 0.2em #dcd3b6,
            -0 -0 0.2em #dcd3b6
        }*/
      }
      .curActive{
        box-shadow: 0px 0px 10px #dcd3b6;
        text-shadow:0 0 0.2em #dcd3b6,
          -0 -0 0.2em #dcd3b6
      }
    }
    &-item{
      /*min-height: 1780px;*/
      display: flex;
      flex-direction: column;
      & li a{
        display: flex;
        justify-content: left;
        border-bottom: 1px dashed #303030;
        padding-top: 42px;
        padding-bottom: 42px;
      }
      &-img{
        flex: 3;
        padding-left: 25px;
        padding-right: 35px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      &-ctn{
        flex: 11;
        h4{
          font-size: 25px;
          height: 44px;
        }
        p{
          font-size: 16px;
          line-height: 30px;
        }
        .time{
          font-weight: 100;
          margin-top: 16px;
        }
      }
    }
  }
</style>
