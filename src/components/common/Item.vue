<template>
  <div class="item" :id="item.id">
    <router-link :to="'/detail/' + item.id">
      <div class="itemTop">
        <div class="itemImg">
          <img v-lazy="item.coverImgUrl + '?thumbnail=220x0&quality=30&type=webp'">
        </div>
        <p class="itemNum"><span>{{item.playCount | changeNum}}</span></p>
      </div>
      <div class="itemText">
        <h4 class="itemTitle">{{item.name}}</h4>
        <!--<h5 class="itemSinger" v-if="item.song.artists[0].name">{{item.song.artists[0].name}}</h5>-->
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: ['item', 'musicListen'],
    methods: {
      musicListenMethod(){
        this.$emit('musicListen')
      }
    }
  }
</script>

<style lang="scss" src="../../../static/item.scss"></style>
