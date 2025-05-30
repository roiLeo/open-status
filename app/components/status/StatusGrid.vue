<template>
  <div v-if="data" class="flex justify-between">
    <template v-for="data in computedData" :key="data.date">
      <Status v-bind="data" />
    </template>
  </div>
  <div v-else class="h-8.5 w-full bg-neutral-100 rounded-lg animate-pulse"></div>
</template>

<script setup lang="ts">
import type { Report } from '~/types'
import dayjs from 'dayjs/esm'

const props = defineProps({
  data: Object as PropType<Report[]>,
})
const gridCount = useGridCount()

const getDateArray = (start: Date, days: number) => {
  let arr: any[] = []
  for (let i = days - 1; i >= 0; i--) {
    const dt = dayjs.utc(start).subtract(i, 'day')
    arr.push(dt)
  }
  return arr
}

const computedData = computed(() => {
  let dates = getDateArray(new Date(), gridCount.value)
  return dates.map((i) => {
    const dataGroupByDates = props.data
      ?.filter((j) => i.isSame(dayjs.utc(j.time), 'day'))
      .map((i) => (i.status === 'success' ? 1 : 0)) as number[]

    const uptime = dataGroupByDates?.length ? dataGroupByDates.reduce((a, v) => a + v, 0) / dataGroupByDates.length : -1

    return {
      date: i,
      uptime,
      count: dataGroupByDates?.length,
    }
  })
})

const overallUptime = computed(() => {
  const dateWithUptimeData = computedData.value.filter((i) => i.uptime >= 0)

  return (
    dateWithUptimeData.reduce((a, v) => a + v.uptime * v.count, 0) / dateWithUptimeData.reduce((a, v) => a + v.count, 0)
  )
})

defineExpose({ overallUptime })
</script>
