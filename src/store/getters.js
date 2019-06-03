
const getters = {
  singListGet: (state)=> state.singList.slice(0, 9),
  mvListGet: (state)=> state.mvList,
  collectionListGet: (state)=> state.collectionList,
  rankListGet: (state) => state.rankList,
  singerListGet: (state) => state.singerList,
  isShowAudioGet: (state) => state.isShowAudio,
  songNowGet: (state) => state.songNow,
  songNowListGet: (state) => state.songNowList,
  detailIdGet: (state) => state.detailId,
  songNowIdx: (state) => state.songNowIdx,

  collectionSongListGet: (state) => state.collectionSongList
}

export default getters
