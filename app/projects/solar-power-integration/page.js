import Link from "next/link";
import { ArrowRight, SunMedium, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Solar Power Integration Project",
  description:
    "Solar power integration case study by Arvand Termo Tec for modern energy-efficient buildings."
};

const items = [
  "Photovoltaic layout planning",
  "Energy efficiency positioning",
  "Clean visual integration with building systems",
  "Modern renewable presentation for clients"
];

export default function SolarPowerIntegrationPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Solar Energy</p>
      <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Solar Power Integration</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <img src="/projects/solar-panels.jpg" alt="Solar power integration" className="h-full w-full rounded-[2rem] border border-white/10 object-cover" />
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <SunMedium className="h-8 w-8 text-orange-400" />
          <p className="mt-6 text-white/65 leading-8">A renewable-energy showcase designed to communicate sustainability, energy awareness and premium modern building value.</p>
          <div className="mt-8 space-y-4">{items.map((p)=><div key={p} className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" /><span className="text-white/65">{p}</span></div>)}</div>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white">Request a Similar Project <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  );
}
