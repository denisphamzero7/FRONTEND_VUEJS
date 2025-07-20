<template>
 <h1>watcher</h1>
 <button @click="increment">increment</button>
 <p>{{ x }}-{{ y }}</p>

 <h1>wacher object</h1>
 <button @click="changeage">age</button>
</template>
<script setup>
import { reactive, ref,watch, watchEffect } from 'vue';
const x =ref(0);
const y =ref(0)
const user= reactive({
age:18,
class:{
  students:0,
  name:'A'
}
})
watch(()=>x.value + y.value,async(sum)=>{
console.log(`Tổng của x và y là:${sum}`);
})
watch([x,()=>y.value + 1],([newx,newy])=>{
console.log(`Cập nhất giá trị x và y là:${newx}, ${newy}`);
})
watchEffect(()=>{
  console.log(`User"${JSON.stringify(user)}`);
})
// getter funtion
watch(() => user.age, (newAge) => {
  console.log(`age là: ${newAge}`);
},{deep:true,immediate:true});

watch(user,()=>{
  console.log(`User:${JSON.stringify(user)}`);
})
const changeage = ()=>{
  user.class.students++
}
const increment =()=>{
x.value++;
y.value++
}

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
