import Image from "next/image";
import Link from "next/link";
import { GsapEffects } from "@/components/gsap-effects";
import { Reveal } from "@/components/reveal";
import { SiteIcon } from "@/components/site-icon";
import { featuredProjects, services, technologies } from "@/lib/projects";
import { assetPath } from "@/lib/assets";

const process = [
  { step: "01", title: "Разбор", text: "Фиксирую задачу, аудиторию, ограничения, коммерческую цель и будущие точки роста." },
  { step: "02", title: "Сетка", text: "Собираю структуру страниц, сценарии, состояния интерфейса и карту интеграций." },
  { step: "03", title: "Код", text: "Пишу frontend, backend, формы, API, базы данных и Telegram-логику без шаблонных конструкторов." },
  { step: "04", title: "Проверка", text: "Тестирую адаптив, скорость, формы, ошибки, edge-cases, метаданные и production-сборку." },
  { step: "05", title: "Релиз", text: "Деплой, домен, аналитика, индексация, документация и поддержка после запуска." },
];

const faqs = [
  {
    q: "Вы используете шаблоны?",
    a: "Нет. Можно брать референсы как направление, но структура, интерфейс, компоненты и код собираются под задачу проекта.",
  },
  {
    q: "Можно сделать дизайн и разработку под ключ?",
    a: "Да. Закрываю весь путь: структура, UI/UX, frontend, backend, интеграции, Telegram-сценарии, деплой и сопровождение.",
  },
  {
    q: "Работаете с существующими проектами?",
    a: "Да. Можно улучшить интерфейс, переписать проблемные места, ускорить сайт, добавить backend или связать сервисы между собой.",
  },
  {
    q: "Что нужно для старта?",
    a: "Короткое описание задачи, цель, ссылки на текущие материалы и желаемый срок. После этого я предложу структуру работ и этапы.",
  },
];

