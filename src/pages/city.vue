<template>
  <div>
    <headerPage class="app-hidden"></headerPage>
    <div class="w3-top pc-hidden header">
      <appHeader></appHeader>
    </div>
    <div class="body_box w_1660" id="city">
      <div class="escience">
        <div class="pubc-banner part1">
          <div class="wrap">
            <div class="text">
              <div class="h21">智慧城市</div>
              <div class="h22"></div>
              <div class="desc1">星之光，20年来专注于为城市塑造优质的光环境。从室内到室外，从提供照明系统服务到
                首创城市光环境运营商理念我们已经走过了漫长的“光”之路
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="escience1 show">
        <div class="pubc-banner part2"  id="escience1">
          <div class="wrap">
            <div class="text">
              <div class="h21"></div>
              <div class="h22">光赋予城市空间灵魂和生命</div>
              <div class="desc1">
                <div>灯光不是工具，而是平台和端口，把城市打造成大秀场，用光环境赋予城市空间灵魂和生命</div>
                <div>良业在实现城市规划目标的基础上，结合城市建筑生态，凭借先进、环保的照明技术对城市的室内、景观、道路、其他公共区域等进行针对性设计，以形成以下光环境优势</div>
              </div>
            </div>
            <div class="list cf">
              <div class="item">
                <div class="img">
                  <img src="../assets/city/part2-icon01.png" title="" alt="">
                </div>
                <div class="tit1">动态</div>
              </div>
              <div class="item">
                <div class="img">
                  <img src="../assets/city/part2-icon02.png" title="" alt="">
                </div>
                <div class="tit1">有序</div>
              </div>
              <div class="item">
                <div class="img">
                  <img src="../assets/city/part2-icon03.png" title="" alt="">
                </div>
                <div class="tit1">环保</div>
              </div>
              <div class="item">
                <div class="img">
                  <img src="../assets/city/part2-icon04.png" title="" alt="">
                </div>
                <div class="tit1">美观</div>
              </div>
              <div class="item">
                <div class="img">
                  <img src="../assets/city/part2-icon05.png" title="" alt="">
                </div>
                <div class="tit1">生态</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="escience2 show">
        <div class="wrap">
          <div class="item i1">
            <div class="tit1">环境效益</div>
            <div class="p1">安全照明，节能环保</div>
          </div>
          <div class="item i2">
            <div class="tit1">经济效益</div>
            <div class="p1">塑造夜间景观，助推夜游经济</div>
          </div>
          <div class="item i3">
            <div class="tit1">社会效益</div>
            <div class="p1">点亮城市，照亮民心</div>
          </div>
        </div>
      </div>
      <div class="escience3">
        <div class="pubc-banner part4" id="escience3">
          <div class="wrap">
            <div class="text">
              <div class="h21"></div>
              <div class="h22">良业以光为语言，讲述了一座座富有魅力的不夜城</div>
            </div>
            <div class="list cf">
              <div class="item i1">
                <!--<a href="/charoq.html?linkage_id=990190">-->
                  <div class="img part4-1">
                    <div class="line">
                      <div class="tit1">室内照明</div>
                      <div class="tit2"><em></em></div>
                      <div class="tit3">舒适悦目</div>
                    </div>
                  </div>
                <!--</a>-->
              </div>
              <div class="item i2">
                <!--<a href="/charoq.html?linkage_id=990156">-->
                  <div class="img part4-2">
                    <div class="line">
                      <div class="tit1">景观照明</div>
                      <div class="tit2"><em></em></div>
                      <div class="tit3">光之地标</div>
                    </div>
                  </div>
                <!--</a>-->
              </div>
              <div class="item i3">
                <!--<a href="/charoq.html?linkage_id=990158">-->
                  <div class="img part4-3">
                    <div class="line">
                      <div class="tit1">交通照明</div>
                      <div class="tit2"><em></em></div>
                      <div class="tit3">环保节能</div>
                    </div>
                  </div>
                <!--</a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
/* eslint-disable new-cap */
import headerPage from '../pages/header'
import footerPage from '../pages/footer'
import appHeader from '../components/app-header'
export default {
  name: 'city',
  components: {
    footerPage,
    headerPage,
    appHeader
  }
}
</script>

