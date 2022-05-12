<template>
  <div class="case" v-if="isShow">
    <img :src="Item.bgImg" class="page_bg app-hidden"  @mousewheel="mouseEvent()">
    <div class="page_bg pc-hidden"  @mousewheel="mouseEvent()"></div>
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
          <div class="case-top-choice">
            <select-vue class="select case-top-type" :selectList="selectTypeList" @on-change="onParamChange('type', $event)"></select-vue>
            <select-vue class="select case-top-area" :selectList="selectAreaList" @on-change="onParamChange('area', $event)"></select-vue>
            <span class="case-top-search" @click="searchItem"></span>
          </div>
          <vue-scroll :ops="ops">
            <ul class="case-ctn-item child-element">
              <li v-for="(item,index) in imgItemList" :key="index" @mouseover="addActive($event)" @mouseout="removeActive($event)">
                <div class="liA" @mouseover="addActive($event)" @mouseout="removeActive($event)" @click="open(item.key)">
                  <!--<router-link :to="{path: item.path}">-->
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                  <!--</router-link>-->
                </div>
              </li>
            </ul>
          </vue-scroll>
        </div>
      </div>
      <footerPage v-if="$isApp"></footerPage>
    </div>
    <div class="serve-item-detail">
      <caseItemDetails :isShowPage="isShowPage"
                       @RemoveThreePage="RemoveThreePage($event)"
                       @threMouseEvent="mouseEvent('isShowPage')"
                       :detailData="detailData"
                       :params="params">
      </caseItemDetails>
    </div>
  </div>
</template>

<script>
import caseItemDetails from '../pages/case-item-detail'
import caseItemDetailsApp from './appAPage/app-case-item-Detail'
import footerPage from '../pages/footer'
import selectVue from '../components/select'
export default {
  name: 'case-item',
  components: {
    caseItemDetails,
    footerPage,
    caseItemDetailsApp,
    selectVue
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    Item: {
      type: Object,
      default: () => {}
    },
    imgItemList: {}
  },
  data () {
    return {
      type: {},
      area: {},
      selectTypeList: [],
      selectAreaList: [],
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
      isShowPage: false,
      params: {
        isShowArrow: true,
        isShowTip: true,
        type: 'img'
      },
      detailData: {}
    }
  },
  created () {
    this.getSearchType()
  },
  methods: {
    /**
     * 获取案例选择的类型
     */
    getSearchType () {
      this.axios.get(this.GLOABL.URL + 'photos/getSelect').then((res) => {
        if (res) {
          let data = res.data
          let item = {
            id: '',
            value: '全部'
          }
          this.selectTypeList = data.type
          this.selectTypeList.unshift(item)
          this.selectAreaList = data.area
          this.selectAreaList.unshift(item)
        }
      })
    },
    /**
     * 获取下拉选择的结果
     * @param attr
     * @param param
     */
    onParamChange (attr, param) {
      this[attr] = param
    },
    searchItem () {
      let url = this.GLOABL.URL
      if (this.Item.key === 'img') {
        url += 'photos/searchPhoto'
      } else {
        url += 'videos/searchVideo'
      }
      let attr = {
        param: {
          type: this.type.id || ' ',
          area: this.area.id || ' '
        },
        url: url
      }
      this.$emit('searchItem', attr)
    },
    Edit (attr) {
      this.$emit('RemoveInnerPage', attr)
    },
    mouseEvent (attr) {
      this.$emit('mouseEvent', attr)
    },
    RemoveThreePage (attr) {
      this[attr] = false
      this.isShowArrow = false
      this.detailData = {}
    },
    open (attr) {
      this.isShowPage = true
      let url = this.GLOABL.URL
      let key = attr.split('=')[1]
      if (this.Item.key === 'img') {
        this.params.isShowArrow = true
        this.params.type = 'img'
        url += 'photos/getShuff'
      } else {
        this.params.isShowArrow = false
        this.params.type = 'video'
        url += 'videos/getPlayBack'
      }
      this.axios.get(url, {
        params: {
          id: key
        }
      }).then((res) => {
        if (this.Item.key === 'img') {
          this.detailData = res.data
        } else {
          console.log(res.data)
          this.detailData = {
            title: res.data.data[0].title,
            data: res.data.data[0]
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
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
  .content /deep/ .__vuescroll{
    height: 94% !important;
  }
  .case-ctn-item{
    margin-top: 34px;
    li {
      display: inline-block;
      width: 22.720365%;
      margin-right: 3.0395%;
      /*width: 249px;*/
      /*margin-right: 20px;*/
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
  .case-top-choice{
    position: relative;
    z-index: 99;
    width: 100%;
    margin-bottom: 20px;
    /*height: 34px;*/
    .select{
      display: inline-block;
      width: 20%;
      background: #c3c3c3;
      color: black;
      line-height: 34px;
      &:first-child {
        margin-right: 22px;
      }
      /deep/ .select-list li{
        line-height: 34px;
      }
    }
    .case-top-search{
      display: inline-block;
      width: 34px;
      height: 34px;
      background: url("../assets/app/case-item-search.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 15px;
      margin-bottom: -10px;
    }
  }

</style>
