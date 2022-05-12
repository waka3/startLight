<template>
  <div class="new" id="new">
    <div class="w3-top pc-hidden header">
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
    <div class="w3-display-position app-new-list case-ctn">
      <BScroll class="case-ctn-ctn-ctn wrapper"
               :data="appItemList"
               :pullup="pullup"
               :pulldown="pulldown"
               :pulldownMsg="pulldownMsg"
               :pullupMsg="pullupMsg"
               :alertHook="alertHook"
               :loadHook="loadHook"
               @pullup="loadData('up')"
               @pulldown="loadData('down')">
        <div class="case-ctn-ctn">
          <h4 class="app-new-list-title">{{whichList}}</h4>
          <ul class="app-new-list-ctn content">
            <li v-for="(item, key) in appItemList" :key="key">
              <router-link @click.native="pageClick" :to="{path: 'appNew/' + item.path.split('/')[1]}">
                <img :src="item.img" alt="">
                <h4>{{item.title}}</h4>
                <p class="time">{{item.time}}</p>
                <p>{{item.ctn}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </BScroll>
      <!--<footerPage @getY="getY($event)" @backHome="backHome($event)"></footerPage>-->
    </div>
  </div>
</template>

<script>
import appHeader from '../components/app-header'
import footerPage from '../pages/footer'
import BScroll from '../components/better-scroll'
import selectVue from '../components/select'

export default {
  name: 'app-case',
  components: {
    appHeader,
    footerPage,
    BScroll,
    selectVue
  },
  data () {
    return {
      whichList: '公司新闻',
      selectTypeList: [],
      selectAreaList: [],
      appItemList: [],
      pulldown: true,
      pullup: true,
      alertHook: '',
      loadHook: '',
      pulldownMsg: '下拉刷新',
      pullupMsg: '',
      listPage: 1,
      curPage: 1
    }
  },
  created () {
    this.$nextTick(() => {
      this.loadData('companyNews', 'down')
    })
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  destroyed () {
    window.scrollTo(0, 0)
  },
  methods: {
    getY (attr) {
      this.startY = attr.touches[0].pageY
    },
    backHome (attr) {
      let endY = attr.changedTouches[0].pageY
      if (Math.abs(endY - this.startY) > 50) {
        if (endY - this.startY < 0) {
          this.$router.push('/#section6')
        } else {
          this.$router.push('/#section4')
        }
      } else {
        window.scrollTo(0, 0)
      }
    },
    getList (attr) {
      if (document.body.clientWidth > 750) {
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
        // 调取接口获取列表数据
        console.log('新闻按钮切换')
        console.log(attr.target.id)
        console.log(this.listPage)
        this.curPage = 1
        this.loadData(attr.target.id, 'down')
      }
    },
    refreshalert (attr) { // 刷新成功提示
      this[attr] = 'block'
      setTimeout(() => {
        this[attr] = 'none'
      }, 1000)
    },
    loadData (type, attr) {
      this.refreshalert('loadHook')
      setTimeout(() => {
        this.axios.get(this.GLOABL.URL + 'news/getAllNew', {
          params: {
            param: 'app',
            type: type,
            page: this.curPage
          }
        }).then((res) => {
          this.listPage = res.data.page_size
          if (attr === 'down') {
            if (attr === 'down') {
              this.curPage = 1
              // 恢复刷新提示文本值
              this.appItemList = res.data.data
              // 刷新成功后提示
              // this.scroll.refresh()
              this.refreshalert('alertHook')
            }
          } else {
            if (this.curPage > this.listPage) {
              this.pullupMsg = '已经到底了'
              this.curPage = this.listPage
            } else {
              this.appItemList = this.imgItemList.concat(res.data.data)
              this.curPage++
              // 恢复文本值
            }
          }
        })
      }, 1000)
    }
  }
}
</script>

<style scoped lang="less">
  .page_bg {
    height: 11rem !important;
    background: url("../assets/app/app-news-bg.jpg");
    background-size: 100% 100%;
  }
  .new {
    width: 100%;
    text-align: center;
  }
  h1 {
    line-height: 2.8rem;
  }
  .new_ctn {
    /*position: relative;*/
    position: absolute;
    width: 100%;
    height: 11rem;
    top: 0;
    left: 0;
    &-wrap {
      position: absolute;
      width: 100%;
      height: 50%;
      top: 50%;
      transform: translateY(-20%);
      /*top: 3.35rem;*/
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
    .curActive {
      box-shadow: 0px 0px 10px #dcd3b6;
      text-shadow: 0 0 0.2em #dcd3b6,
        -0 -0 0.2em #dcd3b6
    }
  }
  .case-ctn-ctn-ctn {
    width: 100%;
    /*max-height: 23rem;*/
    /*min-height: 10rem;*/
    margin-bottom: 0;
    .child-element {
      padding-right: 0;
    }
  }
  /*新闻列表样式*/
  .app-new-list {
    width: 100%;
    height: calc(100% - 10rem);
    /*height: 24rem;*/
    /*height: 50.25rem;*/
    /*height: auto;*/
    overflow: hidden;
    background: url("../assets/home/twoPage_bg.jpg") repeat;
    background-size: 100% 100%;
    h4 {
      font-size: 0.65rem;
    }
    p, h4 {
      color: #f1ecca;
    }
    &-title {
      width: calc(100% - 1rem);
      margin: auto;
      height: 2.425rem;
      line-height: 2.425rem;
      border-bottom: 0.025rem solid #f1ecca;
      &:before {
        display: inline-block;
        content: '';
        width: 0.675rem;
        height: 0.675rem;
        background: url("../assets/app/app-new-icon.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 0.4rem;
      }
    }
    &-ctn {
      width: calc(100% - 1rem);
      margin: auto;
      text-align: left;
      /*max-height: 30.54rem;*/
      /*padding-bottom: 1.5rem;*/
      li {
        width: 100%;
        padding-top: 0.85rem;
        padding-bottom: 1rem;
        border-bottom: 0.025rem solid #f1ecca;
        &:last-child{
          margin-bottom: 1rem;
        }
      }
      img {
        width: 100%;
        height: 9.025rem;
        margin-bottom: 0.625rem;
      }
      h4 {
        line-height: 1rem;
      }
      .time {
        font-size: 0.45rem;
        color: #7e7e7e;
      }
      p {
        font-size: 0.5rem;
        line-height: 0.85rem;
      }
    }
  }
</style>
