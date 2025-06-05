<template>
  <div>
    <OverallStatus :report_data="log" />

    <div class="mt-12 md:mt-20 font-semibold inline-flex flex-col md:flex-row md:items-end">
      <h2 class="text-xl md:text-3xl">{{ $t('message.uptime') }}</h2>
      <h3 class="text-neutral-400 md:text-xl ml-3 md:ml-6">{{ $t('message.last_n_days', [gridCount]) }}</h3>
    </div>

    <div class="flex flex-col items-center">
      <Card :meta_data="url" :report_data="log" />
    </div>

    <IncidentReport :incidents="incidents" />
  </div>
</template>

<script setup lang="ts">
const {
  params: { slug },
} = useRoute()

const { data: url } = await useAsyncData(`url-${slug}`, () => queryCollection('urls').where('stem', '=', `urls/${slug}`).first())
const { data: log } = await useLazyAsyncData(`log-${slug}`, () => queryCollection('logs').where('stem', '=', `logs/${slug}`).first())
const { data: incidents } = await useLazyAsyncData('reports-${slug}', () => queryCollection('incidents').where('application', '=', slug).all())

const gridCount = useGridCount()
</script>
