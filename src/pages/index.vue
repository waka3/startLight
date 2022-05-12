<template>
  <div class="home">
    <video id="myVideo" loop muted data-autoplay class="app-hidden">
      <source src="../assets/index_vedio.mp4" type="video/mp4">
    </video>
    <div class="page_bg"></div>
    <div class="w3-display-position home-ctn">
      <div class="home-logo app-hidden">
        <img src="../assets/index/index_logo.png" alt="">
      </div>
      <div class="home-title">
        <h1 class="w3-center color-yellow text-shadow-yellow">星之光影&nbsp;&nbsp;璀璨世界</h1>
        <p class="w3-center color-yellow">城市&文旅光影视觉工程服务商</p>
      </div>
      <div class="home-href">
        <!--<a href="/city" @mouseover="addActive($event)" @mouseout="removeActive($event)">-->
          <!--<div class="img img1"></div>-->
          <!--<p>智慧城市</p>-->
        <!--</a>-->
        <!--<a href="/trip" @mouseover="addActive($event)" @mouseout="removeActive($event)">-->
          <!--<div class="img img2"></div>-->
          <!--<p>文旅景区</p>-->
        <!--</a>-->
        <router-link to="/city" @mouseover.native="addActive($event)" @mouseout.native="removeActive($event)" @click.native="stopMouseDown">
          <div class="img img1"></div>
          <p>智慧城市</p>
        </router-link>
        <router-link to="/trip" @mouseover.native="addActive($event)" @mouseout.native="removeActive($event)" @click.native="stopMouseDown">
          <div class="img img2"></div>
          <p>文旅景区</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  mounted () {
    this.isPlay()
    window.onresize = () => {
      this.isPlay()
    }
  },
  methods: {
    isPlay () {
      let video = document.getElementById('myVideo')
      // 视频加载完毕再播放
      video.oncanplay = () => {
        if (document.body.clientWidth > 750) {
          video.play()
        } else {
          video.pause()
        }
      }
    },
    stopMouseDown () {
      console.log('index被点击')
      this.$emit('pageClick')
    }
  }
}
</script>

<style scoped lang="less">
    .home-ctn {
      width: 100%;
      top: 56px;
      left: 0;
    }
    @keyframes scaleCut {
      0%{transform: scale(0.5); opacity:0; transition: all 2s;}
      100%{transform: scale(1); opacity:1;}
    }
    .page_bg {
      background: black;
      opacity: 0.8;
    }
    .home-logo {
      margin-top: 78px;
      /*height: 144px;*/
      text-align: center;
    }
    .home-title {
      animation: scaleCut 1s;
      h1 {
        font-size: 40px;
        margin-top: 143px;
        margin-bottom: 34px;
      }
      p {
        text-align: center;
        font-size: 25px;
      }
    }
    .home-href {
      animation: scaleCut 1s;
      width: 425px;
      margin: auto;
      display: flex;
      margin-top: 140px;
      justify-content: space-between;
      p {
        font-size: 20px;
        height: 34px;
        line-height: 34px;
        text-align: center;
      }
      .img1 {
        height: 83px;
        background: url("../assets/index/index_icon_01.png") no-repeat;
        background-size: 100% 100%;
      }
      .img2 {
        height: 83px;
        background: url("../assets/index/index_icon_02.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .activeHover {
      .img1 {
        height: 83px;
        background: url("../assets/index/index_icon_011.png") no-repeat;
        background-size: 100% 100%;
      }
      .img2 {
        height: 83px;
        background: url("../assets/index/index_icon_022.png") no-repeat;
        background-size: 100% 100%;
      }
      p {
        text-shadow: 0 0 0.2em #dcd3b6,
          -0 -0 0.2em #dcd3b6
      }
    }
    /*首页视频*/
    .section {
      text-align: center;
      overflow: hidden;
    }
    #section0 {
      overflow: hidden !important;
    }
    #myVideo {
      position: absolute;
      right: 0;
      bottom: 0;
      top: 0;
      /*right: 0;*/
      width: 100%;
      /*background-size: 100% 100%;*/
      background-color: black; /* in case the video doesn't fit the whole page*/
      background-image: /* our video */;
      background-position: center center;
      /*background-size: cover !important;*/
      object-fit: fill; /*cover video background */
    }
    /*@media only screen and (max-width: 1900px){*/
      /*#myVideo {*/
        /*height: 100%;*/
      /*}*/
    /*}*/
    video::-webkit-media-controls {
      display: none !important;
    }
  /*app*/
  @media only screen and (max-width:750px) {
    .page_bg {
      background: url("../assets/app/app-index-bg.jpg") no-repeat;
      background-size: 100% 100%;
      opacity: 1;
    }
    .home-ctn{
      height:  calc(50%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      vertical-align: middle;
    }
    .home-title {
      h1 {
        font-size: 1rem;
        margin-top: 3.4rem;
        margin-bottom: 1rem;
      }
      p {
        text-align: center;
        font-size: 0.625rem;
      }
    }
    .home-href {
      width: 50%;
      margin: auto;
      margin-top: 43px;
      p {
        font-size: 0.5rem;
        height: 1.7rem;
        line-height: 1.7rem;
        text-align: center;
      }
      .img1, .img2{
        height: 2.4rem;
      }
    }
    .activeHover {
      .img1, .img2{
        height: 2.4rem;
      }
    }
  }
</style>
