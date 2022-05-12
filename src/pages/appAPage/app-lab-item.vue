<template>
  <div class="lab">
    <div class="w3-top pc-hidden header">
      <appHeader></appHeader>
    </div>
    <div class="w3-display-position lab-ctn">
      <div class="lab-ctn-bg"></div>
      <div class="lab-ctn-ctn child-element">
        <div class="lab-ctn-ctn-title">
          <h1>{{ctn.title}}</h1>
          <p>
            <span>{{ctn.time}}</span> 浏览量：<span>{{ctn.count}}</span>次
          </p>
        </div>
        <div class="lab-ctn-ctn-ctn" id="labCtn">
          <!--<p>DT Park新媒体艺术乐园是由深圳数虎图像股份有限公司研发设计，以其自有IP版权儿童剧为故事主题，与新媒体技术相结合的多媒体FEC(Family Entertainment-->
            <!--Center家庭娱乐中心)，通过主题化、交互式的呈现方式，为家庭打造的一个共同参与的高科技亲子体验创新业态。</p>-->
          <!--<img src="../../assets/lab/lab01_img01.jpg" alt="">-->
          <!--<p>DT-->
            <!--Park-绿野仙踪”是首个以自有版权儿童剧目《绿野仙踪之奥兹过大冒险》为主题而开发的乐园产品。由一个完整故事串起——桃乐丝与她的小伙伴们在奥兹国的历险历程，来设置乐园的体验过程，更有代入感，玩得更有趣味。目前体验项目有迷镜空间、金砖大道、木屋滑梯、绿野庄园、流光乐团、仙踪魔方、回家之路、女巫城堡、追光森林、奇幻故事屋、奥兹欢乐秀、堪萨斯集市等一套完整的产品业态。</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '../../components/app-header'
export default {
  name: 'lab-item',
  props: {
  },
  components: {
    appHeader
  },
  data () {
    return {
      ctn: {
        title: '',
        time: '',
        count: 0,
        content: ''
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let path = this.$route.path.split('/')
      // 获取详情页内容
      this.axios.get(this.GLOABL.URL + 'labs/getLab', {
        params: {
          id: path[path.length - 1]
        }
      }).then((res) => {
        if (res) {
          this.ctn = res.data.data[0]
          let labCtn = document.getElementById('labCtn')
          labCtn.innerHTML = this.ctn.content
        }
      })
      // 查看详情页，文章点击量增加
      this.axios.get(this.GLOABL.URL + 'add/addBrowse', {
        params: {
          id: path[path.length - 1],
          type: 'lab'
        }
      }).then((res) => {})
    }
  }
}
</script>

<style lang="less">
  /*@media only screen and (max-width: 750px) {*/
    .lab-ctn {
      position: absolute;
      width: 100%;
      height: auto;
      min-height: 100%;
      color: #bfbfbf;
      &-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("../../assets/home/twoPage_bg.jpg") repeat;
      }
      &-ctn {
        position: relative;
        width: calc(100% - 1.55rem);
        margin: auto;
        margin-top: 4.5rem;
        &-title {
          height: 2.5rem;
          margin-top: 1.125rem;
          border-bottom: 0.025rem #ccc dashed;
          text-align: center;
          p {
            font-size: 0.5rem;
            height: 1.6rem;
            line-height: 1.6rem;
            color: #606060;
          }
        }
        &-ctn {
          margin-bottom: 0.55rem;
          p {
            font-size: 0.5rem;
            line-height: 0.85rem;
            /*margin-top: 0.85rem;*/
            /*margin-bottom: 0.85rem;*/
            &:first-child{
              margin-top: 1rem;
            }
            img{
              width: 100%;
            }
          }
          img {
            width: 100%;
          }
        }
      }
    }
  /*}*/
</style>
