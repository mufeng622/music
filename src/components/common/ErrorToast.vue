<template>
  <div class="errorToast" v-if="isErrorGet">
    <span>请求失败</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ErrorToast',
  computed: {
    ...mapGetters(['isErrorGet'])
  }
}
</script>

<style lang="scss" scoped>
.errorToast span{
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2002;
  margin-left: -1rem;
  margin-top: -1rem;
  width: 2rem;
  height: 2rem;
  background: #000;
  font-size: .28rem;
  color: #fff;
  text-align: center;
  line-height: 2rem;
  -webkit-border-radius: .2rem;
  -moz-border-radius: .2rem;
  border-radius: .2rem;
  opacity: .6;
}
</style>
