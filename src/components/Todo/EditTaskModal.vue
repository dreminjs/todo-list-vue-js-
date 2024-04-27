<script setup>
import { useTodoStore } from '@/store/todo.store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useTodoStore()

const { isEditModalVisible, editableToDo } = storeToRefs(store)

const newTitle = ref(editableToDo.value?.title)

function handleEditTask() {
  store.editTaskTitle(editableToDo.value.id, newTitle.value)
}

defineProps({
  handleCloseModal: Function
})
</script>

<template>
  <el-dialog v-model="isEditModalVisible" title="Edit Task" width="250px">
    <input type="text" v-model="newTitle" class="outline-none border-b-2 px-2" />
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCloseModal">Cancel</el-button>
        <el-button type="primary" @click="handleEditTask"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>
