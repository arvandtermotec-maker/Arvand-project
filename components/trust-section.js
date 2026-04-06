import { CheckCircle2 } from "lucide-react";
import { copy } from "@/lib/site-copy";

export default function TrustSection({ lang = "it" }) {
  const c = copy[lang];
  return (
    <section className="border-y border-sky-400/8 bg-white/4">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div><p className="text-sm uppercase tracking-[0.3em] text-sky-400">Brand presence</p><h2 className="mt-4 text-3xl font-semibold md:text-4xl">{c.trustTitle}</h2><p className="mt-5 max-w-xl text-lg leading-8 text-white/65">{c.trustText}</p></div>
        <div className="grid gap-4 sm:grid-cols-2">{c.trustItems.map((item)=><div key={item} className="rounded-3xl border border-white/10 bg-[#0d1727] p-6"><div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-orange-400" /><span className="text-white/85">{item}</span></div></div>)}</div>
      </div>
    </section>
  );
}
