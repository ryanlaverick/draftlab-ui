<script setup>
import dayjs from 'dayjs'
import BaseButton from '@/components/BaseButton.vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  board: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['deleteBoard', 'viewBoard'])

const deleteBoard = () => {
  emits('deleteBoard', props.board.id)
}

const viewBoard = () => {
  emits('viewBoard', props.board.id)
}
</script>

<template>
  <div
    @click="viewBoard"
    class="bg-base hover:bg-light duration-300 rounded-md h-64 w-full drop-shadow-lg drop-shadow-light cursor-pointer group transform -skew-x-12 overflow-hidden"
  >
    <div class="w-full h-5/12 bg-dark group-hover:bg-base duration-300 p-2 flex flex-col gap-2">
      <div class="w-full flex items-center gap-2">
        <div class="bg-base group-hover:bg-dark duration-300 rounded-full size-6"></div>
        <div class="bg-base group-hover:bg-dark duration-300 rounded-md h-6 w-full"></div>
      </div>

      <div class="w-full flex items-center gap-2">
        <div class="bg-base group-hover:bg-dark duration-300 rounded-full size-6"></div>
        <div class="bg-base group-hover:bg-dark duration-300 rounded-md h-6 w-full"></div>
      </div>

      <div class="w-full flex items-center gap-2">
        <div class="bg-base group-hover:bg-dark duration-300 rounded-full size-6"></div>
        <div class="bg-base group-hover:bg-dark duration-300 rounded-md h-6 w-full"></div>
      </div>
    </div>

    <div
      class="w-full h-7/12 flex flex-col gap-2 items-center text-white transform skew-x-12 relative group p-4"
    >
      <div class="absolute top-2 right-2 hidden group-hover:inline-block">
        <base-button
          class="bg-red-500 hover:bg-red-700 !px-2 !py-1 flex justify-center"
          @click.prevent="deleteBoard"
        >
          <Icon icon="mdi:trash-outline" class="size-4 text-white" />
        </base-button>
      </div>

      <div class="w-full flex justify-center text-center px-4">
        <p class="font-exclamation truncate">{{ board.name }}</p>
      </div>

      <div class="flex flex-col justify-center items-center gap-1">
        <span class="text-white/70 text-xs">Created at</span>
        <span class="text-sm">{{
          dayjs(board.created_at).format('dddd, MMMM D, YYYY h:mm A	')
        }}</span>
      </div>

      <div v-if="board.updated_at" class="flex flex-col justify-center items-center gap-1">
        <span class="text-white/70 text-xs">Last Updated</span>
        <span class="text-sm">{{
          dayjs(board.updated_at).format('dddd, MMMM D, YYYY h:mm A	')
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
