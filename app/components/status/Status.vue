<template>
  <ClientOnly>
    <UPopover mode="hover">
      <div class="w-2 h-7 rounded cursor-pointer transform transition hover:scale-125" :class="uptimeClass"></div>

      <template #panel>
        <div class="px-4 py-2 gap-2 flex flex-col items-center">
          <p>{{ date.format('DD MMM YYYY') }}</p>
          <UBadge :color="badgeColor">{{ $t(statusString(uptime, 'message')) }}</UBadge>
          <p class="text-sm text-gray-400">{{ $t(formatUptime(uptime)) }}</p>
        </div>
      </template>
    </UPopover>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { Dayjs } from 'dayjs/esm'

const props = defineProps<{
  date: PropType<Dayjs>,
  uptime: number,
  count: number,
}>()

const uptimeClass = computed(() => statusColor(props.uptime))
const badgeColor = computed(() => statusBadgeColor(props.uptime))
</script>
