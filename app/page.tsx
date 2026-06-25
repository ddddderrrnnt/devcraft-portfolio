import Image from "next/image";
import Link from "next/link";
import { GsapEffects } from "@/components/gsap-effects";
import { HeroObject } from "@/components/hero-object";
import { ArrowRight, ArrowUpRight, CodeIcon, OrbitIcon, ShieldIcon, Spark, TelegramIcon } from "@/components/icons";
import { PremiumButton } from "@/components/premium-button";
import { Reveal } from "@/components/reveal";
import { featuredProjects, services, technologies } from "@/lib/projects";
import { assetPath } from "@/lib/assets";

const process = [
  { step: "01", title: "Анализ", text: "Изучаю задачу, аудиторию, бизнес-цели и ограничения проекта." },
  { step: "02", title: "Проектирование", text: "Собираю структуру, сценарии, прототипы и логику продукта." },
  { step: "03", title: "Разработка", text: "Пишу чистый код, подключаю backend, API, ботов и AI-слой." },
  { step: "04", title: "Тестирование", text: "Проверяю адаптив, скорость, edge-cases, формы и интеграции." },
  { step: "05", title: "Запуск", text: "Деплой, аналитика, SEO, мониторинг и поддержка после релиза." },
];

const faqs = [
  {
    q: "Сколько времени занимает проект?",
    a: "Небольшой сайт можно запустить за 1–2 недели. Сложный web-продукт, бот или AI-система обычно занимают 3–8 недель — зависит от сценариев и интеграций.",
  },
  {
    q: "Можно ли сделать дизайн и разработку под ключ?",
    a: "Да. Я закрываю весь цикл: продуктовая структура, UI/UX, frontend, backend, AI/API-интеграции, деплой, SEO и сопровождение.",
  },
  {
    q: "Работаешь с существующими проектами?",
    a: "Да. Можно улучшить интерфейс, переписать архитектуру, ускорить сайт, добавить Telegram-бота, AI-агента или автоматизировать процессы.",
  },
  {
    q: "Что нужно для старта?",
    a: "Достаточно коротко описать задачу, цель, примеры и сроки. После этого я предложу структуру решения, этапы и формат работы.",
  },
];

