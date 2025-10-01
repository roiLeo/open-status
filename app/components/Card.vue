<template>
  <div class="my-8 md:my-10 w-full">
    <div v-if="status" class="mb-4 flex items-end justify-between">
      <div class="mx-0.5 truncate flex flex-col">
        <NuxtLink :to="meta_data.meta.path" class="md:text-xl">{{ meta_data.title }}</NuxtLink>
        <NuxtLink class="text-sm text-neutral-400" :to="meta_data.url">{{ meta_data.url }}</NuxtLink>
      </div>
      <div>
        <div v-if="status?.overallUptime" class="flex items-center gap-2">
          <p class="md:text-lg text-neutral-400">
            {{ formatUptime(status?.overallUptime) }}
          </p>
          <StatusIcon :uptime="status?.overallUptime" class="md:text-lg" />
        </div>
        <div v-else class="bg-neutral-100 rounded-lg w-24 h-7 animate-pulse"></div>
      </div>
    </div>
    <StatusGrid ref="status" :data="report_data?.body" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  meta_data: Object as PropType<any>,
  report_data: Object as PropType<any>,
})

const status = ref()
</script>
