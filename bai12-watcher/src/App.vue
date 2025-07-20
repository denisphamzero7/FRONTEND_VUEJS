<template>
 <h1>watcher</h1>
 <p>Hỏi 1 câu hỏi có thể trả lời câu hỏi yes hoặc no</p>
 <input v-model="question" type="text" name="" id="" :disabled="isloading">
 <p>{{ answer }}</p>
</template>
<script setup>
import { ref,watch } from 'vue';
const question = ref("")
const isloading = ref(false)
const answer= ref("")
watch(question,async(newquestion,oldquestion)=>{
if(newquestion.includes('?')){
  isloading.value = true
  answer.value="Đang suy nghĩ"
  try {
    const response = await fetch('https://yesno.wtf/api')
    answer.value= (await response.json()).answer;
  } catch (error) {
    answer.value="không thể call api"
  }
  finally{
    isloading.value =false
  }
}
});

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
