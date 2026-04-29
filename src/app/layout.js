import { Inter } from "next/font/google";
import "./globals.css";

// ─── FONT — swap this out per project ───────────────────────
const font = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

// ─── METADATA — update per project ──────────────────────────
export const metadata = {
  title: "Project Title",
  description: "Project description",
  openGraph: {
    title: "Project Title",
    description: "Project description",
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
      </body>
    </html>
  );
}