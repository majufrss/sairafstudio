import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sairafstudio.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Criação de Sites em São José e Florianópolis | Sairaf Studio",
  description:
    "Criação de sites profissionais, landing pages e sistemas sob medida. Atendimento remoto para empresas de São José, Florianópolis, Grande Florianópolis e de todo o Brasil.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Criação de Sites em São José e Florianópolis | Sairaf Studio",
    description:
      "Sites profissionais, landing pages e sistemas sob medida para empresas. Atendimento remoto em São José, Florianópolis, Grande Florianópolis e em todo o Brasil.",
    type: "website",
    url: siteUrl,
    locale: "pt_BR",
    siteName: "Sairaf Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites em São José e Florianópolis | Sairaf Studio",
    description:
      "Sites profissionais, landing pages e sistemas sob medida para empresas. Atendimento remoto em São José, Florianópolis, Grande Florianópolis e em todo o Brasil.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sairaf Studio",
    url: siteUrl,
    description:
      "Criação de sites profissionais, landing pages e sistemas sob medida. Atendimento remoto para empresas de São José, Florianópolis, Grande Florianópolis e de todo o Brasil.",
    areaServed: [
      { "@type": "City", name: "São José", containedInPlace: { "@type": "State", name: "Santa Catarina" } },
      { "@type": "City", name: "Florianópolis", containedInPlace: { "@type": "State", name: "Santa Catarina" } },
      { "@type": "AdministrativeArea", name: "Grande Florianópolis" },
      { "@type": "Country", name: "Brasil" },
    ],
    knowsAbout: [
      "Criação de sites profissionais",
      "Desenvolvimento de landing pages",
      "Desenvolvimento de sistemas sob medida",
      "Desenvolvimento web",
      "Experiência do usuário",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Criação de sites profissionais",
          serviceType: "Desenvolvimento de sites institucionais",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desenvolvimento de landing pages",
          serviceType: "Landing pages para empresas e prestadores de serviços",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sistemas sob medida",
          serviceType: "Desenvolvimento de software personalizado",
        },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
