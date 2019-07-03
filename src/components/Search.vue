<template>
  <div class="search">
    <div class="top">
      <span class="backs" @click="routerBack"></span>
      <div>
        <input class="searchInput" type="text" placeholder="请输入要搜索内容" v-model="searchText">
        <span class="cancelSearch">
          <i @click="enterSearch">确定</i>
        </span>
      </div>
    </div>
    <div class="search-list">
      <van-list v-if="searchListGet.length">
        <van-cell class="search-list-item" v-for="item in searchListGet" :key="item.id" :id="item.id">
          <div class="search-list-img">
            <img v-lazy="item.al && item.al.picUrl + '?thumbnail=220x0&quality=30&type=webp'">
          </div>
          <div class="search-list-text">
            <div>
              <h4>{{item.name}}</h4>
              <p><span>{{item.alia && item.alia[0]}}</span></p>
            </div>
            <div>
              <p>演唱：<span>{{item.ar && item.ar[0].name}}</span></p>
            </div>
          </div>
        </van-cell>
      </van-list>
      <p class="search-list-no" v-else>没有歌曲</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {List, Cell} from 'vant'
export default {
  name: 'Search',
  data(){
    return {
      searchText: ''
    }
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  computed: {
    ...mapGetters(['searchListGet']),
  },
  methods: {
    ...mapMutations(['GET_SEARCH_LIST_CLEAR']),
    ...mapActions(['searchListMethod']),
    routerBack(){
      if(window.history.length <= 1){
        this.$router.push({path: '/'})
        return false
      }else{
        this.$router.go(-1)
      }
    },
    enterSearch(){
      this.searchListMethod({key: this.searchText}).then(()=>{
        this.searchText = ''
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  destroyed(){
    this.GET_SEARCH_LIST_CLEAR()
  }
}
</script>

<style lang="scss" src="../../static/search.scss"></style>
