<template>
  <div v-if="isShow">
    <div class="page_bg" @mousewheel="mouseEvent()"></div>
    <div class="w3-display-position serve-ctn pc-wrap">
      <div class="serve-ctn-bg"></div>
      <div class="serve-ctn-ctn pc-css app-css">
        <div class="serve-ctn-ctn-title app-hidden">
          <h1>3D全息宴会厅
            <span>3D Holographic BANQUET HALL</span>
          </h1>
          <span class="close" @click="Edit('isShowOne')"></span>
        </div>
        <div class="serve-ctn-ctn-ctn content">
          <vue-scroll :ops="ops">
            <div class='child-element'>
              <h1 class="serve-ctn-ctn-ctn-title">3D全息宴会厅</h1>
              <p>
                3D全息宴会厅，不仅可结合酒店本身的特色和更新定制专属于自己的特色饮食文化，还可灵活地改变场景，满足不同客人举行不同规模不同风格的宴会需要，如今这也已经是宴会市场的核心竞争力。3D全息宴会厅升级，就是由星之光3D团队根据酒店宴会厅的格局、场地面积、高度等实际情况，提供个性化的宴会厅升级方案，并引入裸眼3D主屏、全息投影舞台、裸眼3D环幕、3D互动T台、3D婚纱投影以及智能中控系统。
              </p>
              <img :src="imgArr[0]" alt="img">
              <img :src="titleImgArr[0]" alt="title">
              <p>将3D多媒体内容与融合系统、工程服务器、品牌工程投影机等软硬件结合，形成可替代LED屏载体并可实现裸眼3D视效的主屏幕，成本低、3D视效、任意造型、无缝拼接。</p>
              <img :src="imgArr[1]" alt="img">
              <img :src="titleImgArr[1]" alt="title">
              <p>全息投影也称虚拟成像技术，是采用星之光自主研发全息成像介质配合投影，再加以数字影像内容来演绎场景，全息投影技术不仅可以产生立体的空中幻像，还可以使幻像与新人产生互动，一起完成婚礼仪式，虚实结合，亦幻亦真的梦幻视效</p>
              <img :src="imgArr[2]" alt="img">
              <img :src="titleImgArr[2]" alt="title">
              <p>将定制4K级3D多媒体内容与融合系统，工程服务器、品牌牌工程投影机等软硬件结合，打造沉浸式环绕视觉空间，瞬间营造各种虚拟场景，达到身临其境效果。</p>
              <img :src="imgArr[3]" alt="img">
              <img :src="titleImgArr[3]" alt="title">
              <p>将定制4K级3D多媒体内容与融合系统，工程服务器、品牌牌工程投影机等软硬件结合，打造沉浸式环绕视觉空间，瞬间营造各种虚拟场景，达到身临其境效果。</p>
              <img :src="imgArr[4]" alt="img">
              <img :src="titleImgArr[4]" alt="title">
              <p>是星之光利用3D mapping技术，透过对婚纱量身定制投影，可让静态的婚纱展现出动态丽人效果，添加新娘美丽气质。在婚纱上投出定制动画、天使翅膀、变幻多彩的颜色、气泡、爱心等等，新娘裙子神奇般消失在星空里，并且变换出宇宙、云彩、蝴蝶……美轮美奂、绚丽多变的舞台效果受到了新娘们的追捧。</p>
              <img :src="titleImgArr[5]" alt="title">
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
      default: true
    }
  },
  mounted () {
    // this.getServeItemCtn()
    // if (document.body.clientWidth < 750) {
    //   this.isShow = true
    // }
    this.getImg()
  },
  methods: {
    Edit (attr) {
      this.$emit('RemoveInnerPage', attr)
    },
    getServeItemCtn () {
      let ItemCtn = document.getElementById('ItemCtn')
      ItemCtn.innerHTML = this.Item.ctn
    },
    mouseEvent (attr) {
      this.$emit('mouseEvent', attr)
    },
    getImg () {
      if (document.body.clientWidth < 750) {
        window.scrollTo(0, 0)
        this.imgArr = [
          require('../../assets/serve/01/serve01-img-01.jpg'),
          require('../../assets/serve/01/serve01-img-02.jpg'),
          require('../../assets/serve/01/serve01-img-03.jpg'),
          require('../../assets/serve/01/serve01-img-04.jpg'),
          require('../../assets/serve/01/serve01-img-05.jpg')
        ]
        this.titleImgArr = [
          require('../../assets/app/serve01/01_01.jpg'),
          require('../../assets/app/serve01/01_02.jpg'),
          require('../../assets/app/serve01/01_03.jpg'),
          require('../../assets/app/serve01/01_04.jpg'),
          require('../../assets/app/serve01/01_05.jpg'),
          require('../../assets/app/serve01/01_06.jpg')
        ]
      } else {
        this.imgArr = [
          require('../../assets/serve/01/serve01-img-01.jpg'),
          require('../../assets/serve/01/serve01-img-02.jpg'),
          require('../../assets/serve/01/serve01-img-03.jpg'),
          require('../../assets/serve/01/serve01-img-04.jpg'),
          require('../../assets/serve/01/serve01-img-05.jpg'),
          require('../../assets/serve/01/serve01-img-06.jpg')
        ]
        this.titleImgArr = [
          require('../../assets/serve/01/serve01-title-01.jpg'),
          require('../../assets/serve/01/serve01-title-02.jpg'),
          require('../../assets/serve/01/serve01-title-03.jpg'),
          require('../../assets/serve/01/serve01-title-04.jpg'),
          require('../../assets/serve/01/serve01-title-05.jpg'),
          require('../../assets/serve/serve-title.jpg')
        ]
      }
    }
  },
  data () {
    return {
      imgArr: [],
      titleImgArr: [],
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
      }
    }
  }
}
</script>
