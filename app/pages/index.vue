<template>
  <div>
    <OverallStatus :report_data="logs" />

    <div class="mt-12 md:mt-20 font-semibold inline-flex items-end">
      <h2 class="text-xl md:text-3xl">{{ $t('message.uptime') }}</h2>
      <h3 class="text-neutral-400 md:text-xl ml-3 md:ml-6">{{ $t('message.last_n_days', [gridCount]) }}</h3>
    </div>

    <div class="flex flex-col items-center">
      <Card :meta_data="url" :report_data="retrieveLogs(url?.meta?.path as string)" v-for="url in urls" :key="url.id" />
    </div>

    <IncidentReport :incidents="incidents" />

    <div class="bg-primary-500">yeet</div>
  </div>
</template>

<script setup lang="ts">
const { data: urls } = await useAsyncData('urls', () => queryCollection('urls').all())
const { data: logs } = await useLazyAsyncData('logs', () => queryCollection('logs').all())
const { data: incidents } = await useLazyAsyncData('reports', () => queryCollection('incidents').all())

const gridCount = useGridCount()

const retrieveLogs = (path: string) => logs.value?.find((log) => log.path.includes(path.split('/')[2] as string))
</script>