export default function Home() {
  return (
    <main id="home" className="overflow-hidden">
      <GsapEffects />

      <section className="relative min-h-screen pt-28 sm:pt-36 lg:pt-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[160px]" />
          <div className="absolute right-[-18rem] top-28 h-[44rem] w-[44rem] rounded-full border border-gold/10" />
          <div className="absolute right-[-12rem] top-40 h-[28rem] w-[28rem] rounded-full border border-white/5" />
        </div>

        <div className="container-premium grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative z-10 pb-10 lg:pb-20">
            <Reveal>
              <div className="glass mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-xs text-white/60">
                <span className="grid size-5 place-items-center rounded-full bg-gold/10 text-champagne"><Spark className="size-3" /></span>
                Разработка сайтов, ботов и AI-решений
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-4xl text-[14vw] font-medium leading-[.9] tracking-[-0.085em] text-white sm:text-7xl lg:text-[88px] xl:text-[108px]">
                Создаю цифровые продукты, которые <span className="gold-text">работают</span> на бизнес.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                Проектирую и разрабатываю сайты, Telegram-боты, AI-агентов и автоматизации, которые выглядят дорого, работают быстро и решают реальные задачи компании.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PremiumButton href="/#projects">Посмотреть проекты</PremiumButton>
                <PremiumButton href="https://t.me/fuckbuild" target="_blank" variant="dark">Обсудить проект</PremiumButton>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/50">
                <span className="inline-flex items-center gap-2"><CodeIcon className="size-5 text-champagne" /> Full-stack</span>
                <span className="inline-flex items-center gap-2"><TelegramIcon className="size-5 text-champagne" /> Telegram API</span>
                <span className="inline-flex items-center gap-2"><OrbitIcon className="size-5 text-champagne" /> AI integrations</span>
                <span className="hidden h-px w-10 bg-white/10 sm:block" />
                <span>20+ успешных проектов</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative lg:-mr-8">
            <div className="relative">
              <HeroObject />
              <div className="pointer-events-none absolute inset-x-8 bottom-8 h-28 rounded-[100%] bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-2xl" />
              <div className="absolute right-[12%] top-[22%] size-3 animate-orbit rounded-full bg-champagne shadow-[0_0_30px_rgba(245,214,124,.9)]" />
            </div>
          </Reveal>
        </div>

        <div className="container-premium pb-10">
          <Reveal delay={0.38}>
            <div className="glass grid overflow-hidden rounded-[2rem] md:grid-cols-4">
              {[
                ["Веб-разработка", "Сайты любой сложности под ключ", <CodeIcon key="a" className="size-5" />],
                ["Telegram-боты", "Боты для бизнеса и автоматизации", <TelegramIcon key="b" className="size-5" />],
                ["AI-решения", "AI-агенты и умные интеграции", <OrbitIcon key="c" className="size-5" />],
                ["Автоматизация", "Оптимизация процессов и связки", <ShieldIcon key="d" className="size-5" />],
              ].map(([title, text, icon], index) => (
                <div key={String(title)} className="group border-white/10 p-6 transition hover:bg-white/[.035] md:border-l first:md:border-l-0">
                  <div className="mb-5 grid size-10 place-items-center rounded-2xl border border-gold/20 bg-gold/10 text-champagne transition group-hover:scale-110 group-hover:border-champagne/40">{icon}</div>
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-premium py-10 sm:py-16">
        <Reveal>
          <div className="glass grid rounded-[2rem] md:grid-cols-4">
            {[
              ["20+", "Проектов завершено"],
              ["2+", "Года опыта"],
              ["100%", "Фокус на качестве"],
              ["24/7", "Поддержка проектов"],
            ].map(([value, label]) => (
              <div key={value} className="border-white/10 p-8 text-center md:border-l first:md:border-l-0">
                <div className="gold-text text-4xl font-medium tracking-[-0.06em]">{value}</div>
                <div className="mt-2 text-sm text-white/50">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="projects" className="container-premium py-16 sm:py-24">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="section-kicker">Портфолио</span>
            <h2 className="h2-premium">Избранные проекты</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/#contact" className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.035] px-5 py-3 text-sm text-white/70 transition hover:border-gold/40 hover:text-champagne">
              Обсудить похожий проект <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <Link href={`/projects/${project.slug}`} className="group glass relative block h-full overflow-hidden rounded-[2rem] p-3 transition duration-500 hover:-translate-y-2 hover:border-gold/25 hover:shadow-gold">
                <div className="relative aspect-[1.18] overflow-hidden rounded-[1.55rem] bg-white/[.025]">
                  <Image
                    src={assetPath(project.screenshot)}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-88" />
                  <div className="absolute left-4 top-4 flex gap-2">
                    {project.colors.slice(0, 4).map((color) => (
                      <span key={color} className="size-3 rounded-full border border-white/20" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/90">
                        <Image src={assetPath(project.favicon)} alt="" width={22} height={22} className="max-h-6 max-w-6 object-contain" />
                      </span>
                      <div>
                        <h3 className="text-lg font-medium tracking-[-0.04em] text-white">{project.title}</h3>
                        <p className="text-xs uppercase tracking-[0.18em] text-champagne/75">{project.type}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-5 text-white/30 transition group-hover:text-champagne" />
                  </div>
                  <p className="min-h-[3.5rem] text-sm leading-6 text-white/50">{project.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-champagne">
                    Подробнее <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="services" className="relative py-16 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <span className="section-kicker">Услуги</span>
            <h2 className="h2-premium">Полный цикл: от идеи до production.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="group glass-gold relative h-full min-h-[250px] overflow-hidden rounded-[2rem] p-6 transition duration-500 hover:-translate-y-2">
                  <div className="absolute -right-16 -top-16 size-36 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-champagne/20" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl border border-gold/25 bg-black/30 text-champagne">
                      <Spark className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.05em] text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/50">{service.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="container-premium py-16 sm:py-24">
        <Reveal>
          <span className="section-kicker">Процесс</span>
          <h2 className="h2-premium">Понятный путь без хаоса и сюрпризов.</h2>
        </Reveal>

        <div className="relative mt-12 overflow-x-auto pb-5">
          <div className="absolute left-0 top-[6.25rem] hidden h-px min-w-[980px] bg-white/10 lg:block" />
          <div data-gsap="line" className="absolute left-0 top-[6.25rem] hidden h-px min-w-[980px] bg-gradient-to-r from-gold via-champagne to-transparent lg:block" />
          <div className="grid min-w-[980px] grid-cols-5 gap-5 lg:min-w-0">
            {process.map((item, index) => (
              <div key={item.step} data-gsap="fade" className="glass relative rounded-[1.75rem] p-6 transition duration-500 hover:-translate-y-2 hover:border-gold/25">
                <div className="mb-10 flex items-center justify-between">
                  <span className="gold-text text-5xl font-medium tracking-[-0.08em]">{item.step}</span>
                  <span className="grid size-11 place-items-center rounded-2xl border border-gold/20 bg-gold/10 text-champagne">{index + 1}</span>
                </div>
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="container-premium py-16 sm:py-24">
        <Reveal>
          <span className="section-kicker">Технологии</span>
          <h2 className="h2-premium">Современный стек для быстрых и надёжных продуктов.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="group rounded-2xl border border-white/10 bg-white/[.035] px-5 py-3 text-sm text-white/60 transition hover:-translate-y-1 hover:border-gold/40 hover:bg-gold/10 hover:text-champagne">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="faq" className="container-premium py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1fr]">
          <Reveal>
            <span className="section-kicker">FAQ</span>
            <h2 className="h2-premium">Коротко о работе</h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 0.05}>
                <details className="group glass rounded-[1.5rem] p-6 open:border-gold/25">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium tracking-[-0.04em] text-white">
                    {item.q}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-champagne transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container-premium py-16 sm:py-24">
        <Reveal>
          <div className="glass-gold relative overflow-hidden rounded-[2.4rem] p-8 sm:p-12 lg:p-16">
            <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-champagne/20 blur-[100px]" />
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_.8fr_.55fr]">
              <h2 className="text-4xl font-medium leading-[.98] tracking-[-0.07em] text-white sm:text-6xl">Готовы обсудить ваш проект?</h2>
              <p className="max-w-md text-base leading-7 text-white/60">Напишите мне в Telegram — разберём задачу, подберём решение и соберём продукт, который будет выглядеть на уровне лучших digital-команд.</p>
              <PremiumButton href="https://t.me/fuckbuild" target="_blank" className="w-full justify-center">Написать в Telegram</PremiumButton>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
