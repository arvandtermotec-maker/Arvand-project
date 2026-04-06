import { Building2, Factory, House } from "lucide-react";

const items = [
  { title: "Edifici commerciali", desc: "Climatizzazione, ventilazione e sistemi comfort per uffici, retail e ambienti a uso misto.", icon: Building2 },
  { title: "Strutture industriali", desc: "Sistemi di trattamento aria ed estrazione progettati per produttività, sicurezza e continuità operativa.", icon: Factory },
  { title: "Progetti residenziali", desc: "Impianti HVAC silenziosi, efficienti e ben integrati per ville, appartamenti e spazi abitativi moderni.", icon: House }
];

export default function ProjectsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="max-w-3xl"><p className="text-sm uppercase tracking-[0.3em] text-sky-400">Progetti</p><h2 className="mt-4 text-3xl font-semibold md:text-5xl">Settori di intervento</h2></div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">{items.map((project)=>{const Icon=project.icon; return <div key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1626] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"><div className="h-56 bg-[linear-gradient(135deg,rgba(14,165,233,0.24),rgba(249,115,22,0.16),rgba(255,255,255,0.02))] p-6"><div className="flex h-full items-end justify-between rounded-[1.5rem] border border-white/8 bg-white/5 p-5"><div className="max-w-[80%]"><div className="text-sm uppercase tracking-[0.25em] text-white/45">Settore</div><div className="mt-3 text-2xl font-semibold">{project.title}</div></div><div className="rounded-2xl bg-white/10 p-3 text-orange-400"><Icon className="h-6 w-6" /></div></div></div><div className="p-6"><p className="text-sm leading-7 text-white/60">{project.desc}</p></div></div>})}</div>
    </section>
  );
}
