import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sairaf Studio | Sites e Soluções Digitais",
  description:
    "Desenvolvimento de sites, landing pages e sistemas sob medida. A Sairaf Studio une tecnologia e visão de negócios para criar soluções digitais que ajudam empresas a crescer.",
  metadataBase: new URL("https://sairafstudio.com.br"),
  openGraph: {
    title: "Sairaf Studio | Sites e Soluções Digitais",
    description:
      "Desenvolvimento de sites, landing pages e sistemas sob medida. A Sairaf Studio une tecnologia e visão de negócios para criar soluções digitais que ajudam empresas a crescer.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}