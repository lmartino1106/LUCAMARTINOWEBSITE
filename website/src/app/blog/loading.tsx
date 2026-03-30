export default function BlogLoading() {
  return (
    <div className="pt-24">
      <section className="py-20 grid-bg">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <div className="h-4 w-16 bg-border rounded mx-auto mb-4 animate-pulse" />
            <div className="h-12 w-96 bg-border rounded mx-auto mb-6 animate-pulse" />
            <div className="h-6 w-80 bg-border rounded mx-auto animate-pulse" />
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-border bg-bg-card p-8 animate-pulse">
                <div className="flex gap-4 mb-4">
                  <div className="h-4 w-16 bg-border rounded" />
                  <div className="h-4 w-24 bg-border rounded" />
                </div>
                <div className="h-6 w-3/4 bg-border rounded mb-2" />
                <div className="h-4 w-full bg-border rounded mb-1" />
                <div className="h-4 w-2/3 bg-border rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
