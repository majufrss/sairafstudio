import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sairaf Studio | Sites e Soluções Digitais",
  description:
    "Desenvolvimento de sites, landing pages e sistemas sob medida. A Sairaf Studio une tecnologia e visão de negócios para criar soluções digitais que ajudam empresas a crescer.",
  metadataBase: new URL("https://sairafstudio.com.br"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "Sairaf Studio | Sites e Soluções Digitais",
    description:
      "Desenvolvimento de sites, landing pages e sistemas sob medida. A Sairaf Studio une tecnologia e visão de negócios para criar soluções digitais que ajudam empresas a crescer.",
    type: "website",
    url: "https://sairafstudio.com.br",
    locale: "pt_BR",
    siteName: "Sairaf Studio"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sairaf Studio",
    url: "https://sairafstudio.com.br",
    description: "Desenvolvimento de sites, landing pages e sistemas sob medida para empresas de todo o Brasil.",
    areaServed: { "@type": "Country", name: "Brasil" },
    knowsAbout: ["Criação de sites", "Desenvolvimento de landing pages", "Desenvolvimento de softwares sob medida", "Desenvolvimento web"]
  };

  return (
    <html lang="pt-BR">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body>
    </html>
  );
}