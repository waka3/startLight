<template>
  <div class="header_index header">
    <div class="wrap">
      <div class="logo">
        <router-link :to="{path: '/'}" class="a" @click.native="destroyFullpage">
          <img src="../assets/index/index_logo.png" alt="良业" title="良业">
        </router-link>
      </div>
      <!--<div class="share_w">-->
        <!--<div class="shareBtn">-->
          <!--<a href="javascript:;" class="a"></a>-->
          <!--<div class="sharew" style="display: none;">-->
            <!--<div class="bdsharebuttonbox bdshare-button-style0-24" data-bd-bind="1540439965746">-->
              <!--<a href="#" title="分享到微信" class="popup_wx" data-cmd="weixin"></a>-->
              <!--<a href="#" title="分享到新浪微博" class="bds_tsina" data-cmd="tsina"></a>-->
              <!--<a href="#" title="分享到qq好友" class="popup_sqq" data-cmd="sqq"></a>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="searchBtn">-->
          <!--<a href="javascript:;" class="a"></a>-->
          <!--<div class="search_w" style="display: none;">-->
            <!--<div class="i">-->
              <!--<input type="text" class="input" placeholder="SEARCH..." id="search" onkeydown="keydown(event, '#btns')">-->
              <!--<a href="javascript:;" class="search_btn" id="btns"></a>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="navBtn"><a href="javascript:;" class="a"></a></div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
export default {
  // name: 'header'
  methods: {
    destroyFullpage () {
      this.$emit('destroyFullpage')
    }
  }
}
</script>

<style scoped>
  .title_com{ color:#f2e7c7; }
  .title_com h2{ font-size:34px; line-height:1.1; padding-top:18px; }
  .title_com h3{ font-size:50px; line-height:1.1; text-transform: uppercase; }
  .a_com a{ display: inline-block; border-radius: 20px; border:1px solid #f2e7c7; padding:0 28px; line-height:40px; font-size:16px; transition:all 0.3s; -webkit-transition:all 0.3s; color:#f2e7c7; cursor: pointer;
  }
  .a_com a:hover{ -webkit-box-shadow: 0px 0px 10px #f2e7c7; box-shadow: 0px 0px 10px #f2e7c7; text-shadow: 0px 0px 10px #f2e7c7; }
  .w_1660 .title_com h2{ font-size:24px; }
  .w_1660 .title_com h3{ font-size:36px; }

  .header_index{ position: fixed;  width:100%; top:40px; left:0; z-index:101; }
  .header_index .logo .a{ display: inline-block; height:110px; float: left; }
  .header_index .logo img{ display: inline-block; height:100%; margin:0 auto; }
  .share_w{display: inline-block; float: right; padding-top: 20px; text-align: center; }
  .share_w>div{ display: inline-block; margin:0 -3px; padding:0 5px; position: relative; }
  .share_w .a{ display: block; width:44px; height:44px; border-radius: 50%; border:2px solid #f2e7c7; background:url(../assets/header/head-icon01.png) no-repeat center; transition:all 0.3s; -webkit-transition:all 0.3s; }
  .share_w .searchBtn .a{ background-image:url(../assets/header/head-icon02.png); }
  .share_w .navBtn .a{ background-image:url(../assets/header/head-icon03.png); animation:sha 2s linear infinite; -webkit-animation:sha 2s linear infinite; }
  .share_w .a:hover{ -webkit-box-shadow: 0px 0px 10px #f2e7c7; box-shadow: 0px 0px 10px #f2e7c7;  }

</style>
