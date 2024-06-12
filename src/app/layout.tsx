import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair_display = Playfair_Display({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "O Plano da Virada - Super Nova MKT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${playfair_display.className}`}>{children}</body>
    </html>
  );
}
