<template>
  <div class="tabbar" ref="wrapper">
      <div class="bscroll-container">
        <!-- 刷新提示信息 -->
        <div class="top-tip">
          <span class="refresh-hook">{{pulldownMsg}}</span>
        </div>
        <!-- 内容列表 -->
        <slot></slot>
        <!-- 底部提示信息 -->
        <div class="bottom-tip" :style="{display: loadHook}">
          <span class="loading-hook">{{pullupMsg}}</span>
        </div>
      </div>
    <!-- alert提示刷新成功 -->
    <div class="alert-hook" :style="{display: alertHook}">刷新成功</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'better-scroll',
  props: {
    /**
       * probeType
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
    probeType: {
      type: Number,
      default: 1
    },
    /**
       * 点击列表是否派发click事件
       */
    click: {
      type: Boolean,
      default: true
    },
    /**
       * 是否开启横向滚动
       */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
       * 是否派发滚动事件
       */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
       * 列表的数据
       */
    data: {},
    /**
     * 下拉提示
     */
    pulldownMsg: {
      type: String,
      default: '下拉刷新'
    },
    /**
     * 上拉提示
     */
    pullupMsg: {
      type: String,
      default: ''
    },
    /**
     * 提示文本
     */
    alertHook: {
      type: String,
      default: 'none'
    },
    loadHook: {
      type: String,
      default: 'none'
    },
    /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
       * 是否派发列表滚动开始的事件
       */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
       * 当数据更新后，刷新scroll的延时。
       */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted () {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    // refreshalert () { // 刷新成功提示
    //   this.alertHook = 'block'
    //   setTimeout(() => {
    //     this.alertHook = 'none'
    //   }, 1000)
    // },
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX
        // scrollbar: true
      })

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          // 滚动到底部
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('pullup')
          }
        })
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchEnd', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }

      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          if (pos.y > 30) {
            this.$emit('scroll', pos)
          }
        })
      }
      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    refresh () {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style scoped>
  .wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url("../assets/home/twoPage_bg.jpg") no-repeat;
    background-size: 100% 100%;
  }
   /*下拉、上拉提示信息 */
  .top-tip{
    position: absolute;
    top: -1rem;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align:center;
    color: white;
  }

  .bottom-tip{
    display: none;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background: url("../components/loading.gif") no-repeat;
    background-size: auto 100%;
    background-position: center;
    position: absolute;
    bottom: -1rem;
    left: 0;
  }

   /*全局提示信息*/
  .alert-hook{
    display: none;
    position: fixed;
    top: 62px;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #fff;
    font-size: 12px;
    background: rgba(7, 17, 27, 0.5);
  }
</style>
