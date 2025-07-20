<template>
  <h1>Template ref</h1>
  <h1>Ví dụ khi vào trang tự động focus tới ô tìm kiếm</h1>
  <input type="text" ref="inputRef" />
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
      ref="itemrefs"
      style="opacity: 0;"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const inputRef  = ref(null)
const list      = ref(['Item1', 'Item2', 'Item3'])
const itemrefs  = ref([])

onMounted(() => {
  // focus ô input
  inputRef.value.focus()

  // thiết lập transition và bật opacity cho mỗi <li>
  itemrefs.value.forEach(item => {
    item.style.transition = 'opacity 5s'
    item.style.opacity    = '1'
  })
})
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 8px 0;
}
</style>
