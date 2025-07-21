<template>
  <div>
 <button @click="count++">{{ count }}</button>
<p>Props computed {{ countPlus }}</p>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
// dùng props để truyền giá trị mặt định
const props = defineProps({
  init:Number
})
const count = ref(props.init)

const countPlus = computed(()=> props.init + 10)
</script>

<style lang="scss" scoped>

</style>
