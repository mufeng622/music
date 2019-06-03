<template>
  <div class="item" :id="item.id" @click="musicListenMethod">
    <div class="itemTop">
      <div class="itemImg">
        <img v-lazy="item.song.album.picUrl + '?thumbnail=220x0&quality=30&type=webp'">
      </div>
      <p class="itemNum"><span>{{item.song.duration | changeNum}}</span></p>
    </div>
    <div class="itemText">
      <h4 class="itemTitle">{{item.name}}</h4>
      <h5 class="itemSinger" v-if="item.song.artists[0].name">{{item.song.artists[0].name}}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: ['item', 'nums', 'musicListen'],
    methods: {
      musicListenMethod(){
        this.$emit('musicListen')
      }
    }
  }
</script>

<style lang="scss" src="../../../static/item.scss"></style>
