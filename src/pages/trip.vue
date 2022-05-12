<template>
  <div>
    <!--<headerPage class="app-hidden" @destroyFullpage="destroyFullpage"></headerPage>-->
    <headerPage class="app-hidden"></headerPage>
    <div class="w3-top pc-hidden header">
      <appHeader @destroyFullpage="destroyFullpage"></appHeader>
    </div>
    <div id="fullpage" class="body_box w_1660">
      <div class="section tour tour1 fp-section active fp-table fp-completely trans">
        <div class="fp-tableCell" >
          <div class="x-box">
            <div class="x-bg part1"></div>
          </div>
          <div class="x-wrap">
            <div class="x_title">
              <h1 class="h1">旅游光环境</h1>
              <h3 class="h3"></h3>
              <h5 class="h5">首倡“全域夜间旅游”概念，丰富夜文化内涵、繁荣夜经济</h5>
              <p class="p">良业基于深厚的逐光底蕴，专注夜间旅游细分领域，首倡 “全域夜间旅游”概念，以PPP模式运作，引入社会资本与技术，对夜间旅游标志性产品进行“由大到小、由粗到精、<br>
                由广到深”的综合开发，助推景区夜间活力，增加游客驻留及消费，实现多方共赢。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section tour tour2 fp-section fp-table active fp-completely trans">
        <div class="fp-tableCell" >
          <div class="x-bg part2" id="x-bg"></div>
          <div class="x-wrap">
            <div class="left">
              <div class="cont">
                <div class="x_title">
                  <h1 class="h1"></h1>
                  <h3 class="h3">PPP模式在夜间旅游领域的全面应用</h3>
                  <p class="p">以PPP模式引入社会资本，为旅游景区建设和照明技术设施建设融资打造夜间旅游的标志性产品和旅游观光带，提升旅游项目运作效率和收益水平。</p>
                </div>
                <ul class="list cf">
                  <li>
                    <div class="ico i1">
                      <img src="../assets/trip/part2-icon01.png" alt="">
                    </div>
                    <p class="p">旅游目的地</p>
                  </li>
                  <li>
                    <div class="ico i1">
                      <img src="../assets/trip/part2-icon02.png" alt="">
                    </div>
                    <p class="p">历史文化名城</p>
                  </li>
                  <li>
                    <div class="ico i1">
                      <img src="../assets/trip/part2-icon03.png" alt="">
                    </div>
                    <p class="p">自然生态城市</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="right">
              <div class="cont">
                <div class="x_title">
                  <h1 class="h1"></h1>
                  <h3 class="h3">塑造文化旅游新名片</h3>
                  <p class="p">在灵活运用声光电技术手段基础上，通过科学规划将地域文化底蕴与光环境艺术有机结合，营造夜间文化、娱乐、购物环境，实现景区项目增值。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section tour tour3 fp-section fp-table active fp-completely trans">
        <div class="fp-tableCell" >
          <div class="x-bg part3" id="b_rabbit1"></div>
          <div class="x-wrap">
            <div class="x_title">
              <h1 class="h1"></h1>
              <h3 class="h3">夜间旅游全方位整合服务</h3>
            </div>
            <div class="list">
              <ul>
                <li>
                  <b class="b">p</b>
                  <p class="p">规划</p>
                </li>
                <li>
                  <b class="b">d</b>
                  <p class="p">开发</p>
                </li>
                <li>
                  <b class="b">o</b>
                  <p class="p">策划</p>
                </li>
                <li>
                  <b class="b">m</b>
                  <p class="p">建设</p>
                </li>
              </ul>
              <ul>
                <li>
                  <b class="b">p</b>
                  <p class="p">投资</p>
                </li>
                <li>
                  <b class="b">b</b>
                  <p class="p">融资</p>
                </li>
                <li>
                  <b class="b">i</b>
                  <p class="p">运营</p>
                </li>
                <li>
                  <b class="b">j</b>
                  <p class="p">设计</p>
                </li>
                <li>
                  <b class="b">d</b>
                  <p class="p">营销</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section tour tour4 fp-section fp-table active fp-completely trans">
        <div class="fp-tableCell" >
          <div class="x-bg part4" id="b_rabbit2"></div>
          <div class="x-wrap">
            <!--<div class="x_title">-->
              <!--<h1 class="h1"></h1>-->
              <!--<h3 class="h3"></h3>-->
            <!--</div>-->
            <ul class="list">
              <li v-for="(item,temp) in part4List" :key="temp">
                <div class="img">
                  <img :src="item.img" :alt="item.title" :title="item.title">
                </div>
                <div class="cont">
                  <h3 class="h3">{{item.title}}</h3>
                  <p class="p"  style="display: none; height: 42px; padding-top: 0px; margin-top: 15px; padding-bottom: 0px; margin-bottom: 0px;">{{item.ctn}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section tour tour5 fp-section fp-table active fp-completely trans">
        <div class="fp-tableCell" >
          <div class="x-wrap">
            <ul class="imgs">
              <li class="act part5-1-1"></li>
              <li class="part5-1-2"></li>
              <li class="part5-1-3"></li>
            </ul>
            <div class="cont part5">
              <ul class="list">
                <!--<li class="cur" v-for="(item,temp) in part5List" :key="temp">-->
                <li v-for="(item,temp) in part5List" :key="temp">
                  <div class="ico i1">
                    <img :src="item.img">
                  </div>
                  <h3 class="h3">{{item.title}}</h3>
                  <h4 class="h4"></h4>
                  <p class="p">{{item.ctn}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="section tour tour6 fp-section fp-table active fp-completely trans">
        <div class="fp-tableCell">
          <div class="x-bg part6" id="bg"></div>
          <div class="x-wrap">
            <div class="x_title">
              <h1 class="h1"></h1>
              <h3 class="h3">旅游光环境相关案例</h3>
              <a href="#" class="x-more">查看更多</a>
            </div>
            <ul class="list">
              <li v-for="(item,temp) in part6List" :key="temp">
                <!--<a href="" target="_blank">-->
                  <div class="img scaleimg">
                    <img :src="item.img" alt="" title="">
                  </div>
                  <p class="p">{{item.title}}</p>
                <!--</a>-->
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section sectionFooter fp-section fp-table active fp-completely trans">
        <div class="fp-tableCell">
          <footerPage  @destroyFullpage="destroyFullpage"></footerPage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import headerPage from '../pages/header'
import footerPage from '../pages/footer'
import appHeader from '../components/app-header'
export default {
  name: 'trip',
  components: {
    footerPage,
    headerPage,
    appHeader
  },
  data () {
    return {
      myFullpage: '',
      part4List: [
        {
          img: require('../assets/trip/part4-01.jpg'),
          title: '因势利导积极培育',
          ctn: '与合作单位制定规划，解决夜间"能消费"的问题游客解决"想消费"的问题'
        }, {
          img: require('../assets/trip/part4-02.jpg'),
          title: '顺势而为特色项目',
          ctn: '找准定位，形成特色。打造"差异化""市场化认可度高"的产品项目'
        }, {
          img: require('../assets/trip/part4-03.jpg'),
          title: '主动而为注入文化',
          ctn: '在文化因素上做文章，赋予夜间产品文化内涵，打造无法复制的品牌特色'
        }, {
          img: require('../assets/trip/part4-04.jpg'),
          title: '互动体验满足交流',
          ctn: '增加游客与景区之间、游客与游客之间、游客与产品之间的互动与交流。更深层次的体验景区'
        }, {
          img: require('../assets/trip/part4-05.jpg'),
          title: '产品互补拓展宽产业链',
          ctn: '强调与景区白天旅游项目、现有旅游资源互补。拉长"吃、住、行、游、购娱"等旅游生态链'
        }
      ],
      part5List: [
        {
          img: require('../assets/trip/part5-icon01.png'),
          title: '观光游览价值',
          ctn: '延长游客驻留时间，提升景区竞争力和吸引力'
        }, {
          img: require('../assets/trip/part5-icon02.png'),
          title: '文化休闲价值',
          ctn: '深化旅游资源开发，创新文化展示'
        }, {
          img: require('../assets/trip/part5-icon03.png'),
          title: '购物娱乐价值',
          ctn: '丰富文化旅游业态，拉动夜间消费'
        }
      ],
      part6List: [
        {
          img: require('../assets/trip/part6-01.jpg'),
          title: '2017“一带一路”峰会景区照...'
        }, {
          img: require('../assets/trip/part6-02.jpg'),
          title: '延安城市大型灯光山水秀'
        }, {
          img: require('../assets/trip/part6-03.jpg'),
          title: '华山景区亮化提升改造项目'
        }
      ]
    }
  },
  mounted () {
    // this._initFullPage()
    this.myFullpage = new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
    })
    // let self = this
    // window.addEventListener('popstate', function (e) {
    //   self.destroyFullpage()
    // }, false)
  },
  methods: {
    destroyFullpage () {
      console.log('被销毁')
      this.myFullpage.destroy(false)
    }
  },
  destroyed () {
    if (document.body.clientWidth > 750) {
      this.destroyFullpage()
    }
  }
}
</script>

