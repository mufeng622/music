<template>
  <div class="item" :id="item.id">
    <div class="itemTop">
      <div class="itemImg">
        <img v-lazy="item.cover + '?thumbnail=220x0&quality=30&type=webp'">
      </div>
      <span class="video"><img src="../../../static/images/video.png" alt=""></span>
    </div>
    <div class="itemText">
      <h4 class="itemTitle">{{item.name}}</h4>
      <h5 class="itemSinger" v-if="item.artists[0].name">{{item.artists[0].name}}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ItemMv',
    props: ['item']
  }
</script>

<style lang="scss" src="../../../static/item.scss"></style>
