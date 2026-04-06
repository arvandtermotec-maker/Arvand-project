"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Servizi" },
  { href: "/projects", label: "Progetti" },
  { href: "/solar-energy", label: "Energia Solare" },
  { href: "/about", label: "Chi siamo" },
  { href: "/contact", label: "Contatti" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-sky-400/10 bg-[#05070b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-4 text-left" aria-label="Arvand Termo Tec home">
          <div className="flex h-14 items-center rounded-2xl border border-sky-400/15 bg-white/5 px-3 py-2 backdrop-blur-sm">
            <Image src="/logo.png" alt="Arvand Termo Tec logo" width={140} height={36} className="h-9 w-auto object-contain" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-[0.24em] text-white">ARVAND</div>
            <div className="text-xs tracking-[0.42em] text-sky-200/60">TERMO TEC</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {navItems.map((item)=><Link key={item.href} href={item.href} className="text-white/70 transition hover:text-sky-300">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-2xl border border-orange-400/35 bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(249,115,22,0.28)] transition hover:translate-y-[-1px] md:block">Richiedi consulenza</Link>
          <button onClick={() => setOpen((prev) => !prev)} className="rounded-xl border border-sky-400/10 bg-white/5 p-2.5 text-white lg:hidden" aria-label="Toggle menu">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      {open && <div className="border-t border-sky-400/10 bg-[#08101a] lg:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm">{navItems.map((item)=><Link key={item.href} href={item.href} className="text-white/80" onClick={() => setOpen(false)}>{item.label}</Link>)}</div></div>}
    </header>
  );
}
