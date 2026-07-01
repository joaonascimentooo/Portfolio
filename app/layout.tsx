import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Nascimento | Portfólio",
  description: "Portfólio de projetos de João Nascimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
