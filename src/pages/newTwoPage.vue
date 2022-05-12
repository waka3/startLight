<template>
  <div class="newTwoPage">
    <header class="new-wrap header">
      <div class="header-logo">
        <router-link to="/"></router-link>
      </div>
      <ul>
        <li>
          <router-link :to="{path: '/#section1'}">首页</router-link>
        </li>
        <li class="line">|</li>
        <li>
          <router-link :to="{path: '/#section2'}">服务项目</router-link>
        </li>
        <li class="line">|</li>
        <li>
          <router-link :to="{path: '/#section3'}">案例集锦</router-link>
        </li>
        <li class="line">|</li>
        <li>
          <router-link :to="{path: '/#section4'}">实验室</router-link>
        </li>
        <li class="line">|</li>
        <li>
          <router-link :to="{path: '/new'}">新闻中心</router-link>
        </li>
        <li class="line">|</li>
        <li>
          <router-link :to="{path: '/#section6'}">联系我们</router-link>
        </li>
      </ul>
      <div class="header-right">
        <span></span>
        <div class="header-right-wrap">
          <p>全国业务咨询专业</p>
          <p>400-100-7918</p>
        </div>
      </div>
    </header>
    <article class="news detial">
      <section class="slogan" id="slogan">
        <div class="canvasbg">
          <canvas id="newsSlogan" width="1903" height="566"></canvas>
        </div>
        <div class="text"></div>
        <div class="new-tip">
          <p>NEWS</p>
          <h1>新闻</h1>
          <b>一</b>
        </div>
      </section>
    </article>
    <div class="new-middle">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">
      <p>Copyright © 2018 厦门星之光科技有限公司 闽ICP备16027737号-1 网站地图</p>
      <p>地址：厦门思明区软件园二期观日路26号1F   电话：0592-5511856  全国业务咨询专线：400-100-7918</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars,no-unused-expressions */
import newList from './new/newList'
export default {
  name: 'newTwoPage',
  components: {
    newList
    // page
    // newDetail
  },
  data () {
    return {
      nessloganTimer: '',
      isShow: false
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.drawNewsSlogan()
    window.onresize = () => {
      typeof (this.nessloganTimer) !== 'undefined' ? clearInterval(this.nessloganTimer) : null
      this.drawNewsSlogan()
    }
  },
  methods: {
    drawNewsSlogan () {
      let linepers = 30
      let refreshTime = 20
      let canvas = document.getElementById('newsSlogan')
      let ctx = canvas.getContext('2d')
      let $h = $('.news .slogan').outerHeight()
      let $w = $('.news .slogan').outerWidth()
      ctx.canvas.width = $w
      ctx.canvas.height = $h
      let n = 0
      this.nessloganTimer = setInterval(function () {
        n += 1 / 180
        let base = Math.round(Math.sin(n) * 100) / 100
        ctx.fillStyle = 'rgba(0,0,0,0.03)'
        ctx.fillRect(0, 0, $w, $h)
        for (let i = 0; i < linepers; i++) {
          let space = $h / linepers * 5
          ctx.beginPath()
          ctx.moveTo(0, $h - $h * base + space * i * base / 4)
          ctx.bezierCurveTo(
            $w / 3 + space * i * base, $h * base * Math.round(Math.cos(n) * 100) / 100 * 2 + space * i,
            $w / 3 * 2 - space * i * base, $h * base * Math.round(Math.sin(n) * 100) / 100,
            $w, $h * base + space * i * base / 4
          )
          ctx.lineWidth = 1
          let ctxcolors = ['#1e9e3f', '#209879', '#21908a', '#157dab', '#0e75b5', '#0d72b6']
          ctx.strokeStyle = ctxcolors[Math.floor(i / (linepers / ctxcolors.length))]
          ctx.stroke()
        }
      }, refreshTime)
    }
  }
}
</script>

<style scoped lang="less">
  .news .slogan {
    background: #000;
    position: relative;
  }
  .news .slogan .canvasbg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  .news .slogan .text {
    padding: 200px 0 200px 0;
    position: relative;
    z-index: 9;
  }
  .news .slogan .new-tip {
    position: absolute;
    top: 38%;
    left: calc((100% - 1200px) / 2 + 25px);
    z-index: 10;
    width: 173px;
    height: 173px;
    border: 7px solid #ffffff;
    padding-top: 25px;
    padding-left: 23px;
    p{
      font-size: 16px;
    }
    h1{
      padding-top: 23px;
      padding-bottom: 38px;
    }
    b{
      font-size: 18px;
    }
  }
  .newTwoPage {
    width: 100%;
    height: 100%;
    background: url("../assets/home/twoPage_bg.jpg") no-repeat;
    background-size: 100% 100%
  }
  .new-middle{
    padding-top: 64px;
  }
  .new-wrap {
    width: 1200px;
    margin: auto
  }
  .header {
    display: flex;
    justify-content: space-between;
    height: 84px;
    &-logo{
      width: 117px;
      /*margin-left: 35px;*/
      /*margin-right: 43px;*/
      margin: 12px 35px 12px 43px;
      background: url("../assets/index/index_logo.png") no-repeat;
      background-size: 100% 100%;
      a{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    ul{
      display: flex;
      margin-top: 48px;
      justify-content: space-between;
      li{
        color: #ffffff;
      }
      .line{
        padding: 0 25px;
      }
    }
    &-right{
      text-align: right;
      padding-right: 30px;
      margin-top: 26px;
      span{
        display: inline-block;
        width: 47px;
        height: 47px;
        margin-right: 10px;
        background: url("../assets/us/tel-icon.png") no-repeat;
        background-size: 100% 100%;
      }
      &-wrap{
        display: inline-block;
        text-align: left;
      }
      p:first-child{
        height: 26px;
        line-height: 26px;
        font-size: 14.27px;
        color: #999999;
      }
      p:last-child{
        color: #f7b85d;
        font-size: 20.46px
      }
    }
  }
  .middle{
    padding-top: 68px;
  }
  .footer{
    width: 100%;
    font-size: 12px;
    text-align: center;
    background: #202020;
    padding-top: 19px;
    padding-bottom: 19px;
    margin-bottom: 63px;
    p{
      line-height: 24px;
    }
  }

  @media only screen and (max-width: 1366px){
    .header {
      height: 84px;
      &-logo{
        width: 100px;
        margin: 12px 35px 12px 43px;
      }
      ul{
        .line{
          padding: 0 15px;
        }
      }
      &-right{
        text-align: right;
        padding-right: 10px;
        margin-top: 26px;
        span{
          display: inline-block;
          width: 47px;
          height: 47px;
          margin-right: 10px;
        }
        p:first-child{
          height: 26px;
          line-height: 26px;
          font-size: 14.27px;
        }
        p:last-child{
          font-size: 20.46px
        }
      }
    }
  }
</style>
