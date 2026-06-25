import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";

export function Footer() {
  return (
    <footer className="paper">
      <div className="container-premium py-14 sm:py-20">
        <div className="line-dark mb-10" />
        <div className="grid gap-12 lg:grid-cols-[1.35fr_.7fr_.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="block size-2 rounded-full bg-black" />
              <span className="mono text-xs font-semibold uppercase tracking-[0.08em]">DevCraft</span>
            </div>
            <p className="mt-6 max-w-md text-base leading-7 text-black/55">
              Самописные цифровые продукты: сайты, Telegram-сервисы, серверная логика, интеграции и сопровождение после запуска.
            </p>
            <div className="mt-7 flex gap-3">
              <Link href="https://t.me/fuckbuild" target="_blank" aria-label="Telegram" className="grid size-11 place-items-center border border-black/10 bg-white transition hover:bg-black hover:invert"><SiteIcon name="telegram" className="size-5" /></Link>
              <Link href="mailto:work@devcraft.com" aria-label="Email" className="grid size-11 place-items-center border border-black/10 bg-white transition hover:bg-black hover:invert"><SiteIcon name="mail" className="size-5" /></Link>
              <Link href="http://curatoroff.github.io" target="_blank" aria-label="GitHub" className="grid size-11 place-items-center border border-black/10 bg-white transition hover:bg-black hover:invert"><SiteIcon name="repository" className="size-5" /></Link>
            </div>
          </div>

          <div>
            <p className="label-dark">Навигация</p>
            <div className="mt-5 grid gap-3 text-sm text-black/55">
              <Link href="/#home" className="hover:text-black">Главная</Link>
              <Link href="/#projects" className="hover:text-black">Работы</Link>
              <Link href="/#services" className="hover:text-black">Услуги</Link>
              <Link href="/#process" className="hover:text-black">Процесс</Link>
            </div>
          </div>

          <div>
            <p className="label-dark">Работа</p>
            <div className="mt-5 grid gap-3 text-sm text-black/55">
              <span>UX/UI</span>
              <span>Frontend</span>
              <span>Backend</span>
              <span>Telegram</span>
            </div>
          </div>

          <div>
            <p className="label-dark">Контакты</p>
            <div className="mt-5 grid gap-3 text-sm text-black/55">
              <Link href="https://t.me/fuckbuild" target="_blank" className="hover:text-black">Telegram: @fuckbuild</Link>
              <Link href="http://curatoroff.github.io" target="_blank" className="hover:text-black">GitHub: curatoroff.github.io</Link>
              <Link href="mailto:work@devcraft.com" className="hover:text-black">Email: work@devcraft.com</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-6 mono text-[11px] uppercase text-black/40 sm:flex-row sm:justify-between">
          <span>© 2026 DevCraft</span>
          <span>Hand-coded interface / no templates</span>
        </div>
      </div>
    </footer>
  );
}
