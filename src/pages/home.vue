<template>
  <!--<div @mousewheel="sideBarChange()">-->
  <div>
    <div class="bar w3-top app-hidden">
      <side-bar :menu-list="menuList" :currentIndex="currentIndex"></side-bar>
    </div>
    <div class="w3-top pc-hidden app">
      <appHeader @destroyFullpage="pageClick(true)"></appHeader>
    </div>
    <div id="fullpage">
      <div class="section active" id="section1">
        <index class="ctn" id="index" @pageClick="pageClick(true)"></index>
      </div>
      <div class="section" id="section2">
        <serve class="ctn" id="serve" @pageClick="pageClick(false)" :slideIsClick="slideIsClick"></serve>
      </div>
      <div class="section" id="section3">
        <vueCase class="ctn" id="case" @pageClick="pageClick(false)" :slideIsClick="slideIsClick"></vueCase>
      </div>
      <div class="section" id="section4">
        <lab class="ctn" id="lab" @pageClick="pageClick(false)"></lab>
      </div>
      <div class="section" id="section5">
        <appNewPage class="ctn" id="appNewPage" @pageClick="pageClick(true)" v-if="isApp"></appNewPage>
        <newPage class="ctn" id="new" v-else></newPage>
      </div>
      <div class="section" id="section6">
        <contactUs class="ctn" id="contactUs"></contactUs>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-unused-lets,new-cap,no-undef */
import sideBar from '../components/sideBar'
import index from '../pages/index'
import serve from '../pages/serve'
import vueCase from '../pages/case'
import lab from '../pages/lab'
import newPage from '../pages/newPage'
import appNewPage from '../pages/appNewPage'
import contactUs from '../pages/contactUs'

import appHeader from '../components/app-header'
export default {
  components: {
    sideBar: sideBar,
    index,
    serve,
    vueCase,
    lab,
    newPage,
    appNewPage,
    contactUs,
    appHeader
  },
  data () {
    return {
      currentIndex: 0,
      isApp: false,
      slideIsClick: false,
      menuList: [
        {
          label: '首页',
          key: 'index'
        }, {
          label: '服务项目',
          key: 'serve'
        }, {
          label: '案例集锦',
          key: 'case'
        }, {
          label: '实验室',
          key: 'lab'
        }, {
          label: '新闻中心',
          key: 'new'
        }, {
          label: '联系我们',
          key: 'contactUs'
        }
      ],
      myFullpage: ''
    }
  },
  created () {
    this.isAppJudge()
  },
  mounted () {
    // this._initFullPage()
    let self = this
    this.myFullpage = new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      normalScrollElements: '.child-element, .us-ctn-ctn',
      touchSensitivity: 15,
      resize: true,
      normalScrollElementTouchThreshold: 15,
      onLeave: function (anchorLink, index) {
        self.currentIndex = index.index
        // pc点击右侧导航时 弹窗的关闭操作
        self.slideIsClick = true
        // app新闻跳转新页
        if (self.isApp && self.currentIndex === 4) {
          self.myFullpage.destroy(false)
          self.$router.push('/appNew')
        }
      },
      afterLoad () {
        self.slideIsClick = false
      }
    })
    this.getPath()
    window.onresize = () => {
      this.isAppJudge()
    }
  },
  watch: {
    $route () {
      console.log('路由变化')
      this.getPath()
    }
  },
  methods: {
    getPath () {
      let hash = this.$route.hash
      if (hash.indexOf('#') !== -1) {
        this.$router.push('/')
        this.myFullpage.moveTo(parseInt(hash.split('section')[1]))
      }
    },
    isAppJudge () {
      if (document.body.clientWidth > 750) {
        this.isApp = false
      } else {
        this.isApp = true
      }
    },
    pageClick (attr) {
      console.log(attr === true)
      if (document.body.clientWidth > 750) {
        if (attr) {
          this.myFullpage.destroy(false)
        } else {
          return null
        }
      } else {
        this.myFullpage.destroy(false)
      }
    }
    // animateInPage () {
    //   let ids = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6']
    //   for (let i = 0, len = ids.length; i < len; i++) {
    //     if (ids[i].className.indexOf('fp-completely') !== -1){
    //       id.classList.add('animate')
    //     }
    //   }
    // }
  },
  destroyed () {
    if (document.body.clientWidth > 750) {
      this.myFullpage.destroy(false)
    }
  }
}
</script>

<style scoped lang="less">
  .bar{
    width: 110px;
    top: 253px;
    right: 49px;
    font-size: 14px;
  }
  .ctn{
    width: 100%;
    height: 100%;
  }
  .ctn /deep/ .page_bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
