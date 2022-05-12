/* eslint-disable no-return-assign */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import 'babel-polyfill'
// 滚动条样式插件
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

import HomePage from './pages/home'
import cityPage from './pages/city'
import tripPage from './pages/trip'
import servePage from './pages/appAPage/app-serve-item'
import serveOne from './pages/serve/serve01'
import serveTwo from './pages/serve/serve02'
import serveThree from './pages/serve/serve03'
import serveFour from './pages/serve/serve04'
import serveFive from './pages/serve/serve05'
import casePage from './pages/appAPage/app-case'
import caseDetailPage from './pages/appAPage/app-case-item-Detail'
import caseVideoPage from './pages/appAPage/app-case-video-Detail'
import labPage from './pages/appAPage/app-lab-item'
import newPage from './pages/newTwoPage'
import newList from './pages/new/newList'
import newDetails from './pages/new/newDetails'
import newItemApp from './pages/appAPage/app-new-item'
import appNew from './pages/appNewPage'

// import test from './pages/test'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(vuescroll)

/* eslint-disable no-new */
let router = new VueRouter({
  mode: 'history',
  routes: [
    // {
    //   path: '/test',
    //   component: test
    // },
    {
      path: '/',
      component: HomePage
    }, {
      path: '/city',
      component: cityPage
    }, {
      path: '/trip',
      component: tripPage
    }, {
      path: '/serve',
      component: servePage,
      children: [
        {
          path: '/serve/:index=0',
          component: serveOne
        }, {
          path: '/serve/:index=1',
          component: serveTwo
        }, {
          path: '/serve/:index=2',
          component: serveThree
        }, {
          path: '/serve/:index=3',
          component: serveFour
        }, {
          path: '/serve/:index=4',
          component: serveFive
        }
      ]
    }, {
      path: '/caseImg',
      component: casePage
    }, {
      path: '/caseVideo',
      component: casePage
    }, {
      path: '/photo/:index',
      component: caseDetailPage
    }, {
      path: '/case/Video/:index',
      component: caseVideoPage
    }, {
      path: '/lab/:index',
      component: labPage
    }, {
      path: '/new',
      component: newPage,
      children: [
        {
          path: '/new',
          component: newList
        }, {
          path: ':index',
          component: newDetails
        }
      ]
    }, {
      path: '/appNew/:index',
      component: newItemApp
    }, {
      path: '/appNew',
      component: appNew
    }
  ]
})
// 鼠标滑过样式
Vue.prototype.addActive = function (e) {
  let hoverTarget = e.target
  let li = e.target.parentNode
  if (hoverTarget.tagName === 'IMG') {
    li = e.target.parentNode.parentNode
  }
  if (li.className.indexOf('activeHover') !== -1 || li.tagName === 'UL' || li.className.indexOf('case-ctn-wrap') !== -1) {
    return null
  } else {
    li.classList.add('activeHover')
  }
}
// 鼠标移开样式
Vue.prototype.removeActive = function (e) {
  let hoverTarget = e.target
  let li = e.target.parentNode
  if (hoverTarget.tagName === 'IMG') {
    li = e.target.parentNode.parentNode
  }
  if (li.className.indexOf('activeHover') !== -1) {
    li.classList.remove('activeHover')
  } else {
    return null
  }
}
Vue.prototype.$isApp = false

// 接口路径
Vue.prototype.GLOABL = {
  URL: 'http://chunge.cocuc.cn/lightOfStar/public/api/'
}

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  mounted () {
    this.getWidth()
    window.onresize = () => {
      let self = this
      self.getWidth()
    }
  },
  methods: {
    getWidth () {
      if (document.body.clientWidth > 750) {
        this.$isApp = false
      } else {
        this.$isApp = true
      }
    }
  }
})
