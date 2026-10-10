import type { ReactNode } from "react";
import { Inter, Anton, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
});

export const metadata = {
  title: "GRAB YOUR FOOD — Flame-Grilled Greatness",
  description:
    "100% flame-grilled, stacked by hand, and packed with attitude.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${anton.variable} ${archivo.variable} bg-brand-bg text-brand-light font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}