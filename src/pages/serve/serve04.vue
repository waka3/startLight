<template>
  <div v-if="isShow">
    <div class="page_bg"  @mousewheel="mouseEvent()"></div>
    <div class="w3-display-position serve-ctn pc-wrap">
      <div class="serve-ctn-bg"></div>
      <div class="serve-ctn-ctn  pc-css app-css">
        <div class="serve-ctn-ctn-title app-hidden">
          <h1>多媒体演艺
            <span>Multimedia Performing Arts</span>
          </h1>
          <span class="close" @click="Edit('isShowFour')"></span>
        </div>
        <div class="serve-ctn-ctn-ctn content">
          <vue-scroll :ops="ops">
            <div class='child-element'>
              <h1 class="serve-ctn-ctn-ctn-title">数字化展厅</h1>
              <p>
                星之光，拥有专业设计和施工团队，以及丰富实战经验，以先锋视觉设计理念结合前沿技术，贴合演出内容的舞美设计与多媒体视效，提升演出实时交互性。
              </p>
              <img :src="imgArr[0]" alt="img" class="special_img">
              <p>在旅游景区实景剧院，国内首创集合全息、裸眼3D、VR等技术，融合多媒体视效、互动、成像设备、声光电等，辅以环境特效，打造虚拟场景与角色，形成沉浸式空间，让观众全角度体验剧情。同时，解决旅游景区无过夜项目，游客流失，景区收入低的痛点。目前“客家传奇”正在制作过程中。</p>
              <img :src="titleImgArr[0]" alt="title" class="servefour-img">
              <p>全息投影技术也称虚拟成像技术，是采用星之光自主研发全息成像介质配合投影，再加以数字影像内容来展示产品与活动。全息投影技术不仅可以产生立体的空中幻像，还可以使幻像与表演者产生互动，一起完成表演，产生令人震撼的演出效果。适用范围产品展览、汽车服装发布会、舞台节目、互动、酒吧娱乐、场所互动投影等。星之光3D科技通过潜行研究全息技术2年，在国内率先提出在婚礼当中创新与运用，并开发出一系列标准化产品实施运用。</p>
              <h5 class="special-h5">经典案例：Burberry 上演大型3D全息时装秀</h5>
              <img :src="imgArr[1]" alt="img">
              <h4>全息投影分类：</h4>
              <p>全息投影有180度全息成像（单面全息投影）、270度全息成像、360度全息成像、3D全息投影、镜面全息投影、空气雾幕成像和幻影成像等。【备注：详细解说与综合运用请看第四条。】</p>
              <h4>【权威认可指定】</h4>
              <img :src="imgArr[2]" alt="img">
              <img :src="titleImgArr[1]" alt="title" class="servefour-img">
              <p>背景：国内外的婚礼和发布会等商业活动的知名企业，很多都是从很多都是从早起一个创意起步，并不断引进新的元素和科技技术予以实现，但目前国内婚庆行业受没有新的科技技术引入限制，致使一些好的创意和想法都无法得以实现，使得行业整体陷入同质化、价格战竞争，影响了整个产业的创新和发展，更重要是限制了很多策划师和新人实现创意婚礼的梦想。随着科学技术的发展和传播受众欣赏品味的提高，越来越多的婚庆公司发现，使用传统道具进行婚礼呈现时，投入越来越高，而利润和效果却不一定理想。于是，我们迫切需要更具多样性、创新性和互动性的新兴婚礼表现艺术，作为实现策划师一些好的创意和想法的载体。在这样的大形势下，星之光全息婚礼应运而生。</p>
              <p>★ 星之光全息婚礼特点：星之光全息婚礼按照不同主题不同风格的婚礼当中的各个环节，例如开场，新人出场，爱情誓言，交互戒指，拥抱等环节，3D全息投影画面可以瞬间营造适合的唯美场景，为营造艺术与情感添色，助力婚庆公司完美诠释每一对新人的婚礼梦想！</p>
              <p class="cirle-p">全息开场秀</p>
              <img :src="imgArr[3]" alt="img">
              <p class="cirle-p">新娘全息蝴蝶城堡唯美出场</p>
              <img :src="imgArr[4]" alt="img">
              <p class="cirle-p">新郎全息乘直升机震撼出场</p>
              <img :src="imgArr[5]" alt="img">
              <img :src="titleImgArr[2]" alt="title">
              <p class="cirle-p">誓言环节</p>
              <img :src="imgArr[6]" alt="img">
              <p class="cirle-p">交换戒指</p>
              <img :src="imgArr[7]" alt="img">
              <img :src="titleImgArr[3]" alt="title">
              <h5>前面提到全息投影分类总共有：</h5>
              <p>全息投影有180度全息成像（单面全息投影）、270度全息成像、360度全息成像、3D全息投影、镜面全息投影、空气雾幕成像和幻影成像等。</p>
              <h5>全息投影组成：</h5>
              <p>全息投影系统由立体模型场景、造型灯光系统、光学成像系统（应用幻影成像膜作为成像介质）、星之光影视播放系统、星之光计算机多媒体系统、音响系统及星之光控制系统组成。作为一种全新的互动手段，星之光全息投影成为当今一种最时尚的产品展示和市场推广手段。</p>
              <h5>全息投影特点：</h5>
              <p>星之光全息投影是一种无需配戴眼镜的3D技术，广泛应用于各类博物馆、主题公园、城市规划展示馆、科技馆、娱乐厅、展览会、博览会等，配上三维声音、灯光、气味、烟雾等，令观众难以分辨真实人物与虚拟物体的同时存在。同时真实人物可以与虚拟物体进行互动，一起完成表演，所以，全息投影在舞台之上的应用也较广泛。</p>
              <h5>下面对各类分别作下解说：</h5>
              <p>180度全息成像（单面全息投影、镜面全息投影）</p>
              <img :src="imgArr[8]" alt="img">
              <p>全息展示柜，（别有180度展示柜、270度展示柜、360度展示柜，三种类型）我们在这里称它为360度全息影像。</p>
              <img :src="imgArr[9]" alt="img">
              <h5>空气雾幕成像、水幕电影</h5>
              <p>雾幕立体成像不需要任何的投影幕，只需使用雾化设备产生大量人工雾，形成一层很薄的水雾墙来代替传统的投影幕，再用投影设备投射在水雾墙上，便可以在水雾墙上形成虚幻立体的影像。给人一种空灵、虚幻、仙境般的立体视觉享受。</p>
              <img :src="imgArr[10]" alt="img">
              <h5>幻影成像：幻影成像系统也称虚拟成像是基于“实景造型”和“幻影”的光学成像结合，将所拍摄的影像（人、物）投射到布景箱中的主体模型景观中，演示故事的发展过程</h5>
              <p>
                <span>可以实现大的场景、复杂的生产流水线、大型产品等的逼真展示。 </span>
                <span>应用领域：</span>
                <span>婚庆业   详细介绍请查看第二篇幅：星之光3D全息如何运用在婚礼当中？</span>
                <span>旅游业   房地产   大型展会   宾馆饭店</span>
                <span>应用场所：舞台剧院、媒体展览机构、大型商场门口、迪厅、KTV、旅游景区、主题公园、银行柜台、机构-娱乐场所、购物中心、机场、汽车站、宾馆大厅、科技馆、博物馆、规划馆、演艺场馆、主题教育馆、儿童乐园、新产品发布会、时装发布会、各类展示橱窗等均可运用全息投影营造震撼、逼真、互动的展示效果。
