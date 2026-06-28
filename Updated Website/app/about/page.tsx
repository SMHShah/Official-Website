import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Lightbulb, Users, Award, Flame, Target, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Rocket Squad",
  description:
    "Pioneering the future of student motorsports in Pakistan through innovation, engineering excellence, and unwavering passion for racing.",
}

const values = [
  { icon: Lightbulb, title: "Innovation", text: "Pushing boundaries through creative engineering solutions and embracing cutting-edge technology in our designs." },
  { icon: Users, title: "Collaboration", text: "Fostering teamwork and synergy where every member's contribution is valued and essential to our success." },
  { icon: Award, title: "Excellence", text: "Striving for perfection in every aspect, from design to execution, setting new standards in student engineering." },
  { icon: Flame, title: "Passion", text: "Fueled by our love for motorsports and engineering, driving us to overcome challenges and achieve greatness." },
]

const timeline = [
  { year: "2025", text: "We focused on car design and development, working extensively on our Engineering and Enterprise portfolios while refining the car's aerodynamic performance through research, analysis, and iterative design improvements." },
  { year: "2026", text: "We successfully completed and submitted both our Engineering and Enterprise portfolios along with the finalized car design, then developed our team website and prepared a verbal presentation to showcase our work." },
  { year: "Next", text: "Compete in the national Formula Pakistan championship, expand team capabilities, and establish training programs for new members." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Us"
        description="Pioneering the future of student motorsports in Pakistan through innovation, engineering excellence, and unwavering passion for racing."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Our <span className="text-rocket-gradient">Journey & Development</span>
        </h2>
        <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            We began our journey in September 2025 with limited knowledge of Formula-style racing.
            Through research, hands-on work, and continuous learning, we gradually developed an
            understanding of car design, aerodynamics, and technical concepts.
          </p>
          <p>
            The journey involved multiple challenges and consistent effort, which helped strengthen
            our teamwork, problem-solving skills, and overall technical confidence.
          </p>
          <p>
            Our work was guided by two mentors from NUST University provided by our school. Ms. Ayesha
            supported us in car design and technical development, while Ms. Horeen guided us in project
            management and team coordination, playing a key role in our progress.
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-background p-7">
            <Target className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To design, build, and race high-performance miniature formula-style cars while
              developing world-class engineering talent in Pakistan. We aim to compete at the highest
              levels of student motorsports while promoting STEM education and innovation.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background p-7">
            <Eye className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To become Pakistan{"'"}s premier student racing team, recognized internationally for
              engineering excellence and innovation. We envision creating a sustainable ecosystem that
              nurtures motorsports talent and technological advancement in Pakistan.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Our Core Values</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border/60 bg-card/40 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                <v.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl">Our Journey</h2>
          <ol className="mt-10 space-y-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative border-l-2 border-primary/40 pl-6">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-rocket-gradient" />
                <p className="text-sm font-bold uppercase tracking-widest text-primary">{t.year}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
