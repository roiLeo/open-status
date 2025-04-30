<template>
  <div class="flex justify-center">
    <div
      class="w-full bg-opacity-10 p-6 md:p-8 flex items-center rounded-xl shadow-lg text-xl md:text-3xl font-medium"
      :class="[statusColor(todayOverallUptime, 'bg')]"
    >
      <StatusIcon :uptime="todayOverallUptime" class="md:text-3xl" />
      <h2 class="ml-3 md:ml-6 text-sm md:text-xl text-neutral/80">{{ todayOverallMessage }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'
import type { Report } from '~/types'

const props = defineProps({
  report_data: Object as PropType<ParsedContent[] | Pick<ParsedContent, string>>,
})
const { $dayjs } = useNuxtApp()
const { t } = useI18n()

const todayUptimeList = computed(() => {
  let report_data = Array.isArray(props.report_data) ? props.report_data : [props.report_data]
  return report_data.map((i) => {
    if (!i) return
    let todayData: number[] = i.body
      .filter((j: Report) => $dayjs.utc(j.time).isToday())
      .map((j: Report) => (j.status === 'success' ? 1 : 0))

    return todayData.reduce((a, v) => a + v, 0) / todayData.length
  })
})

const todayOverallUptime = computed(() => {
  if (todayUptimeList.value.find((i) => i >= 0 && i < 0.5)) {
    return 0
  } else if (todayUptimeList.value.find((i) => i >= 0.5 && i < 0.9)) {
    return 0.5
  } else {
    return 1
  }
})

const todayOverallMessage = computed(() => {
  const majorOutageCount = todayUptimeList.value.filter((i) => i >= 0 && i < 0.5).length
  const partialOutageCount = todayUptimeList.value.filter((i) => i >= 0.5 && i < 0.9).length

  if (majorOutageCount) {
    return `${majorOutageCount} ${t('overall.major_outage')}`
  } else if (partialOutageCount) {
    return `${partialOutageCount} ${t('overall.partial_outage')}`
  } else {
    return t('overall.all_systems_operational')
  }
})
</script>
