<template>
  <div class="banners">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item class="banner_item" v-for="(item, idx) in bannerListGet" :key="idx">
        <img v-lazy="item.coverImgUrl">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {Swipe, SwipeItem} from 'vant'
  export default {
    name: 'Banner',
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    computed: {
      ...mapGetters(['bannerListGet'])
    }
  }
</script>

<style lang="scss" scoped>
.banners{
  width: 100%;
  height: 3rem;
  background: #188eee;
  .van-swipe{
    height: 100%;
    .banner_item{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
