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
</script>

<template>
  
  <h1>syntax</h1>
  <p>message:{{ message }}</p>
  <span v-html="rawhtml"></span>
  <button :id="buttonId" :disabled="isButtondisable">{{ isButtondisable ? 'disabled':'click here' }}</button>
  <button v-bind="objectOfAtts">click ???</button>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
