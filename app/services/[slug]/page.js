import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/lib/seo-data";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const service = servicePages.find((item) => item.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description
  };
}

export default function ServiceDetailPage({ params }) {
  const service = servicePages.find((item) => item.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
      <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Service Detail</p>
      <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{service.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{service.description}</p>
      <div className="mt-10 rounded-[2rem] border border-white/10 bg-[#0a1321] p-8">
        <h2 className="text-2xl font-semibold text-white">North Italy SEO-ready service page</h2>
        <p className="mt-4 text-white/65">This page supports a cleaner internal-linking structure and gives Google a dedicated destination for a key service category.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 text-white/70">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Local keyword targeting for Venice and North Italy</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">Clear relevance for industrial, commercial and residential search intent</div>
        </div>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white">
          Request Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
