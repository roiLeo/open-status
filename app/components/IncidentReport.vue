<template>
  <div class="mt-12 md:mt-20 font-semibold inline-flex items-end">
    <h2 class="text-xl md:text-3xl">{{ $t('title.recent_incident') }}</h2>
  </div>

  <div class="my-4 md:my-8">
    <ClientOnly>
      <div v-if="incidents && incidents.length" class="flex flex-col gap-8">
        <UCard variant="subtle" v-for="(incident) in incidents" :key="incident.id">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="md:text-xl">{{ new Date(incident.date).toLocaleString() }}</h3>
              <UBadge v-if="incident.resolved">{{ $t('message.resolved') }}</UBadge>
            </div>
          </template>

          <ContentRenderer class="max-w-none" :value="incident" />
        </UCard>
      </div>
      <UCard v-else variant="subtle">
        <div class="p-8 h-48 flex items-center justify-center">{{ $t('message.no_incident') }}</div>
      </UCard>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { IncidentsCollectionItem } from '@nuxt/content'

defineProps({
  incidents: Object as PropType<IncidentsCollectionItem[]>
})
</script>
