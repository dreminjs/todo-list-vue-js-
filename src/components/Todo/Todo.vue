<script setup>
import { useTodoStore } from '@/store/todo.store'
import TodoList from './TodoList.vue'

import { ref } from 'vue'
const todo = ref('')

const store = useTodoStore()

console.log(store)

function handleAddTask() {
  if (todo.value) {
    store.addTask(todo.value)
    todo.value = ''
  }
}
</script>

<template>
  <div className="w-1/2 mx-auto flex items-center justify-center gap-5">
    <input
      type="text"
      className="px-5 border-b-2 outline-none mb-5"
      v-model="todo"
      placeholder="new todo"
    />
    <button @click="handleAddTask" className="px-2 py-1 text-3xl">✅</button>
  </div>
  <TodoList />
</template>
