<template>
  <div class="footer" @touchend="backHome($event)" @touchstart="getY($event)">
    <div class="top">
      <div class="wrap cf">
        <div class="li pc-hidden">
          <img src="../assets/footer/part6-icon02.png" alt="">联系电话：400-100-791826号1F</div>
        <div class="li">
          <img src="../assets/footer/part6-icon01.png" alt="">厦门思明去软件园二期管日禄26号1F</div>
        <div class="li app-hidden">
          <img src="../assets/footer/part6-icon02.png" alt="">联系电话：400-100-791826号1F</div>
        <div class="li">
          <img src="../assets/footer/part6-icon03.png" alt="">邮箱：
          <a href="mailto:guanghuanjing@landsky.cn">77958008@qq.com</a>
        </div>
        <div class="lastLi pc-hidden">
          <p>Copyright&nbsp;©&nbsp;2016厦门星之光科技有限公司</p>
          <p>闽ICP备16027727号-1</p>
        </div>
        <div class="ewm">
          <a href="http://123.56.243.92:8080/login/Login.jsp" target="_blank" class="a">
            <img src="../assets/footer/part6-icon06.png" alt="" title="">
          </a>
        </div>
        <div class="ewm">
          <a href="https://www.263.net/" target="_blank" class="a">
            <img src="../assets/footer/part6-icon05.png" alt="" title="">
          </a>
        </div>
        <div class="ewm">
          <a href="javascript:;" class="a">
            <img src="../assets/footer/part6-icon04.png" alt="">
          </a>
          <!--<div class="ewmBg">-->
            <!--<img src="../assets/footer/part6-icon04.png" alt="22" title="1">-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <div class="copy app-hidden">
      <div class="wrap cf">
        <div class="site">
          <a href="/detail/68.html" target="_blank">隐私条款</a>
          <span>|</span>
          <a href="/sitemap.html" target="_blank">网站地图</a>
          <span>|</span>
          <a href="/detail/67.html" target="_blank">法律声明</a>
          <span>|</span>
        </div>
        <div class="p">Copyright&nbsp;©&nbsp;2016厦门星之光科技有限公司&nbsp;闽ICP备16027727号-1</div>
        <div class="logo2">
          <router-link :to="{path: '/'}" @click.native="destroyFullpage">
            <img src="../assets/us/logo.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    destroyFullpage () {
      this.$emit('destroyFullpage')
    },
    backHome (attr) {
      let appNew = document.getElementById('new')
      if (appNew) {
        this.$emit('backHome', attr)
      }
    },
    getY (attr) {
      let appNew = document.getElementById('new')
      if (appNew) {
        this.$emit('getY', attr)
      }
    }
  }
}
</script>

<style scoped>
  .footer{ background:#252525;z-index:9;position: relative;}
  .footer .top{ padding:35px 0; color:#fff; position: relative; z-index:2; border-bottom:1px solid #313131; }
  .footer .top img{ height:24px; padding-left: 15px; }
  .footer .top .li{ float: left;white-space: nowrap;}
  .footer .top .li img{padding-right:5px;}
  .footer .top .li + .li{ padding-left: 50px;  }
  .footer .top .li a{  text-transform: uppercase; font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; color:#fff; font-size: 14px;}
  .footer .top .ewm{ float: right; padding:0; position: relative; }
  .footer .top .ewm .a{ display: block; }
  .footer .top .ewm .a img{ height:24px; display: block; }

  .footer .copy .wrap>div{ display: inline-block; padding:30px 25px 30px 0; line-height:1.5; color:#fff;  text-transform: uppercase; }
  .footer .copy .wrap>div.widget-area-notice,.footer .copy .wrap>div.widget-area-edit{padding:0;}
  .footer .copy a{ color:#fff; }
  .footer .copy { position: relative; }
  .footer .copy .logo2{ position: absolute; right: 0;  padding:0 !important; }
  .footer .copy .logo2 a,.footer .copy .logo2 a img{ display: block; height:100%; }
  .footer .copy .site span{font-size: 14px;padding:0 5px; position: relative; top:-1px; }
  .footer .top .ewm .ewmBg{ position: absolute; width:228px; height:143px; left:-235px; top:50%; margin-top:-72px; background:url(../assets/footer/ewmBg.png) no-repeat center; display: none; }
  .footer .top .ewm .ewmBg img{ padding:0; width:178px; height:104px; position: absolute; top:50%; margin-top:-51px; left:21px; display: block; }
  .footer .top .ewm:hover .ewmBg{ display: block; }

  .footer .copy .wrap .p{padding-left: 108px;}

  @media only screen and (max-width:750px) {
    .ewm{display: none !important;}
    .footer{font-size: 0.55rem !important; z-index: unset;}
    .footer .top{z-index:unset;}
    .footer .wrap{z-index:unset;}
    .footer .top .li {
      float: none;
      line-height: 0.1rem;
      padding-bottom: 0.5rem !important;
    }
    .footer .top .li a{
      text-transform: none;
    }
    .footer .top img{
      height: 1rem;
      padding-left: 2rem;
    }
    .footer .top .li + .li{
      padding-left: 0;
    }
    .footer .top .lastLi{
      text-align: center;
      margin-top: 0.75rem;
      margin-bottom: 2.6rem;
      color: #707070;
    }
    .footer .top .lastLi p{
      font-size: 0.5rem;
      line-height: 1rem;
    }
  }
</style>
