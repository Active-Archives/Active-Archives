import type { DashboardSummary } from '../lib/mockApi.ts'

type PlayerSummaryCardProps = {
  summary: DashboardSummary
}

export function PlayerSummaryCard({ summary }: PlayerSummaryCardProps) {
  const energyPercent =
    (summary.energy.current / summary.energy.maximum) * 100

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_0.85fr]">
      <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-moss-300 uppercase">
              Current expedition
            </p>
            <h2 className="mt-3 font-display text-3xl text-parchment-50 sm:text-4xl">
              {summary.activity.name}
            </h2>
            <p className="mt-2 text-sm text-parchment-200/70">
              {summary.activity.reward}
            </p>
          </div>
          <span className="rounded-full border border-moss-300/25 bg-moss-400/10 px-3 py-1.5 text-xs font-medium text-moss-300">
            {summary.activity.status}
          </span>
        </div>

        <div className="mt-10">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-parchment-200/70">Energy bonus</span>
            <span className="font-medium text-parchment-50">
              {summary.energy.current} / {summary.energy.maximum}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-black/30">
            <div
              className="h-full rounded-full bg-gradient-to-r from-moss-400 to-emerald-300"
              style={{ width: `${energyPercent}%` }}
            />
          </div>
          <p className="mt-3 text-xs leading-5 text-parchment-200/55">
            Gathering remains available when energy reaches zero; energy only
            increases your rewards.
          </p>
        </div>

        <button
          type="button"
          className="mt-8 w-full rounded-xl bg-parchment-50 px-5 py-3 text-sm font-bold text-archive-950 transition hover:bg-moss-300 sm:w-auto"
        >
          Begin gathering
        </button>
      </section>

      <aside className="rounded-3xl border border-white/10 bg-black/15 p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.24em] text-moss-300 uppercase">
          Satchel
        </p>
        <ul className="mt-5 divide-y divide-white/10">
          {summary.inventory.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between py-4 first:pt-0"
            >
              <span className="text-sm text-parchment-200">{item.name}</span>
              <span className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-xs text-parchment-50">
                {item.quantity}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
