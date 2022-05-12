<template>
  <div class="map" id="allmap"></div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'BMap',
  mounted () {
    this._map()
    window.onresize = () => {
      this._map()
    }
  },
  methods: {
    _map () {
      let map = new BMap.Map('allmap')
      let point = new BMap.Point(118.187737, 24.491738)
      let marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      map.centerAndZoom(point, 15)
      let opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '厦门星之光科技有限公司' // 信息窗口标题
      }
      let infoWindow = new BMap.InfoWindow('地址：厦门思明区软件园二期观日路26号之七1F', opts) // 创建信息窗口对象
      marker.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point) // 开启信息窗口
      })
      if (document.body.clientWidth > 750) {
        map.addControl(new BMap.NavigationControl()) // 添加平移缩放控件
        map.addControl(new BMap.ScaleControl()) // 添加比例尺控件
        map.addControl(new BMap.OverviewMapControl()) // 添加缩略地图控件
      }
      map.enableScrollWheelZoom() // 启用滚轮放大缩小
      // map.addControl(new BMap.MapTypeControl()) // 添加地图类型控件
      map.centerAndZoom(point, 18)
      map.setMapStyle({style: 'dark'})
    }
  }
}
</script>

<style scoped>
  .map {
    width: 100%;
    height: 100%;
  }
</style>
