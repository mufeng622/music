<template>
  <div class="audios" v-if="isShowAudioGet">
    <div class="audios-box">
      <audio ref="audioMusic" :src="songNowGet" @timeupdate="updateTime" @canplay="durationTime" @ended="nextSong" autoplay></audio>
    </div>
    <div class="audio-show">
      <div class="audio-mes">
        <div class="audio-mes-img" v-if="songNowMesGet.al">
          <img :src="songNowMesGet.al.picUrl + '?thumbnail=20x0&quality=30&type=webp'">
        </div>
        <div class="audio-mes-text">
          <span>{{songNowMesGet.name}}</span>
          <i v-if="songNowMesGet.ar && songNowMesGet.al">{{songNowMesGet.ar[0].name}} - {{songNowMesGet.al.name}}</i>
        </div>
      </div>
      <div class="audio-btn">
        <span class="audio-list" @click="songsListShowChild"></span>
        <span class="audio-play" :class="isPlayGet ? 'audio-stop' : 'audio-start'" @click="audioIsPlay"></span>
        <span class="audio-next" @click="nextSong"></span>
      </div>
    </div>
    <div class="audioLine">
      <span ref="line" :style="{width: lineWidth}"></span>
    </div>

    <Popups ref="popups" class="songList-popups">
      <h4>播放列表</h4>
      <ListCell :isPop=true :collectionSongListGet="songNowListGet" @songsListHideChild="songsListHideChild"></ListCell>
    </Popups>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import Popups from './Popups';
import ListCell from './ListCell'
export default {
  name: 'Audios',
  data(){
    return {
      //播放时间
      musicCurrentTime: 0,
      //音乐总时间
      musicDurationTime: 0,
      //播放进度条
      lineWidth: 0
    }
  },
  components: {
    Popups,
    ListCell
  },
  computed: {
    ...mapGetters(['songNowGet', 'isShowAudioGet', 'songNowListGet', 'songIndexGet', 'songNowMesGet', 'detailIdGet', 'isPlayGet'])
  },
  methods: {
    ...mapMutations(['GET_SONG_INDEX', 'GET_DETAIL_ID', 'GET_SONG_IS_PLAY', 'GET_SONG_IS_PAUSE']),
    ...mapActions(['songNowMesMethod', 'songNowUrlMethod']),
    //音乐播放暂停
    audioIsPlay(){
      if(this.isPlayGet){
        this.$store.commit('GET_SONG_IS_PAUSE')
        this.$refs.audioMusic.pause()
      }else{
        this.$store.commit('GET_SONG_IS_PLAY')
        this.$refs.audioMusic.play()
      }
    },
    //下一曲
    nextSong(){
      this.$store.commit('GET_SONG_IS_PLAY')
      //点击下一曲修改位置编号
      this.$store.commit('GET_SONG_INDEX', this.songIndexGet+1)
      //点击下一曲修改歌曲id
      this.$store.commit('GET_DETAIL_ID', this.songNowListGet[this.songIndexGet].id)
      //点击下一曲修改当前歌曲信息
      this.songNowMesMethod({id: this.detailIdGet})
      //重新请求歌曲url
      this.songNowUrlMethod({id: this.detailIdGet}).then((url)=> {
        if (!url) {
          this.nextSong()
        }
      })
    },
    //获取播放时间
    updateTime(){
      this.musicCurrentTime = this.$refs.audioMusic.currentTime
    },
    //获取音频总时长
    durationTime(){
      this.musicDurationTime = this.$refs.audioMusic.duration
    },
    //显示播放列表
    songsListShowChild(){
      this.$refs.popups.isShowPop = true
    },
    //隐藏播放列表
    songsListHideChild(){
      this.$refs.popups.isShowPop = false
    }
  },
  watch: {
    //监听音乐播放时间的变化，更新宽度值并赋值给进度条
    'musicCurrentTime': function(newVal){
      let winWidth = document.documentElement.clientWidth;
      if(newVal){
        this.lineWidth = parseInt((newVal * winWidth)/this.musicDurationTime)
        this.$refs.line.style.width = this.lineWidth/50 + 'rem'
      }
    }
  }
}
</script>

<style lang="scss" src="../../../static/audio.scss"></style>