具体实施：星之光全息提供数字内容制作、设备集成、安装、调试工作；在所有基础设施和设备到位的情况下根据时间进度表来完成展项调试安装。</span>
              </p>
              <img :src="titleImgArr[4]" alt="title">
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
          require('../../assets/app/serve03/03_03.jpg'),
          require('../../assets/app/serve03/03_07.jpg'),
          require('../../assets/app/serve03/03_10.jpg'),
          require('../../assets/app/serve03/03_12.jpg'),
          require('../../assets/app/serve03/03_15.jpg'),
          require('../../assets/app/serve03/03_17.jpg'),
          require('../../assets/app/serve01/01_06.jpg')
        ]
      } else {
        this.titleImgArr = [
          require('../../assets/serve/04/serve04-title-01.jpg'),
          require('../../assets/serve/04/serve04-title-02.jpg'),
          require('../../assets/serve/04/serve04-title-03.jpg'),
          require('../../assets/serve/04/serve04-title-04.jpg'),
          require('../../assets/serve/serve-title.jpg')
        ]
      }
    }
  },
  data () {
    return {
      titleImgArr: [],
      imgArr: [
        require('../../assets/serve/04/serve04-img-01.jpg'),
        require('../../assets/serve/04/serve04-img-02.jpg'),
        require('../../assets/serve/04/serve04-img-03.jpg'),
        require('../../assets/serve/04/serve04-img-04.jpg'),
        require('../../assets/serve/04/serve04-img-05.jpg'),
        require('../../assets/serve/04/serve04-img-06.jpg'),
        require('../../assets/serve/04/serve04-img-07.jpg'),
        require('../../assets/serve/04/serve04-img-08.jpg'),
        require('../../assets/serve/04/serve04-img-09.jpg'),
        require('../../assets/serve/04/serve04-img-10.jpg'),
        require('../../assets/serve/04/serve04-img-11.jpg')
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
