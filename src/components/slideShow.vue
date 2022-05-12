<template>
  <div class="slide" @mouseover="clearInv" @mouseout="runInv" v-if="slides.length > 0">
    <div class="slide-ctn">
      <!--<router-link :to="{path: slides[nowIndex].href}">-->
        <transition class="slide-trans" v-if="isShow" >
          <img :src="slides[nowIndex].src">
        </transition>
        <transition class="slide-trans-old" v-if="!isShow">
          <img :src="slides[nowIndex].src">
        </transition>
      <!--</router-link>-->
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-index" v-if="params.isShowArrow">
      <li @click="prev(nowIndex)">&lt;</li>
      <li @click="next(nowIndex)">&gt;</li>
    </ul>
    <div class="slide-tip" v-if="params.isShowTip">
      <span class="slide-tip-per">
        <em>{{nowIndex + 1}}</em>
        <span>/</span>
        <b>{{slides.length}}</b>
      </span>
      <span class="slide-tip-ctn">{{slides[nowIndex].title}}</span>
    </div>
  </div>
  <!--<div :style="{display: [slides.length > 0 ? 'none': 'block']}" v-else>暂无图片信息</div>-->
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => []
    },
    inv: {
      type: Number,
      default: 1000
    },
    params: {
      isShowArrow: true,
      isShowTip: true
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true,
      invId: ''
    }
  },
  methods: {
    goto (temp) {
      this.isShow = !this.isShow
      this.nowIndex = temp
    },
    prev (temp) {
      if (temp === 0) {
        this.nowIndex = this.slides.length - 1
      } else {
        this.nowIndex--
      }
    },
    next (temp) {
      if (temp === this.slides.length - 1) {
        this.nowIndex = 0
      } else {
        this.nowIndex++
      }
    },
    runInv () {
      this.show = !this.show
      this.invId = setInterval(() => {
        this.next(this.nowIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>

<style scoped lang="less">
  .slide {
    position: relative;
    width: 100%;
    height: 100%;
    &-ctn img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &-trans--enter-active{
      transition: all .5s ease-out;
      transform: translateX(100%);
    }
    &-trans-enter{
      transition: all .5s ease-out;
      transform: translateX(-100%);
    }
    &-trans--old-level-active{
      transition: all .3s ease-out;
      transform: translateX(100%);
    }
    &-index {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      li {
        font-size: 40px;
        background: black;
        opacity: 0.6;
        padding-bottom: 5px;
        .on {
          color: #fff;
        }
      }
    }
    &-tip{
      position: absolute;
      bottom: -30px;
      transform: translateY(100%);
      left: 0;
      width: 100%;
      &-per{
        position: relative;
        float: left;
        width: 5%;
        height: 40px;
        color: #fff;
        em{
          position: absolute;
          bottom: 5px;
          color: #d21010;
          font-size: 35px;
          transform: translateY(-10px);
        }
        span{
          position: absolute;
          font-size: 30px;
          top: 0;
          left: 20px;
        }
        b{
          position: absolute;
          bottom: 7px;
          left: 35px;
          font-size: 20px;
          font-weight: normal;
        }
      }
      &-ctn{
        float: left;
        width: 95%;
        font-size: 14px;
        line-height: 24px;
        /*padding-left: 70px;*/
      }
    }
  }
</style>
