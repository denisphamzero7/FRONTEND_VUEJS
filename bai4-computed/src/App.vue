<script setup>

const message = 'hello world'
const rawhtml ='<div><h1>Title</h1> <span style="color:red"> đây là đỏ </span></div>'
const buttonId="button-id"
const isButtondisable= false
const objectOfAtts={
  id:'container',
  class:'wrapper',
  style:{
    color:'blue'
  }
}
const number= 1
const liststring='a,b,c,d,e,f'
const convertToId =(data)=> data.split(',').join('-')
// sử dụng ref để khai báo trạng thái
import { ref,reactive, nextTick } from 'vue'
import computed from './Component/computed.vue'
import Bindingclass from './Component/Bindingclass.vue'
const count = ref(1)
const Descresease = async()=> {
  count.value--
  console.log(document.getElementById('count').innerText);
  await nextTick() 
  console.log(document.getElementById('count').innerText);
}
// sử dụng ref trong Object, array
const object= ref({
  number:2,
  user:{
    age:18,
    name:'hau'
  },
  array:[1,2,3]
})
// reactive
const object1= reactive({
  number:2,
  user:{
    age:18,
    name:'hau'
  },
  array:[1,2,3]
})
const change = ()=>{
  object.value.number++
  object.value.user.age++
  object.value.array.push(5)
}
// sử dụng reactive trong object
const changeReactive = ()=>{
  object1.number++
  object1.user.age++
  object1.array.push(5)
}
</script>

<template>
  
  <h1>syntax</h1>
  <p>message:{{ message }}</p>
<div><h1>User</h1>
  <p>Name :{{ object.user.name }}</p>
  <p>Age :{{ object.user.age }}</p>
  <p>Array{{ object.array }}</p>

</div>
<div><h1>User reactive</h1>
  <p>Name :{{ object1.user.name }}</p>
  <p>Age :{{ object1.user.age }}</p>
  <p>Array{{ object1.array }}</p>

</div>
 
  
  <span v-html="rawhtml"></span>
  <button :id="buttonId" :disabled="isButtondisable">{{ isButtondisable ? 'disabled':'click here' }}</button>
  <button v-bind="objectOfAtts">click ???</button>
  <button :id="liststring.split(',').join('-')">Number:{{ number*2 }}</button>
  <span>{{ convertToId(liststring) }}</span>


<h1>Sử dụng ref</h1>
<span id="count">{{ count }}</span>
<button @click="count++">Incresease</button>
<button @click="Descresease" >Descresease</button>

<button @click="change">Change number</button>
<button @click="changeReactive">Change number reactive</button>
<p>{{ object.number }}</p>

<div>
  <h1>computed</h1>
  <computed/>
</div>
<div><h1>Binding class</h1>
  <Bindingclass/>
</div>

</template>

<style scoped>

</style>
