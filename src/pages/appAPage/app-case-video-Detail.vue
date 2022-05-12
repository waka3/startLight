<template>
  <div class="caseVideo">
    <div class="w3-top pc-hidden header">
      <appHeader></appHeader>
    </div>
    <div class="caseVideo-ctn">
      <div class="caseVideo-ctn-ctn">
        <h4>{{videoData.title}}</h4>
        <div class="video-ctn" id="caseVideo">
          <!--<video class="video-ctn" loop autoplay controls="controls">-->
            <!--<source :src="videoData.src" type="video/mp4">-->
            <!--<source :src="videoData.src" type="video/ogg">-->
            <!--<source :src="videoData.src" type="video/webm">-->
          <!--</video>-->
        </div>
        <p class="mt20 mb10">{{videoData.introduce}}</p>
      </div>
      <div class="footer">
        <footerPage ></footerPage>
      </div>
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
      videoData: {}
    }
  },
  created () {
    this.getData()
    window.scrollTo(0, 0)
  },
  methods: {
    getData () {
      // 获取详情数据
      let url = this.GLOABL.URL + 'videos/getPlayBack'
      let path = this.$route.path.split('=')
      this.axios.get(url, {
        params: {
          id: path[path.length - 1]
        }
      }).then((res) => {
        this.videoData = res.data.data[0]
        let video = '<video class="video-ctn" loop autoplay controls="controls">' +
          '<source src="' + this.videoData.src + '" type="video/mp4">' +
          '<source src="' + this.videoData.src + '" type="video/ogg">' +
          '<source src="' + this.videoData.src + '" type="video/webm">' +
          '</video>'
        document.getElementById('caseVideo').innerHTML = video
      })
    }
  }
}
</script>

<style lang="less">
  .caseVideo-ctn {
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
      .video-ctn{
        width: 100%;
        height: 7rem;
        video{
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
  }
  .footer /deep/ .footer{
    position: absolute;
    width: 100%;
    bottom: 0;
  }
</style>
