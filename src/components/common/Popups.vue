<template>
  <div class="popups">
    <van-popup v-model="isShowPop" :position="popPosition" :overlay="isPopBg">
      <slot></slot>
    </van-popup>
  </div>
</template>

<script>
import {Popup} from 'vant';
export default {
  name: 'Popups',
  data(){
    return {
      isShowPop: false
    }
  },
  //isShowPop: 是否显示弹层；
  //popPosition：弹层展示位置，可选值top/bottom/left/right；
  //isPopBg：是否显示遮罩层
  props: {
    popPosition :{
      type: String,
      default: 'bottom'
    },
    isPopBg: {
      type: Boolean,
      default: true
    }
  },
  components: {
    [Popup.name]: Popup
  }
}
</script>
