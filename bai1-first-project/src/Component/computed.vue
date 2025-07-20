<template>
    <div>
<p id="count">Tên sách:{{ book.name }}</p>
<p>Đã xuất bản: {{ ispubisher}}</p>


<button @click="addchapter">add chapter</button>
    </div>

<p>Tên: {{ fullname }}</p>
<button @click="changename ">Name</button>
</template>

<script setup>
import {nextTick,computed, reactive,ref} from 'vue'
const firtname =ref('pham ngoc')
const lastname= ref('hau')
const fullname = computed(()=> firtname.value + ''+lastname.value)
const changename =()=>{
    return fullname.value='phuong'
}
const book = reactive({
   name:'book2',
   chapters:[]
})
const ispubisher= computed(()=> {
    return book.chapters.length>0?'có':'không'
}
)
const addchapter =()=>{
    book.chapters.push('chapter')
}
</script>

<style lang="scss" scoped>

</style>