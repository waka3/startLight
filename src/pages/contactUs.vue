<template>
  <div class="us">
    <div class="page_bg"></div>
    <div class="w3-display-position us-ctn">
      <div class="us-ctn-bg"></div>
      <h1 class="app-hidden">公司新闻</h1>
      <ul class="lab-bottom pc-hidden">
        <li class="tel">联系电话：0592-5511856</li>
        <li class="address">厦门思明区软件园二期观日路26号1F</li>
        <li class="email">77958008@qq.com</li>
      </ul>
      <div class="us-ctn-ctn">
        <div class="map-wrap">
          <BMap></BMap>
        </div>
        <div class="lab-bottom app-hidden">
          <div class="lab-bottom-left">
            <div class="lab-bottom-left-img">
              <img src="../assets/us/logo.png" alt="">
            </div>
            <ul>
              <li>厦门星之光科技有限公司</li>
              <li>地址：厦门思明区软件园二期观日路26号1F</li>
              <li>电话：0592-5511856</li>
            </ul>
          </div>
          <div class="lab-bottom-right">
            <span></span>
            <div class="lab-bottom-right-wrap">
              <p>全国业务咨询专业</p>
              <p>400-100-7918</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Close from '../components/close'
import BMap from '../components/BMap'

export default {
  name: 'us',
  components: {
    BMap,
    Close
  },
  props: {
    bgImg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
  @media only screen and (min-width: 750px) {
    .page_bg {
      background: url("../assets/home/contactUs_bg.jpg") no-repeat;
      background-size: 100% 100%;
    }

    .map-wrap {
      width: 100%;
      height: 460px;
    }

    .us-ctn {
      width: 73.125%;
      top: 8.8888888%;
      left: 50%;
      transform: translateX(-50%);
      color: #bfbfbf;
      overflow: hidden;
      h1 {
        height: 60px;
        line-height: 60px;
        color: #616265;
        text-indent: 72px;
      }
      &-ctn {
        height: 600px;
        padding-top: 20px;
      }
      &-bg {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/home/twoPage_bg.jpg") no-repeat;
        background-size: 100% 100%;
        background-origin: content-box;
      }
    }

    .lab-bottom {
      position: relative;
      width: 100%;
      padding-top: 26px;
      padding-bottom: 26px;
      &-left, &-right {
        display: inline-block;
      }
      &-left {
        width: 65%;
        &-img {
          float: left;
          padding: 0 46px;
        }
      }
      ul li {
        height: 26px;
        line-height: 26px;
        font-size: 16px;
        color: #a9a9a8;
      }
      &-right {
        padding-right: 30px;
        width: 34.5%;
        text-align: right;
        span {
          display: inline-block;
          width: 51px;
          height: 51px;
          margin-right: 10px;
          background: url("../assets/us/tel-icon.png") no-repeat;
        }
        &-wrap {
          display: inline-block;
          text-align: left;
        }
        p:first-child {
          height: 26px;
          line-height: 26px;
          font-size: 16.54px;
          color: #999999;
        }
        p:last-child {
          color: #f7b85d;
          font-size: 23.72px
        }
      }
    }
  }

  @media only screen and (max-width: 750px) {
    .page_bg {
      background: url("../assets/home/twoPage_bg.jpg") repeat;
      background-size: 100% 100%;
    }

    .map-wrap {
      position: relative;
      width: 100%;
      height: 17.5rem;
    }

    .us-ctn {
      width: calc(100% - 1rem);
      margin: auto;
      top: 3.35rem;
      left: 50%;
      transform: translateX(-50%);
      color: #bfbfbf;
    }
    .lab-bottom {
      position: relative;
      width: 100%;
      padding-top: 1rem;
      padding-bottom: 1rem;
      li {
        height: 0.925rem;
        line-height: 0.925rem;
        font-size: 0.55rem;
        color: #fff;
      }
      .tel:before, .address:before, .email:before{
        display: inline-block;
        content: '';
        width: 0.6rem;
        height: 0.6rem;
        margin-left: 0.5rem;
        margin-right: 0.25rem;
      }
      .tel:before{
        background: url("../assets/footer/part6-icon02.png") no-repeat;
        background-size: 100% 100%;
      }
      .address:before{
        background: url("../assets/footer/part6-icon01.png") no-repeat;
        background-size: 100% 100%;
      }
      .email:before{
        background: url("../assets/footer/part6-icon03.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>
