import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { TEAM } from "@/lib/site"
import { Cog, ClipboardList, Wind } from "lucide-react"

export const metadata: Metadata = {
  title: "Meet Our Team | Rocket Squad",
  description:
    "The passionate individuals behind Rocket Squad pushing the boundaries of Formula Pakistan racing with innovation, dedication, and engineering excellence.",
}

const departments = [
  { icon: Cog, title: "Technical Department", text: "Responsible for car design, engineering, aerodynamics, and technical specifications, ensuring our car performs at its peak potential." },
  { icon: ClipboardList, title: "Management Department", text: "Handles project management, coordination, scheduling, and resource allocation, keeping the team organized and on track." },
  { icon: Wind, title: "Strategy Department", text: "Develops racing strategies, analyzes competition data, and makes critical decisions for optimal performance during competitions." },
]

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The Driving Force"
        title="Meet Our Team"
        description="The passionate individuals behind Rocket Squad who are pushing the boundaries of Formula Pakistan racing with innovation, dedication, and engineering excellence."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="mx-auto max-w-3xl text-center text-pretty leading-relaxed text-muted-foreground">
          Our team is composed of talented students from Al-Khair Secondary School who share a common
          passion for engineering, innovation, and motorsports. Each member brings unique skills and
          expertise to create a formidable force in Formula Pakistan competition.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group rounded-2xl border border-border/60 bg-card/40 p-6 text-center transition-colors hover:border-primary/50"
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rocket-gradient text-xl font-extrabold text-background">
                {m.initials}
              </span>
              <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
              <span className="mt-3 inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {m.group}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Our Departments</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {departments.map((d) => (
              <div key={d.title} className="rounded-2xl border border-border/60 bg-background p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <d.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
