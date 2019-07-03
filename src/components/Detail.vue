<template>
  <div class="detail">
    <div class="detail-title">
      <span @click="routerBack"></span>
      <strong>专辑详情</strong>
    </div>
    <div class="detail-top">
      <div class="detail-top-bg" v-if="collectionSongListGet.coverImgUrl">
        <img v-lazy="collectionSongListGet.coverImgUrl + '?thumbnail=400x0&quality=10&type=webp'" alt="">
      </div>
      <div class="detail-mes">
        <div class="detail-mes-img" v-if="collectionSongListGet.coverImgUrl">
          <img v-lazy="collectionSongListGet.coverImgUrl + '?param=100*100&quality=10&type=webp'">
        </div>
        <div class="detail-mes-text">
          <h4>{{collectionSongListGet.name}}</h4>
          <span v-if="collectionSongListGet.playCount">shares: {{collectionSongListGet.playCount | changeNum}}</span>
          <p v-if="collectionSongListGet.description">description: {{collectionSongListGet.description}}</p>
        </div>
      </div>
    </div>
    <div class="detail-bot" v-if="collectionSongListGet.tracks">
      <div class="detail-all">
        <span>歌曲列表</span>
      </div>
      <ListCell :isPop=false :collectionSongListGet="collectionSongListGet.tracks"></ListCell>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import ListCell from './common/ListCell'
export default {
  name: 'Detail',
  components: {ListCell},
  computed: {
    ...mapGetters(['collectionSongListGet'])
  },
  methods: {
    ...mapMutations(['GET_COLLECTION_SONG_LIST_CLEAR']),
    ...mapActions(['collectionSongListMethod']),
    routerBack(){
      if(window.history.length <= 1){
        this.$router.push({path: '/'})
        return false
      }else{
        this.$router.go(-1)
      }
    }
  },
  created(){
    this.collectionSongListMethod({id: this.$route.params.id})
  },
  destroyed(){
    //后退时组件数据不清空导致下次加载有原始数据，组件销毁时清空列报
    this.$store.commit('GET_COLLECTION_SONG_LIST_CLEAR')
  }
}
</script>

<style lang="scss" src="../../static/detail.scss"></style>
