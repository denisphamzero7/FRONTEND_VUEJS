<template>
  <div>
    <label for="Email">Email</label>
    <input type="text" v-model="Email" />
    <p style="background-color: aquamarine; color: black">Email:{{ Email }}</p>
    <button @click="setEmailDefault">setthay doi email</button>
  </div>
  <div>
    <label for="Username">Username</label>
    <input type="text" v-model="Username" />
    <p style="background-color: aquamarine; color: black">username:{{ Username }}</p>
    <button @click="setUsernameDefault">setthay doi Username</button>
  </div>
</template>

<script setup>
const Email = defineModel('email')
const [Username, modifiers] = defineModel('username', {
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
})
const setEmailDefault = () => {
  Email.value = 'thay doi'
}
const setUsernameDefault = () => {
  Username.value = 'thay doi username'
}
</script>
