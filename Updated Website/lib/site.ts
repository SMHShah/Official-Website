export const SITE = {
  name: "Rocket Squad",
  tagline: "Formula Pakistan Racing Team",
  email: "rocketsquad.info@gmail.com",
  location: "Karachi, Pakistan",
  school: "Al-Khair Secondary School",
  instagram: "https://www.instagram.com/",
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "FP 2026", href: "/formula-pakistan-2026" },
  { label: "FP 2027", href: "/formula-pakistan-2027" },
  { label: "Gallery", href: "/gallery" },
  { label: "Supporters", href: "/supporters" },
  { label: "Contact", href: "/contact" },
]

export type TeamMember = {
  name: string
  role: string
  group: "Leadership" | "Technical"
  initials: string
}

export const TEAM: TeamMember[] = [
  { name: "Maryam Ali Hashmat", role: "Team Leader", group: "Leadership", initials: "MH" },
  { name: "Syed M Hussnain Shah", role: "Technical Lead", group: "Technical", initials: "HS" },
  { name: "Fatima Tanveer", role: "Project Manager", group: "Leadership", initials: "FT" },
  { name: "Esha Siraj", role: "Aerodynamics Specialist", group: "Technical", initials: "ES" },
  { name: "Nabeera Azeem", role: "Aerodynamics Specialist", group: "Technical", initials: "NA" },
  { name: "Fatima Kashif", role: "Project Assistant", group: "Leadership", initials: "FK" },
]

export const MENTORS = [
  { name: "Ms. Ayesha", role: "Car Design & Technical Mentor", org: "NUST University" },
  { name: "Ms. Horeen", role: "Project Management & Coordination Mentor", org: "NUST University" },
]

export const SPONSORS = [
  {
    name: "Al-Khair Secondary School",
    tier: "Gold Partner",
    description:
      "Our educational home, providing facilities, academic support, and the foundation that enables our team to excel in both engineering and education.",
  },
  {
    name: "Electronic Interconnect Engineering (EIE)",
    tier: "Silver Partner",
    description:
      "Providing cutting-edge electronic components, technical expertise, and mentorship that power our car's electrical systems and performance.",
  },
  {
    name: "NUST University Mentors",
    tier: "Technical Mentors",
    description:
      "Expert guidance from NUST engineering faculty who provide invaluable technical mentorship, design feedback, and industry insights.",
  },
  {
    name: "Idara Al-Khair Welfare Society",
    tier: "Community Partner",
    description:
      "A dedicated social welfare organization serving communities across Pakistan since 1987, tackling poverty, illiteracy, and providing education to every child.",
  },
]
