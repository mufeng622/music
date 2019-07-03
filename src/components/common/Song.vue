<template>
  <div class="item songItem" :id="item.id">
    <router-link :to="'/detail/' + item.id">
      <div class="itemTop">
        <div class="itemImg">
          <img v-lazy="item.coverImgUrl + '?thumbnail=400x0&quality=10&type=webp'">
        </div>
        <i class="tag">{{item.updateTime | timeFilter}}</i>
      </div>
      <div class="itemText">
        <h4 class="itemTitle">{{item.name}}</h4>
        <p class="author" v-if="item.creator">
          <span>{{item.creator.nickname}}</span>
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