<style scoped lang="less">
  .section {
    .part {
      width: 100%;
      height: 100%;
      img {
      }
    }
  }
  .part1 {
    background: url('../assets/city/part1.jpg') no-repeat;
  }
  .part2 {
    background: url('../assets/city/part2.jpg') no-repeat;
  }
  .part4 {
    background: url('../assets/city/part4.jpg') no-repeat;
  }
  .part4-1{
    background: url('../assets/city/part4-01.jpg') no-repeat;
  }
  .part4-2{
    background: url('../assets/city/part4-02.jpg') no-repeat;
  }
  .part4-3{
    background: url('../assets/city/part4-03.jpg') no-repeat;
  }
  .escience .pubc-banner {
    height: 985px;
  }
  .pubc-banner {
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    text-align: center;
    color: #f2e7c7;
    line-height: 1;
    position: relative;
    background-size:cover;
  }
  /*@media screen and (min-width: 750px) {*/
    .pubc-banner .text {
      padding-top: 261px;
      width: 1090px;
      margin: 0 auto;
    }

    .pubc-banner .h21 {
      font-size: 35px;
      text-transform: uppercase;
      /* font-family: "CENTURY"; */
    }

    .pubc-banner .h22 {
      font-size: 32px;
      margin-top: 10px;
    }

    .pubc-banner a {
      color: inherit;
    }

    .pubc-banner .btnlo {
      font-size: 16px;
      margin-top: 30px;
    }

    .pubc-banner .btnlo .span1,
    .pubc-banner .btnlo .a {
      display: inline-block;
      vertical-align: middle;
      margin: 0 5px;
    }

    .pubc-banner .btnlo .span1 {
      margin-right: 30px;
    }

    .pubc-banner .btnlo .a {
      border: 1px solid #f2e7c7;
      border-radius: 200px;
      padding: 10px 30px;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    .pubc-banner .btnlo .a:hover {
      -webkit-box-shadow: 0 0 10px 0 #a7a6a5;
      box-shadow: 0 0 10px 0 #a7a6a5;
      text-shadow: 0 0 10px #a7a6a5;
    }

    .pubc-banner .btnlo .a.now {
      -webkit-box-shadow: 0 0 10px 0 #a7a6a5;
      box-shadow: 0 0 10px 0 #a7a6a5;
      text-shadow: 0 0 10px #a7a6a5;
    }

    .pubc-banner .desc1 {
      margin-top: 18px;
      font-size: 18px;
      line-height: 28px;
    }

    .download1 .pubc-page {
      margin-top: -10px;
    }

    .escience .pubc-banner {
      height: 985px;
    }

    .escience .pubc-banner .text {
      padding-top: 400px;
    }

    .escience .pubc-banner .desc1 {
      margin-top: 25px;
    }

    .escience1 .pubc-banner {
      height: 985px;
    }

    .escience1 .pubc-banner .desc1 {
      margin-top: 25px;
    }

    .escience1 .pubc-banner .text {
      padding-top: 230px;
    }

    .escience1 .pubc-banner .text .desc1 div {
      margin-bottom: 8px;
    }

    .escience1 .list .item {
      width: 198px;
      float: left;
      margin-left: 44px;
    }

    .escience1 .list .item:first-child {
      margin-left: 0;
    }

    .escience1 .list .item .img img {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: all 1.3s ease;
      transition: all 1.3s ease;
    }

    .escience1 .list .item .img {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      border-radius: 50%;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    .escience1 .list .item .img i {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      /*background: url(../image/lyc/escience1-img6.png) no-repeat center;*/
      border-radius: 50%;
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
    }

    .escience1 .list .item .tit1 {
      font-size: 22px;
      text-align: center;
      padding: 15px 0;
    }

    .escience1 .list {
      margin: 0 32px;
      margin-top: 68px;
    }

    .escience1 .list .item:hover .img {
      /*-webkit-box-shadow: 0 0 10px 0 #fff;
    box-shadow: 0 0 10px 0 #fff;*/
    }

    .escience2 {
      background: url(../assets/city/escience-img2.jpg) no-repeat center;
      height: 985px;
      overflow: hidden;
      background-size: cover;
    }

    .escience3 .pubc-banner {
      height: 853px;
    }

    .escience3 .pubc-banner .text {
      padding-top: 140px;
    }

    .escience3 .list .item {
      background-position: center;
      background-repeat: no-repeat;
    }

    .escience3 .list .item:hover .line {
      text-shadow: 0 0 10px #f2e7c7;
    }

    .escience3 .list .item {
      float: left;
      height: 556px;
      width: 410px;
    }

    .escience3 .list .item .img {
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    .escience3 .list .item.i1 .img {
      height: 482px;
      margin-top: 75px;
    }

    .escience3 .list .item.i2 .img {
      height: 556px;
    }

    .escience3 .list .item.i3 .img {
      height: 527px;
      margin-top: 30px;
    }

    .escience3 .list {
      margin-top: 62px;
    }

    .escience3 .list .item .line {
      display: inline-block;
      vertical-align: middle;
      font-size: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease
    }

    .escience3 .list .item .img:after {
      content: "";
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    }

    .escience3 .list .item .tit1 {
      font-size: 24px;

    }

    .escience3 .list .item .tit2 {
      font-size: 18px;
      /*font-family: 'Arial';*/
      text-transform: uppercase;
      margin-top: 10px;
      padding-bottom: 18px;
      margin-bottom: 18px;
      position: relative;
    }

    .escience3 .list .item .tit2 em {
      position: absolute;
      bottom: 0;
      left: 50%;
      border-top: 1px solid #cac0a5;
      display: block;
      width: 20px;
      margin-left: -10px;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }

    .escience3 .list .item:hover .tit2 em {
      width: 40px;
      margin-left: -20px;
    }

    .escience3 .list .item .tit3 {
      font-size: 18px;

    }

    .escience2 .wrap {
      height: 100%;
    }

    .escience2 .item {
      line-height: normal;
      color: #f2e7c7;
      text-align: center;
    }

    .escience2 .item .tit1 {
      font-size: 28px;
      text-shadow: 0 0 10px #f2e7c7;
    }

    .escience2 .item .p1 {
      font-size: 18px;
      margin-top: 5px;
    }

    .escience2 .item {
      position: absolute;
      width: 260px;
    }

    .escience2 .item.i1 {
      top: 220px;
      left: 50%;
      margin-left: -130px;
    }

    .escience2 .item.i2 {
      bottom: 160px;
      left: 80px;
    }

    .escience2 .item.i3 {
      bottom: 160px;
      right: 80px;
    }

    .searchlist {
      color: #f2e7c7;
      padding-top: 150px;
      line-height: 1;
    }

    .searchlist a {
      color: inherit;
    }

    .searchlist .title1box {
      text-align: center;
      padding-top: 70px;
    }

    .searchlist .title1box .h21 {
      font-size: 48px;
    }

    .searchlist .title1box .h22 {
      font-size: 44px;
      margin-top: 10px;
    }

    .searchlist .titl1 {
      font-size: 18px;
    }

    .searchlist .desc {
      line-height: 22px;
      font-size: 14px;
      margin-top: 15px;
    }

    .searchlist .list {
      margin-top: 35px;
    }

    .searchlist .list .more {
      font-size: 14px;
      display: block;
      margin-top: 16px;
    }

    .searchlist .list .more:hover {
      color: #e26222;
    }

    .searchlist .list .item {
      padding: 20px 0;
      padding-top: 30px;
      border-bottom: 1px solid #f6f6f6;
    }

    .searchlist .list .item:hover {
      border-color: #e26222;
    }

    .searchlist .list .item .titl1 span {
      color: #e26222;
    }

    .searchlist .pubc-page {
      margin-top: 65px;
      margin-bottom: 80px;
    }

    .escience1 .list .item:nth-child(1) {
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
    }

    .escience1 .list .item:nth-child(2) {
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .escience1 .list .item:nth-child(3) {
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
    }

    .escience1 .list .item:nth-child(4) {
      -webkit-transition-delay: 0.6s;
      transition-delay: 0.6s;
    }

    .escience1 .list .item:nth-child(5) {
      -webkit-transition-delay: 0.8s;
      transition-delay: 0.8s;
    }

    .escience1.show .list .item {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  /*}*/
  @media screen and (max-width: 750px) {
    .header{
      z-index: 9;
    }
    .body_box .pubc-banner{
      height: 11.875rem;
    }
    .body_box .wrap{
      width: calc(100% - 1rem);
      margin: auto;
      .text{
        width: 100%;
        padding-top: 5rem;
        & .h21{
          font-size: 0.875rem;
        }
        & .h22{
          font-size: 0.625rem;
          margin-top: 0.25rem;
          line-height: 1.4;
        }
        & .desc1{
          font-size: 0.4rem;
          margin-top: 0.6rem;
          line-height: 1.4;
          /*overflow: hidden;*/
        }
      }
    }
    .escience1 .pubc-banner {
      height: auto;
      overflow: hidden;
    }
    .escience1 .list {
      margin: 0.75rem 0;
      margin-bottom: 1.75rem;
      & .item {
        width: 4rem;
        float: none;
        display: inline-block;
        margin: 0.375rem;
        .img{
          height: 2.65rem;
          width: 2.65rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .tit1{
          font-size: 0.8rem;
          padding: 0.25rem 0;
        }
      }
    }
    .escience2 {
      height: 17rem;
      background-size: auto 100%;
      & .item {
        width: 5.5rem;
        &.i1 {
          top: 3.5rem;
          margin-left: -2.75rem;
        }
        & .p1{
          font-size: 0.55rem;
          margin: 0;
          height: 1.904rem;
        }
        & .tit1 {
          font-size: 0.65rem;
        }
        &.i2 {
          bottom: 0;
          left: 0;
        }
        &.i3 {
          bottom: 0;
          right: 0;
        }
      }
    }
    .escience3 .pubc-banner .text {
      padding-top: 2.5rem;
    }
    .part4 {
      background: url('../assets/app/city-part4-bg.jpg') no-repeat;
    }
    .escience3 .pubc-banner {
      height: auto;
      overflow: hidden;
      background-size: cover;
    }
    .escience3 .list {
      margin-top: 1.5rem;
      & .item {
        width: 100%;
        height: auto;
        margin-bottom: 0.5rem;
        & .tit1 {
          font-size: 0.625rem;
        }
        & .tit2 {
          font-size: 0.7rem;
          margin-top: 0.25rem;
          margin-bottom: 0.504rem;
          padding-bottom: 0.504rem;
        }
        & .tit3 {
          font-size: 0.55rem;
        }
      }
      & .item.i1, & .item.i2, & .item.i3 {
        .img {
          height: 17.35rem;
          margin: 0;
          background-size: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 750px) {
    .escience1 .list .item {
      opacity: 0;
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      -webkit-transition: all 1.4s cubic-bezier(.18, .89, .32, 1.28);
      transition: all 1.4s cubic-bezier(.18, .89, .32, 1.28);
    }
    .escience1 .list .item:nth-child(1) {
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
    }
    .escience1 .list .item:nth-child(2) {
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }
    .escience1 .list .item:nth-child(3) {
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
    }
    .escience1 .list .item:nth-child(4) {
      -webkit-transition-delay: 0.6s;
      transition-delay: 0.6s;
    }
    .escience1 .list .item:nth-child(5) {
      -webkit-transition-delay: 0.8s;
      transition-delay: 0.8s;
    }
    .escience1.show .list .item {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    .escience2 {
      opacity: 0;
      -webkit-transition: all 1.4s ease;
      transition: all 1.4s ease;
    }
    .escience2.show {
      opacity: 1;
    }
    .escience2 .item .tit1 {
      opacity: 0;
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      -webkit-transition: all 1.4s ease 1s;
      transition: all 1.4s ease 1s;
    }
    .escience2 .item .p1 {
      opacity: 0;
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
      -webkit-transition: all 1.4s ease 1s;
      transition: all 1.4s ease 1s;
    }
    .escience2.show .item .p1,
    .escience2.show .item .tit1 {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
