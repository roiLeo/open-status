<template>
  <div class="inline-flex">
    <UIcon name="i-heroicons-check-circle" v-if="statusString(uptime) == 'success'" class="text-primary-500" />
    <UIcon name="i-heroicons-exclamation-triangle" v-else-if="statusString(uptime) == 'warning'" class="text-yellow-300" />
    <UIcon name="i-heroicons-exclamation-circle" v-else-if="statusString(uptime) == 'danger'" class="text-red-400" />
    <UIcon name="i-heroicons-question-mark-circle" v-else-if="statusString(uptime) == 'unknown'" class="text-neutral-400" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ uptime: number, size: number }>()
</script>
