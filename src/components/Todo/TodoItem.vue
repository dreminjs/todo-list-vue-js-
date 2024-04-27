<template>
  <li class="w-1/2 mx-auto border-2 px-5 py-2 mb-5">
    <p :class="{ 'line-through': isCompleted }" class="text-2xl mb-2">{{ title }}</p>
    <div class="flex gap-5">
      <button class="block text-2xl" @click="store.completeTask(id)" v-if="!isCompleted" :id="id">
        ✅
      </button>
      <button class="block text-2xl" @click="store.removeTask(id)">🗑️</button>
      <button
        class="block text-2xl"
        @click="store.backTask(id)"
        v-if="isCompleted"
        :id="id"
        :name="title"
      >
        ↩️
      </button>
      <button class="block text-2xl" v-if="!isCompleted" @click="handleSetTaskToEdit">✏️</button>
    </div>
  </li>
  <EditTaskModal :key="componentKey" :handleCloseModal="handleCloseModal" />
</template>

<script setup>
import { useTodoStore } from '@/store/todo.store'

import EditTaskModal from './EditTaskModal.vue'

import { ref } from 'vue'

import { storeToRefs } from 'pinia'

const store = useTodoStore()

const componentKey = ref(0)

function handleSetTaskToEdit() {
  store.setTaskToEdit(props.id)
  componentKey.value++
}

const { isEditModalVisible, editableToDo } = storeToRefs(store)

function handleCloseModal() {
  componentKey.value++
  isEditModalVisible.value = false
  editableToDo.value = null
}

const props = defineProps({
  title: String,
  id: String,
  isCompleted: Boolean
})
</script>
