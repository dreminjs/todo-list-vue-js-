<script setup>
import Todo from './components/Todo/Todo.vue'
import MyContainer from './components/MyContainer.vue'
</script>

<template>
  <MyContainer>
    <h3 className="text-center text-xl mb-5">Vue To-Do List</h3>
    <Todo />
  </MyContainer>
</template>

<style scoped>
/* Ваши стили здесь */
</style>
