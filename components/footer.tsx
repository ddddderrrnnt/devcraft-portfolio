import Link from "next/link";
import { GithubIcon, MailIcon, Spark, TelegramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="container-premium py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
          <div>
            <Link href="/#home" className="inline-flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full border border-gold/30 bg-gold/10 text-champagne">
                <Spark className="size-4" />
              </span>
              <span className="text-sm font-semibold">DevCraft</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
              Разработка цифровых продуктов, которые работают на результат: сайты, боты, AI-агенты и автоматизация.
            </p>
            <div className="mt-6 flex gap-3 text-white/50">
              <Link href="https://t.me/fuckbuild" target="_blank" aria-label="Telegram" className="grid size-10 place-items-center rounded-full border border-white/10 transition hover:border-gold/40 hover:text-champagne"><TelegramIcon className="size-4" /></Link>
              <Link href="http://curatoroff.github.io" target="_blank" aria-label="GitHub" className="grid size-10 place-items-center rounded-full border border-white/10 transition hover:border-gold/40 hover:text-champagne"><GithubIcon className="size-4" /></Link>
              <Link href="mailto:work@devcraft.com" aria-label="Email" className="grid size-10 place-items-center rounded-full border border-white/10 transition hover:border-gold/40 hover:text-champagne"><MailIcon className="size-4" /></Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/30">Навигация</p>
            <div className="mt-5 grid gap-3 text-sm text-white/50">
              <Link href="/#home" className="transition hover:text-champagne">Главная</Link>
              <Link href="/#projects" className="transition hover:text-champagne">Работы</Link>
              <Link href="/#services" className="transition hover:text-champagne">Услуги</Link>
              <Link href="/#process" className="transition hover:text-champagne">Процесс</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/30">Услуги</p>
            <div className="mt-5 grid gap-3 text-sm text-white/50">
              <Link href="/#services" className="transition hover:text-champagne">Веб-разработка</Link>
              <Link href="/#services" className="transition hover:text-champagne">Telegram-боты</Link>
              <Link href="/#services" className="transition hover:text-champagne">AI-решения</Link>
              <Link href="/#services" className="transition hover:text-champagne">Автоматизация</Link>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/30">Контакты</p>
            <div className="mt-5 grid gap-3 text-sm text-white/50">
              <Link href="https://t.me/fuckbuild" target="_blank" className="transition hover:text-champagne">Telegram: @fuckbuild</Link>
              <Link href="http://curatoroff.github.io" target="_blank" className="transition hover:text-champagne">GitHub: curatoroff.github.io</Link>
              <Link href="mailto:work@devcraft.com" className="transition hover:text-champagne">Email: work@devcraft.com</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 DevCraft. Все права защищены.</span>
          <span>Designed as a premium digital product.</span>
        </div>
      </div>
    </footer>
  );
}
