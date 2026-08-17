import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { PlayerSummaryCard } from '../components/PlayerSummaryCard.tsx'
import { getDashboardSummary } from '../lib/mockApi.ts'

export function DashboardPage() {
  const { data, error, isPending, isFetching, refetch } = useQuery({
    queryKey: ['dashboard-summary'],
    queryFn: ({ signal }) => getDashboardSummary(signal),
  })

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            to="/"
            className="flex items-center gap-3 font-display text-xl text-parchment-50"
          >
            <span className="grid size-9 place-items-center rounded-full border border-moss-300/40 bg-moss-400/10 text-xs font-bold tracking-widest text-moss-300">
              AA
            </span>
            Active Archive
          </Link>
          <span className="text-xs font-medium tracking-widest text-parchment-200/55 uppercase">
            Frontend preview
          </span>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-sm text-moss-300">The archive remembers.</p>
            <h1 className="max-w-2xl font-display text-4xl leading-tight text-parchment-50 sm:text-6xl">
              Welcome back{data ? `, ${data.player.name}` : ''}.
            </h1>
            {data && (
              <p className="mt-4 text-parchment-200/65">
                Level {data.player.level} · {data.player.title}
              </p>
            )}
          </div>
          {data && (
            <button
              type="button"
              onClick={() => void refetch()}
              disabled={isFetching}
              className="rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold tracking-wide text-parchment-200 transition hover:border-moss-300/60 hover:text-moss-300 disabled:cursor-wait disabled:opacity-50"
            >
              {isFetching ? 'Refreshing…' : 'Refresh mock data'}
            </button>
          )}
        </div>

        {isPending && (
          <div
            role="status"
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-sm text-parchment-200/70"
          >
            Consulting the archive…
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="rounded-3xl border border-red-300/20 bg-red-950/20 p-8"
          >
            <p className="text-sm text-red-100">
              The mocked API could not be reached.
            </p>
            <button
              type="button"
              onClick={() => void refetch()}
              className="mt-4 rounded-lg border border-red-200/30 px-4 py-2 text-sm text-red-100"
            >
              Try again
            </button>
          </div>
        )}

        {data && <PlayerSummaryCard summary={data} />}
      </main>
    </div>
  )
}
