<template>
  <div class="rage">
    <Banner></Banner>
    <div class="singList">
      <div class="title singTitle">
        <h5>推荐音乐</h5>
        <span>更多&gt;</span>
      </div>
      <div class="signListCon">
        <Item @musicListen="musicListen(item.id)" v-for="item in singListGet" :key="item.id" :item="item"></Item>
      </div>
    </div>

    <div class="singList">
      <div class="title singTitle">
        <h5>推荐MV</h5>
        <span>更多&gt;</span>
      </div>
      <div class="signListCon">
        <ItemMv v-for="item in mvListGet" :key="item.id" :item="item"></ItemMv>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Banner from '../common/Banner'
  import Item from '../common/Item'
  import ItemMv from '../common/ItemMv'
  export default {
    name: 'Rage',
    components: {Banner, Item, ItemMv},
    computed: {
      ...mapGetters(['singListGet', 'mvListGet', 'songNowListGet'])
    },
    methods: {
      ...mapActions(['singListMethod', 'mvListMethod', 'isShowAudioMethod', 'songNowMethod', 'songNowMesMethod']),
      musicListen(id){
        var isSongHas = false;
        //显示音频播放
        this.isShowAudioMethod()
        //获取歌曲的地址
        this.songNowMethod();
        //获取单曲的信息
        this.songNowListGet.length > 0 && this.songNowListGet.map((item)=>{
          if(item.id === id){
            isSongHas = true
          }
        })
        if(!isSongHas){
          this.songNowMesMethod()
        }
      }
    },
    created() {
      this.singListMethod()
      this.mvListMethod()
    }
  }
</script>

<style lang="scss" scoped>
.title{
  padding: .2rem;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  h5{
    font-size: .32rem;
  }
  span{
    font-size: .24rem;
  }
}
.signListCon{
  padding: 0 .2rem;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  .item{
    width: 2.2rem;
  }
}
</style>

