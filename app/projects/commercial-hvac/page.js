import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Commercial HVAC Project",
  description:
    "Commercial HVAC case study by Arvand Termo Tec. Premium climate engineering solutions for office buildings and business environments."
};

const scopeItems = [
  "HVAC system design and planning",
  "Air distribution and ventilation strategy",
  "Installation coordination and execution",
  "Performance, comfort, and efficiency optimization"
];

const benefits = [
  "Improved thermal comfort for occupants",
  "Reliable long-term system performance",
  "Efficient airflow and climate control",
  "Premium engineering presentation for modern buildings"
];

export default function CommercialHVACProjectPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <section className="mb-16 max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Commercial HVAC</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Corporate Climate Systems</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
          A premium HVAC concept for office buildings, commercial spaces, and business environments that require comfort, visual quality, and high-performance engineering.
        </p>
      </section>
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1321] shadow-[0_25px_70px_rgba(0,0,0,0.3)]">
          <img src="/projects/hvac-commercial.jpg" alt="Commercial HVAC project" className="h-full w-full object-cover" />
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="inline-flex rounded-2xl bg-white/5 p-4 text-orange-400"><Building2 className="h-6 w-6" /></div>
          <h2 className="mt-6 text-2xl font-semibold text-white">Project Overview</h2>
          <p className="mt-4 text-white/65 leading-8">
            This project showcases a commercial HVAC solution designed for modern workspaces where comfort, clean air distribution, and energy efficiency are essential.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition hover:translate-y-[-2px]">
            Request a Similar Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <section className="mt-20 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0a1321] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Scope of Work</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">What this project includes</h2>
          <div className="mt-8 space-y-4">{scopeItems.map((item)=><div key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" /><span className="text-white/65">{item}</span></div>)}</div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Benefits</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Project value and results</h2>
          <div className="mt-8 space-y-4">{benefits.map((item)=><div key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" /><span className="text-white/65">{item}</span></div>)}</div>
        </div>
      </section>
    </div>
  );
}
