
const mutations = {
  //推荐歌单
  GET_SING_LIST(state, val){
    state.singList = val
  },
  //推荐MV
  GET_MV_LIST(state, val){
    state.mvList = val
  },
  //歌单
  GET_COLLECTION_LIST(state, val){
    state.collectionList = val
  },
  //排行榜
  GET_RANK_LIST(state, val){
    state.rankList = val
  },
  //歌手排行榜
  GET_SINGER_LIST(state, val){
    state.singerList = val
  },

  //显示音乐播放器
  IS_SHOW_AUDIO(state, val){
    state.isShowAudio = val
  },
  //隐藏音乐播放器
  IS_HID_AUDIO(state, val){
    state.isShowAudio = val
  },
  //正在播放歌曲
  GET_SONG_NOW(state, val){
    state.songNow = val
  },
  //正在播放歌曲信息
  GET_SONG_NOW_MES(state, val){
    state.songNowList.splice(state.songNowIdx, 0, val[0])
    state.detailId = val[0].id
  },

  //专辑歌曲列表及播放列表信息
  GET_COLLECTION_SONG_LIST(state, val){
    state.collectionSongList = JSON.parse(JSON.stringify(val))
    state.songNowList = JSON.parse(JSON.stringify(val.songs))
  },
  //获取当前歌曲id
  GET_DETAIL_ID(state, val){
    state.detailId = val
  }
}

export default mutations
