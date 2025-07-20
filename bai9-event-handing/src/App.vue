<script setup>
import {ref,reactive} from 'vue'
const sayhi1 =()=>{
  alert("say hi 1")
}
const sayhi2=()=>{
  alert("say hi 2")
}
const submit=()=>{
alert("Bạn đã submit thành công")
}
</script>

<template>
 <div>
  <h1>Event handling</h1>
  <button @click.self="sayhi1" >
    <button @click.self="sayhi2">
      say hi 2
    </button>
    say hi 1
  </button>
 </div>
 <div>
  <h1>Event handling stop</h1>
  <button @click="sayhi1" >
    <button @click.stop="sayhi2">
      say hi 2
    </button>
    say hi 1
  </button>
 </div>
<div>
<h1>có thể kết họp các đối số</h1>
<h1>Event handling prevent</h1>
<h1>Key modifer</h1>
<form @submit="submit">
  <input @keyup.enter="submit" type="text">
<button type="submit">submit</button>

</form>
</div>
<div>

</div>

</template>

<style scoped>

</style>
