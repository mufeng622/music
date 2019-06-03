<template>
  <div class="hotItem">
    <div class="hotImg">
      <img v-lazy="item.picUrl + '?thumbnail=200x0&quality=30&type=webp'">
    </div>
    <span>{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'HotItem',
  props: ['item']
}
</script>

<style lang="scss" src="../../../static/item.scss"></style>
