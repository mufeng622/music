<template>
  <div class="audios" v-if="isShowAudioGet">
    <div class="audios-box">
      <audio ref="audioMusic" :src="songNowGet" @timeupdate="updateTime" @canplay="durationTime" loop="loop"></audio>
    </div>
    <div class="audio-show">
      <div class="audio-mes" v-if="songNowListGet[songNowIdx]">
        <div class="audio-mes-img" v-if="songNowListGet[songNowIdx].al">
          <img v-lazy="songNowListGet[songNowIdx].al.picUrl + '?thumbnail=20x0&quality=30&type=webp'">
        </div>
        <div class="audio-mes-text">
          <span>{{songNowListGet[songNowIdx].name}}</span>
          <i v-if="songNowListGet[songNowIdx].ar && songNowListGet[songNowIdx].al">{{songNowListGet[songNowIdx].ar[0].name}} - {{songNowListGet[songNowIdx].al.name}}</i>
        </div>
      </div>
      <div class="audio-btn">
        <span class="audio-list" @click="songsListShowChild"></span>
        <span class="audio-play" :class="isPlay ? 'audio-stop' : 'audio-start'" @click="audioIsPlay"></span>
        <span class="audio-next"></span>
      </div>
    </div>
    <div class="audioLine">
      <span ref="line" :style="{width: lineWidth}"></span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Audios',
  data(){
    return {
      //是否播放音乐
      isPlay: false,
      //播放时间
      musicCurrentTime: 0,
      //音乐总时间
      musicDurationTime: 0,
      //播放进度条
      lineWidth: 0
    }
  },
  props: ['songsListShow'],
  computed: {
    ...mapGetters(['songNowGet', 'isShowAudioGet', 'songNowListGet', 'songNowIdx'])
  },
  methods: {
    //音乐播放暂停
    audioIsPlay(){
      console.log(this.songNowListGet[this.songNowIdx])
      if(this.isPlay){
        this.isPlay = false
        this.$refs.audioMusic.pause()
      }else{
        this.isPlay = true
        this.$refs.audioMusic.play()
      }
    },
    //获取播放时间
    updateTime(){
      this.musicCurrentTime = this.$refs.audioMusic.currentTime
    },
    //获取音频总时长
    durationTime(){
      this.musicDurationTime = this.$refs.audioMusic.duration
    },
    //是否显示播放列表
    songsListShowChild(){
      this.$emit('songsListShow')
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
