import { ArrowRight } from "lucide-react";
import { whatsappHref } from "@/lib/site-copy";

export default function WhatsAppFloat() {
  return (
    <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(249,115,22,0.35)] transition hover:translate-y-[-1px]" aria-label="Chat on WhatsApp">
      WhatsApp
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}
