<template>
  <div v-if="max > 1">
    <ul class="page-wrap" id="switch">
      <li @click="prev(0)" class="notClick">首页</li>
      <li class="line notClick">|</li>
      <li @click="prev(nowIndex)" class="notClick">上一页</li>
      <li class="line">|</li>
      <li @click="next(nowIndex)">下一页</li>
      <li class="line">|</li>
      <li @click="next(max - 1)">末页</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'switchPage',
  props: {
    max: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  methods: {
    goto () {
      this.$emit('switch', this.nowIndex + 1)
    },
    isCanClick () {
      let switchPage = document.getElementById('switch').getElementsByTagName('li')
      for (let i = 0, len = switchPage.length; i < len; i++) {
        // 跳到第一个，首页和上页显示灰色
        if (this.nowIndex === 0) {
          if (i < 3) {
            if (switchPage[i].className.indexOf('notClick') === -1) {
              switchPage[i].classList.add('notClick')
            }
          } else if (i > len - 4) {
            if (switchPage[i].className.indexOf('notClick') !== -1) {
              switchPage[i].classList.remove('notClick')
            }
          }
        } else if (this.nowIndex === this.max - 1) {
          if (i > len - 4) {
            if (switchPage[i].className.indexOf('notClick') === -1) {
              switchPage[i].classList.add('notClick')
            }
          } else if (i < 3) {
            if (switchPage[i].className.indexOf('notClick') !== -1) {
              switchPage[i].classList.remove('notClick')
            }
          }
        } else {
          if (switchPage[i].className.indexOf('notClick') !== -1) {
            switchPage[i].classList.remove('notClick')
          }
        }
      }
    },
    prev (temp) {
      if (temp === 0) {
        if (this.nowIndex === 0) {
          return
        }
        this.nowIndex = 0
      } else {
        this.nowIndex--
      }
      this.isCanClick()
      this.goto()
    },
    next (temp) {
      if (temp === this.max - 1) {
        if (this.nowIndex === this.max - 1) {
          return
        }
        this.nowIndex = this.max - 1
      } else {
        this.nowIndex++
      }
      this.isCanClick()
      this.goto()
    }
  }
}
</script>

<style scoped lang="less">
  .page-wrap{
    display: flex;
     justify-content: center;
     margin-top: 38px;
     margin-bottom: 75px;
    li {
      cursor: pointer;
      float: left;
      &:last-child {
        margin-right: 0;
      }
    }
    .line{
      padding: 0 19px;
    }
  }
  .notClick{
    color: #3a3a3a;
  }
  @media only screen and (max-width: 750px) {
    .page-wrap{
      margin-top: 1.375rem;
      margin-bottom: 0.8rem;
      li {
        font-size: 0.55rem;
      }
      .line{
        padding: 0 0.475rem;
      }
    }
  }
</style>
