<template>
  <div class="sidebar">
    <ul>
      <li class="w3-center" v-for="(item,index) in menuList" :key="index">
        <router-link :to="{path: '/#section' + (index+1)}">
          <span v-show="index === currentIndex">{{item.label}}</span>
          <i class="line" v-show="index !== menuList.length -1"></i>
          <span class="cirle" :class="index !== currentIndex? '': 'active'"></span>
        </router-link>
      </li>
    </ul>
    <div class="activeBg w3-display-topright">
      <img src="../assets/sideBar/menu_active_bg.png" :style="{height: curImgBarHeight}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  props: {
    menuList: {
      type: Array,
      default: () => {}
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      active: true,
      imgBarHeight: '0px'
    }
  },
  computed: {
    curImgBarHeight () {
      return this.currentIndex * 80 + 'px'
    }
  }
}
</script>

<style scoped lang="less">
  .sidebar {
    ul li{
      height: 65px;
      span{
        display: inline-block;
      }
      position: relative;
    }
  }
  .line {
    position: absolute;
    width: 1px;
    height: 50px;
    bottom: 24px;
    top: 16px;
    right: 12.5px;
    background: #fff;
    opacity: 0.2;
    filter: alpha(opacity=20);
  }
  .cirle{
    position: absolute;
    top: -5px;
    right: 0;
    z-index: 1;
    width: 25px;
    height: 25px;
    background: url("../assets/sideBar/menu_circle_01.png") no-repeat;
    background-size: 100% 100%;
  }
  .active{
    background: url("../assets/sideBar/menu_circle_02.png") no-repeat;
  }
  .activeBg {
    width: 18.5px;
    right: 3.5px;
    img {
      width: 100%;
      max-height: 370px;
      transition-property: height;
      transition-duration: 700ms;
    }
  }
</style>
