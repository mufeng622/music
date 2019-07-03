<template>
  <div :class="isShowAudioGet ? 'bigbox-pad' : 'bigbox'">
    <Top ref="tops" v-if="isShowTop"></Top>
    <Tabs v-if="isShowTop"></Tabs>

    <div :class="!isShowTop ? '' : 'mainCon'">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
      <Loading :isShowTop="!isShowTop"></Loading>
    </div>

    <Audios></Audios>

    <ErrorToast v-if="isErrorGet"></ErrorToast>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Top from './common/Top';
import Tabs from './Tabs';
import Audios from './common/Audios';
import Loading from './common/Loading';
import ErrorToast from './common/ErrorToast';
export default {
  name: 'Home',
  components: {
    Top,
    Tabs,
    Audios,
    Loading,
    ErrorToast
  },
  computed: {
    ...mapGetters(['isShowAudioGet', 'isErrorGet']),
    isShowTop(){
      let exp = /detail|search/
      return !(exp.test(this.$route.path))
    }
  }
}
</script>

<style lang="scss" scoped>
.mainCon{
  position: relative;
  padding-top: 2rem;
}
.bigbox-pad{
  padding-bottom: 1.78rem;
}
</style>

