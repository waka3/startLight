<template>
  <div>
    <div class="w3-top pc-hidden header">
      <appHeader></appHeader>
    </div>
    <div class="serve-ctn">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/app-header'
export default {
  name: 'serve-item',
  components: {
    appHeader
  }
}
</script>

<style scoped lang="less">
  @media only screen and (max-width:750px) {
    /* 内页样式 */
    .serve-ctn /deep/ .serve-ctn{
      position: absolute;
      width: 100%;
      color: #bfbfbf;
      overflow: hidden;
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../../assets/home/twoPage_bg.jpg") no-repeat;
        background-size: 100% 100%;
      }
      &-ctn-ctn {
        width: 14.2rem;
        margin: 3.35rem auto;
        color: #d8d8d8;
        &-title{
          margin-top: 1.375rem;
          margin-bottom: 1.375rem;
        }
        p{
          font-size: 0.55rem;
          margin-bottom: 0.5rem;
          line-height: 0.75rem;
          letter-spacing: 0.025rem;
          color: #d8d8d8;
          span{
            display: block;
            line-height: 0.75rem;
          }
        }

        img{
          width: 100%;
          &[alt='title']{
            margin-top: 2.4rem;
            margin-bottom: 0.6rem;
          }
        }
        .servefour-img{
          margin-top: 2.75rem !important;
        }
        p + img, p + p{
          margin-bottom: 1rem;
        }
        h3{
          text-align: center;
          font-size: 0.65rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        h4{
          font-size: 0.65rem;
          line-height: 2rem;
        }
        h5{
          font-size: 0.55rem;
          font-weight: 100;
          line-height: 1rem;
        }
        .special-h5{
          margin-bottom: 0.65rem;
        }
        .servefive-img{
          margin-top: 0 !important;
          margin-bottom: 1rem !important;
        }
        img[alt='img'] + img{
          margin-top: 0.6rem;
        }
        img:last-child{
          margin-top: 2.4rem !important;
        }
        .special_img{
          display: block;
          width: 90%;
          margin: auto;
          margin-top: 0.6rem;
          margin-bottom: 0.6rem;
        }
        .cirle-p{
          margin-bottom: 0.5rem;
        }
        .cirle-p:before{
          display: inline-block;
          content: '';
          width: 0.35rem;
          height: 0.35rem;
          background: white;
          margin-right: 0.325rem;
          border-radius: 50%;
        }
        .child-element{
          padding-right: 0;
        }
        h1, img{
          text-align: center;
        }
      }
    }
  }
</style>
