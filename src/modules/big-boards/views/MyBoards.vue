<script setup>
import Board from '@/modules/big-boards/components/Board.vue'

const boards = [
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
]
</script>

<template>
  <div class="w-full grid grid-cols-5 gap-8">
    <board v-for="board in boards" :key="board.id" :board="board" />
  </div>
</template>

<style scoped></style>
