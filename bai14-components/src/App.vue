<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ButtonCount from './components/ButtonCount.vue'
import ButtonEvent from './components/ButtonEvent.vue'
import ChildrenComponent from './components/ChildrenComponent.vue'
import ModelComponent from './components/ModelComponent.vue'
import { ref, watchEffect,provide } from 'vue'
const datacount = ref(0)
const message = ref('hello worlk')
const sayhi = () => {
  console.log('sayHi')
}
const Email = ref('')
const Username = ref('')
watchEffect(() => {
  console.log(Email.value)
})
const changEmailDefaultFromParent = () => {
  Email.value = 'chang@gmail.com'
}
const changusernamelDefaultFromParent = () => {
  Username.value = 'pham ngọc hậu'
}
const increaseBy = (number) => {
  datacount.value = datacount.value + number
}
provide("locale","vietnam")
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :locale="locale" />
      <ButtonCount :init="19" />
      <h1>Truyền dữ liệu define prop</h1>
      <ChildrenComponent
        propA="12"
        :propB="3"
        :propC="Helloooo"
        :propD="20"
        :propE="{ message: 'hello' }"
        :propF="success"
        :propG="sayhi"
        :disable="true"
      />
      <span> gọi event từ define emit</span>
      <span>Count: {{ datacount }}</span>
      <ButtonEvent
        @increase="datacount++"
        @increaseByTwoTimes="datacount = datacount + 2"
        @increase-by="increaseBy" 
      > <template #increase>increase</template>
      <template #increaseByTwoTimes>increaseByTwoTimes</template>
      <template #increaseBy>increaseBy</template>
    </ButtonEvent>
      <div>
        <h1>đây là global component</h1>
        <ComponentA />
      </div>
      <div>
        <!---v-model:email="Email" truyền đối số trong model-->
        <h1>v-model</h1>
        <ModelComponent v-model:email="Email" v-model:username.capitalize="Username" />
        <button @click="changEmailDefaultFromParent">seEmailDefault</button>
        <button @click="changusernamelDefaultFromParent">setUserNameDefault</button>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
