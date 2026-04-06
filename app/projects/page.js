import Link from "next/link";
import { ArrowRight, Building2, Factory, SunMedium } from "lucide-react";

export const metadata = {
  title: "Projects",
  description:
    "Explore HVAC, ventilation, and solar energy projects by Arvand Termo Tec across residential, commercial, and industrial sectors."
};

const projects = [
  {
    category: "Commercial HVAC",
    title: "Corporate Climate Systems",
    description:
      "Advanced HVAC engineering and climate control solutions for office buildings, commercial spaces, and premium business environments.",
    image: "/projects/hvac-commercial.jpg",
    icon: Building2,
    href: "/projects/commercial-hvac"
  },
  {
    category: "Industrial Ventilation",
    title: "Industrial Air Systems",
    description:
      "High-capacity ventilation, airflow management, and extraction systems for factories, warehouses, and production facilities.",
    image: "/projects/hvac-industrial.jpg",
    icon: Factory,
    href: "/projects/industrial-ventilation"
  },
  {
    category: "Solar Energy",
    title: "Solar Power Integration",
    description:
      "Modern photovoltaic systems designed to improve energy efficiency and sustainability for contemporary buildings.",
    image: "/projects/solar-panels.jpg",
    icon: SunMedium,
    href: "/projects/solar-power-integration"
  }
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <section className="mb-16 max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
          Signature projects and engineering case studies
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
          A premium showcase of HVAC, ventilation, and solar energy solutions designed to communicate technical quality, visual strength, and long-term project value.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1321] shadow-[0_25px_70px_rgba(0,0,0,0.3)]">
              <div className="relative h-80 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,9,20,0.94),rgba(4,9,20,0.15))]" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur">
                  <Icon className="h-4 w-4 text-orange-400" />
                  {project.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-white/60">{project.description}</p>
                <Link href={project.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300">
                  View case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
