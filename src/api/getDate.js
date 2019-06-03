
import oGet from './axios';

//最新列表
let newListUrl = '/static/mock/newList.json';
let newMvListUrl = '/static/mock/mvList.json';
let newSongListUrl = '/static/mock/songList.json';
let newRankListUrl = '/static/mock/rankList.json';
let newSingerListUrl = '/static/mock/singerList.json';
let getSongUrl = '/static/mock/song.json';
let getSongMesUrl = '/static/mock/songMes.json';
let getCollectionUrl = '/static/mock/collection.json';

export default {
  getSingList(params, cb, cbErr){
    oGet.send({
      url: newListUrl,
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
      url: newMvListUrl,
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
      url: newSongListUrl,
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
      url: newRankListUrl,
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
      url: newSingerListUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },

  getSongNowList(params, cb, cbErr){
    oGet.send({
      url: getSongUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },
  getSongMes(params, cb, cbErr){
    oGet.send({
      url: getSongMesUrl,
      params: params,
      success: function(data){
        cb(data)
      },
      error: function(err){
        cbErr(err)
      }
    })
  },

  getCollection(params, cb, cbErr){
    oGet.send({
      url: getCollectionUrl,
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

