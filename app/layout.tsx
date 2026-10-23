import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sairaf Studio | Tecnologia & Desenvolvimento",
  description:
    "Desenvolvimento de sites, landing pages e soluções digitais sob medida para o seu negócio.",
  metadataBase: new URL("https://sairafstudio.com.br"),
  openGraph: {
    title: "Sairaf Studio | Tecnologia & Desenvolvimento",
    description:
      "Estratégia e tecnologia para transformar ideias em soluções digitais.",
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