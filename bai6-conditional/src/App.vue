<script setup>
import {ref} from 'vue'
const isLogginIn = ref(true)
const toggleLogIn =()=>{
  isLogginIn.value = !isLogginIn.value
  console.log('click');
}
const userStatus = ref('online')
const changestatus=()=>{
if(userStatus.value==='online'){
  userStatus.value='away'
}else if(userStatus.value==='away'){
  userStatus.value='busy'
}else if(userStatus.value=== 'busy'){
userStatus.value='online'
}
}

</script>

<template>
  
<h2 v-if="isLogginIn">chào mừng người dùng đăng nhập</h2>
<h2 v-else>Chào mừng khách hàng</h2>
<button @click="toggleLogIn">{{ isLogginIn?"Đăng xuất":"Đăng nhập" }}</button>
<h1 v-if="userStatus=== 'online'">Người đùng đang online</h1>
<h1 v-else-if="userStatus==='away'">Người đùng đang vắng</h1>
<h1 v-else-if="userStatus==='busy'">Người đùng đang bận</h1>
<h1 v-else>Không rõ trạng thái</h1>
<button @click="changestatus">Thay đổi trạng thái</button>

</template>

<style scoped>

</style>
