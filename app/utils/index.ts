const DEFAULT_COLOR = 'neutral'
const COLOR_LEVELS = [
  { threshold: 0.9, color: 'primary' },
  { threshold: 0.5, color: 'yellow' },
  { threshold: 0, color: 'red' }
]
const DEFAULT_STATUS = { state: 'unknown', message: 'overall.unknown' }
const STATUS_LEVELS = [
  { threshold: 0.9, state: 'success', message: 'overall.fully_operational' },
  { threshold: 0.5, state: 'warning', message: 'overall.partial_outage' },
  { threshold: 0, state: 'danger', message: 'overall.major_outage' }
]

type ColorType = 'bg' | 'text' | 'border'

export const statusColor = (uptime: number, type: ColorType = 'bg'): string => {
  const { color } = COLOR_LEVELS.find((level) => uptime >= level.threshold) ?? { color: DEFAULT_COLOR }
  return `${type}-${color}-500 bg-neutral-500 dark:${type}-${color}-800`
}

export const statusBadgeColor = (uptime: number): string => {
  const { color } = COLOR_LEVELS.find((level) => uptime >= level.threshold) ?? { color: DEFAULT_COLOR }
  return color
}

export const statusString = (uptime: number, type: 'state' | 'message' = 'state'): string => {
  const status = STATUS_LEVELS.find((level) => uptime >= level.threshold) ?? DEFAULT_STATUS
  return status[type]
}

export const formatUptime = (data: number) => {
  return data >= 0 ? (data * 100).toFixed(2) + '%' : 'message.no_data'
}

export const isSameDate = (a: string | Date, b: string | Date) => {
  const adt = new Date(a)
  const bdt = new Date(b)
  return adt.getDate() === bdt.getDate() && adt.getMonth() === bdt.getMonth() && adt.getFullYear() === bdt.getFullYear()
}
