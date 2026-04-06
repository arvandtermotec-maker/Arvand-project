import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-sky-400/8 bg-[#030508]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>© 2026 Arvand Termo Tec</div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="hover:text-sky-300">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-sky-300">Cookie Policy</Link>
          <Link href="/contact" className="hover:text-sky-300">Contatti</Link>
        </div>
      </div>
    </footer>
  );
}
