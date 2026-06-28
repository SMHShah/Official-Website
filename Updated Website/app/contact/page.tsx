import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SITE } from "@/lib/site"
import { Mail, MapPin, GraduationCap, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Rocket Squad",
  description: "Get in touch with Rocket Squad, the Formula Pakistan racing team from Karachi.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question, partnership idea, or just want to cheer us on? Reach out — we'd love to hear from you."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${SITE.email}`}
            className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-primary/50"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Mail className="h-6 w-6 text-primary" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <span className="mt-1 block break-all font-semibold text-foreground transition-colors group-hover:text-primary">
                {SITE.email}
              </span>
            </span>
          </a>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-primary/50"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <ExternalLink className="h-6 w-6 text-primary" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Instagram
              </span>
              <span className="mt-1 block font-semibold text-foreground transition-colors group-hover:text-primary">
                Follow our journey
              </span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/40 p-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <MapPin className="h-6 w-6 text-primary" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Location
              </span>
              <span className="mt-1 block font-semibold text-foreground">{SITE.location}</span>
            </span>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/40 p-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <GraduationCap className="h-6 w-6 text-primary" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-widest text-muted-foreground">
                School
              </span>
              <span className="mt-1 block font-semibold text-foreground">{SITE.school}</span>
            </span>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-rocket-gradient p-8 text-center">
          <h2 className="text-2xl font-extrabold text-background">Let{"'"}s Build Something Fast</h2>
          <p className="mx-auto mt-2 max-w-xl text-background/85">
            Interested in sponsoring or collaborating with Rocket Squad? Send us an email and our team
            will get back to you.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-bold text-foreground transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" /> Email Us
          </a>
        </div>
      </section>
    </>
  )
}
