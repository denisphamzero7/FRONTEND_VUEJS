<script setup>
import {ref,reactive} from 'vue'

const Todos=reactive([
  {
    id:1,
    text:'đi học'
  },
  {
    id:2,
    text:'đi học'
  },
  {
    id:3,
    text:'đi học'
  }
])
const newtodo = ref('')
const addtodo = ()=>{
  if(newtodo.value.trim()==='') return
  const todo = {
    id: Todos.length +1,
    text: newtodo.value
  }
  Todos.push(todo)
}
const deletetodo= (id)=>{
const index = Todos.findIndex(item=>item.id===id)
if(index!==1){
  Todos.splice(index,1)
}
}
// const editodo=(id)
// const updatetodo=(id,value)=>{
//   const index = todos
// }

</script>

<template>
 <div>
  <input type="text" v-model="newtodo" @keyup.enter="addtodo">
  <button @click="addtodo">add todo</button>
  <ul> <li v-for="item in Todos" :key="item.id">
    <p>công việc </p>  {{ item.text }}
    <button @click="deletetodo(item.id)" >delete-todo</button>
    <!-- <button @click="editodo(item.id)">edit</button>
    <button @click="updatetodo(item.id,)">update</button> -->
  </li></ul>
 </div>
<div>

</div>

</template>

<style scoped>

</style>
