<template>
  <div id="app">
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
  </div>
</template>

<script>
/* eslint-disable no-unused-lets */
export default {
  name: 'app',
  mounted () {
    (function (doc, win) {
      let docEl = doc.documentElement
      let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
      let recalc = function () {
        let clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
      }
      if (!doc.addEventListener) return
      win.addEventListener(resizeEvt, recalc, false)
      doc.addEventListener('DOMContentLoaded', recalc, false)
    })(document, window)
  }
}
</script>

<style lang="less">
  @import "~w3-css";
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {margin: 0;padding: 0;}
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
  body {line-height: 1; min-width: 1230px;}
  ol, ul {list-style: none;}
  li > ul {margin: 0;}
  blockquote, q {quotes: none;}
  blockquote:before, blockquote:after, q:before, q:after {content: '';}
  table {border-collapse: collapse;border-spacing: 0;}
  textarea { resize:none; } /*防止拖动*/
  img {border:0; vertical-align:middle; }  /*  去掉图片低测默认的3像素空白缝隙，或者用display：block也可以*/
  a {color: inherit;text-decoration: none;}
  sup { vertical-align:text-top; }
  sub{ vertical-align:text-bottom; }
  .clearfix:before,.clearfix:after {content:""; display:table;}
  .clearfix{ *zoom:1;}/*IE/7/6*/
  s,i,em{font-style:normal;text-decoration:none;}
  .fl{float: left;}  .fr{float: right;}  .m05{margin: 5px;}  .m10{margin: 10px;} .m15{margin: 15px;} .m20{margin: 20px;} .m25{margin: 25px;} .m30{margin: 30px;} /*左外边距*/ .ml05{margin-left: 5px;} .ml10{margin-left: 10px;} .ml15{margin-left: 15px;} .ml20{margin-left: 20px;} .ml25{margin-left: 25px;} .ml30{margin-left: 30px;} .ml40{margin-left: 40px;} /*右外边距*/ .mr05{margin-right: 5px;} .mr10{margin-right: 10px;} .mr15{margin-right: 15px;} .mr20{margin-right: 20px;} .mr25{margin-right: 25px;} .mr30{margin-right: 30px;} .mr40{margin-right: 40px;} /*下外边距*/ .mb05{margin-bottom: 5px;} .mb10{margin-bottom: 10px;} .mb15{margin-bottom: 15px;} .mb20{margin-bottom: 20px;} .mb25{margin-bottom: 25px;} .mb30{margin-bottom: 30px;} .mb40{margin-bottom: 40px;} /*上外边距*/ .mt05{margin-top: 5px;} .mt10{margin-top: 10px;} .mt15{margin-top: 15px;} .mt20{margin-top: 20px;} .mt25{margin-top: 25px;} .mt30{margin-top: 30px;} .mt40{margin-top: 40px;} /*内边距*/ .p05{padding: 5px;} .p10{padding: 10px;} .p15{padding: 15px;} .p20{padding: 20px;} .p25{padding: 25px;} .p30{padding: 30px;} /*左内边距*/ .pl05{padding-left: 5px;} .pl10{padding-left: 10px;} .pl15{padding-left: 15px;} .pl20{padding-left: 20px;} .pl25{padding-left: 25px;} .pl30{padding-left: 30px;} /*右内边距*/ .pr05{padding-right: 5px;} .pr10{padding-right: 10px;} .pr15{padding-right: 15px;} .pr20{padding-right: 20px;} .pr25{padding-right: 25px;} .pr30{padding-right: 30px;} /*下内边距*/ .pb05{padding-bottom: 5px;} .pb10{padding-bottom: 10px;} .pb15{padding-bottom: 15px;} .pb20{padding-bottom: 20px;} .pb25{padding-bottom: 25px;} .pb30{padding-bottom: 30px;} /*上内边距*/ .pt05{padding-top: 5px;} .pt10{padding-top: 10px;} .pt15{padding-top: 15px;} .pt20{padding-top: 20px;} .pt25{padding-top: 25px;} .pt30{padding-top: 30px;}
  #app {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    color: white;
    width: 100%;
    overflow-y: hidden;
  }
  .color-yellow{
    color: #dcd3b6;
  }
  .border-shadow-yellow{
    box-shadow:-10px 0px 10px #dcd3b6;
  }
  .text-shadow-yellow{
    text-shadow:0 0 0.2em #dcd3b6,
      -0 -0 0.2em #dcd3b6
  }
  .activeHover{
    cursor: pointer;
    h1, h3, p, span{
      text-shadow:0 0 0.2em #dcd3b6,
        -0 -0 0.2em #dcd3b6;
    }
  }
  /*pc端弹窗大小*/
  @media only screen and (min-width:750px) {
    .pc-hidden{
      display: none !important;
    }
    .pc-wrap{
      width: 1170px;
    }
    .child-element{
      width: 1092px;
    }
  }
  h1{
    font-size: 30px;
    color: #dbdbdb;
  }
  .close{
    position: absolute;
    top: 20px;
    right: 20px;
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("../src/assets/close.png") no-repeat;
  }
  .select_com .s_btn:hover{ -webkit-box-shadow: 0px 0px 10px #f2e7c7; box-shadow: 0px 0px 10px #f2e7c7; }
  .select_com { position: relative; }
  .w_1660 .pubc-banner .h21{ font-size:36px;  }
  .w_1660 .pubc-banner .h22{ font-size:24px;  }
  .w_1660 .searchlist .title1box .h21{ font-size:36px;  }
  .w_1660 .searchlist .title1box .h22{ font-size:24px;  }
  .w_1660 .pubc-banner .desc1{ font-size:16px; }
  .w_1660 .exhibition .pubc-banner .h22 .span1{ font-size:24px;  }
  .wrap {
    width: 1230px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .cf:before{ content: ''; display: table }
  .cf:after{ content: ''; display: table; clear: both; }
  .text-ctn-p{
    line-height: 24px;
    letter-spacing: 1px;
  }
  @keyframes rot{
    0%{ -webkit-transform:rotate(0deg); transform:rotate(0deg); }
    100%{ -webkit-transform:rotate(360deg); transform:rotate(360deg); }
  }
  @-webkit-keyframes rot{
    0%{ -webkit-transform:rotate(0deg); }
    100%{ -webkit-transform:rotate(360deg); }
  }
  @keyframes rot1{
    0%{ -webkit-transform:rotate(0deg); transform:rotate(0deg); }
    100%{ -webkit-transform:rotate(-360deg); transform:rotate(-360deg); }
  }
  @-webkit-keyframes rot1{
    0%{ -webkit-transform:rotate(0deg); }
    100%{ -webkit-transform:rotate(-360deg); }
  }
  @media only screen and (max-width:750px) {
    /*font-size: 75px;*/
    body {
      min-width: 320px;
    }
    .app-hidden{
      display: none !important;
    }
    h1{
      font-size: 0.75rem;
    }
    .wrap{ width:auto; padding:0 0.2rem; }
  }
</style>
