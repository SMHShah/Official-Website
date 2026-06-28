import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SPONSORS } from "@/lib/site"
import { Handshake, Eye, Network } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Supporters | Rocket Squad",
  description:
    "Powering our journey through partnership, collaboration, and a shared vision for innovation and excellence in student motorsports.",
}

const benefits = [
  { icon: Eye, title: "Brand Visibility", text: "Prominent logo placement on our car, team uniforms, and all digital platforms reaching thousands of motorsports enthusiasts." },
  { icon: Network, title: "Networking", text: "Access to exclusive industry events, engineering networks, and partnerships with other innovative organizations." },
  { icon: Handshake, title: "Shared Vision", text: "Partnering with us to nurture young talent and build the future of student motorsports in Pakistan." },
]

export default function SupportersPage() {
  return (
    <>
      <PageHero
        eyebrow="Fueling Our Passion"
        title="Our Supporters"
        description="Powering our journey through partnership, collaboration, and a shared vision for innovation and excellence in student motorsports."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <p className="mx-auto max-w-3xl text-center text-pretty leading-relaxed text-muted-foreground">
          Our journey in Formula Pakistan wouldn{"'"}t be possible without the invaluable support of
          our sponsors, partners, and supporters. Together, we{"'"}re not just building race cars — we
          {"'"}re building the future of motorsports in Pakistan.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SPONSORS.map((s) => (
            <article key={s.name} className="rounded-2xl border border-border/60 bg-card/40 p-7">
              <span className="inline-block rounded-full bg-rocket-gradient px-3 py-1 text-xs font-bold text-background">
                {s.tier}
              </span>
              <h3 className="mt-4 text-xl font-bold">{s.name}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Partnership Benefits</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border/60 bg-background p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <b.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
