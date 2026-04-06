import { Globe, MapPin, Phone, ShieldCheck } from "lucide-react";
import { copy, domainPrimary, domainSecondary, phoneDisplay, phoneHref } from "@/lib/site-copy";

export default function AboutPreview({ lang = "it" }) {
  const c = copy[lang];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div><p className="text-sm uppercase tracking-[0.3em] text-orange-400">{c.nav.about}</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold md:text-5xl">{c.aboutTitle}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{c.aboutText}</p><p className="mt-4 max-w-2xl text-lg leading-8 text-white/55">{c.aboutBody}</p></div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6"><MapPin className="h-5 w-5 text-orange-400" /><div className="mt-4 text-sm text-white/45">{c.locationLabel}</div><div className="mt-1 text-lg font-semibold">{c.locationValue}</div></div><div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6"><Phone className="h-5 w-5 text-orange-400" /><div className="mt-4 text-sm text-white/45">Telefono</div><a href={phoneHref} className="mt-1 block text-lg font-semibold transition hover:text-sky-300">{phoneDisplay}</a></div><div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 sm:col-span-2"><Globe className="h-5 w-5 text-orange-400" /><div className="mt-4 text-sm text-white/45">{c.domainsLabel}</div><div className="mt-1 flex flex-wrap gap-3 text-lg font-semibold"><a href={domainPrimary} target="_blank" rel="noreferrer" className="transition hover:text-sky-300">arvandtermotec.it</a><span className="text-white/25">•</span><a href={domainSecondary} target="_blank" rel="noreferrer" className="transition hover:text-sky-300">arvandtermotec.com</a></div></div><div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 sm:col-span-2"><ShieldCheck className="h-5 w-5 text-orange-400" /><div className="mt-4 text-sm text-white/45">Posizionamento</div><div className="mt-1 text-lg font-semibold">Presentazione premium HVAC per il mercato italiano</div></div></div>
      </div>
    </section>
  );
}
