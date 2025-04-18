<template>
  <div>
    <OverallStatus :report_data="log" />

    <div class="mt-12 md:mt-20 font-semibold inline-flex flex-col md:flex-row md:items-end">
      <h2 class="text-xl md:text-3xl">{{ url.title }}'s Uptime</h2>
      <h3 class="text-neutral-400 md:text-xl md:ml-6">Last {{ gridCount }} days</h3>
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

const { data: url } = await useAsyncData(`url-${slug}`, () => queryContent(`/urls/${slug}`).findOne())
const { data: log } = await useLazyAsyncData(`log-${slug}`, () => queryContent(`/logs/${slug}`).findOne())
const { data: incidents } = await useLazyAsyncData(`incident-${slug}`, () =>
  queryContent('/incidents')
    .where({ application: { $contains: slug } })
    .sort({ title: 0 })
    .find()
)
const gridCount = useGridCount()
</script>
