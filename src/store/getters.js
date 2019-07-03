
const getters = {
  bannerListGet: (state) => state.bannerList.slice(0, 5),
  singListGet: (state)=> state.singList.slice(0, 9),
  mvListGet: (state)=> state.mvList,
  collectionListGet: (state)=> state.collectionList,
  rankListGet: (state) => state.rankList,
  singerListGet: (state) => state.singerList,
  isShowAudioGet: (state) => state.isShowAudio,
  songNowGet: (state) => state.songNow,
  songNowMesGet: (state) => state.songNowMes,

  songNowListGet: (state) => state.songNowList,
  songIndexGet: (state) => state.songIndex,
  detailIdGet: (state) => state.detailId,

  collectionSongListGet: (state) => state.collectionSongList,
  isPlayGet: (state)=> state.isPlay,
  isLoadingGet: (state) => state.isLoading,
  isErrorGet: (state) => state.isError,
  searchListGet: (state) => state.searchList
}

export default getters
