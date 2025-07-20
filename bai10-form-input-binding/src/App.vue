<script setup>
import {ref} from 'vue'
const text = ref("");
const mutilinetext= ref("")
const checkedNames= ref([])
const radioNames= ref('')
const selectname = ref('')
const checked=ref()
</script>

<template>

<div>
  <h1>Form Input Binding</h1>
  <input type="text" v-model="text" >
  <p>{{ text }}</p>
  <p>mutilinetext :{{ mutilinetext }}</p>
  <textarea v-model="mutilinetext"></textarea>
  <div>
    <h1>V-model với checkbox, radio, select</h1>
    <p>checkbox1 :{{ checked }}</p>
    <input v-model=checked type="checkbox" true-value="yes" false-value="no"  >
  
    <p>checkbox:{{ checkedNames }}</p>
    <input id="a"v-model=checkedNames type="checkbox" value="A">
    <label for="a">A</label>
    <input id="b"v-model=checkedNames type="checkbox" value="B">
    <label for="b">B</label>
    <input id="c"v-model=checkedNames type="checkbox" value="C">
    <label for="c">C</label>
    <p>radio {{ radioNames }}</p>
    <input id="a" type="radio" v-model="radioNames" value="">
    <label for="a">A</label>
    <input id="b" type="radio" v-model="radioNames" value="B">
    <label for="b">B</label>
    <p>select{{ selectname }}</p>
    <select name="" id="" v-model="selectname">
      <option disabled value="">Please select one</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  </div>
</div>
</template>

<style scoped>

</style>
