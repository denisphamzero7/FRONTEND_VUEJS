<template>
  <div>
<p>locale:{{ locale }}</p>
  </div>
</template>

<script setup>
import {inject} from 'vue';
const locale =inject("locale")
// tương đương nhưng inject truyền dữ liệu thuật tiện hơn
// defineProps({
//   locale:String
// })
</script>

<style lang="scss" scoped>

</style>
