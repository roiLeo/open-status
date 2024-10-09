<template>
  <ClientOnly>
    <UPopover mode="hover">
      <div class="w-2 h-7 rounded cursor-pointer transform transition hover:scale-125" :class="uptimeClass"></div>

      <template #panel>
        <div class="px-4 py-2 flex flex-col items-center">
          <p>
            {{ date.format('DD MMM YYYY') }}
          </p>
          <p class="text-white text-center mt-2 px-4 py-2 rounded-lg" :class="uptimeClass">
            {{ $t(statusString(uptime, 'message')) }}
          </p>
          <p class="mt-2 text-sm text-gray-400">{{ $t(formatUptime(uptime)) }}</p>
        </div>
      </template>
    </UPopover>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { Dayjs } from 'dayjs/esm'

const props = defineProps({
  date: Object as PropType<Dayjs>,
  uptime: Number,
  count: Number,
})

const uptimeClass = computed(() => statusColor(props.uptime))
</script>
