<template>
  <div class="mt-12 md:mt-20 font-semibold inline-flex items-end">
    <h2 class="text-xl md:text-3xl">{{ $t('title.recent_incident') }}</h2>
  </div>

  <div class="mt-4 md:mt-8">
    <div v-if="!incidents || incidents.length == 0">
      <div class="bg-gray-50 dark:bg-opacity-10 rounded-xl p-8 h-48 flex items-center justify-center">{{ $t('message.no_incident') }}</div>
    </div>
    <div v-else class="mb-8" v-for="(incident) in incidents" :key="incident._id">
      <h3 class="md:text-xl my-4">{{ new Date(incident.date).toLocaleString() }}</h3>
      <div class="bg-gray-50 dark:bg-gray-200 rounded-xl p-4 md:p-8">
        <UBadge v-if="incident.resolved" class="mb-4">{{ $t('message.resolved') }}</UBadge>
        <ContentRenderer class="prose max-w-none" :value="incident" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

defineProps({
  incidents: Object as PropType<ParsedContent[]>,
})
</script>
