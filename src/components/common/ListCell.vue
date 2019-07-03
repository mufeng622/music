<template>
  <div class="list-cell" v-if="collectionSongListGet">
    <van-list>
      <van-cell class='songList-item' :class="detailIdGet == item.id ? 'detailItemCur' : ''" v-for="(item, idx) in collectionSongListGet" :key="item.id" :id="item.id" @click="songsListChangeSong(item.id, idx)">
        <span>{{idx}}</span>
        <div>
          <h5>{{item.name}}</h5>
          <h6 v-if="item.artists">{{item.artists[0].name}}</h6>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {List, Cell} from 'vant'
export default {
  name: 'ListCell',
  props: ['collectionSongListGet', 'songsListHideChild', 'isPop'],
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  computed: {
    ...mapGetters(['detailIdGet', 'isShowAudioGet'])
  },
  methods: {
    ...mapMutations(['GET_SONG_INDEX', 'GET_DETAIL_ID', 'GET_SONG_IS_PLAY']),
    ...mapActions(['songNowMesMethod', 'songNowUrlMethod', 'isShowAudioMethod']),
    //播放列表点击切换歌曲
    songsListChangeSong(id, idx){
      //显示音频播放
      if(!this.isShowAudioGet){
        this.isShowAudioMethod();
      }
      //选某一个歌曲时修改位置编号
      this.$store.commit('GET_SONG_INDEX', idx)
      //点击某一个歌曲修改id
      this.$store.commit('GET_DETAIL_ID', id)
      //点击某一个歌曲修改歌曲信息
      this.songNowMesMethod({id: id})
      //重新请求歌曲url
      this.songNowUrlMethod({id: id}).then((url)=> {
        if (!url) {
          alert('歌曲不存在')
        }
      })
      this.$store.commit('GET_SONG_IS_PLAY')
      if(this.isPop){
        this.$emit('songsListHideChild')
      }
    }
  }
}
</script>
