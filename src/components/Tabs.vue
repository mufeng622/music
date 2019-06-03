<template>
  <div class="main-tabs">
    <ul class="tabs">
      <router-link to="/rage" tag="li">时下流行</router-link>
      <router-link to="/songLis" tag="li">专辑歌单</router-link>
      <router-link to="/rank" tag="li">排行榜</router-link>
      <router-link to="/hot" tag="li">热门歌手</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Tabs'
  }
</script>

<style lang="scss" scoped>
.main-tabs{
  width: 100%;
  position: fixed;
  top: 1.16rem;
  z-index: 100;
  background: #fff;
}
.tabs{
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  -webkit-align-items: center;
  align-items: center;
  font-size: .28rem;
  li{
    padding: .2rem 0;
    color: #333;
    border-bottom: .04rem solid #fff;
  }
  li.router-link-exact-active{
    color: #e20;
    border-bottom: .04rem solid #e20;
  }
}
</style>
