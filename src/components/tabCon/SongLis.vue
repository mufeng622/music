<template>
  <div class="songs" v-if="collectionListGet">
    <Song v-for="item in collectionListGet" :key="item.id" :item="item"></Song>
    <div class="more-box" v-if="isShowBot">
      <p class="more" v-if="isLoading">加载更多</p>
      <p class="more" v-else>没有更多了</p>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Song from '../common/Song'
  import isScrollBot from '../../common/isScrooBot'
  export default {
    name: 'SongLis',
    data(){
      return {
        isShowBot: false,
        isLoading: true,
        isMore: true,
        pageSize: 10,
        page: 0
      }
    },
    components: {Song},
    computed: {
      ...mapGetters(['collectionListGet'])
    },
    created(){
        this.collectionListMethod({pageSize: this.pageSize, page: this.page})
    },
    mounted(){
      window.addEventListener('scroll', this.isScrollBot)
    },
    methods: {
      ...mapActions(['collectionListMethod']),
      //加载更多
      isAddMore(){
          this.collectionListMethod({pageSize: this.pageSize, page: this.page}).then((len)=>{
            if(this.collectionListGet.length == len){
              this.isLoading = false
            }
            this.isMore = true
          }).catch((err)=>{
            console.log(err)
          })
      },
      //滚动事件触发时才会加载更多
      isScrollBot(){
        if(isScrollBot.isScrollBottom()){
          this.isShowBot = true
          if(this.isMore && this.isLoading){
            this.isMore = false
            this.page += 10
            this.isAddMore()
          }
        }
      }
    },
    //keep-alive钩子函数，组件恢复时触发
    activated(){
      window.addEventListener('scroll', this.isScrollBot)
    },
    //keep-alive钩子函数，组件变为不可用时触发
    deactivated(){
      window.removeEventListener('scroll', this.isScrollBot)
    }
  }
</script>

<style lang="scss" scoped>
.songs{
  padding: 0 .2rem;
}
</style>

