import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cog, Gauge, Users, Trophy } from "lucide-react"
import { SITE } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgba(255,107,0,0.3), transparent 45%), radial-gradient(circle at 85% 15%, rgba(255,0,0,0.22), transparent 45%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Formula Pakistan Racing Team
            </p>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Speed Isn{"'"}t Our Goal,
              <span className="block text-rocket-gradient">It{"'"}s Our Identity</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We are {SITE.name} — a student racing team from {SITE.school}, {SITE.location},
              engineering and racing miniature Formula-style cars in the national Formula Pakistan
              competition.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/formula-pakistan-2026"
                className="inline-flex items-center gap-2 rounded-md bg-rocket-gradient px-6 py-3 text-sm font-bold text-background transition-transform hover:scale-[1.03]"
              >
                Explore FP 2026 <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-secondary/70"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-rocket-gradient opacity-20 blur-2xl" />
            <Image
              src="/assets/ourcar.png"
              alt="Rocket Squad's Formula Pakistan miniature race car"
              width={760}
              height={555}
              className="mx-auto w-full max-w-lg drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick links band */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-2 sm:px-6 md:grid-cols-4">
          {[
            { label: "About Us", href: "/about" },
            { label: "Meet Our Team", href: "/team" },
            { label: "FP 2026 Season", href: "/formula-pakistan-2026" },
            { label: "Our Supporters", href: "/supporters" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between rounded-md px-4 py-4 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {item.label}
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>

      {/* About Formula Pakistan */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              About <span className="text-rocket-gradient">Formula Pakistan</span>
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Formula Pakistan is a nationwide STEM initiative and competition where high school
              students design, engineer, and race miniature Formula-style cars — fostering practical
              skills in design, manufacturing (CAD/CAM, 3D printing), aerodynamics, and teamwork.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Inspired by the global Formula Student model and launched by the NUST Formula Student
              Team, it aims to build innovation and technical talent in Pakistani youth through
              hands-on, real-world engineering challenges.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/60">
            <Image
              src="/assets/banner.png"
              alt="Fleet of Formula Pakistan competition cars lined up on the track"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Cog,
                title: "Engineering Excellence",
                text: "Cutting-edge design and precision engineering in every component.",
              },
              {
                icon: Gauge,
                title: "Performance Driven",
                text: "Optimized for speed, agility, and aerodynamic efficiency.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                text: "A multidisciplinary team working in perfect harmony.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border/60 bg-background p-6 transition-colors hover:border-primary/50"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                  <p.icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-8 text-center sm:p-12">
          <Trophy className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 text-balance text-2xl font-extrabold sm:text-3xl">
            Official Formula Pakistan Competitors
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Follow our journey, meet the team, and see how we are building the future of student
            motorsports in Pakistan.
          </p>
          <Link
            href="/gallery"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-rocket-gradient px-6 py-3 text-sm font-bold text-background transition-transform hover:scale-[1.03]"
          >
            View Our Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
