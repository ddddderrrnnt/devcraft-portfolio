import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CursorGlow } from "@/components/cursor-glow";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://devcraft.dev"),
  title: {
    default: "DevCraft — самописные сайты, Telegram-сервисы и backend",
    template: "%s — DevCraft",
  },
  description:
    "Проектирование и разработка цифровых продуктов вручную: сайты, Telegram-сервисы, backend, интеграции и автоматизация бизнес-процессов.",
  keywords: [
    "full-stack разработка",
    "разработка сайтов",
    "Telegram bot developer",
    "backend разработка",
    "автоматизация бизнеса",
    "Next.js разработчик",
  ],
  authors: [{ name: "DevCraft" }],
  creator: "DevCraft",
  openGraph: {
    title: "DevCraft — самописные цифровые продукты",
    description: "Сайты, Telegram-сервисы, backend, интеграции и сопровождение.",
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
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-[#050505]">
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
