<template>
  <div class="inline-flex">
    <UIcon name="i-heroicons-check-circle-solid" v-if="statusString(uptime) == 'success'" class="text-primary" />
    <UIcon name="i-heroicons-exclamation-triangle-solid" v-else-if="statusString(uptime) == 'warning'" class="text-yellow" />
    <UIcon name="i-heroicons-exclamation-circle-solid" v-else-if="statusString(uptime) == 'danger'" class="text-red" />
    <UIcon name="i-heroicons-question-mark-circle-solid" v-else-if="statusString(uptime) == 'unknown'" class="text-neutral" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ uptime: number, size?: number }>()
</script>
