import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Wind } from "lucide-react";
import { phoneDisplay, phoneHref } from "@/lib/site-copy";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[#04070c]" />
      <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,12,0.96)_0%,rgba(4,7,12,0.84)_38%,rgba(4,7,12,0.56)_70%,rgba(4,7,12,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.20),transparent_28%)]" />
      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            Sede a Venezia • Operativi in tutto il Nord Italia
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-white md:text-6xl xl:text-7xl">
            Impianti HVAC, climatizzazione e ventilazione per il Nord Italia.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            Arvand Termo Tec realizza soluzioni per impianti industriali, commerciali e residenziali da Venezia verso Veneto,
            Lombardia, Emilia-Romagna, Friuli-Venezia Giulia e le principali aree del Nord Italia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition hover:translate-y-[-2px]">
              Richiedi un preventivo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="rounded-2xl border border-sky-400/15 bg-sky-500/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-sky-500/15">
              Scopri i servizi
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-sky-400/12 bg-white/5 p-2">
                <ShieldCheck className="h-4 w-4 text-orange-400" />
              </div>
              <span>Progetti industriali, commerciali e residenziali</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-sky-400/12 bg-white/5 p-2">
                <Wind className="h-4 w-4 text-sky-400" />
              </div>
              <span>Riscaldamento, raffrescamento, ventilazione e trattamento aria</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-sky-400/10 bg-white/6 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="relative rounded-[1.6rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/50">Sede operativa</p>
                  <div className="mt-2 flex items-center gap-2 text-lg font-medium text-white">
                    <MapPin className="h-4 w-4 text-orange-400" /> Venezia
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">Presenza locale in Veneto con copertura tecnica in tutto il Nord Italia.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/50">Contatto diretto</p>
                  <a href={phoneHref} className="mt-2 block text-lg font-medium text-white transition hover:text-sky-300">
                    {phoneDisplay}
                  </a>
                  <p className="mt-3 text-sm leading-6 text-white/60">Contatto rapido per sopralluoghi, preventivi e confronti tecnici.</p>
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#09111f]">
                <img src="/hero-poster.jpg" alt="Impianti HVAC industriali e residenziali nel Nord Italia" className="aspect-[16/10] h-full w-full object-cover opacity-80" />
              </div>
              <div className="mt-5 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-4 text-sm leading-6 text-white/80">
                Struttura SEO forte per Venezia, Milano, Verona, Padova, Bologna, Brescia e altri mercati strategici del Nord Italia.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
