export type DashboardSummary = {
  player: {
    name: string
    level: number
    title: string
  }
  energy: {
    current: number
    maximum: number
  }
  activity: {
    name: string
    status: string
    reward: string
  }
  inventory: Array<{
    name: string
    quantity: number
  }>
}

const dashboardSummary: DashboardSummary = {
  player: {
    name: 'Rowan Vale',
    level: 18,
    title: 'Wayfinder',
  },
  energy: {
    current: 72,
    maximum: 100,
  },
  activity: {
    name: 'Whisperwood Foraging',
    status: 'Ready to begin',
    reward: 'Mooncap, Ironroot, and gathering XP',
  },
  inventory: [
    { name: 'Ironroot', quantity: 24 },
    { name: 'Mooncap', quantity: 11 },
    { name: 'Ancient Bark', quantity: 3 },
  ],
}

/** Simulates the future dashboard endpoint while the backend contract is built. */
export function getDashboardSummary(signal?: AbortSignal) {
  return new Promise<DashboardSummary>((resolve, reject) => {
    const timeoutId = window.setTimeout(() => resolve(dashboardSummary), 500)

    signal?.addEventListener(
      'abort',
      () => {
        window.clearTimeout(timeoutId)
        reject(new DOMException('Request aborted', 'AbortError'))
      },
      { once: true },
    )
  })
}
