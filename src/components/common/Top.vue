<template>
  <div class="top">
    <h1>音乐</h1>
    <span></span>
  </div>
</template>

<script>
  export default {
    name: 'Top'
  }
</script>

<style lang="scss">
  .top{
    width: 100%;
    height: 1.16rem;
    background: #e20;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    h1{
      font-size: .48rem;
      color: #fff;
      margin-left: .2rem;
    }
    span{
      display: block;
      width: .48rem;
      height: .48rem;
      background: url("../../../static/images/search.png") no-repeat center;
      background-size: .48rem .48rem;
      margin-right: .2rem;
    }
  }
</style>

