<template>
  <div v-if="isShow">
    <div class="page_bg" @mousewheel="mouseEvent()"></div>
    <div class="w3-display-position serve-ctn pc-wrap">
      <div class="serve-ctn-bg"></div>
      <div class="serve-ctn-ctn  pc-css app-css">
        <div class="serve-ctn-ctn-title app-hidden">
          <h1>多媒体演艺
            <span>Multimedia Performing Arts</span>
          </h1>
          <span class="close" @click="Edit('isShowFive')"></span>
        </div>
        <div class="serve-ctn-ctn-ctn content">
          <vue-scroll :ops="ops">
            <div class='child-element'>
              <h1 class="serve-ctn-ctn-ctn-title">影视制作</h1>
              <p>
                长空异彩 | 数字视觉，是星之光旗下作为全国性的专业数字视觉品牌供应商，专注于地产动画 和 电视广告（TVC) 方面影视制作领域， 以创意为核心、市场需求为导向，主要利用计算机图形图像技术进行视觉设计和创作。
              </p>
              <img :src="imgArr[0]" alt="img" class="servefive-img">
              <img :src="imgArr[1]" alt="img" class="servefive-img">
              <img :src="imgArr[2]" alt="img" class="servefive-img">
              <img :src="imgArr[3]" alt="img" class="servefive-img">
              <p>2014年开始电影视效制作，拥有专业前期策划、拍摄和后期制作系统，有多组不同类型的创意和制作团队。 公司自2014年成立以来，将CG技术和艺术相结合，依托长期积累的技术实力和前瞻性的创意设计能力，为建筑、设计、展馆、广告、动漫、影视、文体娱乐活动等行业的客户提供影视创作方面数字视觉综合服务。</p>
              <img :src="titleImgArr[0]" alt="title">
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
        this.titleImgArr = [
          require('../../assets/app/serve01/01_06.jpg')
        ]
      } else {
        this.titleImgArr = [
          require('../../assets/serve/serve-title.jpg')
        ]
      }
    }
  },
  data () {
    return {
      titleImgArr: [],
      imgArr: [
        require('../../assets/serve/05/serve05-img-01.jpg'),
        require('../../assets/serve/05/serve05-img-02.jpg'),
        require('../../assets/serve/05/serve05-img-03.jpg'),
        require('../../assets/serve/05/serve05-img-04.jpg')
      ],
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
