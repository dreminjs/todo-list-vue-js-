<template>
  <div>
    <ul>
      <template v-for="(todo, index) in todos" :key="index">
        <TodoItem
          v-if="!todo.isCompleted"
          :title="todo.title"
          :isCompleted="todo.isCompleted"
          :id="todo.id"
        />
      </template>
    </ul>
    <h3 v-if="isCompletedTaskExist" class="text-center mb-5">Completed tasks</h3>
    <ul>
      <template v-for="(todo, index) in todos" :key="index">
        <TodoItem
          v-if="todo.isCompleted"
          :title="todo.title"
          :isCompleted="todo.isCompleted"
          :id="todo.id"
        />
      </template>
    </ul>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'

import { useTodoStore } from '@/store/todo.store'

import { storeToRefs } from 'pinia'

const store = useTodoStore()

const { todos, isCompletedTaskExist } = storeToRefs(store)
</script>
