import type { Metadata } from "next";
import { Outfit, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ToastProvider } from "@nebula/ui";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nebula UI · Production-ready cinematic React components",
  description:
    "A premium React component library with polished primitives, motion-rich sections, animated backgrounds, and copy-paste demos.",
  metadataBase: new URL("https://nebula-ui.dev"),
  openGraph: {
    title: "Nebula UI",
    description:
      "Cinematic React components, ready to ship. Motion-rich, accessible, and beautiful by default.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ToastProvider position="bottom-right">
          <SmoothScroll>
            <SiteNav />
            <main>{children}</main>
            <SiteFooter />
          </SmoothScroll>
        </ToastProvider>
      </body>
    </html>
  );
}
