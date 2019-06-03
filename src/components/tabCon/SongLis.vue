<template>
  <div class="songs">
    <Song v-for="item in collectionListGet" :key="item.id" :item="item"></Song>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Song from '../common/Song'
  export default {
    name: 'SongLis',
    components: {Song},
    computed: {
      ...mapGetters(['collectionListGet'])
    },
    created(){
      this.collectionListMethod()
    },
    methods: {
      ...mapActions(['collectionListMethod'])
    }
  }
</script>

<style lang="scss" scoped>
.songs{
  padding: 0 .2rem;
}
</style>

