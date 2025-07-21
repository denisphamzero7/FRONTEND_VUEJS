
<template>
  <div>
<button @click="callFuntionIncrease">increase</button>
<button @click="callFuntionIncreaseByTwoTimer">increaseByTwoTimes</button>

<button @click="callFuntionIncreaseBy">increaseBy</button>
  </div>
</template>

<script setup>
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
