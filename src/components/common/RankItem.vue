<template>
  <div class="rankItem">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="rankItemList">
      <van-cell v-for="(item, idx) in rankListGet" :key="item.id" :id="item.id" class="rankItemListChild">
        <div class="rankTitle">
          <span>{{idx+1}}</span>
          <strong>{{item.name}}</strong>
        </div>
        <p>
          <em>歌手：{{item.artist.name}}</em>
          <i>{{item.publishTime | timeFilter}}</i>
        </p>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import {List, Cell} from 'vant'
export default {
  name: 'RankItem',
  data(){
    return {
      loading: false,
      finished: false
    }
  },
  props: ['rankListGet'],
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  methods: {
    onLoad(){
      this.loading = false;
      if(this.rankListGet.length >= 12){
        this.finished = true
      }
    }
  }
}
</script>

<style lang="scss" src="../../../static/item.scss"></style>
