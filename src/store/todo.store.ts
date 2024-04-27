import type { ToDo } from '@/models/todo.model'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<ToDo[]>([])

  const editableToDo = ref<ToDo | null>(null)

  const isEditModalVisible = ref<boolean>(false)

  const isCompletedTaskExist = computed(() => {
    return todos.value.find((el) => el.isCompleted === true)
  })

  function setTaskToEdit(id: string) {
    const todoIdx = todos.value.findIndex((el) => el.id === id)

    const currentTodo = todos.value[todoIdx]

    editableToDo.value = currentTodo

    isEditModalVisible.value = true
  }

  function addTask(title: string) {
    todos.value.push({
      title,
      isCompleted: false,
      id: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100) + '_UUID'
    })
  }

  function removeTask(id: string) {
    todos.value = todos.value.filter((el) => el.id !== id)
  }

  function editTaskTitle(id: string, title: string) {
    console.log(todos.value[0].id === id)
    todos.value = todos.value.map((item) => {
      if (item.id === id) {
        console.log('GELLO')
        return { title, isCompleted: false, id }
      }
      return item
    })

    editableToDo.value = null

    isEditModalVisible.value = false
  }

  function completeTask(id: string) {
    todos.value = todos.value.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: true }
      }
      return item
    })
  }

  function backTask(id: string) {
    todos.value = todos.value.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: false }
      }
      return item
    })
  }

  return {
    backTask,
    completeTask,
    editTaskTitle,
    removeTask,
    addTask,
    setTaskToEdit,
    todos,
    editableToDo,
    isEditModalVisible,
    isCompletedTaskExist
  }
})
