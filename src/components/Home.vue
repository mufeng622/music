<template>
  <div :class="isShowAudioGet ? 'bigbox-pad' : 'bigbox'">
    <Top v-if="!isShowTop"></Top>
    <Tabs v-if="!isShowTop"></Tabs>

    <div :class="isShowTop ? '' : 'mainCon'">
      <router-view/>
    </div>

    <Audios @songsListShow="songsListShow"></Audios>

    <Popups ref="popups" class="songList-popups">
      <h4>播放列表</h4>
      <van-list class="songList-box">
        <van-cell class='songList-item' :class="detailIdGet == item.id ? 'detailItemCur' : ''" v-for="(item, idx) in songNowListGet" :key="item.id" :id="item.id" @click="songsListChangeSong">
          <span>{{idx}}</span>
          <div>
            <h5>{{item.name}}</h5>
            <h6 v-if="item.ar">{{item.ar[0].name}}</h6>
          </div>
        </van-cell>
      </van-list>
    </Popups>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {List, Cell} from 'vant'
import Top from './common/Top';
import Tabs from './Tabs';
import Audios from './common/Audios';
import Popups from './common/Popups';
export default {
  name: 'Home',
  components: {
    Top,
    Tabs,
    Audios,
    Popups,
    [List.name]: List,
    [Cell.name]: Cell
  },
  computed: {
    ...mapGetters(['isShowAudioGet', 'songNowListGet', 'detailIdGet']),
    isShowTop(){
      let exp = /detail/
      return exp.test(this.$route.path)
    }
  },
  methods: {
    ...mapActions(['songNowMethod']),
    //显示播放列表
    songsListShow(){
      this.$refs.popups.isShowPop = true
    },
    //不播放列表点击切换歌曲
    songsListChangeSong(){
      this.songNowMethod();
      this.$refs.popups.isShowPop = false
    }
  }
}
</script>

<style lang="scss" scoped>
.mainCon{
  padding-top: 2rem;
}
.bigbox-pad{
  padding-bottom: 1.78rem;
}
.songList-popups{
  width: 100%;
  overflow: hidden;
  h4{
    font-size: .36rem;
    margin: .3rem 0 .3rem .2rem;
  }
}
.songList-box{
  border-top: 1px solid #ccc;
  height: 3.68rem;
  overflow-y: auto;
}
.songList-item .van-cell__value{
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  span{
    font-size: .36rem;
    align-self: center;
    margin-right: .4rem;
  }
  h5{
    font-size: .32rem;
  }
}
.detailItemCur{
  span, h5, h6{
    color: #e20;
  }
}
</style>

