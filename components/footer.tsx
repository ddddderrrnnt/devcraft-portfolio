import Link from "next/link";
import { SiteIcon } from "@/components/site-icon";

export function Footer() {
  return (
    <footer className="bg-[#f4f4f1] text-black">
      <div className="container-premium border-t border-black/20 py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr_.7fr_1fr]">
          <div>
            <div className="mono text-sm font-semibold uppercase">DEVCRAFT</div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-black/55">
              Самописные цифровые продукты: сайты, Telegram-сервисы, серверная логика, интеграции и сопровождение.
            </p>
            <div className="mt-7 flex gap-3">
              <Link href="https://t.me/fuckbuild" target="_blank" aria-label="Telegram" className="grid size-11 place-items-center border border-black/20 transition hover:bg-black hover:invert"><SiteIcon name="telegram" className="size-5" /></Link>
              <Link href="mailto:work@devcraft.com" aria-label="Email" className="grid size-11 place-items-center border border-black/20 transition hover:bg-black hover:invert"><SiteIcon name="mail" className="size-5" /></Link>
              <Link href="http://curatoroff.github.io" target="_blank" aria-label="GitHub" className="grid size-11 place-items-center border border-black/20 transition hover:bg-black hover:invert"><SiteIcon name="repository" className="size-5" /></Link>
            </div>
          </div>

          <div>
            <p className="section-label-dark">Навигация</p>
            <div className="mt-5 grid gap-3 text-sm text-black/60">
              <Link href="/#home" className="hover:text-black">Главная</Link>
              <Link href="/#projects" className="hover:text-black">Работы</Link>
              <Link href="/#services" className="hover:text-black">Услуги</Link>
              <Link href="/#process" className="hover:text-black">Процесс</Link>
            </div>
          </div>

          <div>
            <p className="section-label-dark">Формат</p>
            <div className="mt-5 grid gap-3 text-sm text-black/60">
              <span>UX/UI</span>
              <span>Frontend</span>
              <span>Backend</span>
              <span>Telegram</span>
            </div>
          </div>

          <div>
            <p className="section-label-dark">Контакты</p>
            <div className="mt-5 grid gap-3 text-sm text-black/60">
              <Link href="https://t.me/fuckbuild" target="_blank" className="hover:text-black">Telegram: @fuckbuild</Link>
              <Link href="http://curatoroff.github.io" target="_blank" className="hover:text-black">GitHub: curatoroff.github.io</Link>
              <Link href="mailto:work@devcraft.com" className="hover:text-black">Email: work@devcraft.com</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-black/20 pt-5 mono text-xs uppercase text-black/45 sm:flex-row sm:justify-between">
          <span>© 2026 DevCraft</span>
          <span>Hand-coded interface / no templates</span>
        </div>
      </div>
    </footer>
  );
}
