<template>
  <div class="banners">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item class="banner_item" v-for="(item, idx) in banners" :key="item.targetId">
        <img v-lazy="item.imageUrl">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant'
  export default {
    name: 'Banner',
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
    },
    data(){
      return {
       banners:[
         {
           "imageUrl":"http://p1.music.126.net/wi2XmyL0vL2-m58qxHT6yw==/109951164094695484.jpg",
           "targetId":1366957080,
           "targetType":1,
         },
         {
           "imageUrl":"http://p1.music.126.net/ueRn2DYTeK5eX3KFInE4Wg==/109951164094734373.jpg",
           "targetId":490106,
           "targetType":10
         },
         {
           "imageUrl":"http://p1.music.126.net/PDCqJawELZ2BJzd0BBREhA==/109951164094815287.jpg",
           "targetId":1367213104,
           "targetType":1
         }
       ]
      }
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
