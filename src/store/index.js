
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  //banner
  bannerList: [],
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
  //正在播放歌曲、信息、播放列表
  songNow: '',
  songNowMes: {},
  songNowList: [],
  songIndex: 0,
  //根据id给正在播放歌曲加样式
  detailId: '',
  //专辑详情
  collectionSongList: {},
  //是否播放音乐
  isPlay: true,
  isLoading: false,
  isError: false,
  //搜索列表
  searchList: []
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

