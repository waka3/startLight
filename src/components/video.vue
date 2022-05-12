<template>
  <!--<div class="video" @mouseover="isPlay(false)" @mouseout="isPlay(true)">-->
  <div class="video">
    <div class="video-ctn">
      <video  loop autoplay controls="controls">
        <source :src="video.data.src" type="video/mp4">
        <source :src="video.data.src" type="video/ogg">
        <source :src="video.data.src" type="video/webm">
      </video>
    </div>
    <div class="video-tip">
      <span class="video-tip-ctn">{{video.data.introduce}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {}
  }
}
</script>

<style scoped lang="less">
  .video {
    position: relative;
    width: 100%;
    height: 100%;
    &-ctn{
      width: 100%;
      height: 100%;
      video {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
    &-tip{
      position: absolute;
      bottom: -60px;
      left: 0;
      width: 100%;
      &-ctn{
        font-size: 14px;
      }
    }
  }
</style>
