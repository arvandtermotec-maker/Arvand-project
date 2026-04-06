import { northItalyCities, servicePages } from "@/lib/seo-data";

export default function sitemap() {
  const baseUrl = "https://arvandtermotec.it";
  const now = new Date();

  const corePages = [
    "",
    "/services",
    "/projects",
    "/about",
    "/contact",
    "/solar-energy",
    "/privacy-policy",
    "/cookie-policy",
    "/it/energia-solare",
    "/it/fotovoltaico-italia",
    "/it/climatizzazione-nord-italia",
    "/it/ventilazione-industriale",
    "/it/climatizzazione-residenziale"
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: now }));

  const cityPages = northItalyCities.map((city) => ({
    url: `${baseUrl}/service-areas/${city.slug}`,
    lastModified: now
  }));

  const serviceDetailPages = servicePages.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now
  }));

  return [...corePages, ...cityPages, ...serviceDetailPages];
}
