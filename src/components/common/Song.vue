<template>
  <div class="item songItem" :id="item.id">
    <router-link :to="'/detail/' + item.id">
      <div class="itemTop">
        <div class="itemImg">
          <img v-lazy="item.picUrl + '?thumbnail=400x0&quality=10&type=webp'">
        </div>
        <i class="tag">{{item.publishTime | timeFilter}}</i>
      </div>
      <div class="itemText">
        <h4 class="itemTitle">{{item.name}}</h4>
        <p class="author">
          <span>{{item.artist.name}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Song',
    props: ['item']
  }
</script>

<style lang="scss" src="../../../static/item.scss"></style>
