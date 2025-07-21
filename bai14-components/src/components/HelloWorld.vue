<script setup>
import LocaleComponent from './LocaleComponent.vue'
import {inject} from "vue"
const locale = inject("locale")
// const props = defineProps({
//   count:Number,
//   locale:String
// })

// console.log(props);
// props tĩnh : giá trị kiểu string ( nếu không có :)
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ count }}</h1>

     <LocaleComponent :locale="locale"/>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