export default function Home() {
  return (
    <main id="home" className="overflow-hidden bg-[#050505] text-white">
      <GsapEffects />

      <section className="relative min-h-screen pt-28 sm:pt-36">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[1.12fr_.88fr] lg:gap-12">
            <div>
              <Reveal>
                <div className="grid grid-cols-[5rem_1fr] border-y border-white/20 py-4 mono text-xs uppercase text-white/50 sm:grid-cols-[9rem_1fr]">
                  <span>Index</span>
                  <span>Самописные сайты / Telegram / Backend / Интеграции</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="h1-system mt-8 max-w-6xl">
                  Пишу цифровые продукты вручную.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-8 grid gap-6 border-t border-white/20 pt-6 lg:grid-cols-[9rem_1fr]">
                  <p className="mono text-xs uppercase text-white/45">Position</p>
                  <p className="max-w-2xl text-xl leading-8 tracking-[-0.045em] text-white/70 sm:text-2xl sm:leading-9">
                    Сайты, Telegram-сервисы, backend и автоматизация без конструкторов, без готовых лендингов, без имитации продукта.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/#projects" className="group border border-white bg-white px-6 py-4 mono text-xs uppercase text-black transition hover:bg-transparent hover:text-white">
                    Смотреть работы <span className="ml-3 transition group-hover:translate-x-1">→</span>
                  </Link>
                  <Link href="https://t.me/fuckbuild" target="_blank" className="group border border-white/25 px-6 py-4 mono text-xs uppercase text-white transition hover:bg-white hover:text-black">
                    Обсудить проект <span className="ml-3 transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="grid h-full gap-4 lg:pt-20">
                <div className="border border-white/20 p-4">
                  <div className="mb-4 flex justify-between mono text-xs uppercase text-white/45">
                    <span>Selected output</span>
                    <span>2026</span>
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    <Image src={assetPath(featuredProjects[3].screenshot)} alt="ProPeptide" fill priority sizes="(min-width:1024px) 560px, 100vw" className="bw-img object-cover object-top" />
                    <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-black/85 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-2xl font-semibold tracking-[-0.07em]">ProPeptide</span>
                        <span className="mono text-xs text-white/45">ONLINE STORE</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 border border-white/20 mono text-xs uppercase text-white/55">
                  <div className="border-r border-white/20 p-4"><span className="block text-3xl text-white">20+</span><span>проектов</span></div>
                  <div className="border-r border-white/20 p-4"><span className="block text-3xl text-white">2+</span><span>года</span></div>
                  <div className="p-4"><span className="block text-3xl text-white">0</span><span>шаблонов</span></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="projects" className="invert-section py-16 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-6 border-y border-black/20 py-6 lg:grid-cols-[9rem_1fr_.38fr] lg:items-end">
              <span className="section-label-dark">01 / Works</span>
              <h2 className="h2-system">Реальные проекты, реальные экраны.</h2>
              <p className="body-dark lg:text-right">Скриншоты взяты с рабочих адресов и приведены к единой чёрно-белой системе.</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-px bg-black/20 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.04}>
                <Link href={`/projects/${project.slug}`} className="group block bg-[#f4f4f1] p-4 transition hover:bg-white">
                  <div className="mb-5 flex justify-between mono text-xs uppercase text-black/45">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.type}</span>
                  </div>
                  <div className="relative aspect-[1.05] overflow-hidden border border-black/20 bg-black">
                    <Image src={assetPath(project.screenshot)} alt={`${project.title} screenshot`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="bw-img object-cover object-top opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  </div>
                  <div className="mt-5 grid gap-4 border-t border-black/20 pt-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-3xl font-semibold tracking-[-0.08em]">{project.title}</h3>
                      <span className="transition group-hover:translate-x-1">→</span>
                    </div>
                    <p className="min-h-[5rem] text-sm leading-6 text-black/58">{project.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-6 border-y border-white/20 py-6 lg:grid-cols-[9rem_1fr_.45fr] lg:items-end">
              <span className="section-label">02 / Services</span>
              <h2 className="h2-system">Не “лендинг”. Полный продуктовый слой.</h2>
              <p className="body-system lg:text-right">Интерфейс, серверная логика, данные, интеграции, деплой и поддержка.</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-px bg-white/20 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.04}>
                <div className="group min-h-[290px] bg-[#050505] p-6 transition hover:bg-white hover:text-black">
                  <div className="mb-14 flex items-center justify-between">
                    <div className="grid size-12 place-items-center border border-current/20 bg-white transition group-hover:bg-black group-hover:invert">
                      <SiteIcon name={service.icon as never} className="size-6" />
                    </div>
                    <span className="mono text-xs text-current/45">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.07em]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-current/60">{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="invert-section py-16 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-6 border-y border-black/20 py-6 lg:grid-cols-[9rem_1fr_.4fr] lg:items-end">
              <span className="section-label-dark">03 / Process</span>
              <h2 className="h2-system">Работа строится как система, а не как набор экранов.</h2>
              <p className="body-dark lg:text-right">Каждый этап оставляет понятный артефакт: структуру, код, тест, релиз.</p>
            </div>
          </Reveal>

          <div className="mt-10 border-t border-black/20">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.035}>
                <div className="grid gap-5 border-b border-black/20 py-7 lg:grid-cols-[9rem_.42fr_1fr] lg:items-start">
                  <span className="mono text-sm text-black/45">{item.step}</span>
                  <h3 className="text-4xl font-semibold tracking-[-0.08em]">{item.title}</h3>
                  <p className="max-w-2xl text-base leading-7 text-black/60">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="py-16 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-6 border-y border-white/20 py-6 lg:grid-cols-[9rem_1fr_.45fr] lg:items-end">
              <span className="section-label">04 / Stack</span>
              <h2 className="h2-system">Стек без магии. Просто инструменты, которые выдерживают production.</h2>
              <p className="body-system lg:text-right">Выбор технологий зависит от задачи, срока и нагрузки.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-px bg-white/20 sm:grid-cols-3 lg:grid-cols-5">
              {technologies.map((tech) => (
                <span key={tech} className="bg-[#050505] p-5 mono text-sm uppercase text-white/70 transition hover:bg-white hover:text-black">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="invert-section py-16 sm:py-24">
        <div className="container-premium grid gap-10 lg:grid-cols-[.72fr_1fr]">
          <Reveal>
            <span className="section-label-dark">05 / FAQ</span>
            <h2 className="h2-system mt-4">Коротко о формате.</h2>
          </Reveal>
          <div className="border-t border-black/20">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 0.04}>
                <details className="group border-b border-black/20 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-2xl font-semibold tracking-[-0.06em]">
                    {item.q}
                    <span className="mono text-sm text-black/45 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-black/60">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-8 border-y border-white/20 py-8 lg:grid-cols-[1fr_.52fr] lg:items-end">
              <h2 className="text-[16vw] font-semibold leading-[.82] tracking-[-0.1em] sm:text-8xl lg:text-[9rem]">
                Обсудим задачу?
              </h2>
              <div>
                <p className="body-system">Напишите в Telegram. Разберём цель, ограничения и соберём внятный план работ.</p>
                <Link href="https://t.me/fuckbuild" target="_blank" className="mt-7 inline-flex border border-white bg-white px-6 py-4 mono text-xs uppercase text-black transition hover:bg-transparent hover:text-white">
                  Написать в Telegram <span className="ml-3">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
