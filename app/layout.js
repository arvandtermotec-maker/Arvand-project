import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

const siteUrl = "https://arvandtermotec.it";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arvand Termo Tec | HVAC e Ventilazione nel Nord Italia",
    template: "%s | Arvand Termo Tec",
  },
  description:
    "Arvand Termo Tec realizza impianti HVAC, ventilazione industriale, riscaldamento e raffrescamento per Venezia e in tutto il Nord Italia.",


};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta
          name="google-site-verification"
          content="dn-GBLrsQbd6D7dkkAWNx6_-NTHR9syDlgqOYNDUPWs"
        />
      </head>
      <body className="min-h-screen bg-[#05070b] text-white antialiased">
        <Header />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}