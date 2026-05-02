import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import PageWipeTransition from "@/components/PageWipeTransition";
import "./globals.css";

// ─── FONT — swap this out per project ───────────────────────
const font = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-primary",
  display: "swap",
});

// ─── METADATA — update per project ──────────────────────────
export const metadata = {
  title: "Northbound",
  description: "Northbound — curated goods for the journey ahead.",
  openGraph: {
    title: "Northbound",
    description: "Northbound — curated goods for the journey ahead.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <main id="main">{children}</main>
        <Footer variant="light"/>
        <PageWipeTransition />
      </body>
    </html>
  );
}