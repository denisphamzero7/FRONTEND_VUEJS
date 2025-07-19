<template>
    <div style="background-color: aqua;">
      <!-- Binding class với ref -->
      <button class="button" :class="{ Active: isActive, isError: isError }">isActive</button>
      <!-- Binding class với mảng -->
      <button class="button" :class="['button','Active','isError']">ActiveArray</button>
  

      <!-- Binding class với reactive và toggle -->
      <button @click="changeActive" class="button" :class="objectReactive">
        {{ isActive ? 'isActive' : 'DeActive' }}
      </button>
  
      <!-- Binding style -->
      <button :style="{ background: background, fontSize: fontSize + 'px' }">
        Style class binding
      </button>
      <!-- Binding style Object -->
      <button :style="styleObject">
        Style class binding
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  // ref
  const isActive = ref(false)
  const isError = ref(true)
  const background = ref('red')
  const fontSize = ref(30)
  
  // reactive
  const objectReactive = reactive({
    Active: false,
    isError: true
  })
  const styleObject = reactive({
    border:'none',
    borderRadius:'10px',
    backgroundColor:'#ff0000'
  })
  const changeActive = () => {
    isActive.value = !isActive.value
    objectReactive.Active = !objectReactive.Active
  }
  </script>
  
  <style scoped>
  .button {
    border: none;
    background-color: #de9fed;
    color: #8b5cf6;
    padding: 10px 12px;
    cursor: pointer;
  }
  .button:hover {
    background-color: #d9c7dd;
  }
  .Active {
    border: none;
    background-color: #de9fed;
    color: #8b5cf6;
  }
  .Active:hover {
    background-color: #d9c7dd;
  }
  .isError {
    border: none;
    background-color: #d37120;
    color: #151516;
  }
  .isError:hover {
    background-color: #d9c7dd;
  }
  </style>
  