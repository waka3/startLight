<template>
  <div v-if="isShow">
    <div class="page_bg" @mousewheel="mouseEvent()"></div>
    <div class="w3-display-position serve-ctn pc-wrap">
      <div class="serve-ctn-bg"></div>
      <div class="serve-ctn-ctn  pc-css app-css">
        <div class="serve-ctn-ctn-title app-hidden">
          <h1>数字化展厅
            <span>DIGITAL EXHIBITION HALL</span>
          </h1>
          <span class="close" @click="Edit('isShowThree')"></span>
        </div>
        <div class="serve-ctn-ctn-ctn content">
          <vue-scroll :ops="ops">
            <div class='child-element'>
              <h1 class="serve-ctn-ctn-ctn-title">数字化展厅</h1>
              <p>
                数字展厅又叫多媒体展厅，它以艺术设计为基础融合多媒体和数字技术，实现展示对象的数字化展示及展项与参观者之间的互动。集：数字沙盘、环幕/弧幕/球幕影厅、特种影院、全息幻影成像、增强现实系统、3D投影秀、虚拟漫游系统、互动迎宾地幕、互动多点触摸等各种多媒体展项于一体。同时，由于融入了各种高新科技技术，让展厅极具内涵和吸引力，通过对视频、声音、动画等媒体加以组合应用，深度挖掘展览陈列对象所蕴含的背景、意义，带给观众高科技的视觉震撼感，大大提升了品牌的价值。
              </p>
              <img :src="imgArr[0]" alt="img">
              <img :src="titleImgArr[0]" alt="title">
              <p>企业馆类数字展厅运用高科技展示手段和各种声光电多媒体展项，将企业文化融汇在一个个数字多媒体展项和数字内容展示中，以新颖的展示理念、超强的数字内容创意、智能的科技手段，塑造具有鲜明企业个性的互动企业馆数字展厅</p>
              <img :src="imgArr[1]" alt="img">
              <img :src="titleImgArr[1]" alt="title">
              <p>规划馆类数字展厅巧妙地将一个城市特有的地域文化与现代科技相结合，多方位运用互动多媒体数字展项、规划类电子沙盘、全息投影技术、环幕显示系统等创新数字展示手段，生动展现城市的“过去、现在”，以及畅想城市的未来</p>
              <img :src="imgArr[2]" alt="img">
              <img :src="titleImgArr[2]" alt="title">
              <p>发布会展厅，是星之光科技在对展厅客户服务和市场调查后，于2013年底在国内同行业中首个提出数字展厅新的细分业务，针对新建会议中心、大型商场和酒店中的专为大型会议、新品发布会提供的大型室内活动厅，正是客户活动使用周期短、功能主题或发布产品不同等因素，通过星之光科技运用引入高科技带完美演绎和展示，助力活动圆满完成</p>
              <img :src="imgArr[3]" alt="img">
              <img :src="titleImgArr[3]" alt="title">
              <img :src="titleImgArr[4]" alt="title">
              <p>数字沙盘是在物理沙盘基础上，融合多媒体技术的新型沙盘系统。展示内容广，设计手法精湛，展示手段先进，科技含量高。它可以进行自动循环演示，也可由讲解员通过触摸屏幕，有选择的、交互性演示。电子沙盘可以快速实现信息高速传递、形象快速树立。在领导参观、大型活动、企业展示中起着不可替代的作用。</p>
              <img :src="imgArr[4]" alt="img">
              <img :src="titleImgArr[5]" alt="title">
              <p>增强现实技术与虚拟现实（VR）技术类似，它把现实3并不3在的实体信息(视觉信息、声音、味道、触觉等)，通过科技模拟仿真后叠加到现实环境中，达到超越现实的感知体验。该技术广泛应用于医疗、军事、工业维修、艺术、娱乐、旅游、展览展示等。2014年，星之光拟将于国外专业公司成为合作伙伴，共同探索增强现实技术带给观众的神奇体验</p>
              <img :src="imgArr[5]" alt="img">
              <img :src="titleImgArr[6]" alt="title">
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
          require('../../assets/serve/03/serve03-img-01.jpg'),
          require('../../assets/serve/03/serve03-img-02.jpg'),
          require('../../assets/serve/03/serve03-img-03.jpg'),
          require('../../assets/serve/03/serve03-img-04.jpg'),
          require('../../assets/serve/03/serve03-img-05.jpg'),
          require('../../assets/serve/03/serve03-img-06.jpg')
        ]
        this.titleImgArr = [
          require('../../assets/app/serve03/03_03.jpg'),
          require('../../assets/app/serve03/03_07.jpg'),
          require('../../assets/app/serve03/03_10.jpg'),
          require('../../assets/app/serve03/03_12.jpg'),
          require('../../assets/app/serve03/03_15.jpg'),
          require('../../assets/app/serve03/03_17.jpg'),
          require('../../assets/app/serve01/01_06.jpg')
        ]
      } else {
        this.imgArr = [
          require('../../assets/serve/03/serve03-img-01.jpg'),
          require('../../assets/serve/03/serve03-img-02.jpg'),
          require('../../assets/serve/03/serve03-img-03.jpg'),
          require('../../assets/serve/03/serve03-img-04.jpg'),
          require('../../assets/serve/03/serve03-img-05.jpg'),
          require('../../assets/serve/03/serve03-img-06.jpg')
        ]
        this.titleImgArr = [
          require('../../assets/serve/03/serve03-title-01.jpg'),
          require('../../assets/serve/03/serve03-title-02.jpg'),
          require('../../assets/serve/03/serve03-title-03.jpg'),
          require('../../assets/serve/03/serve03-title-04.jpg'),
          require('../../assets/serve/03/serve03-title-05.jpg'),
          require('../../assets/serve/03/serve03-title-06.jpg'),
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
      },
      ctn: {}
    }
  }
}
</script>
