<template>
  <div class="app pc-hidden">
    <div class="app-bg"></div>
    <div class="app-header">
      <div class="app-header-logo">
        <router-link :to="{path: '/'}" class="a" @click.native="destroyFullpage">
          <img src="../assets/app/app-logo.png" alt="">
        </router-link>
      </div>
      <div class="app-header-menu">
        <span @click="openMenu"></span>
      </div>
    </div>
    <div class="app-menu" v-if="isShowMenu">
      <div class="app-menu-bg"></div>
      <div class="app-menu-ctn">
        <p @click="openMenu"></p>
        <ul class="app-menu-menu" @click="closeMenu($event)">
          <li>
            <img src="../assets/index/index_logo.png" alt="">
          </li>
          <li>
            <router-link :to="{path: '/#section1'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{path: '/#section2'}">服务项目</router-link>
          </li>
          <li>
            <router-link :to="{path: '/#section3'}">案例集锦</router-link>
          </li>
          <li>
            <router-link :to="{path: '/#section4'}">实验室</router-link>
          </li>
          <li>
            <router-link :to="{path: '/appNew'}">新闻中心</router-link>
          </li>
          <li>
            <router-link :to="{path: '/#section6'}">联系我们</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      isShowMenu: false
    }
  },
  methods: {
    openMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    closeMenu (attr) {
      console.log(attr.target.tagName)
      if (attr.target.tagName === 'A') {
        this.openMenu()
        this.$emit('destroyFullpage')
      }
    },
    destroyFullpage () {
      this.$emit('destroyFullpage')
    }
  }
}
</script>

<style scoped lang="less">
  @media only screen and (max-width:750px) {
    .app{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3.35rem;
      padding: 0.675rem;
      padding-bottom: 0.5rem;
      &-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: .5;
      }
    }
    .app-header{
      position: relative;
      z-index: 11;
      display: flex;
      justify-content: space-between;
      &-logo{
        width: 3.05rem;
        height: 1.675rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      &-menu{
        line-height: 100%;
        span{
          display: block;
          content: '';
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          border: 2px solid #f2e7c7;
          background: url("../assets/header/head-icon03.png") no-repeat;
          background-position: center;
          background-size: 50% 50%;
          animation: sha 2s linear infinite;
          transition: all .3s;
        }
      }
    }
    .app-menu{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
      &-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: .85;
      }
      &-ctn{
        position: absolute;
        width: 100%;
        margin-top: 0.675rem;
        p{
          float: right;
          margin-right: 0.675rem;
          content: '';
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          border: 2px solid #f2e7c7;
          background: url("../assets/app/head-icon04.png") no-repeat;
          background-position: center;
          background-size: 50% 50%;
          text-align: right;
        }
      }
      &-menu{
        display: flex;
        flex-direction: column;
        width: 100%;
        li{
          width: 100%;
          height: 1.95rem;
          line-height: 1.95rem;
          color: #f2e7c7;
          text-align: center;
          font-size: 0.75rem;
          &:first-child{
            width: 4.25rem;
            height: 3.5rem;
            margin: auto;
            img{
              width: 100%;
              /*height: 100%;*/
            }
          }
        }
      }
    }
    @-webkit-keyframes greenPulse {
      from {  -webkit-box-shadow: 0 0 0.25rem #333; }
      50% { -webkit-box-shadow: 0 0 0.5rem #dcd3b6; }
      to {  -webkit-box-shadow: 0 0 0.25rem #333; }
    }
    @-webkit-keyframes sha{
      0%{  -webkit-box-shadow: 0 0 0 #fff;  box-shadow: 0 0 0 #fff; }
      10%{  -webkit-box-shadow: 0 0 0.25rem #fff;  box-shadow: 0 0 0.25rem #fff; }
      15%{  -webkit-box-shadow: 0 0 0 #fff;  box-shadow: 0 0 0 #fff; }
      20%{  -webkit-box-shadow: 0 0 0.25rem #fff;  box-shadow: 0 0 0.25rem #fff; }
      25%{  -webkit-box-shadow: 0 0 0 #fff;  box-shadow: 0 0 0 #fff; }
      100%{  -webkit-box-shadow: 0 0 0 #fff;  box-shadow: 0 0 0 #fff; }
    }
  }
</style>