<style scoped lang="less">
  .sectionFooter, .sectionFooter .fp-tableCell {height: auto !important;}
  .section .part1 {background: url('../assets/trip/part1.jpg') no-repeat; background-size: 100% 100%;}
  .section .part2 {background: url('../assets/trip/part2.jpg') no-repeat; background-size: 100% 100%;}
  .section .part3 {background: url('../assets/trip/part3.jpg') no-repeat; background-size: 100% 100%;}
  .section .part4 {background: url('../assets/trip/part4.jpg') no-repeat; background-size: 100% 100%;}
  .section .part5-1-1 {background: url('../assets/trip/part5-01.jpg') no-repeat !important; background-size: 100% 100%;}
  .section .part5-1-2 {background: url('../assets/trip/part5-01-1.jpg') no-repeat !important; background-size: 100% 100%;}
  .section .part5-1-3 {background: url('../assets/trip/part5-01-2.jpg') no-repeat !important; background-size: 100% 100%;}
  .section .part6 {background: url('../assets/trip/part6.jpg') no-repeat; background-size: 100% 100%;}

  .x-wrap{ position: relative; width: 1230px; margin: auto; color: #f2e7c7;}
  .x-box{ position: absolute; left: 0; right: 0; top: 0; bottom: 0; overflow: hidden;}
  .x-bg{ position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: center no-repeat; background-size: cover;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .x_title{ text-align: center;}
  .x_title .h1{ font-size: 52px; line-height: 1.2; text-transform: uppercase;}
  .x_title .h2{ font-size: 50px; line-height: 1.2; text-transform: uppercase;}
  .x_title .h3{ font-size: 36px; line-height: 1.2;}
  .x_title .h4{ font-size: 32px; line-height: 1.2;}
  .x_title .h5{ font-size: 24px; line-height: 1.5;}
  .x_title .h6{ font-size: 20px; line-height: 1.5;}
  .x_title .p{ font-size: 18px; line-height: 1.5;}

  .tour{ color: #f2e7c7;}

  .tour1{}
  .tour1 .x_title{ margin-bottom: 42px;}
  .tour1 .x_title .h1{ margin-bottom: 10px;}
  .tour1 .x_title .h3{ margin-bottom: 32px;}
  .tour1 .x_title .h5{ margin-bottom: 23px;}
  .tour1 .x_title .p{ font-size: 14px;}

  .tour2{}
  .tour2 .x-wrap{ height: 100%;}
  .tour2 .x_title{ text-align: left;}
  .tour2 .x_title .h1{ margin-bottom: 18px; line-height: 58px;}
  .tour2 .x_title .h3{ margin-bottom: 30px; line-height: 44px;}
  .tour2 .x_title .p{ margin-right: 30px;}
  .tour2 .left, .tour2 .right{ position: absolute; width: 580px;}
  .tour2 .left{ left: 0; top: 15%;}
  .tour2 .right{ right: 0; top: 55%;}
  .tour2 .cont{}
  .tour2 .list{ margin-top: 30px;}
  .tour2 .list li{ float: left;}
  .tour2 .list li + li{ margin-left: 80px;}
  .tour2 .list .ico{ margin: auto; width: 90px; height: 110px; overflow: hidden;}
  .tour2 .list .ico img{ display: block; width: 100%;}
  .tour2 .list .p{ font-size: 18px; line-height: 1; text-align: center;}
  .tour3{
    background-color: white;
  }
  .tour3 .x_title{ margin-bottom: 50px;}
  .tour3 .x_title .h1{ margin-bottom: 10px;}
  .tour3 .list{ margin: 0 100px; text-align: center; font-size: 0;}
  .tour3 .list ul{ display: inline-block; vertical-align: top; overflow: hidden;}
  .tour3 .list ul + ul{ margin-top: -50px;}
  .tour3 .list li{ position: relative; float: left; width: 197px; height: 223px; background: url('../assets/trip/part3-icon.png') center no-repeat; line-height: 222px; text-align: center;}
  .tour3 .list .b, .tour3 .list .p{ position: absolute; top: 0; left: 0;}
  .tour3 .list .b{ position: absolute; width: 100%; font-family: "Avignon-Bold"; font-weight: bold; font-size: 120px; text-transform: uppercase; opacity: 0.05; filter: Alpha(opacity=5);}
  .tour3 .list .p{ position: absolute; width: 100%; font-size: 24px;}
  .tour3 .list .br1{ }
  .tour3 .list .br2{ margin-left: -50px;}

  .tour4{}
  .tour4 .x_title{ margin-bottom: 50px;}
  .tour4 .x_title .h1{ margin-bottom: 10px;}
  .tour4 .list{ height: 464px; box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.4); overflow: hidden;}
  .tour4 .list li{ position: relative; float: left; width: 402px; height: 226px; margin-left: 12px; margin-bottom: 12px; font-size: 0; letter-spacing: -1.5em; text-align: center; color: #fff;}
  .tour4 .list li:after{ content:''; display:inline-block; vertical-align:middle; height:100%;}
  .tour4 .list li:first-child{ margin-left: 0; height: 464px;}
  .tour4 .list .cont{ position: relative; display: inline-block; width: 310px; vertical-align: middle; letter-spacing: 0;}
  .tour4 .list .img{ position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden;}
  .tour4 .list .img img{ display: block; width: 100%;}
  .tour4 .list .h3{ font-size: 22px; line-height: 1.2;}
  .tour4 .list .p{ margin-top: 15px; font-size: 14px; line-height: 1.5; display: none;}
  .tour4 .list li:first-child .p{ display: block;}

  .tour5{}
  .tour5 .x-wrap{ width: 100%; height: 100%;}
  .tour5 .imgs{ position: absolute; left: 0; right: 50%; height: 100%;}
  .tour5 .imgs li{ position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: center no-repeat; background-size: cover; opacity: 0; filter: Alpha(opacity=0);
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }
  .tour5 .imgs .act{ opacity: 1; filter: Alpha(opacity=100);}
  .tour5 .cont{ position: absolute; left: 50%; right: 0; height: 100%; background: url('../assets/trip/part5-02.jpg') no-repeat; background-size: cover;}
  .tour5 .list{ position: absolute; left: 85px; top: 0; bottom: 0; margin: auto; width: 530px; height: 540px;}
  .tour5 .list li{ overflow: hidden;}
  .tour5 .list li + li{ margin-top: 120px;}
  .tour5 .list .ico{ float: left; margin-right: 14px; width: 64px; height: 64px; background: center no-repeat; overflow: hidden;}
  /*
  .tour5 .list .ico.i1{ background-image: url(../image/xf/png26.png);}
  .tour5 .list .ico.i2{ background-image: url(../image/xf/png27.png);}
  .tour5 .list .ico.i3{ background-image: url(../image/xf/png28.png);}
  */
  .tour5 .list .ico img{ display: block; width: 100%;}
  .tour5 .list .h3{ font-size: 24px; line-height: 1.5;}
  .tour5 .list .h4{ margin-bottom: 12px; font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; font-size: 18px; line-height: 1.5; text-transform: uppercase;}
  .tour5 .list .p{}
  .tour5 .list li.cur{ color: #fff;}

  .tour6{}
  .tour6 .x_title{ margin-bottom: 40px;}
  .tour6 .x_title .h1{ margin-bottom: 10px;}
  .tour6 .x_title .h3{ margin-bottom: 25px;}
  .tour6 .list{ overflow: hidden;}
  .tour6 .list li{ float: left; width: 401px; text-align: center;}
  .tour6 .list li + li{ margin-left: 13px;}
  .tour6 .list .img{ margin-bottom: 22px; height: 310px; overflow: hidden;}
  .tour6 .list .img img{ display: block; width: 100%;}
  .tour6 .list .p{ font-size: 20px; line-height: 1.5; color: #f2e7c7;}

  @media screen and (max-width: 750px) {
    .header {
      z-index: 9;
    }
    .section .part1 {background: url('../assets/app/app-trip-bg01.jpg') no-repeat; background-size: 100% 100%;}
    .section .part2 {background: url('../assets/app/app-trip-bg02.jpg') no-repeat; background-size: 100% 100%;}
    .section .part3 {background: url('../assets/app/app-trip-bg03.jpg') no-repeat; background-size: 100% 100%;}
    .section .part4 {background: url('../assets/app/app-trip-bg04.jpg') no-repeat; background-size: 100% 100%;}
    .section .part6 {background: url('../assets/app/app-trip-bg05.jpg') no-repeat; background-size: 100% 100%;}
    .x-wrap {
      width: 100%;
      padding: 0 0.625rem;
      box-sizing: border-box;
    }
    .tour1 .x_title {
      margin-bottom: 0.9rem;
    }
    .x_title .h1, .x_title .h2, .x_title .h3, .x_title .h4 {
      font-size: 0.875rem;
    }
    .x_title .h5 {
      font-size: 0.55rem;
    }
    .x_title .p {
      font-size: 0.55rem;
    }

    .tour2 .x-wrap {
      height: auto;
    }
    .tour2 .left {
      margin-bottom: 1.0666rem;
    }
    .tour2 .left, .tour2 .right {
      position: static;
      width: 100%;
    }
    .tour2 .x_title .h1 {
      margin-bottom: 0.1rem;
      line-height: 1.5;
    }
    .tour2 .x_title .h3 {
      margin-bottom: 0.3rem;
      line-height: 1.5;
    }
    .tour2 .x_title .p {
      margin-right: 0;
    }
    .tour2 .list {
      margin-top: 0.3rem;
    }
    .tour2 .list li {
      margin: 0 1%;
      width: 30%;
    }
    .tour2 .list .ico {
      margin-bottom: 0.1rem;
      width: 2.125rem;
      height: auto;
      background-size: contain;
      & img{
        width: 100%;
        height: 100%;
      }
    }
    .tour2 .list .p {
      font-size: 0.55rem;
    }
    .tour2 .list li + li {
      margin-left: 0;
    }
    .tour3 {
      .x_title {
        margin-bottom: 1.5rem;
      }
      .list {
        margin: 0;
        height: 5rem;
        li {
          width: 2.85rem;
          height: 3.3rem;
          background-size: contain;
          line-height: 3.3rem;
        }
        .b {
          font-size: 2rem;
        }
        .p {
          font-size: 0.55rem;
        }
        ul + ul {
          margin-top: -0.7rem;
        }
      }
    }
    .tour4 .list{
      height: auto;
      li:first-child {
        margin-left: 0;
        margin-bottom: 0;
        height: 8.425rem;
      }
      li:nth-child(4) {
        margin-left: 0;
      }
      .cont {
        width: 100%;
      }
      .h3 {
        font-size: 0.32rem;
      }
      li {
        width: 7.2rem;
        height: 4.15rem;
        margin-left: 0.25rem;
        margin-bottom: 0.225rem;
      }
    }
    .tour5 .x-wrap {
      height: auto;
    }
    .tour5 {
      background: url('../assets/trip/part5-02.jpg') center no-repeat;
      background-size: cover;
    }
    .tour5 .imgs {
       display: none;
    }
    .tour5 .cont {
      position: relative;
      left: 0;
      background: none;
    }
    .tour5 .list {
      position: static;
      width: 100%;
      height: auto;
      li{
        margin-left: 0.5rem;
      }
      li + li{
        margin-top: 3rem;
      }
      .ico {
        margin-right: 0.5rem;
        width: 1.6rem;
        height: 1.6rem;
        background-size: contain;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .h3 {
        margin-top: 0;
        font-size: 0.75rem;
      }
      p{
        font-size: 0.55rem;
      }
      .h4 {
        margin-bottom: 0.1rem;
      }
    }
    .tour6 .x_title {
      margin-bottom: 0.925rem;
      .h3 {
        margin-bottom: 0.75rem;
      }
    }
    .tour6 .list{
      li {
        width: 32%;
      }
      li + li {
        margin-left: 2%;
      }
      .img {
        margin-bottom: 0.7rem;
        height: auto;
      }
      .p {
        font-size: 0.55rem;
      }
    }
    .x-more {
      padding: 0.25rem 0.75rem;
      border: 1px solid;
      border-radius: 1rem;
      font-size: 0.55rem;
      line-height: 2;
    }
  }
</style>
