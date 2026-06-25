"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
      {/* HERO — clean, direct, like Anix */}
      <section className="pt-24 sm:pt-32 pb-20 min-h-[90vh] flex items-center">
        <div className="container-premium">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="text-xs tracking-[3px] text-white/40">HAND-CODED • NO TEMPLATES</span>
            </div>

            <h1 className="text-[56px] sm:text-[78px] leading-[0.92] font-semibold tracking-[-3.5px] mb-8">
              Сайты и сервисы,<br />написанные вручную.
            </h1>

            <p className="max-w-md text-xl text-white/60 mb-10">
              Проектирую и собираю цифровые продукты с нуля.<br />Без конструкторов и лишнего шума.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://t.me/fuckbuild"
                target="_blank"
                className="btn btn-white text-sm px-8"
              >
                Обсудить проект
              </Link>
              <Link
                href="/projects"
                className="btn text-sm px-8"
              >
                Посмотреть кейсы
              </Link>
            </div>

            <p className="mt-12 text-xs text-white/40">
              Всё в меню — кейсы доступны только оттуда
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES — clean and minimal */}
      <section id="services" className="py-16 border-t border-white/10">
        <div className="container-premium">
          <div className="grid md:grid-cols-12 gap-x-10">
            <div className="md:col-span-4">
              <p className="section-label mb-3">01</p>
              <h2 className="text-5xl font-semibold tracking-[-2.4px]">Что делаю</h2>
            </div>

            <div className="md:col-span-8 mt-10 md:mt-0 space-y-8">
              {[
                { title: "Сайты и веб-платформы", desc: "Чистые, быстрые, без шаблонов. Сильная структура и аккуратный интерфейс." },
                { title: "Telegram-сервисы", desc: "Полноценные боты с логикой, базой данных и персональными сценариями." },
                { title: "Backend и интеграции", desc: "Серверная логика, API, базы данных, автоматизация процессов." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 border-b border-white/10 pb-8 last:border-none last:pb-0">
                  <div className="w-8 flex-shrink-0 text-right text-xs pt-1 text-white/40 font-mono">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="text-2xl font-medium tracking-tight mb-2">{item.title}</div>
                    <p className="text-white/55 max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — minimal */}
      <section id="process" className="py-16 border-t border-white/10">
        <div className="container-premium">
          <div className="grid md:grid-cols-12 gap-x-10">
            <div className="md:col-span-4">
              <p className="section-label mb-3">02</p>
              <h2 className="text-5xl font-semibold tracking-[-2.4px]">Как работаю</h2>
            </div>

            <div className="md:col-span-8 mt-8 md:mt-0">
              <div className="space-y-10 text-[15px]">
                {[
                  { num: "01", title: "Разбираем задачу", text: "Цель, аудитория, ограничения. Без воды." },
                  { num: "02", title: "Проектируем структуру", text: "Сценарий, навигация, интерфейс и логика." },
                  { num: "03", title: "Собираем вручную", text: "Чистый код. Без лишних библиотек." },
                  { num: "04", title: "Запускаем", text: "Деплой, SEO, стабильность." },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6">
                    <div className="font-mono text-white/30 w-8 pt-1">{step.num}</div>
                    <div>
                      <div className="font-medium">{step.title}</div>
                      <div className="text-white/60 mt-1">{step.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — only Telegram */}
      <section id="contact" className="py-20 border-t border-white/10">
        <div className="container-premium max-w-3xl">
          <p className="section-label mb-2">03</p>
          <h2 className="text-5xl font-semibold tracking-[-2.2px] mb-6">
            Готов обсудить проект.
          </h2>
          <p className="text-xl text-white/70 max-w-md mb-8">
            Напиши в Telegram — разберём задачу и сроки.
          </p>

          <a
            href="https://t.me/fuckbuild"
            target="_blank"
            className="btn btn-white inline-flex px-9 text-base"
          >
            Написать в Telegram →
          </a>

          <div className="mt-16 text-xs text-white/40">
            Только Telegram. Остальное не нужно.
          </div>
        </div>
      </section>

      {/* Subtle footer hint */}
      <div className="pb-14 text-center text-xs text-white/30">
        Открой меню справа, чтобы увидеть кейсы
      </div>
    </main>
  );
}
