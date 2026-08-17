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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-lg font-semibold text-slate-900">
            Active Archive
          </Link>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            Frontend placeholder
          </span>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          This basic screen confirms that routing, Tailwind CSS, and mocked API
          data through TanStack Query are working.
        </p>

        <div className="mt-8">
          {isPending && (
            <div
              role="status"
              className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm"
            >
              Loading mock data...
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 p-6"
            >
              <p className="text-sm text-red-700">
                The mocked API could not be reached.
              </p>
              <button
                type="button"
                onClick={() => void refetch()}
                className="mt-4 rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
              >
                Try again
              </button>
            </div>
          )}

          {data && (
            <>
              <PlayerSummaryCard summary={data} />
              <button
                type="button"
                onClick={() => void refetch()}
                disabled={isFetching}
                className="mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-800 disabled:cursor-wait disabled:opacity-50"
              >
                {isFetching ? 'Refreshing...' : 'Refresh mock data'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
