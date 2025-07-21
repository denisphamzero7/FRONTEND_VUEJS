
<template>
  <h1>dùng slot</h1>
  <h3>locale:{{ locale }}</h3>
  <div>
<button @click="callFuntionIncrease">
  <slot name="increase">increase</slot>
</button>
<button @click="callFuntionIncreaseByTwoTimer">
<slot name=" increaseByTwoTimes"> increaseByTwoTimes</slot></button>

<button @click="callFuntionIncreaseBy"><slot name="increaseBy">increaseBy</slot></button>
  </div>
</template>

<script setup>
import {inject} from 'vue'
const locale = inject("locale")
const emit = defineEmits(['increase','increaseByTwoTimes','increase-by'])
const callFuntionIncrease=()=>{
  emit("increase")
}
const callFuntionIncreaseByTwoTimer=()=>{
  emit("increaseByTwoTimes")
}
// truyền tham số
const callFuntionIncreaseBy=()=>{
  emit("increase-by",5)
}
</script>
