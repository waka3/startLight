<template>
  <div class="case">
    <div class="page_bg"></div>
    <div class="w3-display-position case-ctn">
      <div class="case-ctn-wrap app-hidden">
        <div class="case-ctn-img" id="caseImg" @mouseover="addActive($event)" @mouseout="removeActive($event)" @click="open('img')">
          <div>
            <img src="../assets/case/case_img_icon.png" alt="">
          </div>
          <h1 class="w3-center">经典案例图片</h1>
          <p>图片集锦-用图片记录光最美的一瞬间</p>
        </div>
        <div class="case-ctn-vedio" id='caseVideo' @mouseover="addActive($event)" @mouseout="removeActive($event)" @click="open('video')">
          <h1 class="w3-center">经典案例视频</h1>
          <p>视频集锦-用影片记录美好的时光</p>
          <div>
            <img src="../assets/case/case_vedio_icon.png" alt="">
          </div>
        </div>
      </div>
      <div class="case-ctn-wrap pc-hidden">
        <router-link class="case-ctn-img" id="caseImgApp" to="/caseImg"  @click.native="stopMouseDown">
          <div>
            <img src="../assets/case/case_img_icon.png" alt="">
          </div>
          <h1 class="w3-center">经典案例图片</h1>
          <p>图片集锦-用图片记录光最美的一瞬间</p>
        </router-link>
        <router-link class="case-ctn-vedio" id='caseVideoApp' to="/caseVideo" @click.native="stopMouseDown">
          <h1 class="w3-center">经典案例视频</h1>
          <p>视频集锦-用影片记录美好的时光</p>
          <div>
            <img src="../assets/case/case_vedio_icon.png" alt="">
          </div>
        </router-link>
      </div>
    </div>
    <div class="serve-item-detail">
      <case-item :is-show="isShow"
                 :imgItemList="imgItemList"
                 :Item="item"
                 @RemoveInnerPage="RemoveInnerPage($event)"
                 @RemovePage="RemoveInnerPage('isShow')"
                 @mouseEvent="RemoveInnerPage('isShow')"
                 @searchItem="searchItem($event)">
      </case-item>
    </div>
  </div>
</template>

<script>
import caseItem from '../pages/case-item'
export default {
  name: 'case',
  components: {
    caseItem: caseItem
  },
  props: {
    slideIsClick: false
  },
  data () {
    return {
      isShow: false,
      ShowType: '',
      item: {},
      imgItemList: {}
    }
  },
  mounted () {
    window.onresize = () => {
      this.getWidthCase()
    }
  },
  watch: {
    slideIsClick (val) {
      if (val) {
        this.isShow = false
      }
    }
  },
  methods: {
    /**
     * 获取列表结果
     * @param attr
     */
    open (attr) {
      this.key = attr
      this.isShow = true
      this.ShowType = attr
      let url = this.GLOABL.URL
      if (attr === 'img') {
        url += 'photos/getAllPhoto'
        this.item = {
          title: '照片集锦',
          english: 'PHOTO COLLECTION',
          bgImg: require('../assets/case/case01_bg.jpg'),
          key: 'img',
          url: url
        }
      } else {
        url += 'videos/getAllVideo'
        this.item = {
          title: '视频集锦',
          english: 'VEDIO COLLECTION',
          bgImg: require('../assets/case/case01_bg.jpg'),
          key: 'video',
          url: url
        }
      }
      this.axios.get(url).then((res) => {
        this.imgItemList = res.data.data
      })
    },
    searchItem (attr) {
      console.log(attr)
      this.axios.get(attr.url, {
        params: {
          type: attr.param.type,
          area: attr.param.area
        }
      }).then((res) => {
        if (res) {
          this.imgItemList = res.data.data
        }
      })
    },
    RemoveInnerPage (attr) {
      console.log('返回上一页')
      this[attr] = false
      this.imgItemList = {}
    },
    stopMouseDown () {
      this.$emit('pageClick')
    },
    getWidthCase () {
      console.log('尺寸变化')
      if (document.body.clientWidth < 750) {
        this.isShow = false
      }
    }
  }
}
</script>

<style scoped lang="less">
  @media only screen and (min-width:750px) {
    .page_bg {
      background: url("../assets/case/case_bg.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .case-ctn {
      position: absolute;
      top: 24.77778%;
      left: 50%;
      transform: translateX(-50%);
      width: 68.375%;
      &-wrap {
        display: flex;
        justify-content: space-around;
        text-align: center;
      }
      p {
        font-size: 18px;
        height: 34px;
        line-height: 34px;
        margin-top: 15px;
        text-align: center;
      }
      &-img {
        margin-top: 120px;
        animation: moveAni 2s;
        img {
          margin-bottom: 40px;
        }
      }
      &-vedio {
        animation: moveAni 2s;
        img {
          margin-top: 40px;
        }
      }
    }
    @keyframes moveAni {
      20%{transform: translate(-100px);opacity:0;}
      100%{transform: translate(0px); opacity:1;}
    }
  }
  @media only screen and (max-width:750px) {
    .page_bg {
      background: url("../assets/app/app-case-bg.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .case-ctn {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: calc(50%);
      transform: translate(-50%, -50%);
      padding: constant(safe-area-inset-top) constant(safe-area-inset-right) constant(safe-area-inset-bottom) constant(safe-area-inset-left);
      p {
        font-size: 0.375rem;
        height: 0.85rem;
        line-height: 0.85rem;
        margin-top: 0.375rem;
        text-align: center;
      }
      &-wrap{
        height: calc(100%);
      }
      &-img {
        display: block;
        width: 70%;
        text-align: center;
        height: calc(50%);
        animation: moveAni 2s;
        img {
          margin-bottom: 1rem;
        }
      }
      &-vedio {
        float: right;
        /*height: calc(50%);*/
        transform: translateY(50%);
        width: 70%;
        text-align: center;
        animation: moveAni 2s;
        img {
          margin-top: 1rem;
        }
      }
      img {
        width: 1.85rem;
        height: 1.675rem;
      }
    }
  }
</style>
