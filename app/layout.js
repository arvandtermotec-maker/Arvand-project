import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

const siteUrl = "https://arvandtermotec.it";

export const metadata = {verification:
  google:
 "dn-GBLrsQbd6D7dkkAWNx6_-NTHR9syDlgqOYNDUPWs"
},//
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arvand Termo Tec | HVAC e Ventilazione nel Nord Italia",
    template: "%s | Arvand Termo Tec"
  },
  description:
    "Arvand Termo Tec realizza impianti HVAC, ventilazione industriale, riscaldamento e raffrescamento per clienti industriali e residenziali a Venezia e in tutto il Nord Italia.",
  applicationName: "Arvand Termo Tec",
  category: "HVAC Engineering",
  alternates: {
    canonical: siteUrl,
    languages: {
      "it-IT": siteUrl
    }
  },
  keywords: [
    "impianti HVAC Nord Italia",
    "climatizzazione Venezia",
    "impianti climatizzazione Nord Italia",
    "ventilazione industriale Veneto",
    "riscaldamento e raffrescamento Venezia",
    "HVAC Lombardia",
    "climatizzazione commerciale Veneto",
    "impianti residenziali Nord Italia"
  ],
  openGraph: {
    title: "Arvand Termo Tec | HVAC e Ventilazione nel Nord Italia",
    description:
      "Soluzioni HVAC per case, aziende e industria da Venezia a tutto il Nord Italia.",
    url: siteUrl,
    siteName: "Arvand Termo Tec",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arvand Termo Tec HVAC Nord Italia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvand Termo Tec",
    description:
      "HVAC, ventilazione e climate engineering per Venezia e Nord Italia.",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-[#05070b] text-white antialiased">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_26%),linear-gradient(to_bottom,#05070b,#09111a_40%,#030508)]" />
        <Header />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>

  


