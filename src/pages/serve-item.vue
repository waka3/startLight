<template>
  <div v-if="isShow">
    <img src="../assets/serve/serve01_bg.jpg" class="page_bg">
    <div class="w3-display-position serve-ctn pc-wrap">
      <div class="serve-ctn-bg"></div>
      <div class="serve-ctn-ctn">
        <div class="serve-ctn-ctn-title">
          <h1>{{Item.title}}
            <span>{{Item.english}}</span>
          </h1>
          <span class="close" @click="Edit('isShow')"></span>
        </div>
        <div class="serve-ctn-ctn-ctn content">
          <vue-scroll :ops="ops">
            <div class='child-element'>
              <h1 class="serve-ctn-ctn-ctn-title">3D全息宴会厅</h1>
              <p>
                3D全息宴会厅，不仅可结合酒店本身的特色和更新定制专属于自己的特色饮食文化，还可灵活地改变场景，满足不同客人举行不同规模不同风格的宴会需要，如今这也已经是宴会市场的核心竞争力。3D全息宴会厅升级，就是由星之光3D团队根据酒店宴会厅的格局、场地面积、高度等实际情况，提供个性化的宴会厅升级方案，并引入裸眼3D主屏、全息投影舞台、裸眼3D环幕、3D互动T台、3D婚纱投影以及智能中控系统。
              </p>
              <img src="../assets/serve/01/serve01-img-01.jpg" alt="img">
              <img src="../assets/serve/01/serve01-title-01.jpg" alt="title">
              <p>将3D多媒体内容与融合系统、工程服务器、品牌工程投影机等软硬件结合，形成可替代LED屏载体并可实现裸眼3D视效的主屏幕，成本低、3D视效、任意造型、无缝拼接。</p>
              <img src="../assets/serve/01/serve01-img-02.jpg" alt="img">
              <img src="../assets/serve/01/serve01-title-02.jpg" alt="title">
              <p>将3D多媒体内容与融合系统、工程服务器、品牌工程投影机等软硬件结合，形成可替代LED屏载体并可实现裸眼3D视效的主屏幕，成本低、3D视效、任意造型、无缝拼接。</p>
              <img src="../assets/serve/01/serve01-img-03.jpg" alt="img">
              <img src="../assets/serve/01/serve01-title-03.jpg" alt="title">
              <p>将定制4K级3D多媒体内容与融合系统，工程服务器、品牌牌工程投影机等软硬件结合，打造沉浸式环绕视觉空间，瞬间营造各种虚拟场景，达到身临其境效果。</p>
              <img src="../assets/serve/01/serve01-img-04.jpg" alt="img">
              <img src="../assets/serve/01/serve01-title-04.jpg" alt="title">
              <p>是星之光利用3D mapping技术，透过对婚纱量身定制投影，可让静态的婚纱展现出动态丽人效果，添加新娘美丽气质。在婚纱上投出定制动画、天使翅膀、变幻多彩的颜色、气泡、爱心等等，新娘裙子神奇般消失在星空里，并且变换出宇宙、云彩、蝴蝶……美轮美奂、绚丽多变的舞台效果受到了新娘们的追捧。</p>
              <img src="../assets/serve/01/serve01-img-05.jpg" alt="img">
              <img src="../assets/serve/01/serve01-title-06.jpg" alt="title">
            </div>
          </vue-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Close from '../components/close'
export default {
  name: 'serve-item',
  // components: {Close},
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    Item: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    this.getServeItemCtn()
  },
  methods: {
    Edit (attr) {
      this.$emit('RemoveInnerPage', attr)
    },
    getServeItemCtn () {
      let ItemCtn = document.getElementById('ItemCtn')
      ItemCtn.innerHTML = this.Item.ctn
    }
  },
  data () {
    return {
      ops: {
        vuescroll: {},
        scrollPanel: {
          scrollingX: false,
          speed: 500,
          easing: undefined,
          padding: true
        },
        rail: {
          background: '#000',
          opacity: 1,
          size: '4px',
          gutterOfEnds: '0px',
          gutterOfSide: '0px'
        },
        bar: {
          background: '#826a23',
          keepShow: true,
          right: '-20px'
        }
      },
      ctn: {}
    }
  }
}
</script>

<style scoped lang="less">
  @width: 100%;
  .serve-ctn {
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
        font-size: 14px;
        margin-bottom: 20px;
        line-height: 24px;
        letter-spacing: 1px;
      }
      img{
        width: 100%;
        /*margin-top: 24px;*/
        &[alt='title']{
          margin-top: 96px;
          margin-bottom: 24px;
        }
      }
      p + img, p + p{
        margin-bottom: 40px;
      }
      img[alt='img'] + img{
        margin-top: 24px;
      }
      .child-element{
        padding-right: 35px;
      }
      h1, img{
        text-align: center;
      }
    }
  }
  /*.division{*/
    /*margin-top: 30px;*/
    /*h1{*/
      /*display: flex;*/
      /*justify-content: space-between;*/
      /*text-align: center;*/
      /*height: 83px;*/
      /*line-height: 83px;*/
    /*}*/
    /*.line{*/
      /*width: 38%;*/
      /*height: 83px;*/
      /*line-height: 83px;*/
      /*display: inline-block;*/
      /*background: url("../assets/serve/serve_ctn_div.png") repeat-x;*/
      /*background-position: center;*/
    /*}*/
  /*}*/
</style>
