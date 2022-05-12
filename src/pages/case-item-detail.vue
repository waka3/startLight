<template>
  <div class="case" v-if="isShowPage" @mousewheel="threMouseEvent()">
    <img src="../assets/case/case01_bg.jpg" class="page_bg">
    <div class="w3-display-position serve-ctn">
      <div class="serve-ctn-bg"></div>
      <div class="serve-ctn-ctn">
        <div class="serve-ctn-ctn-title">
          <!--<h1>{{Item.title}}-->
            <!--<span>{{Item.english}}</span>-->
          <!--</h1>-->
          <h1>{{detailData.title}}
            <span v-if="params.type === 'img'">PHOTO COLLECTION</span>
            <span v-else>VIDEO COLLECTION</span>
          </h1>
          <span class="close" @click="Edit('isShowPage')"></span>
        </div>
        <div class="serve-ctn-ctn-ctn">
          <div class="swiper" v-if="params.type === 'img'">
            <slide :slides="detailData.data" :inv="3000" :params="params"></slide>
          </div>
          <div class="video-wrap" v-else>
            <video-page :video="detailData"></video-page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slide from '../components/slideShow'
import videoPage from '../components/video'
export default {
  components: {
    slide,
    videoPage
  },
  props: {
    isShowPage: {
      type: Boolean,
      default: false
    },
    detailData: {
      title: '',
      data: []
    },
    params: {}
  },
  data () {
    return {
      slide: ''
    }
  },
  mounted () {
    // this.getContent()
  },
  methods: {
    Edit (attr) {
      this.$emit('RemoveThreePage', attr)
    },
    threMouseEvent () {
      this.$emit('threMouseEvent')
      console.log('三级页面滚动触发')
    }
  }
}
</script>

<style scoped lang="less">
  .serve-ctn {
    position: absolute;
    width: 73.125%;
    /*width: 1170px;*/
    top: 7.66667%;
    left: 50%;
    transform: translateX(-50%);
    color: #bfbfbf;
    height: 81.66666%;
    overflow: hidden;
    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 0.7;
      /*background: url("../assets/home/twoPage_bg.png") no-repeat;*/
      /*background-size: 100% 100%;*/
    }
    &-ctn{
      position: relative;
      padding: 0 37px;
      h1{
        color: #dbdbdb;
        height: 60px;
        line-height: 60px;
        margin-bottom: 10px;
        background: url("../assets/home/fourPageTitle.png") no-repeat;
        background-position: bottom right;
        span{
          font-size: 12px;
        }
      }
    }
    .close{
      top: 8px;
      right: 8px;
    }
    &-ctn-ctn {
      height: 605px;
      margin-bottom: 45px;
      p{
        font-size: 14px;
        line-height: 24px;
        margin-right: 35px;
      }
      .child-element{
        padding-right: 35px;
      }
    }
  }
  .case-ctn-item{
    margin-top: 34px;
    li {
      display: inline-block;
      /*width: 22.720365%;*/
      /*margin-right: 3.0395%;*/
      width: 249px;
      margin-right: 20px;
      margin-bottom: 34px;
      text-align: center;
      background: #5d5d5d;
      padding: 10px;
      &:nth-of-type(4n){
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
        color: #fff;
        font-size: 14px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        margin-right: 0px;
      }
    }
  }
  .swiper, .video-wrap{
    height: 531px;
  }
</style>
