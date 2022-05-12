<template>
  <div class="new">
    <div class="w3-top header">
      <appHeader></appHeader>
    </div>
    <div class="page_bg"></div>
    <div class="new_ctn" @touchend="backHome($event)" @touchstart="getY($event)">
      <div class="new_ctn-wrap">
        <h1>新闻中心</h1>
        <ul class="new-ctn-btn">
          <li @click="getList($event)" class="curActive" id="companyNews">公司新闻</li>
          <li @click="getList($event)" id="IndustryNews">行业动态</li>
          <li @click="getList($event)" id="HotspotNews">热点资讯</li>
          <li @click="getList($event)" id="TechnologyNews">技术相关</li>
        </ul>
      </div>
    </div>
    <div class="app-new-list" id="app-new-list">
      <h4 class="app-new-list-title">{{whichList}}</h4>
      <BScroll class="case-ctn-ctn-ctn wrapper" :data="appItemList" :pullup="pullup" :pulldown="pulldown" @pulldown="loadData()">
        <ul class="app-new-list-ctn content">
          <li v-for="(item, key) in appItemList" :key="key">
            <router-link @click.native="pageClick" :to="{path: item.path}">
              <img :src="item.img" alt="">
              <h4>{{item.title}}</h4>
              <p class="time">{{item.time}}</p>
              <p>{{item.ctn}}</p>
            </router-link>
          </li>
        </ul>
      </BScroll>
    </div>
    <!--<footerPage></footerPage>-->
  </div>
</template>

<script>
import BScroll from '../components/better-scroll'
import appHeader from '../components/app-header'
import footerPage from '../pages/footer'
export default {
  name: 'appNewPage',
  components: {
    BScroll,
    appHeader,
    footerPage
  },
  data () {
    return {
      // isApp: false,
      whichList: '公司新闻',
      pulldown: true,
      pullup: true,
      appItemList: [],
      startY: 0
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  created () {
    this.loadData()
  },
  methods: {
    getY (attr) {
      this.startY = attr.touches[0].pageY
    },
    backHome (attr) {
      // let endY = attr.changedTouches[0].pageY
      // if (endY - this.startY > 0) {
      //   this.$router.push('/#section6')
      // } else {
      //   this.$router.push('/#section4')
      // }
    },
    getList (attr) {
      if (document.body.clientWidth > 750) {
        console.log('进来')
        return
      }
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
      this.whichList = attr.target.innerHTML
    },
    loadData () {
      console.log('loadData')
      // this.$nextTick(() => {
      //   console.log('$nextTick')
      // })
      this.appItemList = [
        {
          title: '2018旅游变革：今年我国旅游将呈现三大趋势',
          time: '2018.02.05',
          img: require('../assets/app/app-news-img01.jpg'),
          path: '/appNew/index=0',
          ctn: '旅游，人们印象中原本只是“玩一玩”的“小事”，如今，已成为关乎大众幸福的“大事”。2018年，在国家相关政策支持下，走进新时代的中国旅游将展现出三大新趋势。'
        }, {
          title: '2018旅游变革：今年我国旅游将呈现三大趋势',
          time: '2018.02.05',
          img: require('../assets/app/app-news-img01.jpg'),
          path: '/appNew/index=1',
          ctn: '旅游，人们印象中原本只是“玩一玩”的“小事”，如今，已成为关乎大众幸福的“大事”。2018年，在国家相关政策支持下，走进新时代的中国旅游将展现出三大新趋势。'
        }, {
          title: '2018旅游变革：今年我国旅游将呈现三大趋势',
          time: '2018.02.05',
          img: require('../assets/app/app-news-img01.jpg'),
          path: '/appNew/index=2',
          ctn: '旅游，人们印象中原本只是“玩一玩”的“小事”，如今，已成为关乎大众幸福的“大事”。2018年，在国家相关政策支持下，走进新时代的中国旅游将展现出三大新趋势。'
        }, {
          title: '2018旅游变革：今年我国旅游将呈现三大趋势',
          time: '2018.02.05',
          img: require('../assets/app/app-news-img01.jpg'),
          path: '/appNew/index=3',
          ctn: '旅游，人们印象中原本只是“玩一玩”的“小事”，如今，已成为关乎大众幸福的“大事”。2018年，在国家相关政策支持下，走进新时代的中国旅游将展现出三大新趋势。'
        }
      ]
    },
    pageClick () {
      this.$emit('pageClick')
    }
  }
}
</script>

<style scoped lang="less">
  @media only screen and (max-width:750px) {
    .page_bg {
      height: 9.6rem !important;
      background: url("../assets/app/app-news-bg.jpg");
      background-size: 100% 100%;
    }
    .new {
      width: 100%;
      text-align: center;
    }
    h1{
      line-height: 2.8rem;
    }
    .new_ctn {
      position: relative;
      /*position: absolute;*/
      width: 100%;
      height: 9.6rem;
      top: 0;
      left: 0;
      &-wrap{
        position: absolute;
        width: 100%;
        height: 50%;
        top: 3.35rem;
        /*top: 60%;*/
        /*left: 50%;*/
        /*transform: translate(-50%, -50%);*/
      }
      .new-ctn-btn {
        display: flex;
        justify-content: center;
        li {
          float: left;
          border: 0.025rem solid #ccc;
          border-radius: 0.625rem;
          padding: 0.25rem 0.5rem;
          margin-right: 0.5rem;
          text-align: center;
          font-size: 0.5rem;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .curActive{
        box-shadow: 0px 0px 10px #dcd3b6;
        text-shadow:0 0 0.2em #dcd3b6,
          -0 -0 0.2em #dcd3b6
      }
    }
    .app-new-list{
      width: 100%;
      /*height: 50.25rem;*/
      height: auto;
      background: url("../assets/home/twoPage_bg.jpg") repeat;
      background-size: 100% 100%;
      h4{
        font-size: 0.65rem;
      }
      p, h4{
        color: #f1ecca;
      }
      &-title{
        width: calc(100% - 1rem);
        margin: auto;
        height: 2.425rem;
        line-height: 2.425rem;
        border-bottom: 0.025rem solid #f1ecca;
        &:before{
          display: inline-block;
          content: '';
          width: 0.675rem;
          height: 0.675rem;
          background: url("../assets/app/app-new-icon.png") no-repeat;
          background-size: 100% 100%;
          margin-right: 0.4rem;
        }
      }
      &-ctn{
        width: calc(100% - 1rem);
        margin: auto;
        text-align: left;
        max-height: 30.54rem;
        padding-bottom: 1.5rem;
        li{
          width: 100%;
          padding-top: 0.85rem;
          padding-bottom: 1rem;
          border-bottom: 0.025rem solid #f1ecca;
        }
        img{
          width: 100%;
          height: 9.025rem;
          margin-bottom: 0.625rem;
        }
        h4{
          line-height: 1rem;
        }
        .time{
          font-size: 0.45rem;
          color: #7e7e7e;
        }
        p{
          font-size: 0.5rem;
          line-height: 0.85rem;
        }
      }
    }
  }
</style>
