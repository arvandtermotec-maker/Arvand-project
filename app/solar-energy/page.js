import Link from "next/link";
import { ArrowRight, Sun, BatteryCharging, Factory, Leaf } from "lucide-react";
import SolarCTASection from "@/components/solar-cta-section";

export const metadata = {
  title: "Solar Energy Systems",
  description:
    "Professional solar energy solutions in Italy. Solar panels, energy efficiency, and modern renewable systems for residential, commercial, and industrial projects."
};

const solarServices = [
  { title: "Solar Panel Installation", description: "High-quality photovoltaic systems for buildings that demand efficiency and long-term performance.", icon: Sun },
  { title: "Energy Storage Solutions", description: "Battery-ready systems designed to improve energy independence and optimize usage.", icon: BatteryCharging },
  { title: "Commercial & Industrial Solar", description: "Scalable renewable energy solutions for offices, facilities, warehouses, and production environments.", icon: Factory },
  { title: "Sustainable Energy Design", description: "Integrated solar planning for modern projects focused on sustainability and operational savings.", icon: Leaf }
];

export default function SolarEnergyPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(249,115,22,0.10),rgba(59,130,246,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:p-12">
        <div className="relative max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Solar Energy</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">Renewable energy systems designed for modern buildings.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Arvand Termo Tec provides premium solar energy solutions for residential, commercial, and industrial projects across Italy.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white">Request Solar Consultation <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/services" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">View All Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20"><div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">{solarServices.map((service)=>{const Icon=service.icon; return <div key={service.title} className="rounded-[2rem] border border-white/10 bg-[#0a1321] p-8"><div className="mb-6 inline-flex rounded-2xl bg-white/5 p-4 text-orange-400"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-semibold text-white">{service.title}</h3><p className="mt-4 text-sm leading-7 text-white/60">{service.description}</p></div>})}</div></section>
      <SolarCTASection />
    </div>
  );
}
