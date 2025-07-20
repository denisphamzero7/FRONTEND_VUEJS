<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>Timer: {{ Timer }}</span>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const Timer = ref(0);
let intervalId =null

onMounted(()=>{
  console.log("on mounted");
  intervalId=setInterval(()=>{
    Timer.value++
  },1000)
})
onUnmounted(()=>{
  console.log("on Unmounted");
  clearInterval(intervalId)
})
</script>