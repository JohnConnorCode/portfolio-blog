export default function WorkLoading() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-12 w-48 bg-foreground/10 rounded-lg mb-6 animate-pulse" />
          <div className="h-6 w-96 bg-foreground/5 rounded-lg animate-pulse" />
        </div>

        {/* Case studies skeleton */}
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-foreground/10 rounded-xl overflow-hidden">
              <div className="h-48 bg-foreground/10 animate-pulse" />
              <div className="p-8">
                <div className="h-8 w-3/4 bg-foreground/10 rounded mb-4 animate-pulse" />
                <div className="h-4 w-full bg-foreground/5 rounded mb-2 animate-pulse" />
                <div className="h-4 w-5/6 bg-foreground/5 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}