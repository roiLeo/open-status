<template>
  <div class="w-full flex items-center text-xl md:text-3xl font-medium gap-2 md:gap-4 p-4 md:p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
    <StatusIcon :uptime="todayOverallUptime" :size="10" />
    <div class="flex flex-1 flex-wrap items-center justify-between gap-2">
      <h2 class="text-sm md:text-xl lg:text-2xl text-subtle">{{ todayOverallMessage }}</h2>
      <p class="text-xs text-neutral-400">{{ $t('message.last_updated', [new Date().toLocaleDateString(locale)]) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LogsCollectionItem } from '@nuxt/content'
import type { Report } from '~/types'

const props = defineProps({
  report_data: Object as PropType<LogsCollectionItem[] | LogsCollectionItem | null | undefined>,
})

const { $dayjs } = useNuxtApp()
const { t, locale } = useI18n()

const todayUptimeList = computed(() => {
  const reportData = Array.isArray(props.report_data) ? props.report_data : [props.report_data];

  return reportData.map((report) => {
    if (!report || !Array.isArray(report.body)) return undefined;

    const todayData: number[] = report.body
      .filter((entry: Report) => $dayjs.utc(entry.time).isToday())
      .map((entry: Report) => entry.status === 'success' ? 1 : 0)

    if (todayData.length === 0) return undefined
    return todayData.reduce((sum, value) => sum + value, 0) / todayData.length
  })
})

const todayOverallUptime = computed(() => {
  if (todayUptimeList.value.some(uptime => uptime !== undefined && uptime < 0.5)) {
    return 0;
  }

  if (todayUptimeList.value.some(uptime => (uptime !== undefined && uptime >= 0.5) && (uptime !== undefined && uptime < 0.9))) {
    return 0.5;
  }

  return 1;
})

const todayOverallMessage = computed(() => {
  const majorOutageCount = todayUptimeList.value.filter(uptime => uptime !== undefined && uptime < 0.5).length;
  const partialOutageCount = todayUptimeList.value.filter(uptime => uptime !== undefined && uptime >= 0.5 && uptime !== undefined && uptime < 0.9).length;

  if (majorOutageCount > 0) {
    return `${majorOutageCount} ${t('overall.major_outage')}`;
  }

  if (partialOutageCount > 0) {
    return `${partialOutageCount} ${t('overall.partial_outage')}`;
  }

  return t('overall.all_systems_operational');
})

</script>
