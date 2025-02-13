export const useGridCount = () => {
  const device = useDevice()
  return useState<number>('grid-count', () => (device?.isDesktop ? 45 : device?.isTablet ? 30 : 20))
}
