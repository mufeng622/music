<template>
  <div class="loading" :class="isShowTop ? 'loadingNo' : ''" v-if="isLoadingGet">
    <span>loading...</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Loading',
  props: ['isShowTop'],
  computed: {
    ...mapGetters(['isLoadingGet'])
  }
}
</script>

<style lang="scss" scoped>
.loading{
  position: fixed;
  top: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  background: rgba(255, 255, 255, .45);
  font-size: .28rem;
  color: #e20;
}
.loadingNo{
  top: 1.16rem;
}
</style>
