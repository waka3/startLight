<template>
  <div class="serve">
    <div class="page_bg"></div>
    <div class="w3-display-position serve-ctn pc-wrap">
      <div class="serve-ctn-bg app-hidden"></div>
      <div class="serve-ctn-ctn">
        <h1 class="w3-center">服务项目</h1>
        <p class="w3-center eng app-hidden">
          <span class="line"></span>
          <span class="eng-text">SERVICE ITEMS</span>
          <span class="line"></span>
        </p>
        <p class="w3-center eng pc-hidden"></p>
        <ul class="serve-ctn-item app-hidden">
          <li v-for="(item,index) in ItemList" :key="index" @mouseover="addActive($event)" @mouseout="removeActive($event)" @click="open(item.key)">
            <div class="serve-ctn-item-img">
              <img :src="item.img" alt="">
            </div>
            <div class="serve-ctn-item-ctn">
              <h3>{{item.title}}</h3>
              <p>{{item.english}}</p>
            </div>
          </li>
        </ul>
        <ul class="serve-ctn-item pc-hidden">
          <li v-for="(item,index) in ItemListApp" :key="index">
            <router-link class="serve-ctn-item-img" :to="{path: item.path}" @click.native="stopMouseDown">
              <img :src="item.img" alt="">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="serve-item-detail app-hidden" v-if="!$isApp">
      <!--<serveItem :is-show='isShow' @RemoveInnerPage="RemoveInnerPage($event)"></serveItem>-->
      <serveOne :is-show='isShowOne' @RemoveInnerPage="RemoveInnerPage($event)" @mouseEvent="RemoveInnerPage('isShowOne')"></serveOne>
      <serveTwo :is-show='isShowTwo' @RemoveInnerPage="RemoveInnerPage($event)" @mouseEvent="RemoveInnerPage('isShowTwo')"></serveTwo>
      <serveThree :is-show='isShowThree' @RemoveInnerPage="RemoveInnerPage($event)" @mouseEvent="RemoveInnerPage('isShowThree')"></serveThree>
      <serveFour :is-show='isShowFour' @RemoveInnerPage="RemoveInnerPage($event)" @mouseEvent="RemoveInnerPage('isShowFour')"></serveFour>
      <serveFive :is-show='isShowFive' @RemoveInnerPage="RemoveInnerPage($event)" @mouseEvent="RemoveInnerPage('isShowFive')"></serveFive>
    </div>
    <!--<div class="serve-item-detail pc-hidden" v-if="$isApp">-->
      <!--<keep-alive>-->
        <!--<router-view></router-view>-->
      <!--</keep-alive>-->
    <!--</div>-->
  </div>
</template>

<script>
import serveItem from '../pages/serve-item'
import serveOne from '../pages/serve/serve01'
import serveTwo from '../pages/serve/serve02'
import serveThree from '../pages/serve/serve03'
import serveFour from '../pages/serve/serve04'
import serveFive from '../pages/serve/serve05'
export default {
  name: 'serve',
  props: {
    slideIsClick: false
  },
  components: {
    serveItem,
    serveOne,
    serveTwo,
    serveThree,
    serveFour,
    serveFive
  },
  data () {
    return {
      isShowOne: false,
      isShowTwo: false,
      isShowThree: false,
      isShowFour: false,
      isShowFive: false,
      item: {},
      ItemList: [
        {
          img: require('../assets/serve/serve_img01.jpg'),
          title: '3D全息宴会厅',
          english: '3D Holographic BANQUET HALL',
          key: 'isShowOne'
        }, {
          img: require('../assets/serve/serve_img02.jpg'),
          title: '裸眼3D灯光秀',
          english: 'NAKED EYE 3D',
          key: 'isShowTwo'
        }, {
          img: require('../assets/serve/serve_img03.jpg'),
          title: '数字化展厅',
          english: 'DIGITAL EXHIBITION HALL',
          key: 'isShowThree'
        }, {
          img: require('../assets/serve/serve_img04.jpg'),
          title: '多媒体演艺室',
          english: 'Multimedia Performing Arts',
          key: 'isShowFour'
        }, {
          img: require('../assets/serve/serve_img05.jpg'),
          title: '影视制作',
          english: 'Video Making',
          key: 'isShowFive'
        }
      ],
      ItemListApp: [
        {
          img: require('../assets/app/serve-list01.jpg'),
          itemImg: require('../assets/serve/serve01_bg.jpg'),
          path: 'serve/index=0'
        }, {
          img: require('../assets/app/serve-list02.jpg'),
          itemImg: require('../assets/serve/serve01_bg.jpg'),
          path: 'serve/index=1'
        }, {
          img: require('../assets/app/serve-list03.jpg'),
          itemImg: require('../assets/serve/serve01_bg.jpg'),
          path: 'serve/index=2'
        }, {
          img: require('../assets/app/serve-list04.jpg'),
          itemImg: require('../assets/serve/serve01_bg.jpg'),
          path: 'serve/index=3'
        }, {
          img: require('../assets/app/serve-list05.jpg'),
          itemImg: require('../assets/serve/serve01_bg.jpg'),
          path: 'serve/index=4'
        }
      ]
    }
  },
  methods: {
    open (attr) {
      // this.key = attr
      this[attr] = true
      // this.item = obj
    },
    RemoveInnerPage (attr) {
      console.log('返回上一页')
      this[attr] = false
    },
    stopMouseDown () {
      this.$emit('pageClick')
    }
  },
  watch: {
    slideIsClick (val) {
      if (val) {
        this.isShowOne = false
        this.isShowTwo = false
        this.isShowThree = false
        this.isShowFour = false
        this.isShowFive = false
      }
    }
  }
}
</script>

