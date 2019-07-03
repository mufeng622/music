import getDate from '@/api/getDate'
import store from "./index";

const actions = {
  //banner
  // bannerListMethod({commit}){
  //   getDate.getBannerList(
  //   (res)=>{
  //     commit('GET_BANNER_LIST', res.banners)
  //   }, (err) => {
  //     console.log(err)
  //   })
  // },
  //推荐歌单
  singListMethod({commit}){
    getDate.getSingList({
      cat: '全部',
      pageSize: 10
    }, (res)=>{
        commit('GET_SING_LIST', res.data)
        //banner没有借口，取歌曲图片
        commit('GET_BANNER_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },
  //mv歌单
  mvListMethod({commit}){
    getDate.getMvList({
      pageSize: 10,
      page: 0
    }, (res)=>{
      commit('GET_MV_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },
  //歌单
  collectionListMethod({commit}, param){
    return new Promise((resolve, reject)=> {
      getDate.getSongList({
        cat: '全部',
        page: param.page,
        pageSize: param.pageSize
      }, (res) => {
        commit('GET_COLLECTION_LIST', res.data)
        resolve(res.total)
      }, (err) => {
        console.log(err)
        reject()
      })
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
  singerListMethod({commit}, param){
    return new Promise((resolve, reject)=>{
      getDate.getSingerList({
        page: param.page,
        pageSize: param.pageSize
      }, (res)=>{
        commit('GET_SINGER_LIST', res.data)
        resolve()
      }, (err)=>{
        console.log(err)
        reject(err)
      })
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
  //当前歌曲信息
  songNowMesMethod({commit}, param){
    return new Promise((resolve, reject)=>{
      getDate.getSongNowMesUrl({
        id: param.id
      }, (res)=>{
        commit('GET_SONG_NOW_MES', res.data.songs[0])
        commit('GET_DETAIL_ID', res.data.songs[0].id)
        resolve(res.data.songs[0])
      }, (err)=>{
        console.log(err)
        reject(err)
      })
    })
  },
  //当前歌曲url
  songNowUrlMethod({commit}, param){
    return new Promise((resolve,reject)=>{
      getDate.getSongNowUrl({
        id: param.id,
        quality: 'flac',
        isRedirect: 0
      }, (res)=>{
        if(res.data){
          commit('GET_SONG_NOW', res.data)
        }else{
          alert('当前歌曲不存在')
        }
        resolve(res.data)
      }, (err) => {
        console.log(err)
        reject()
      })
    })
  },
  //专辑信息
  collectionSongListMethod({commit}, param){
    getDate.getCollection({
      id: param.id
    }, (res)=>{
      commit('GET_COLLECTION_SONG_LIST', res.data)
    }, (err)=>{
      console.log(err)
    })
  },
  //搜索列表
  searchListMethod({commit}, param){
    return new Promise((resolve, reject)=>{
      getDate.getSearchList({
        keyword: param.key,
        type: 'song',
        pageSize: 20,
        page: 0
      }, (res)=>{
        commit('GET_SEARCH_LIST', res.data.songs)
        resolve()
      }, (err) => {
        console.log(err)
        reject()
      })
    })
  }
}

export default actions
