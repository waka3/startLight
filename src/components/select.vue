<template>
  <div class="selection">
    <div class="select-show" @click="selectOpen">
      <span :id="currId">{{ currValue }}</span>
      <div class="arrow"></div>
    </div>
    <div class="select-list" v-if="isShow">
      <ul>
        <li @click="choiceValue($event)" v-for="(item, key) in selectList" :key="key" :id="item.id">{{ item.value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectList: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      isShow: false,
      currId: '请选择类型',
      currValue: '请选择区域'
    }
  },
  methods: {
    selectOpen () {
      this.isShow = !this.isShow
    },
    choiceValue (e) {
      this.currValue = e.target.innerHTML
      this.currId = e.target.id
      let obj = {
        id: this.currId,
        value: this.currValue
      }
      this.isShow = false
      this.$emit('on-change', obj)
    }
  }
}
</script>

<style scoped lang="less">
  .select {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &-show{
      border-bottom: 1px solid black;
    }
    &-show span {
      padding-left: 16px;
    }
    .arrow {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid black;
    }
    &-list {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: #c3c3c3;
      li {
        width: 100%;
        height: 100%;
        line-height: 1;
        padding-left: 16px;
        cursor: pointer;
        &:hover {
          color: white;
          background: black;
        }
      }
    }
  }
  @media only screen and (max-width:750px) {
    .select {
      &-show span {
        padding-left: 0.4rem;
      }
      &-list {
        width: 100%;
        li {
          width: 100%;
          padding-left: 0.4rem;
          border-bottom: 1px solid #ccc;
        }
      }
    }
  }
</style>
