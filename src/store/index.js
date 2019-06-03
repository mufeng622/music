
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  //推荐歌单
  singList: [],
  //推荐MV
  mvList: [],
  //歌单
  collectionList: [],
  //排行榜
  rankList: [],
  //歌手排行榜
  singerList: [],
  //是否显示音乐播放器
  isShowAudio: false,
  //正在播放歌曲
  songNow: '',
  songNowList: [],
  songNowIdx: 0,
  //正在播放歌曲加样式
  detailId: '',
  //专辑详情
  collectionSongList: {}
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

