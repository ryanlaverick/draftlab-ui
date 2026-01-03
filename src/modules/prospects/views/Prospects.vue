<script setup>
import TableHeader from '@/components/table/TableHeader.vue'
import TableValue from '@/components/table/TableValue.vue'
import TableRow from '@/components/table/TableRow.vue'
</script>

<template>
  <div class="w-full h-full overflow-y-auto flex flex-col gap-8">
    <!-- Controls -->
    <div>
      Controls
    </div>

    <!-- Prospects table -->
    <div class="w-full">
      <table class="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <table-header>Name</table-header>
            <table-header>School</table-header>
            <table-header>Position</table-header>
            <table-header>#</table-header>
            <table-header>Rating</table-header>
            <table-header>Rating Breakdown</table-header>
          </tr>
        </thead>
        <tbody>
          <table-row>
            <table-value>Caleb Lomu</table-value>
            <table-value>Utah</table-value>
            <table-value>OT</table-value>
            <table-value>#71</table-value>
            <table-value>97.1</table-value>
            <table-value>?</table-value>
          </table-row>
        </tbody>
      </table>
    </div>
  </div>
</template>
