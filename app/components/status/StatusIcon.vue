<template>
  <div class="inline-flex">
    <UIcon name="i-heroicons-check-circle-solid" v-if="statusString(uptime) == 'success'" class="text-primary" :class="[ size ? `size-${size}` : '']" />
    <UIcon name="i-heroicons-exclamation-triangle-solid" v-else-if="statusString(uptime) == 'warning'" class="text-yellow" :class="[ size ? `size-${size}` : '']" />
    <UIcon name="i-heroicons-exclamation-circle-solid" v-else-if="statusString(uptime) == 'danger'" class="text-red" :class="[ size ? `size-${size}` : '']" />
    <UIcon name="i-heroicons-question-mark-circle-solid" v-else-if="statusString(uptime) == 'unknown'" class="text-neutral" :class="[ size ? `size-${size}` : '']" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ uptime: number, size?: number }>()
</script>
