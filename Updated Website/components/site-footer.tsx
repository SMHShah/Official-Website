import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, GraduationCap, Heart } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Rocket Squad logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-md"
            />
            <span className="text-xl font-extrabold text-rocket-gradient">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A passionate team of young engineers and innovators from Karachi, Pakistan, competing in
            Formula Pakistan to push the boundaries of racing technology.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {SITE.location}
            </li>
            <li className="flex items-center gap-2.5">
              <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
              {SITE.school}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Heart className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Follow us on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5">
        <p className="text-center text-xs text-muted-foreground">
          {"\u00A9"} {new Date().getFullYear()} {SITE.name}. All rights reserved. {SITE.tagline}.
        </p>
      </div>
    </footer>
  )
}
