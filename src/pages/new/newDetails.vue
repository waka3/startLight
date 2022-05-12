<template>
  <div class="pcnewDetail-wrap">
    <div class="details-header">
      <h1 class="w3-center">{{title}}</h1>
      <p class="w3-center pcnewDetails-title">
        <span>{{time}}</span>
        <span>浏览量：<i>{{count}}</i>次</span>
      </p>
    </div>
    <div class="pcnewDetails-text text-ctn-p" id="details">
      <!--<p class="mt40">编者按：作者 Suranga Chandratillake 是早期风险投资公司 Balderton Capital 的泛欧区合伙人。加盟 Balderton 之前，是 Blinkx 的创始人兼 CEO，Blinkx 于 2007年 上市。</p>-->
      <!--<p class="mt40">资金筹措是大多数创业旅程中的重要部分。如果你是一名创业者，有必要知道多数风投公司遵循的标准流程。尽管每一个案例都是独一无二的，不过对重要阶段有所了解，意味着能够意识到自己所处阶段，知道自己已经满足了什么要求，还有哪些目标需要达成，才更容易筹得资金。-->
        <!--为了使这篇帖子能够尽可能地发挥作用，我没有详细描述我的公司在这些方面是怎样做的，相反，我尝试将整个过程分解为 8 个阶段，使其能够适用于更多公司。</p>-->
      <!--<p class="mt40">第一阶段：筹款前</p>-->
      <!--<p>好的投资人在第一次与你见面之前，就对你、你的公司、以及你所涉及的市场有所了解。-->
        <!--他们利用 AppAnnie、Alexa、Linkedin、GitHub、ProductHunt 等此类服务来发现感兴趣的公司并关注相关趋势。他们还持续关注优秀天使投资人、企业、种子基金、以及孵化器，以确保能知道哪些公司和创业者给他们所认可的投资人留下了深刻印象。-->
        <!--作为对话中创业者一方，也能尽早起步。虽然你必须首先构建产品、创立公司，但在实际需要或者想要筹集资金之前就花点时间与投资人沟通是值得的。-->
        <!--好的投资人会花时间来了解你的公司，而你则需要花时间去辨别这名投资人是否适合你。</p>-->
      <!--<p class="mt40">第二阶段：流程的开始</p>-->
      <!--<p>根据各自情况，创业公司和投资人都能启动资金筹措流程。-->
        <!--如果你想迈出第一步，就主动向已经取得联系的投资人发送个人信息，表示你正在考虑筹措资金。而对于尚未建立联系的投资人，要避免邮件内容过于直白冰冷，可以快速建立某种关系(在一次活动中见过，等等)，或者使用你的人际网络(天使投资人、雇员、朋友)-->
        <!--来达到暖场效果。同样，我不建议通过邮件传达大量信息——面谈或通过电话交流通常更有用。</p>-->
      <!--<p>有时，一直密切关注某家公司的投资人(在一些案例中，他们已经是投资方，而另一些案例中则不是)会抢先启动资金筹措流程。显然，这是因为他们对你的公司很感兴趣，想在公司变得更大或更有名之前拥有部分股权。此时，你得分辨这是否与你的需求相符。</p>-->
      <!--<p>第三阶段：流程前期</p>-->
      <!--<p>如果某位风险投资人对你产生了兴趣，那么该公司的很多人就会开始了解你。在你与合伙人、负责人、合作伙伴以及分析师会面时，他们会有两次或三次参与其中。一定要知道他们所有人都在做什么，在最终决策过程中会发挥什么作用。</p>-->
      <!--<p>在这些会议中，你要回答许多关于你的背景、团队、公司及产品的问题。做好准备，他们会深挖针对你的特殊问题。如果你运营的是交付市场，可能会被问及单位经济效益;如果你建立的是一家广告技术公司，需要知道 Google 和 Facebook 正在做什么;如果你是一家开放核心软件公司的 CEO，针对你的问题可能是与开发人员的关系，付费软件的转化率。-->
      <!--</p>-->
      <!--<p>在经历了这些问题的轮番轰炸以后，你的回答会上报给该投资公司。接下来就是公司内部讨论，有时会征求外界专家意见。讨论结果将决定他们是否会继续深挖相关信息。-->
        <!--第四阶段：深入了解</p>-->
      <!--<p>这一阶段，通常有不只一名合伙人参与其中。一般情况下是两名，可有时(在规模较小的公司)所有的合伙人都会参与。他们希望知道更多的细节，所以，一定要知道你公司的优势，了解你涉及市场。 该阶段的目的，是要开始真正了解对方。投资一旦启动，你们可能会在一起工作很多年，所以对于双方来说，找到如何一起工作的感觉很重要。</p>-->
      <!--<p>阐明目标、期望和关注点很重要——在这一阶段了解对方、达成共识，胜于在此后的合作中进行。 通常情况下，会有许多第三方尽职调查，投资人也可能会要求提供相关信息——关于创始人个人的，以及来自公司客户和合伙人的。</p>-->
      <!--<p>在此期间，你相处时间最长的合作伙伴提供的投资备忘录会更长或更好，其中包含了收集到的所有信息，还有她针对各方面的看法。</p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'newDetails',
  data () {
    return {
      title: '',
      time: '',
      count: 0,
      content: ''
    }
  },
  mounted () {
    this.getDetails()
  },
  methods: {
    getDetails () {
      let path = this.$route.path.split('=')
      // 获取详情页内容
      this.axios.get(this.GLOABL.URL + 'news/getNew', {
        params: {
          id: path[path.length - 1]
        }
      }).then((res) => {
        if (res) {
          this.title = res.data.data[0].title
          this.time = res.data.data[0].time
          this.count = res.data.data[0].count
          document.getElementById('details').innerHTML = res.data.data[0].content
        }
      })
      // 查看详情页，文章点击量增加
      this.axios.get(this.GLOABL.URL + 'add/addBrowse', {
        params: {
          id: path[path.length - 1],
          type: 'new'
        }
      }).then((res) => {})
    }
  }
}
</script>

<style lang="less">
  .pcnewDetail-wrap {
    width: 75%;
    margin: auto
  }
  .details-header{
    border-bottom: 1px dashed #303030;
  }
  .pcnewDetails-title{
    height: 84px;
    line-height: 84px;
  }
  .pcnewDetails-text{
    margin-top: 30px;
    margin-bottom: 95px;
  }
</style>
