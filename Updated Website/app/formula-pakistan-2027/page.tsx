import type { Metadata } from "next"
import Image from "next/image"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "Formula Pakistan 2027 | Rocket Squad",
  description: "Formula Pakistan 2027 by Rocket Squad is loading. Something fast is on the way.",
}

export default function FP2027Page() {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-rocket-gradient blur-[120px]" />
      </div>

      {/* Spinning loader with logo */}
      <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
        <span
          className="absolute inset-0 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: "#ff6b00",
            borderRightColor: "#ffd700",
            animation: "rocket-spin 1s linear infinite",
          }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-3 rounded-full border-2 border-transparent"
          style={{
            borderBottomColor: "#ff0000",
            animation: "rocket-spin 1.6s linear infinite reverse",
          }}
          aria-hidden="true"
        />
        <Image
          src="/assets/logo.png"
          alt={SITE.name}
          width={88}
          height={88}
          className="animate-fire-flicker h-20 w-20 object-contain sm:h-24 sm:w-24"
        />
      </div>

      <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-primary">Loading</p>
      <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
        <span className="text-rocket-gradient">Formula Pakistan 2027</span>
      </h1>
      <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        Our next chapter is being engineered. The Rocket Squad is already firing up for the 2027 season, faster,
        bolder, and ready to push the limits once again. This page is loading. Check back soon.
      </p>

      {/* animated progress bar */}
      <div className="mt-8 h-1.5 w-64 max-w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full w-1/3 rounded-full bg-rocket-gradient"
          style={{ animation: "rocket-loading 1.8s ease-in-out infinite" }}
        />
      </div>

      <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Coming Soon</p>
    </section>
  )
}
