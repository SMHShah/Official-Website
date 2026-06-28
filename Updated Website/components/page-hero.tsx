export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-card/30">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,107,0,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,0,0,0.18), transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        )}
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-rocket-gradient sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
