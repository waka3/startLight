<template>
  <div class="case">
    <div class="w3-top pc-hidden header">
      <appHeader></appHeader>
    </div>
    <div class="case-ctn">
      <div class="case-ctn-ctn">
        <h4>{{title}}</h4>
        <ul>
          <li v-for="(item, key) in slideList" :key="key">
            <img :src="item.src" alt="">
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
      <footerPage></footerPage>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/app-header'
import footerPage from '../../pages/footer'
export default {
  components: {
    appHeader,
    footerPage
  },
  data () {
    return {
      title: '',
      slideList: []
    }
  },
  mounted () {
    this.getData()
    window.scrollTo(0, 0)
  },
  methods: {
    getData () {
      // 获取详情数据
      let url = this.GLOABL.URL + 'photos/getShuff'
      let path = this.$route.path.split('/')
      this.axios.get(url, {
        params: {
          id: path[path.length - 1]
        }
      }).then((res) => {
        this.title = res.data.title
        this.slideList = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="less">
  .case-ctn {
    position: absolute;
    width: 100%;
    /*top: 3.35rem;*/
    height: auto;
    min-height: 100%;
    color: #bfbfbf;
    background: url("../../assets/home/twoPage_bg.jpg") repeat;
    background-size: 100% 100%;
    &-ctn{
      padding-left: 1.15rem;
      padding-right: 0.9rem;
      padding-bottom: 2.15rem;
      margin-top: 3.35rem;
      h4{
        text-align: center;
        font-size: 0.7rem;
        line-height: 3.25rem;
        height: 3.25rem;
      }
      ul{
        li{
          margin-bottom: 1rem;
          &:last-child{
            margin-bottom: 0;
          }
          img{
            width: 100%;
            height: 100%;
          }
          p{
            margin-top: 0.55rem;
            line-height: 0.9rem;
          }
        }
      }
    }
  }
</style>
