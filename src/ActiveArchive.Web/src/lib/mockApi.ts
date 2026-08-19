export type DashboardSummary = {
  player: {
    name: string
    level: number
    className: string
  }
  energy: {
    current: number
    maximum: number
  }
  activity: {
    name: string
    reward: string
  }
  inventory: Array<{
    name: string
    quantity: number
  }>
}

const dashboardSummary: DashboardSummary = {
  player: {
    name: 'Sir Chudmin of Ohio',
    level: 67,
    className: 'Chud',
  },
  energy: {
    current: 72,
    maximum: 100,
  },
  activity: {
    name: 'getting mats to crank 90s with',
    reward: 'Mooncap, Ironroot, and gathering XP',
  },
  inventory: [
    { name: 'Wood', quantity: 24 },
    { name: 'Brick', quantity: 67 },
    { name: 'Metal', quantity: 31 },
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