<style scoped lang="less">
  @media only screen and (min-width:750px) {
    .page_bg {
      background: url("../assets/serve/serve_bg.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .serve-ctn {
      position: absolute;
      /*width: 73.125%;*/
      top: 16.888889%;
      left: 50%;
      transform: translateX(-50%);
      color: #bfbfbf;
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.9;
        border-radius: 2px;
      }
      &-ctn {
        position: relative;
        padding: 0 37px;
        h1 {
          height: 74px;
          line-height: 106px;
        }
        .eng {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          line-height: 40px;
          span {
            /*background: black;*/
            /*opacity: 0.9;*/
            /*padding-left: 5px;*/
            /*padding-right: 5px;*/
            flex: 2;
          }
          .line {
            flex: 5;
            border-bottom: 2px solid #484849;

          }
        }
      }
      &-item {
        margin-top: 34px;
        display: flex;
        justify-content: space-between;
        li {
          margin-right: 10px;
          text-align: center;
          min-height: 300px;
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 100%;
          }
          h3 {
            color: white;
            margin-top: 34px;
          }
          p {
            color: #616161;
            font-size: 12px;
            height: 34px;
            line-height: 34px;
          }
        }
      }
    }
    /* 内页样式 */
    .serve-item-detail /deep/  .page_bg {
      background: url("../assets/serve/serve01_bg.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .serve-item-detail /deep/ .serve-ctn {
      position: absolute;
      top: 7.66667%;
      left: 50%;
      transform: translateX(-50%);
      color: #bfbfbf;
      min-height: 82.22222%;
      overflow: hidden;
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/home/twoPage_bg.jpg") no-repeat;
        background-size: 100% 100%;
      }
      &-ctn{
        position: relative;
        padding: 0 37px;
        &-title{
          height: 100px;
          margin-top: 17px;
          margin-right: 35px;
          background: url("../assets/home/threePageTitle.png") no-repeat;
          background-size: 100% 100%;
        }
        h1{
          color: #dbdbdb;
          height: 60px;
          line-height: 60px;
          span{
            font-size: 12px;
          }
        }
      }
      &-ctn-ctn {
        height: 605px;
        /*overflow: auto;*/
        margin-bottom: 45px;
        &-title{
          margin-top: 55px;
          margin-bottom: 55px;
        }
        p{
          font-size: 16px;
          margin-bottom: 20px;
          line-height: 24px;
          letter-spacing: 1px;
        }
        h3{
          text-align: center;
          font-size: 26px;
          margin-top: 80px;
          margin-bottom: 30px;
        }
        h4{
          font-size: 22px;
          line-height: 40px;
        }
        h5{
          font-size: 16px;
          font-weight: 100;
          line-height: 40px;
        }
        .special_img{
          display: block;
          width: 90%;
          margin: auto;
          margin-top: 24px;
          margin-bottom: 24px;
        }
        .cirle-p{
          margin-bottom: 20px;
        }
        .cirle-p:before{
          display: inline-block;
          content: '';
          width: 15px;
          height: 15px;
          background: white;
          margin-right: 13px;
          border-radius: 50%;
        }
        img{
          width: 100%;
          &[alt='title']{
            margin-top: 96px;
            margin-bottom: 24px;
            & + img[alt='title']{
              margin-top: 0;
            }
          }
        }
        .servefour-img{
          margin-top: 110px !important;
        }
        .servefive-img{
          margin-top: 0 !important;
          margin-bottom: 40px !important;
        }
        p + img, p + p{
          margin-bottom: 40px;
        }
        img[alt='img'] + img{
          margin-top: 24px;
        }
        img:last-child{
          margin-top: 96px !important;
        }
        .child-element{
          padding-right: 35px;
        }
        h1, img{
          text-align: center;
        }
      }
    }
  }
  @media only screen and (max-width:750px) {
    .page_bg {
      background: url("../assets/app/app-serve-bg.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .serve-ctn {
      position: absolute;
      width: 11rem;
      top: 3.35rem;
      left: 50%;
      transform: translateX(-50%);
      color: #bfbfbf;
      &-ctn {
        position: relative;
        margin-top: 0.95rem;
        /*margin-bottom: 2.1rem;*/
        h1 {
          height: 1.55rem;
          line-height: 1.55rem;
        }
        .eng {
          width: 100%;
          height: 0.25rem;
          background: url("../assets/app/serve-list-title.png") no-repeat;
          background-size: 100% 100%;
          background-position: center;
        }
      }
      &-item {
        flex-direction: column;
        margin-top: 0.65rem;
        li {
          display: flex;
          background: #181818;
          margin-bottom: 0.4rem;
        }
        &-img{
          width: 100%;
          height: 2.95rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
