<template>
  <div v-if="isShow">
    <div class="page_bg"  @mousewheel="mouseEvent()"></div>
    <div class="w3-display-position serve-ctn pc-wrap">
      <div class="serve-ctn-bg"></div>
      <div class="serve-ctn-ctn  pc-css app-css">
        <div class="serve-ctn-ctn-title app-hidden">
          <h1>裸眼3D灯光秀
            <span>NAKED EYE 3D</span>
          </h1>
          <span class="close" @click="Edit('isShowTwo')"></span>
        </div>
        <div class="serve-ctn-ctn-ctn content">
          <vue-scroll :ops="ops">
            <div class='child-element'>
              <h1 class="serve-ctn-ctn-ctn-title">裸眼3D灯光秀</h1>
              <p>
                裸眼3D灯光秀也称幕墙投影，巨幅墙面投影，建筑立体投影，建筑3D投影，分为室内3D灯光秀投影和户外3D灯光秀投影两种，目前国外的巨幅墙面投影以户外巨幅墙面投影3D灯光秀应用较多
              </p>
              <img :src="imgArr[0]" alt="img">
              <img :src="titleImgArr[0]" alt="title">
              <p>室内主要用于：企业高端晚宴、高端婚礼、室内大型歌舞晚会、室内大型主题旅游晚会、室内大型产品发布会等，展示时间不分昼夜</p>
              <img :src="imgArr[1]" alt="img">
              <img :src="titleImgArr[1]" alt="title">
              <p>室外主要用于：主要应用于 集团企业大型周年庆、房地产楼盘开业秀、著名景点4D灯光秀、室外大型产品发布会、宾馆、饭店、商场、购物中心、度假中心、主题公园、等，展示时间以夜晚为主，建筑外巨幅墙面投影在国内刚刚起步，具有非常高的商业展示价值</p>
              <img :src="imgArr[2]" alt="img">
              <img :src="titleImgArr[2]" alt="title">
              <p>星之光自主研发和技术团队，在专注研发3D投影科技同时，不断在实践过程中针对客户需求做产品开发，最终结合自身优势，专注于以下几个领域创新与运用，为客户提供一系列整体解决方案。</p>
              <h3>高端客户明星晚宴</h3>
              <img :src="imgArr[3]" alt="img">
              <h3>房地产楼盘开业秀</h3>
              <img :src="imgArr[4]" alt="img">
              <h3>高端婚礼创新运用</h3>
              <img :src="imgArr[5]" alt="img">
              <img :src="titleImgArr[3]" alt="title">
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
          require('../../assets/serve/02/serve02-img-01.jpg'),
          require('../../assets/serve/02/serve02-img-02.jpg'),
          require('../../assets/serve/02/serve02-img-03.jpg'),
          require('../../assets/serve/02/serve02-img-04.jpg'),
          require('../../assets/serve/02/serve02-img-05.jpg'),
          require('../../assets/serve/02/serve02-img-06.jpg')
        ]
        this.titleImgArr = [
          require('../../assets/app/serve02/02_03.jpg'),
          require('../../assets/app/serve02/02_06.jpg'),
          require('../../assets/app/serve02/02_08.jpg'),
          require('../../assets/app/serve01/01_06.jpg')
        ]
      } else {
        this.imgArr = [
          require('../../assets/serve/02/serve02-img-01.jpg'),
          require('../../assets/serve/02/serve02-img-02.jpg'),
          require('../../assets/serve/02/serve02-img-03.jpg'),
          require('../../assets/serve/02/serve02-img-04.jpg'),
          require('../../assets/serve/02/serve02-img-05.jpg'),
          require('../../assets/serve/02/serve02-img-06.jpg')
        ]
        this.titleImgArr = [
          require('../../assets/serve/02/serve02-title-01.jpg'),
          require('../../assets/serve/02/serve02-title-02.jpg'),
          require('../../assets/serve/02/serve02-title-03.jpg'),
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
