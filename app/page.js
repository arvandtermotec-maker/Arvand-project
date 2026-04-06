import HeroSection from "@/components/hero-section";
import ClientLogosSection from "@/components/client-logos-section";
import AnimatedStatsSection from "@/components/animated-stats-section";
import TrustSection from "@/components/trust-section";
import PremiumServicesSection from "@/components/premium-services-section";
import LuxuryProjectShowcase from "@/components/luxury-project-showcase";
import TestimonialsSection from "@/components/testimonials-section";
import ServiceAreasSection from "@/components/service-areas-section";
import ProjectsGrid from "@/components/projects-grid";
import AboutPreview from "@/components/about-preview";
import ContactSection from "@/components/contact-section";
import { northItalyCities, northItalyRegions } from "@/lib/seo-data";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arvand Termo Tec",
  url: "https://arvandtermotec.it",
  logo: "https://arvandtermotec.it/logo.png",
  email: "info@arvandtermotec.it",
  telephone: "+39 351 974 2579",
  sameAs: ["https://arvandtermotec.com"]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Arvand Termo Tec",
  image: "https://arvandtermotec.it/og-image.jpg",
  telephone: "+39 351 974 2579",
  email: "info@arvandtermotec.it",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Venezia",
    addressRegion: "Veneto",
    addressCountry: "IT"
  },
  areaServed: northItalyRegions,
  url: "https://arvandtermotec.it",
  serviceArea: northItalyCities.map((city) => ({
    "@type": "City",
    name: city.name
  })),
  knowsAbout: [
    "HVAC industriale",
    "HVAC commerciale",
    "HVAC residenziale",
    "Ventilazione industriale",
    "Impianti di riscaldamento",
    "Impianti di raffrescamento"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Lavorate solo a Venezia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Arvand Termo Tec opera da Venezia e serve tutto il Nord Italia, inclusi Veneto, Lombardia, Emilia-Romagna e Friuli-Venezia Giulia."
      }
    },
    {
      "@type": "Question",
      name: "Seguite sia progetti industriali che residenziali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sì. L'azienda è posizionata per impianti industriali, commerciali e residenziali, con servizi di ventilazione, riscaldamento e raffrescamento."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeroSection />
      <ClientLogosSection />
      <AnimatedStatsSection />
      <TrustSection lang="it" />
      <PremiumServicesSection />
      <LuxuryProjectShowcase />
      <TestimonialsSection />
      <ServiceAreasSection />
      <ProjectsGrid />
      <AboutPreview lang="it" />
      <ContactSection lang="it" />
    </>
  );
}
