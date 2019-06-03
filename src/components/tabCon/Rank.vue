<template>
  <div class="rank">
    <RankItem :rankListGet="rankListGet"></RankItem>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import RankItem from '../common/RankItem'
  export default {
    name: 'Rank',
    components: {RankItem},
    computed: {
      ...mapGetters(['rankListGet'])
    },
    methods: {
      ...mapActions(['rankListMethod'])
    },
    created(){
      this.rankListMethod()
    }
  }
</script>
