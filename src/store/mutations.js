
const mutations = {
  //banner
  GET_BANNER_LIST(state, val){
    state.bannerList = val
  },
  //推荐歌单
  GET_SING_LIST(state, val){
    state.singList = val
  },
  //推荐MV
  GET_MV_LIST(state, val){
    state.mvList = val
  },
  //歌单
  GET_COLLECTION_LIST(state, val) {
    state.collectionList = state.collectionList.concat(val)
  },
  //排行榜
  GET_RANK_LIST(state, val){
    state.rankList = val
  },
  //歌手排行榜
  GET_SINGER_LIST(state, val){
    state.singerList = [].concat(val)
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
  //获取当前播放歌曲信息
  GET_SONG_NOW_MES(state, val){
    state.songNowMes = val
  },
  //获取当前歌曲id
  GET_DETAIL_ID(state, val){
    state.detailId = val
  },
  //获取当前歌曲index
  GET_SONG_INDEX(state, val){
    state.songIndex = val
  },

  //专辑歌曲列表及播放列表信息
  GET_COLLECTION_SONG_LIST(state, val){
    state.collectionSongList = val
    state.songNowList = val.tracks
  },
  //单曲点击增加到播放列表
  GET_SONG_NOW_LIST_ADD(state, val){
    state.songNowList.splice(state.songIndex, 0, val)
    if(!state.songNowList.length){
      state.songIndex += 1
    }
  },
  //退出单曲列表时位置重置为-1，-1是因为进去点击下一曲可以播放第一首歌
  GET_RESET_SONG_INDEX(state){
    state.songIndex = -1
  },
  //清空列表数据
  GET_COLLECTION_SONG_LIST_CLEAR(state){
    state.collectionSongList = []
  },

  //loading显示和隐藏
  GET_IS_SHOW_LOADING(state){
    state.isLoading = true
  },
  GET_IS_HIDE_LOADING(state){
    state.isLoading = false
  },
  //error显示和隐藏
  GET_IS_SHOW_ERROR(state){
    state.isError = true
  },
  GET_IS_HIDE_ERROR(state){
    state.isError = false
  },
  //是否播放音乐
  GET_SONG_IS_PLAY(state){
    state.isPlay = true
  },
  GET_SONG_IS_PAUSE(state){
    state.isPlay = false
  },

  //搜索列表
  GET_SEARCH_LIST(state, val){
    state.searchList = val
  },
  GET_SEARCH_LIST_CLEAR(state){
    state.searchList = []
  }
}

export default mutations
