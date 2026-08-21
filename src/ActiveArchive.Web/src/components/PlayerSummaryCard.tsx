import type { DashboardSummary } from '../lib/mockApi.ts'

type PlayerSummaryCardProps = {
  summary: DashboardSummary
}

export function PlayerSummaryCard({ summary }: PlayerSummaryCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
        <span className="size-2 rounded-full bg-emerald-500" />
        Mock API response
      </div>

      <h2 className="mt-4 text-xl font-semibold text-slate-900">
        {summary.player.name}
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Level {summary.player.level} - {summary.player.className}
      </p>

      <dl className="mt-6 divide-y divide-slate-100 border-y border-slate-100 text-sm">
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-slate-500">Energy</dt>
          <dd className="font-medium text-slate-900">
            {summary.energy.current} / {summary.energy.maximum}
          </dd>
        </div>
        <div className="flex justify-between gap-4 py-3">
          <dt className="text-slate-500">Activity</dt>
          <dd className="text-right font-medium text-slate-900">
            {summary.activity.name}
          </dd>
        </div>
      </dl>

      <div className="mt-5">
        <h3 className="text-sm font-medium text-slate-900">Inventory</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {summary.inventory.map((item) => (
            <span
              key={item.name}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              {item.name}: {item.quantity}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
