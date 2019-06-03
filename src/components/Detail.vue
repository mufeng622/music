<template>
  <div class="detail">
    <div v-if="collectionSongListGet.album" class="detail-top">
      <div class="detail-top-bg">
        <img v-lazy="collectionSongListGet.album.artist.picUrl + '?thumbnail=400x0&quality=10&type=webp'" alt="">
      </div>
      <div class="detail-title">
        <span @click="routerBack"></span>
        <strong>专辑详情</strong>
      </div>
      <div class="detail-mes">
        <div class="detail-mes-img">
          <img v-lazy="collectionSongListGet.album.picUrl + '?thumbnail=400x0&quality=10&type=webp'">
        </div>
        <div class="detail-mes-text">
          <h4>{{collectionSongListGet.album.name}}</h4>
          <span>shares: {{collectionSongListGet.album.info.shareCount | changeNum}}</span>
          <p>description: {{collectionSongListGet.album.description}}</p>
        </div>
      </div>
    </div>
    <div class="detail-bot" v-if="collectionSongListGet.songs">
      <div class="detail-all">
        <span>播放全部</span>
      </div>
      <van-list>
        <van-cell class='detail-item' :class="detailIdGet == item.id ? 'detailItemCur' : ''" v-for="(item, idx) in collectionSongListGet.songs" :key="item.id" :id="item.id" @click="musicListenMethod(item.id)">
          <span>{{idx}}</span>
          <div>
            <h5>{{item.name}}</h5>
            <h6>{{item.ar[0].name}}</h6>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {List, Cell} from 'vant'
export default {
  name: 'Detail',
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  data(){
    return{
      //detailId: ''
    }
  },
  computed: {
    ...mapGetters(['collectionSongListGet', 'songNowListGet', 'detailIdGet'])
  },
  methods: {
    ...mapActions(['collectionSongListMethod', 'isShowAudioMethod', 'songNowMesMethod', 'songNowMethod']),
    routerBack(){
      if(window.history.length <= 1){
        this.$router.push({path: '/'})
        return false
      }else{
        this.$router.go(-1)
      }
    },
    musicListenMethod(id){
      var isSongHas = false;
      //显示音频播放
      this.isShowAudioMethod();
      //获取歌曲的地址
      this.songNowMethod();
      //获取单曲的信息
      this.songNowListGet.map((item)=>{
        if(item.id === id){
          isSongHas = true
        }
      })
      if(!isSongHas){
        this.songNowMesMethod()
      }
    }
  },
  created(){
    this.collectionSongListMethod()
  }
}
</script>

<style lang="scss" src="../../static/detail.scss"></style>
