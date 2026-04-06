"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { copy } from "@/lib/site-copy";

export default function FAQSection({ lang = "it" }) {
  const c = copy[lang];
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-400">FAQ</p>
      <h3 className="mt-4 text-3xl font-semibold">{c.faqTitle}</h3>
      <div className="mt-8 space-y-4">{c.faq.map((item, idx)=><div key={item.q} className="rounded-2xl border border-white/10 bg-[#0d1727]"><button onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)} type="button" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"><span className="font-medium text-white">{item.q}</span><ChevronDown className={`h-5 w-5 text-sky-400 transition ${openFaq === idx ? "rotate-180" : ""}`} /></button>{openFaq === idx && <div className="px-5 pb-5 text-sm leading-7 text-white/60">{item.a}</div>}</div>)}</div>
    </section>
  );
}
