<template>
    <div>
 <ul><li v-for="(value,key,index) in user" :key="key">
    {{ key}} -{{ value}} -{{ index }}
</li></ul>
    </div>
</template>

<script setup>
import{ref,reactive} from 'vue'
const user= ref({
    firstname:'join',
    lastname:'Doe',
    age:19
})
</script>

<style lang="scss" scoped>

</style>