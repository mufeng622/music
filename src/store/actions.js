import getDate from '@/api/getDate'

const actions = {
  //推荐歌单
  singListMethod({commit}){
    getDate.getSingList({
    }, (res)=>{
        commit('GET_SING_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },

  //mv歌单
  mvListMethod({commit}){
    getDate.getMvList({
    }, (res)=>{
      commit('GET_MV_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },

  //歌单
  collectionListMethod({commit}){
    getDate.getSongList({
    }, (res)=>{
      commit('GET_COLLECTION_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },

  //排行
  rankListMethod({commit}){
    getDate.getRankList({
    }, (res)=>{
      commit('GET_RANK_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },

  //歌手排行
  singerListMethod({commit}){
    getDate.getSingerList({
    }, (res)=>{
      commit('GET_SINGER_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },

  //显示音乐播放器
  isShowAudioMethod({commit}){
    commit('IS_SHOW_AUDIO', true)
  },
  //隐藏音乐播放器
  isHideAudioMethod({commit}){
    commit('IS_HID_AUDIO', false)
  },

  //当前歌曲
  songNowMethod({commit}){
    getDate.getSongNowList({
    }, (res)=>{
      commit('GET_SONG_NOW', res.data[0].url)
      commit('GET_DETAIL_ID', res.data[0].id)
    }, (err)=>{
      console.log(err)
    })
  },

  //当前歌曲信息
  songNowMesMethod({commit}){
    getDate.getSongMes({
    }, (res)=>{
      commit('GET_SONG_NOW_MES', res.data.songs)
    }, (err)=>{
      console.log(err)
    })
  },

  //专辑信息
  collectionSongListMethod({commit}){
    getDate.getCollection({
    }, (res)=>{
      commit('GET_COLLECTION_SONG_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },

}

export default actions
