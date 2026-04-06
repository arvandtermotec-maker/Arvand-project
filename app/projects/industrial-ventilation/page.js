import Link from "next/link";
import { ArrowRight, Factory, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Industrial Ventilation Project",
  description:
    "Industrial ventilation case study by Arvand Termo Tec for factories, warehouses and production facilities."
};

const points = [
  "Air extraction and duct layout planning",
  "Ventilation design for operational safety",
  "High-capacity airflow strategy",
  "Execution for reliable industrial performance"
];

export default function IndustrialVentilationProjectPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Industrial Ventilation</p>
      <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">Industrial Air Systems</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <img src="/projects/hvac-industrial.jpg" alt="Industrial ventilation" className="h-full w-full rounded-[2rem] border border-white/10 object-cover" />
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <Factory className="h-8 w-8 text-orange-400" />
          <p className="mt-6 text-white/65 leading-8">An industrial ventilation concept focused on airflow quality, extraction performance and operational reliability for demanding environments.</p>
          <div className="mt-8 space-y-4">{points.map((p)=><div key={p} className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" /><span className="text-white/65">{p}</span></div>)}</div>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white">Request a Similar Project <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </div>
  );
}
