<script setup>
import {ref} from 'vue'
import vForInObject from './Component/v-for-in-object.vue'
const list=ref([
  {
    name:'apple',
    price:1000
  },
  {
    name:'orange',
    price:1000
  },
  {
    name:'cocomelong',
    price:1000
  },
  {
    name:'banana',
    price:1000
  }
])

</script>

<template>
 <div>
  <ul> <li v-for="(item,index) in list" :key="item" >
     <p>{{ index }}</p>
      <p>name:{{ item.name }}</p>
      <span>giá:{{ item.price }}</span>
  </li></ul>
 </div>
<div>
  <vForInObject/>
</div>

</template>

<style scoped>

</style>
