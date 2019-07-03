
import oGet from './axios';

const baseUrl = 'https://v1.itooi.cn/netease'
//最新列表
let bannerListUrl = '/banner';
let newListUrl = '/songList/highQuality';
let newMvListUrl = '/mv/top';
let newSongListUrl = '/songList/hot';

let newRankListUrl = '/song/newest';
let newSingerListUrl = '/artist/top';

let getSongMesUrl = '/song';
let getSongUrl = '/url';
let getCollectionUrl = '/songList';

let getSearchListUrl = '/search'


export default {
  // getBannerList(cb, cbErr){
  //   oGet.send({
  //     url: '/api' + bannerListUrl,
  //     success: function(data){
  //       cb(data)
  //     },
  //     error: function(err){
  //       cbErr(err)
  //     }
  //   })
  // },
  getSingList(params, cb, cbErr){
    oGet.send({
      url: baseUrl + newListUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },
  getMvList(params, cb, cbErr){
    oGet.send({
      url: baseUrl + newMvListUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },
  getSongList(params, cb, cbErr){
    oGet.send({
      url: baseUrl + newSongListUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },
  getRankList(params, cb, cbErr){
    oGet.send({
      url: baseUrl + newRankListUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },
  getSingerList(params, cb, cbErr){
    oGet.send({
      url: baseUrl + newSingerListUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },
  getSongNowMesUrl(params, cb, cbErr){
    oGet.send({
      url: baseUrl + getSongMesUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },
  getSongNowUrl(params, cb, errCb){
    oGet.send({
      url: baseUrl + getSongUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        errCb(err)
      }
    })
  },
  getCollection(params, cb, cbErr){
    oGet.send({
      url: baseUrl + getCollectionUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },
  getSearchList(params, cb, cbErr){
    oGet.send({
      url: baseUrl + getSearchListUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  }
}

