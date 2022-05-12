<template>
  <div class="labItemDetilsItemDetils" v-if="isShow">
    <img src="../assets/lab/lab_bg.jpg" class="page_bg" @mousewheel="mouseEvent()">
    <div class="w3-display-position labItemDetils-ctn">
      <div class="labItemDetils-ctn-bg"></div>
      <p class="labItemDetils-close_p app-hidden">
        <span class="close" @click="Edit('isShow')"></span>
      </p>
      <div class="labItemDetils-ctn-ctn app-hidden">
        <vue-scroll :ops="ops">
          <div class="child-element">
            <div class="labItemDetils-ctn-ctn-title">
              <h1>{{Item.title}}</h1>
              <p>
                <span class="mr20">{{Item.time}}</span>浏览量：<span>{{Item.count}}次</span>
              </p>
            </div>
            <div class="labItemDetils-ctn-ctn-ctn" id="detailData"></div>
          </div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import Close from '../components/close'

export default {
  name: 'lab-item',
  components: {Close},
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    Item: {
      title: '',
      time: '',
      count: '',
      detail: {}
    }
  },
  data () {
    return {
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
          gutterOfEnds: '10px',
          gutterOfSide: '0px'
        },
        bar: {
          background: '#826a23',
          keepShow: true,
          right: '-20px',
          bottom: '20px'
        }
      }
    }
  },
  methods: {
    Edit (attr) {
      this.$emit('RemoveInnerPage', attr)
    },
    mouseEvent (attr) {
      this.$emit('mouseEvent', attr)
    }
  }
}
</script>

<style lang="less">
  @media only screen and (min-width: 750px) {
    .child-element /deep/ .__vuescroll .__panel.__native {
      height: 99%;
    }

    .labItemDetils-close_p {
      width: 100%;
      height: 50px;
    }
    .child-element {
      width: 1110px;
    }
    .labItemDetils-ctn {
      position: absolute;
      /*width: 73.125%;*/
      top: 8.88888%;
      width: 1170px;
      height: 81.66666%;
      left: 50%;
      transform: translateX(-50%);
      color: #bfbfbf;
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
      /*实验室内页标题*/
      &-ctn {
        height: 670px;
        margin: 0 30px;
        &-title {
          height: 100px;
          margin-top: 17px;
          margin-right: 35px;
          border-bottom: 1px #ccc dashed;
          text-align: center;
          p {
            font-size: 14px;
            height: 64px;
            line-height: 64px;
          }
        }
        &-ctn {
          padding-right: 35px;
          margin-top: 34px;
          p {
            font-size: 16px;
            line-height: 34px;
            &:last-child{
              margin-bottom: 34px;
            }
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
