import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { phoneDisplay, phoneHref } from "@/lib/site-copy";

export default function SolarCTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(59,130,246,0.08),rgba(255,255,255,0.03))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:p-12">
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div><p className="text-sm uppercase tracking-[0.35em] text-orange-400">Ready to Start?</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-5xl">Let’s build a stronger energy future for your project.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">From solar panel systems to integrated energy solutions, Arvand Termo Tec helps clients move toward efficiency, sustainability, and a more valuable building image.</p></div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8"><div className="space-y-4"><Link href="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition hover:translate-y-[-2px]">Request Solar Consultation <ArrowRight className="h-4 w-4" /></Link><a href={phoneHref} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"><PhoneCall className="h-4 w-4" />{phoneDisplay}</a></div></div>
        </div>
      </div>
    </section>
  );
}
