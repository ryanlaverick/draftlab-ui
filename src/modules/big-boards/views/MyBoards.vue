<script setup>
import Board from '@/modules/big-boards/components/Board.vue'
import CreateBoard from '@/modules/big-boards/components/CreateBoard.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const boards = ref([
  {
    id: 1,
    name: 'Consensus Board',
    created_at: '2026-01-01T07:30:00',
    updated_at: null
  },
  {
    id: 2,
    name: 'New England Patriots Board',
    created_at: '2025-12-17T11:51:13',
    updated_at: '2026-02-03T22:35:29'
  },
  {
    id: 3,
    name: 'Test Board',
    created_at: '2026-01-17T12:42:37',
    updated_at: '2026-01-29T17:17:36'
  }
])

const deleteBoard = (boardId) => {
  boards.value = boards.value.filter((board) => {
    return board.id !== boardId
  })
}

const viewBoard = (boardId) => {
  router.push({
    name: 'View Board',
    params: {
      id: boardId,
    },
  })
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <span class="font-exclamation text-xl">My Boards</span>

    <div class="w-full grid grid-cols-5 gap-8">
      <board v-for="board in boards" :key="board.id" :board="board" @delete-board="deleteBoard" @view-board="viewBoard" />
      <create-board />
    </div>
  </div>
</template>

<style scoped></style>
