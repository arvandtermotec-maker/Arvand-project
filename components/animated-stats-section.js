"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Anni di approccio tecnico" },
  { value: 48, suffix: "+", label: "Flussi pronti per il progetto" },
  { value: 100, suffix: "%", label: "Attenzione a immagine e qualità" },
  { value: 24, suffix: "/7", label: "Reattività orientata al cliente" }
];

function CountUp({ target, suffix = "", duration = 1400 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(16, Math.floor(duration / Math.max(target, 1)));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <span>{count}{suffix}</span>;
}

export default function AnimatedStatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10 text-center"><p className="text-sm uppercase tracking-[0.35em] text-sky-400">Metriche premium</p><h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Numeri che trasmettono affidabilità a colpo d'occhio</h2></div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{stats.map((item)=><div key={item.label} className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)]"><div className="text-4xl font-semibold text-white md:text-5xl"><CountUp target={item.value} suffix={item.suffix} /></div><div className="mt-3 text-sm tracking-[0.08em] text-white/55">{item.label}</div></div>)}</div>
    </section>
  );
}
