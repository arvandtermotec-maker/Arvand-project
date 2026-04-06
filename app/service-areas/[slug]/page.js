import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { northItalyCities } from "@/lib/seo-data";

export function generateStaticParams() {
  return northItalyCities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const city = northItalyCities.find((item) => item.slug === params.slug);
  if (!city) return {};
  return {
    title: `HVAC in ${city.name}`,
    description: `${city.intro} Arvand Termo Tec serves ${city.name} and the wider ${city.region} market from Venice.`
  };
}

export default function ServiceAreaPage({ params }) {
  const city = northItalyCities.find((item) => item.slug === params.slug);
  if (!city) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `HVAC services in ${city.name}`,
    areaServed: city.name,
    provider: {
      "@type": "HVACBusiness",
      name: "Arvand Termo Tec",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Venice",
        addressRegion: "Veneto",
        addressCountry: "IT"
      }
    },
    serviceType: ["Industrial HVAC", "Residential HVAC", "Ventilation systems"]
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Service Area</p>
      <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">HVAC services in {city.name}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{city.intro}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0a1321] p-8">
          <div className="flex items-center gap-3 text-orange-400"><MapPin className="h-5 w-5" /> {city.name}, {city.region}</div>
          <h2 className="mt-4 text-2xl font-semibold text-white">What this page is built to rank for</h2>
          <ul className="mt-5 space-y-3 text-white/65">
            <li>• Industrial HVAC in {city.name}</li>
            <li>• Residential heating and cooling in {city.name}</li>
            <li>• Ventilation systems in {city.region}</li>
            <li>• HVAC installation near Venice and North Italy</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">Request a quotation</h2>
          <p className="mt-4 text-white/65">Contact Arvand Termo Tec for surveys, installations, renovations, and ventilation upgrades for homes, commercial units, and industrial facilities.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white">
            Contact our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
