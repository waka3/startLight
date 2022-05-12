<template>
  <div class="lab">
    <div class="page_bg"></div>
    <div class="w3-display-position serve-ctn pc-wrap">
      <div class="serve-ctn-bg"></div>
      <div class="serve-ctn-ctn">
        <h1 class="w3-center lab_title">实验室</h1>
        <ul class="serve-ctn-item app-hidden" v-if="isPC">
          <li v-for="(item,index) in ItemList" :key="index" @mouseover="addActive($event)" @mouseout="removeActive($event)" @click="open(item.path)">
            <span>{{item.title}}</span>
            <span class="app-hidden">{{item.time}}</span>
          </li>
        </ul>
        <ul class="serve-ctn-item pc-hidden" v-else>
          <li v-for="(item,index) in ItemList" :key="index">
            <router-link :to="{path: item.path}" @click.native="pageClick">
              <span>{{item.title}}</span>
              <span class="app-hidden">{{item.time}}</span>
            </router-link>
          </li>
        </ul>
        <switch-page :max="listPage" @switch="getCurPageList($event)"></switch-page>
      </div>
    </div>
    <div class="serve-item-detail">
      <!--<keep-alive>-->
        <!--<router-view></router-view>-->
      <!--</keep-alive>-->
      <lab-item :isShow="isShow"
                :Item="item"
                @RemoveInnerPage="RemoveInnerPage($event)"
                @mouseEvent="RemoveInnerPage('isShow')">
      </lab-item>
    </div>
  </div>
</template>

<script>
import labItem from '../pages/lab-item'
import switchPage from '../components/switchPage'
export default {
  name: 'lab',
  components: {
    labItem,
    switchPage
  },
  data () {
    return {
      isPC: true,
      listPage: 1,
      ItemList: [],
      isShow: false,
      item: {}
    }
  },
  created () {
    if (document.body.clientWidth > 750) {
      this.isPC = true
    } else {
      this.isPC = false
    }
  },
  mounted () {
    this.getCurPageList(1)
  },
  methods: {
    open (attr) {
      this.isShow = true
      let path = attr.split('/')
      // 获取详情页内容
      this.axios.get(this.GLOABL.URL + 'labs/getLab', {
        params: {
          id: path[path.length - 1]
        }
      }).then((res) => {
        if (res) {
          this.item = res.data.data[0]
          document.getElementById('detailData').innerHTML = res.data.data[0].content
        }
      })
      // 查看详情页，文章点击量增加
      this.axios.get(this.GLOABL.URL + 'add/addBrowse', {
        params: {
          id: path[path.length - 1],
          type: 'lab'
        }
      }).then((res) => {})
    },
    RemoveInnerPage (attr) {
      console.log('返回上一页')
      this[attr] = false
      this.item = {}
    },
    getCurPageList (curPage) {
      // 获取当前页列表
      this.axios.get(this.GLOABL.URL + 'labs/getAllLab', {
        params: {
          param: this.isPC ? ' ' : 'app',
          page: curPage
        }
      }).then((res) => {
        if (res) {
          this.listPage = res.data.listPage
          this.ItemList = res.data.data
        }
      })
    },
    pageClick () {
      this.$emit('pageClick')
    }
  },
  watch: {
    $route () {
      this.RemoveInnerPage('isShow')
    }
  }
}
</script>

<style scoped lang="less">
  @media only screen and (min-width:750px) {
    .page_bg {
      background: url("../assets/lab/lab_bg.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .serve-ctn {
      position: absolute;
      height: 635px;
      top: 16.888889%;
      left: 50%;
      transform: translateX(-50%);
      color: #bfbfbf;
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.5;
        border-radius: 2px;
      }
      &-ctn {
        position: relative;
        padding: 0 37px;
      }
      &-item {
        padding-left: 34px;
        padding-right: 20px;
        height: 518px;
        li {
          width: 100%;
          /*display: flex;*/
          /*justify-content: space-between;*/
          height: 74px;
          line-height: 74px;
          border-bottom: 1px #273f5b dashed;
          span {
            display: inline-block;
            color: white;
          }
          span:first-child {
            width: 80%;
          }
          span:last-child {
            width: 15%;
            text-align: center;
          }
          &:before {
            display: inline-block;
            content: '';
            width: 0;
            height: 0;
            margin-left: 15px;
            margin-right: 10px;
            border-left: 10px solid white;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
          }
        }
      }
      .activeHover {
        span {
          color: #a4c3e8;
          text-shadow: none;
        }
      }
    }
    /*实验室标题样式*/
    .lab_title {
      display: flex;
      justify-content: center;
      width: 184px;
      height: 54px;
      line-height: 54px;
      background: #1e3249;
      margin-top: -34px;
      &:before {
        display: inline-block;
        content: '';
        width: 54px;
        height: 54px;
        margin-left: -15px;
        background: url("../assets/lab/lab_title_icon.png") no-repeat;
        background-position: center;
      }
    }

  }
  @media only screen and (max-width:750px) {
    .page_bg {
      background: url("../assets/app/app-lab-bg.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .serve-ctn {
      position: absolute;
      /*top: 3.35rem;*/
      width: calc(100% - 1.1rem);
      height: calc(100% - 5rem);
      transform: translate(-50%, -50%);
      left: 50%;
      top: 56%;
      color: #bfbfbf;
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.5;
        border-radius: 2px;
      }
      &-ctn {
        position: relative;
        padding: 0 0.925rem;
        height: 100%;
      }
      &-item {
        padding-left: 0.85rem;
        padding-right: 0.5rem;
        min-height: 80%;
        li {
          position: relative;
          /*display: flex;*/
          /*justify-content: flex-start;*/
          width: 100%;
          height: 1.75rem;
          line-height: 1.75rem;

          border-bottom: 0.025rem #273f5b dashed;
          font-size: 0.55rem;
          span {
            position: absolute;
            left: 0.775rem;
            height: 100%;
            display: inline-block;
            color: white;
          }
          span:first-child {
            width: 94%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          &:before {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
            content: '';
            width: 0.25rem;
            height: 0;
            margin-left: 0.275rem;
            margin-right: 0.25rem;
            border-left: 0.25rem solid white;
            border-top: 0.125rem solid transparent;
            border-bottom: 0.125rem solid transparent;
          }
        }
      }
      .activeHover {
        span {
          color: #a4c3e8;
          text-shadow: none;
        }
      }
    }
    /*实验室标题样式*/
    .lab_title {
      display: flex;
      justify-content: center;
      width: 4.6rem;
      height: 1.35rem;
      line-height: 1.35rem;
      background: #1e3249;
      margin-top: -0.25rem;
      &:before {
        display: inline-block;
        content: '';
        width: 1.35rem;
        height: 1.35rem;
        margin-left: -0.375rem;
        background: url("../assets/lab/lab_title_icon.png") no-repeat;
        background-size: 50% 50%;
        background-position: center;
      }
    }
  }
</style>
