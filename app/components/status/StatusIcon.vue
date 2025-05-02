<template>
  <div class="inline-flex">
    <UIcon name="i-heroicons-check-circle" v-if="statusString(uptime) == 'success'" class="text-primary-400 dark:text-primary-800" />
    <UIcon name="i-heroicons-exclamation-triangle" v-else-if="statusString(uptime) == 'warning'" class="text-yellow-400 dark:text-yellow-800" />
    <UIcon name="i-heroicons-exclamation-circle" v-else-if="statusString(uptime) == 'danger'" class="text-red-400 dark:text-red-800" />
    <UIcon name="i-heroicons-question-mark-circle" v-else-if="statusString(uptime) == 'unknown'" class="text-neutral-400 dark:text-neutral-800" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ uptime: number, size?: number }>()
</script>
