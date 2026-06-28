import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { TEAM, MENTORS, SPONSORS } from "@/lib/site"
import { ArrowRight, GraduationCap, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Formula Pakistan 2026 | Rocket Squad",
  description:
    "Rocket Squad's Formula Pakistan 2026 season — our team, mentors, sponsors, the car, and the story of our struggle and growth throughout the campaign.",
}

const struggle = [
  { phase: "September 2025 — The Start", text: "We began with limited knowledge of Formula-style racing. Every concept — aerodynamics, CAD, manufacturing — was new and challenging." },
  { phase: "Research & Learning", text: "Through countless hours of research and hands-on work, we slowly built our understanding of car design and engineering principles." },
  { phase: "Design & Iteration", text: "We refined our car's aerodynamic performance through research, analysis, and iterative design improvements, overcoming setback after setback." },
  { phase: "2026 — Submission", text: "We successfully completed and submitted both our Engineering and Enterprise portfolios along with the finalized car design — a proud milestone for the whole team." },
]

export default function FP2026Page() {
  return (
    <>
      <PageHero
        eyebrow="The 2026 Season"
        title="Formula Pakistan 2026"
        description="Our complete 2026 campaign — the team, our mentors, sponsors, the car, and the story of the struggle that shaped Rocket Squad."
      />

      {/* The Car */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-rocket-gradient opacity-20 blur-2xl" />
            <Image
              src="/assets/ourcar.png"
              alt="Rocket Squad's 2026 Formula Pakistan car"
              width={760}
              height={555}
              className="mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Our <span className="text-rocket-gradient">2026 Car</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Designed and engineered entirely by the Rocket Squad team, our 2026 miniature
              Formula-style car represents a full year of research, aerodynamic refinement, and
              relentless iteration. Every curve and component was optimized for speed, agility, and
              efficiency.
            </p>
            <Link
              href="/gallery"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-rocket-gradient px-5 py-2.5 text-sm font-bold text-background transition-transform hover:scale-[1.03]"
            >
              See 2026 Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team members + roles */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
            The 2026 <span className="text-rocket-gradient">Rocket Squad</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            The members, names, and roles that powered our Formula Pakistan 2026 campaign.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <article
                key={m.name}
                className="rounded-2xl border border-border/60 bg-background p-6 text-center"
              >
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rocket-gradient text-xl font-extrabold text-background">
                  {m.initials}
                </span>
                <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Struggle / journey */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
          Our <span className="text-rocket-gradient">Struggle of 2026</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          The road to Formula Pakistan 2026 was paved with challenges. Here is how we grew through them.
        </p>
        <ol className="mt-10 space-y-8">
          {struggle.map((s) => (
            <li key={s.phase} className="relative border-l-2 border-primary/40 pl-6">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-rocket-gradient" />
              <p className="text-sm font-bold uppercase tracking-widest text-primary">{s.phase}</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Mentors */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Our Mentors</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Guided by mentors from NUST University who shaped our technical and project journey.
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {MENTORS.map((mentor) => (
              <article key={mentor.name} className="rounded-2xl border border-border/60 bg-background p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{mentor.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{mentor.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{mentor.org}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Our 2026 Sponsors</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          The partners and supporters who made our 2026 season possible.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SPONSORS.map((s) => (
            <article key={s.name} className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <Quote className="h-6 w-6 text-primary" />
              <span className="mt-3 inline-block rounded-full bg-rocket-gradient px-3 py-1 text-xs font-bold text-background">
                {s.tier}
              </span>
              <h3 className="mt-3 text-lg font-bold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Images CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60">
          <Image
            src="/assets/banner.png"
            alt="Formula Pakistan 2026 competition cars"
            width={1536}
            height={1024}
            className="h-72 w-full object-cover sm:h-96"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 text-center">
            <h2 className="text-balance text-2xl font-extrabold sm:text-3xl">
              Formula Pakistan 2026 Images
            </h2>
            <p className="mt-2 max-w-md px-4 text-muted-foreground">
              Browse and upload our official 2026 photos in the gallery.
            </p>
            <Link
              href="/gallery"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-rocket-gradient px-6 py-3 text-sm font-bold text-background transition-transform hover:scale-[1.03]"
            >
              Open Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
