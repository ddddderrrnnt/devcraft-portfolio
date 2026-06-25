import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CursorGlow } from "@/components/cursor-glow";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://devcraft.dev"),
  title: {
    default: "DevCraft — премиальная разработка сайтов, Telegram-ботов и AI-решений",
    template: "%s — DevCraft",
  },
  description:
    "Создаю цифровые продукты, которые работают на бизнес: сайты, Telegram-боты, AI-агенты, автоматизации и интеграции.",
  keywords: [
    "Next.js разработчик",
    "Telegram bot developer",
    "AI agents",
    "full-stack разработка",
    "премиальный сайт",
    "автоматизация бизнеса",
  ],
  authors: [{ name: "DevCraft" }],
  creator: "DevCraft",
  openGraph: {
    title: "DevCraft — цифровые продукты, которые работают на бизнес",
    description: "Премиальная full-stack разработка сайтов, Telegram-ботов и AI-решений.",
    type: "website",
    locale: "ru_RU",
    siteName: "DevCraft",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-noir">
      <body>
        <SmoothScroll />
        <CursorGlow />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
