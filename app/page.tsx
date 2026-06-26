"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* HERO - clean, direct, like Anix-Sec. NOTHING above the headline */}
      <section className="pt-24 pb-20">
        <div className="container-premium">
          <div className="max-w-[680px]">
            <h1 className="text-[56px] sm:text-[72px] leading-[0.9] font-semibold tracking-[-3.8px] mb-6">
              Сайты и сервисы,<br />написанные вручную.
            </h1>

            <p className="text-xl text-white/65 max-w-md mb-10">
              Проектирую и собираю цифровые продукты с нуля.<br />Без конструкторов и лишнего шума.
            </p>

            <a 
              href="https://t.me/fuckbuild" 
              target="_blank"
              className="inline-block border border-white/25 hover:bg-white hover:text-black px-8 py-3 text-sm tracking-[0.5px] transition"
            >
              Обсудить проект →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES - minimal */}
      <section id="services" className="py-16 border-t border-white/10">
        <div className="container-premium">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[2px] text-white/40 mb-3">01</div>
            <h2 className="text-4xl font-semibold tracking-[-1.5px] mb-8">Что я делаю</h2>
            
            <div className="space-y-8 text-[15px]">
              <div>
                <div className="font-medium mb-1">Сайты и веб-платформы</div>
                <div className="text-white/60">Чистые, быстрые, без шаблонов.</div>
              </div>
              <div>
                <div className="font-medium mb-1">Telegram-сервисы</div>
                <div className="text-white/60">Полноценные боты с логикой и базой.</div>
              </div>
              <div>
                <div className="font-medium mb-1">Backend и интеграции</div>
                <div className="text-white/60">Серверная логика, API, автоматизация.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS - minimal */}
      <section id="process" className="py-16 border-t border-white/10">
        <div className="container-premium">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[2px] text-white/40 mb-3">02</div>
            <h2 className="text-4xl font-semibold tracking-[-1.5px] mb-8">Как работаю</h2>
            
            <div className="space-y-6 text-sm text-white/70">
              <div>01 — Разбираем задачу</div>
              <div>02 — Проектируем структуру</div>
              <div>03 — Собираем вручную</div>
              <div>04 — Запускаем</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT - ONLY Telegram */}
      <section id="contact" className="py-20 border-t border-white/10">
        <div className="container-premium">
          <div className="max-w-md">
            <div className="text-xs uppercase tracking-[2px] text-white/40 mb-3">03</div>
            <h2 className="text-4xl font-semibold tracking-[-1.5px] mb-6">Готов обсудить проект.</h2>
            
            <a 
              href="https://t.me/fuckbuild" 
              target="_blank"
              className="inline-block text-lg hover:underline"
            >
              Написать в Telegram →
            </a>
            <div className="mt-3 text-xs text-white/40">Только Telegram. Остальное не нужно.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
