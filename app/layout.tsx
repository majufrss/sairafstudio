import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sairafstudio.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Desenvolvimento Web: Sites e Sistemas | Sairaf Studio",
  description:
    "Desenvolvimento de sites profissionais, landing pages e sistemas sob medida para empresas de todo o Brasil. Atendimento 100% remoto pela Sairaf Studio.",
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
    title: "Desenvolvimento Web: Sites e Sistemas | Sairaf Studio",
    description:
      "Sites profissionais, landing pages e sistemas sob medida para empresas de todo o Brasil. Atendimento 100% remoto pela Sairaf Studio.",
    type: "website",
    url: siteUrl,
    locale: "pt_BR",
    siteName: "Sairaf Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites e Landing Pages | Sairaf Studio",
    description:
      "Sites profissionais, landing pages e sistemas sob medida para empresas de todo o Brasil. Atendimento 100% remoto pela Sairaf Studio.",
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
      "Desenvolvimento de sites profissionais, landing pages e sistemas sob medida para empresas de todo o Brasil. Atendimento 100% remoto pela Sairaf Studio.",
    areaServed: [
      { "@type": "City", name: "São José", containedInPlace: { "@type": "State", name: "Santa Catarina" } },
      { "@type": "City", name: "Florianópolis", containedInPlace: { "@type": "State", name: "Santa Catarina" } },
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
