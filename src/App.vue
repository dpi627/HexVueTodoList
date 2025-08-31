<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/signin">SignIn</RouterLink> |
    <RouterLink to="/signup">SignUp</RouterLink> |
    <RouterLink to="/todolist">TodoList</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped></style>
