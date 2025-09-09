export default function BlogLoading() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 w-48 bg-foreground/10 rounded-lg mx-auto mb-6 animate-pulse" />
          <div className="h-6 w-96 bg-foreground/5 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Search bar skeleton */}
        <div className="mb-12 p-6 glass rounded-xl">
          <div className="h-12 bg-foreground/5 rounded-lg animate-pulse" />
        </div>

        {/* Posts skeleton */}
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-8 border border-foreground/10 rounded-xl">
              <div className="h-6 w-24 bg-foreground/10 rounded mb-4 animate-pulse" />
              <div className="h-8 w-3/4 bg-foreground/10 rounded mb-4 animate-pulse" />
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-foreground/5 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-foreground/5 rounded animate-pulse" />
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-foreground/5 rounded-full animate-pulse" />
                <div className="h-6 w-20 bg-foreground/5 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}