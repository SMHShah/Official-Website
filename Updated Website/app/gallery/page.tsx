import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { GalleryClient } from "@/components/gallery-client"

export const metadata: Metadata = {
  title: "Gallery | Rocket Squad",
  description: "Formula Pakistan 2026 image gallery by Rocket Squad.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Captured Moments"
        title="Gallery"
        subtitle="Our Formula Pakistan 2026 journey in pictures. Tap the plus button to add new photos."
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
        <GalleryClient />
      </section>
    </>
  )
}
