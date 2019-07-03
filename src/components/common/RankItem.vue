<template>
  <div class="rankItem">
    <van-list class="rankItemList">
      <van-cell v-for="(item, idx) in rankListGet" :key="item.id" :id="item.id" class="rankItemListChild" @click="rankSongListen(item.id, idx)">
        <div class="rankTitle">
          <span>{{idx+1}}</span>
          <strong>{{item.name}}</strong>
        </div>
        <p>
          <em>歌手：{{item.song.artists[0].name}}</em>
          <i>{{item.song.album.publishTime | timeFilter}}</i>
        </p>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import {List, Cell} from 'vant'
export default {
  name: 'RankItem',
  props: ['rankListGet'],
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  computed: {
    ...mapGetters(['songNowListGet'])
  },
  methods: {
    ...mapMutations(['GET_SONG_NOW_LIST_ADD', 'GET_RESET_SONG_INDEX', 'GET_SONG_IS_PLAY']),
    ...mapActions(['isShowAudioMethod', 'songNowUrlMethod', 'songNowMesMethod']),
    rankSongListen(id, idx){
      this.isShowAudioMethod()
      this.songNowUrlMethod({id: id})
      this.songNowMesMethod({id: id}).then((song)=>{
        let isHas = false;
        if(this.songNowListGet.length){
          this.songNowListGet.some((item)=>{
            if(item.id == id){
              isHas = true
            }
          })
        }
        if(!isHas){
          this.$store.commit('GET_SONG_NOW_LIST_ADD', song)
        }
      })
      this.$store.commit('GET_SONG_IS_PLAY')
    }
  },
  destroyed(){
    this.$store.commit('GET_RESET_SONG_INDEX')
  }
}
</script>

<style lang="scss" src="../../../static/item.scss"></style>
