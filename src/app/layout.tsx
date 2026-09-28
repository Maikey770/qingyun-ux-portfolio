import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

// ─── FONT LOADING ────────────────────────────────────────────────────────────
// All fonts loaded via next/font for optimal performance.
// To swap display font: change this import and the CSS variable below.

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Qingyun Yao — Product & UX Designer",
    template: "%s — Qingyun Yao",
  },
  description:
    "I design human-centered digital experiences, combining user research, interaction design, and emerging technologies to solve real-world problems.",
  keywords: [
    "Product & UX Designer",
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Cornell",
    "Penn State",
    "HCI",
    "AI Design",
  ],
  authors: [{ name: "Qingyun Yao" }],
  creator: "Qingyun Yao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qingyunyao.vercel.app",
    siteName: "Qingyun Yao",
    title: "Qingyun Yao — Product & UX Designer",
    description:
      "I design human-centered digital experiences, combining user research, interaction design, and emerging technologies to solve real-world problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qingyun Yao — Product & UX Designer",
    description: "I design human-centered digital experiences, combining user research, interaction design, and emerging technologies to solve real-world problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F6F1",
};

// ─── ROOT LAYOUT ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        <Navigation />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
