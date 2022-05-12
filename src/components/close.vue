<template>
  <span class="close" @click="RemoveInnerPage(attr)"></span>
</template>

<script>
export default {
  name: 'close',
  props: {
    attr: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    Edit () {
      // console.log('返回上一页')
      // this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
