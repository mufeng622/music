<template>
  <div class="hot">
    <HotItem v-for="item in singerListGet" :key="item.id" :item="item"></HotItem>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import HotItem from '../common/HotItem'
  export default {
    name: 'Hot',
    components: {HotItem},
    computed: {
      ...mapGetters(['singerListGet'])
    },
    methods: {
      ...mapActions(['singerListMethod'])
    },
    created(){
      this.singerListMethod()
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
