<template>
  <div class="hot">
    <HotItem v-for="item in singerListGet" :key="item.id" :id="item.id" :item="item"></HotItem>
    <div class="more-box" v-if="isShowBot">
      <p class="more" v-if="isLoading">加载更多</p>
      <p class="more" v-else>没有更多了</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import HotItem from '../common/HotItem'
  import isScrollBot from '../../common/isScrooBot'
  export default {
    name: 'Hot',
    data(){
      return {
        page: 0,
        pageSize: 18,
        isMore: true,
        isLoading: true,
        isShowBot: false
      }
    },
    components: {HotItem},
    computed: {
      ...mapGetters(['singerListGet'])
    },
    methods: {
      ...mapActions(['singerListMethod']),
      addMoreList(){
        this.singerListMethod({page: this.page, pageSize: this.pageSize}).then(()=>{
          if(this.singerListGet.length === 72){
            this.isLoading = false
          }
          this.isMore = true
        }).catch((err)=>{
          console.log(err)
        })
      },
      isScrollBot(){
        if(isScrollBot.isScrollBottom()){
          this.isShowBot = true
          if(this.isMore && this.isLoading){
            this.isMore = false
            this.pageSize += 18
            this.addMoreList()
          }
        }
      }
    },
    created(){
      this.singerListMethod({page: this.page, pageSize: this.pageSize})
    },
    mounted(){
      window.addEventListener('scroll', this.isScrollBot)
    },
    destroyed(){
      window.removeEventListener('scroll', this.isScrollBot)
    }
  }
</script>

<style lang="scss" scoped>
.hot{
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
