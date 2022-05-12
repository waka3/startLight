<template>
  <div>
    <div class="w3-top pc-hidden header">
      <appHeader></appHeader>
    </div>
    <div class="page_bg"></div>
    <div class="w3-display-position case-top">
      <div class="case-top-wrap">
        <h4>案例搜索</h4>
        <div class="case-top-choice">
          <select-vue class="select case-top-type" :selectList="selectTypeList" @on-change="onParamChange('type', $event)"></select-vue>
          <select-vue class="select case-top-area" :selectList="selectAreaList" @on-change="onParamChange('area', $event)"></select-vue>
          <span class="case-top-search" @click="searchItem"></span>
        </div>
      </div>
    </div>
    <div class="w3-display-position case-ctn">
      <div class="case-ctn-ctn">
        <BScroll class="case-ctn-ctn-ctn wrapper"
                 :data="imgItemList"
                 :pullup="pullup"
                 :pulldown="pulldown"
                 :pulldownMsg="pulldownMsg"
                 :pullupMsg="pullupMsg"
                 :alertHook="alertHook"
                 :loadHook="loadHook"
                 @pullup="loadData('up')"
                 @pulldown="loadData('down')">
          <ul class="case-ctn-item content">
            <li v-for="(item,index) in imgItemList" :key="index">
              <router-link :to="{path: item.path}">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
              </router-link>
            </li>
          </ul>
          <!--<div class="loading-wrapper"></div>-->
        </BScroll>
        <footerPage></footerPage>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/app-header'
import footerPage from '../../pages/footer'
import BScroll from '../../components/better-scroll'
import selectVue from '../../components/select'
export default {
  name: 'app-case',
  components: {
    appHeader,
    footerPage,
    BScroll,
    selectVue
  },
  data () {
    return {
      type: {},
      selectTypeList: [],
      area: {},
      selectAreaList: [],
      imgItemList: [],
      alertHook: '',
      loadHook: '',
      pulldown: true,
      pulldownMsg: '下拉刷新',
      pullupMsg: '',
      pullup: true,
      listPage: 1,
      curPage: 1
    }
  },
  created () {
    this.getSearchType()
    this.$nextTick(() => {
      this.loadData('up')
    })
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    // 获取案例选择的类型
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
    // 获取下拉选择的结果
    onParamChange (attr, param) {
      this[attr] = param
    },
    searchItem () {
      let url = this.GLOABL.URL
      if (this.$route.path.indexOf('caseImg') !== -1) {
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
      this.axios.get(attr.url, {
        params: {
          type: attr.param.type,
          area: attr.param.area,
          param: 'app',
          page: 1
        }
      }).then((res) => {
        if (res) {
          this.imgItemList = res.data.data
        }
      })
    },
    refreshalert (attr) { // 刷新成功提示
      this[attr] = 'block'
      setTimeout(() => {
        this[attr] = 'none'
      }, 1000)
    },
    loadData (attr) {
      let path = this.$route.path
      let url = this.GLOABL.URL
      // 判断是图片集锦还是案例集锦, 去对应接口
      if (path.indexOf('caseImg') !== -1) {
        url += 'photos/getAllPhoto'
      } else {
        url += 'videos/getAllVideo'
      }
      this.refreshalert('loadHook')
      if (this.curPage <= this.listPage) {
        setTimeout(() => {
          this.axios.get(url, {
            params: {
              param: 'app',
              page: this.curPage
            }
          }).then((res) => {
            this.listPage = res.data.page_size
            if (attr === 'down') {
              this.curPage = 1
              // 刷新数据
              // 恢复刷新提示文本值
              this.imgItemList = res.data.data
              // 刷新成功后提示
              this.refreshalert('alertHook')
            } else {
              if (this.curPage > this.listPage) {
                this.pullupMsg = '已经到底了'
              } else {
                this.imgItemList = this.imgItemList.concat(res.data.data)
                this.curPage++
                // 恢复文本值
                // that.scroll.refresh()
              }
            }
          })
        }, 1000)
      } else {
        return 0
      }
    }
  }
}
</script>

<style scoped lang="less">
  .header{
    z-index: 11;
  }
  .page_bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../../assets/home/twoPage_bg.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .case-ctn-item {
    width: 100%;
    height: 100%;
    /*background: url("../../assets/home/twoPage_bg.jpg") no-repeat;*/
    li {
      display: inline-block;
      text-align: center;
      background: #5d5d5d;
      padding: 10px;
      vertical-align: top;
      &:nth-of-type(4n) {
        margin-right: 0;
      }
      img {
        width: 100%;
      }
      h3 {
        color: white;
      }
      p {
        color: #fff;
        text-align: center;
        margin-right: 0px;
        margin-top: 0.35rem;
      }
    }
  }
  @media only screen and (max-width: 750px) {
    .case-top{
      width: 100%;
      top: 3.35rem;
      height: 8.5rem;
      background: url("../../assets/app/app-case-itemBg.jpg") no-repeat;
      background-size: 100% 100%;
      z-index: 10;
    }

    .case-ctn {
      width: 100%;
      top: 11.85rem;
    }

    .case-ctn-ctn {
      padding: 0;
    }

    .case-ctn-ctn-ctn {
      width: 100%;
      max-height: 20rem;
      min-height: 10rem;
      margin-bottom: 0;
      .child-element {
        padding-right: 0;
      }
    }

    .case-ctn-item {
      padding-top: 1.25rem;
      padding-bottom: 1.125rem;
      padding-right: 0;
      margin-top: 0;
      li {
        width: 50%;
        background: transparent;
        margin-bottom: 0.75rem;
        padding: 0;
        p {
          font-size: 0.55rem;
          line-height: 0.85rem;
          height: auto;
        }
        &:nth-of-type(odd) {
          padding-right: 0.625rem;
          padding-left: 1.05rem;
        }
        &:nth-of-type(even) {
          padding-left: 0.625rem;
          padding-right: 1.05rem;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .case-top{
    h4{
      font-size: 0.65rem;
      margin-bottom: 0.7rem;
      text-align: center;
    }
    &-choice{
      display: flex;
      justify-content: space-around;
      width: 12.6rem;
      height: 1.275rem;
      margin: auto;
      .select{
        background: #c3c3c3;
        color: black;
        line-height: 1.275rem;
        &:first-child {
          margin-right: 0.55rem;
        }
        /deep/ .select-list li{
          line-height: 1.275rem;
        }
      }
    }
    &-search{
      display: block;
      width: 3.275rem;
      height: 1.275rem;
      background: url("../../assets/app/case-item-search.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 0.375rem;
    }
    &-wrap{
      margin-top: 4.25rem;
      transform: translateY(-50%);
    }
  }
</style>
