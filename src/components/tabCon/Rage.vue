<template>
  <div class="rage">
    <Banner></Banner>
    <div class="singList" v-if="singListGet">
      <div class="title singTitle">
        <h5>推荐音乐</h5>
        <span>更多&gt;</span>
      </div>
      <div class="signListCon">
        <Item v-for="item in singListGet" :key="item.id" :item="item"></Item>
      </div>
    </div>

    <div class="singList" v-if="mvListGet">
      <div class="title singTitle">
        <h5>推荐MV</h5>
        <span>更多&gt;</span>
      </div>
      <div class="signListCon mvListCon">
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
      ...mapGetters(['singListGet', 'mvListGet'])
    },
    methods: {
      ...mapActions(['singListMethod', 'mvListMethod'])
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
.mvListCon{
  .item{
    width: 3.4rem;
  }
}
</style>

