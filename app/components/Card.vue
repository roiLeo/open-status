<template>
  <div class="my-8 md:my-10 w-full">
    <div class="mb-4 flex items-center justify-between">
      <div class="mx-0.5 truncate">
        <div class="flex items-center">
          <StatusIcon :uptime="status?.overallUptime" class="md:text-xl" />
          <NuxtLink :to="meta_data._path" class="ml-2 md:text-xl">{{ meta_data.title }}</NuxtLink>
        </div>
        <NuxtLink class="text-sm text-gray-400" :to="meta_data.url">{{ meta_data.url }}</NuxtLink>
      </div>
      <div>
        <p v-if="status?.overallUptime" class="ml-3 md:text-xl text-gray-400">
          {{ $t(formatUptime(status?.overallUptime)) }}
        </p>
        <div v-else class="bg-gray-100 rounded-lg w-24 h-7 animate-pulse"></div>
      </div>
    </div>
    <StatusGrid ref="status" :data="report_data?.body" />
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

defineProps({
  meta_data: Object as PropType<ParsedContent>,
  report_data: Object as PropType<ParsedContent>,
})

const status = ref()
</script>
