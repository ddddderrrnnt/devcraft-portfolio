import Image from "next/image";
import Link from "next/link";
import { GsapEffects } from "@/components/gsap-effects";
import { Reveal } from "@/components/reveal";
import { SiteIcon, type SiteIconName } from "@/components/site-icon";
import { featuredProjects, services, technologies } from "@/lib/projects";
import { assetPath } from "@/lib/assets";

const process = [
  { step: "01", title: "Разобрать", text: "Фиксируем цель, аудиторию, ограничения, сценарии и то, что должно измениться после запуска." },
  { step: "02", title: "Спроектировать", text: "Собираем структуру, пользовательский путь, состояния интерфейса, данные и точки интеграции." },
  { step: "03", title: "Написать", text: "Верстаю интерфейс, серверную логику, формы, API, базы данных и Telegram-сценарии." },
  { step: "04", title: "Проверить", text: "Тестирую адаптив, скорость, ошибки, формы, метаданные, сборку и поведение на реальных устройствах." },
  { step: "05", title: "Запустить", text: "Деплой, домен, аналитика, индексация, документация и спокойное сопровождение после релиза." },
];

const principles = [
  ["01", "Никаких конструкторов", "Интерфейс и логика пишутся под проект, а не под ограничения готовой темы."],
  ["02", "Сначала структура", "Визуал держится на сценарии: что видит человек, куда нажимает и почему."],
  ["03", "Чистый production", "Код, сборка, деплой, SEO и поддержка — часть продукта, а не финальная формальность."],
];

const faqs = [
  {
    q: "Вы используете шаблоны?",
    a: "Нет. Референсы нужны только для направления. Структура, интерфейс, компоненты и код собираются под конкретную задачу.",
  },
  {
    q: "Можно сделать под ключ?",
    a: "Да. Закрываю структуру, UI/UX, frontend, backend, Telegram-сценарии, интеграции, деплой и сопровождение.",
  },
  {
    q: "Можно доработать существующий проект?",
    a: "Да. Можно привести в порядок интерфейс, переписать проблемные места, ускорить сайт, добавить серверную логику или интеграции.",
  },
  {
    q: "Что нужно для старта?",
    a: "Коротко опиши задачу, цель, текущие материалы и желаемый срок. После этого я предложу понятный план работ.",
  },
];

export default function Home() {
  const heroProject = featuredProjects[3];

  return (
    <main id="home" className="overflow-hidden bg-[#050505] text-white">
      <GsapEffects />

      <section className="relative pt-32 sm:pt-40 lg:min-h-screen lg:pt-44">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:items-center">
            <div>
              <Reveal>
                <div className="mb-8 flex max-w-xl items-center justify-between border-b border-t border-white/10 py-3 mono text-[11px] uppercase text-white/45">
                  <span>Independent build</span>
                  <span>Web / Telegram / Backend</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="display-xl max-w-5xl">
                  Сайты и сервисы, написанные вручную.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="body-copy mt-8 max-w-2xl">
                  Проектирую интерфейс, пишу frontend и backend, собираю Telegram-сценарии и интеграции — без конструкторов, готовых тем и случайных решений.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/#projects" className="group inline-flex h-12 items-center justify-center bg-white px-5 mono text-[11px] uppercase text-black transition hover:bg-white/85">
                    Смотреть работы <span className="ml-3 transition group-hover:translate-x-1">→</span>
                  </Link>
                  <Link href="https://t.me/fuckbuild" target="_blank" className="group inline-flex h-12 items-center justify-center border border-white/15 px-5 mono text-[11px] uppercase text-white/75 transition hover:border-white hover:bg-white hover:text-black">
                    Обсудить проект <span className="ml-3 transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
                <div className="absolute -left-6 top-12 hidden w-52 border border-white/10 bg-[#0b0b0b] p-4 shadow-2xl lg:block">
                  <p className="label mb-5">Build log</p>
                  <div className="space-y-3 mono text-[11px] leading-5 text-white/50">
                    <p>✓ interface mapped</p>
                    <p>✓ api routes defined</p>
                    <p>✓ responsive states</p>
                    <p>✓ production export</p>
                  </div>
                </div>

                <Link href={`/projects/${heroProject.slug}`} className="group block border border-white/10 bg-[#0b0b0b] p-3 shadow-[0_40px_140px_rgba(0,0,0,.65)]">
                  <div className="flex items-center justify-between border-b border-white/10 px-2 py-2 mono text-[11px] uppercase text-white/40">
                    <span>Selected case</span>
                    <span>{heroProject.year}</span>
                  </div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-white">
                    <Image src={assetPath(heroProject.screenshot)} alt={heroProject.title} fill priority sizes="(min-width: 1024px) 660px, 100vw" className="bw-img object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                  </div>
                  <div className="grid gap-3 border-t border-white/10 p-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <p className="label mb-2">{heroProject.type}</p>
                      <h2 className="text-3xl font-medium tracking-[-0.07em]">{heroProject.title}</h2>
                    </div>
                    <span className="mono text-[11px] uppercase text-white/45 transition group-hover:text-white">Смотреть кейс →</span>
                  </div>
                </Link>

                <div className="absolute -bottom-8 right-6 hidden w-64 border border-white/10 bg-[#f5f5f2] p-5 text-black shadow-2xl sm:block">
                  <p className="label-dark mb-4">Current format</p>
                  <p className="text-2xl font-medium leading-none tracking-[-0.06em]">20+ проектов / 0 шаблонов</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-premium">
          <div className="grid gap-px bg-white/10 lg:grid-cols-3">
            {principles.map(([num, title, text], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <div className="min-h-[220px] bg-[#050505] p-6 sm:p-8">
                  <p className="label mb-12">{num}</p>
                  <h3 className="text-3xl font-medium tracking-[-0.07em]">{title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="paper py-20 sm:py-28">
        <div className="container-premium">
          <Reveal>
            <div className="mb-12 grid gap-6 border-t border-black/10 pt-7 lg:grid-cols-[.32fr_1fr_.42fr] lg:items-end">
              <span className="label-dark">01 / Works</span>
              <h2 className="display-lg">Работы, которые можно открыть.</h2>
              <p className="body-copy-dark lg:text-right">Реальные сайты и Telegram-сервисы, а не абстрактные мокапы.</p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.035}>
                <Link href={`/projects/${project.slug}`} className="group grid gap-5 border border-black/10 bg-white p-4 transition hover:border-black/25 md:grid-cols-[.9fr_1.1fr] md:items-stretch lg:p-5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-black md:aspect-auto md:min-h-[340px]">
                    <Image src={assetPath(project.screenshot)} alt={`${project.title} screenshot`} fill sizes="(min-width: 1024px) 620px, 100vw" className="bw-img object-cover object-top opacity-95 transition duration-700 group-hover:scale-[1.025]" />
                  </div>
                  <div className="flex flex-col justify-between py-1 md:p-5">
                    <div className="flex justify-between gap-6 border-b border-black/10 pb-5 mono text-[11px] uppercase text-black/45">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{project.type}</span>
                    </div>
                    <div className="py-10 md:py-12">
                      <h3 className="text-5xl font-medium tracking-[-0.09em] sm:text-6xl">{project.title}</h3>
                      <p className="mt-5 max-w-xl text-base leading-7 text-black/58">{project.short}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-black/10 pt-5">
                      <span className="mono text-[11px] uppercase text-black/45">{project.year}</span>
                      <span className="mono text-[11px] uppercase transition group-hover:translate-x-1">Кейс →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-28">
        <div className="container-premium">
          <Reveal>
            <div className="mb-12 grid gap-6 border-t border-white/10 pt-7 lg:grid-cols-[.32fr_1fr_.42fr] lg:items-end">
              <span className="label">02 / Services</span>
              <h2 className="display-lg">Полный слой продукта.</h2>
              <p className="body-copy lg:text-right">От первого экрана до серверной логики и запуска.</p>
            </div>
          </Reveal>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.035}>
                <div className="group grid gap-6 py-7 transition md:grid-cols-[5rem_.45fr_1fr] md:items-center">
                  <span className="label">{String(index + 1).padStart(2, "0")}</span>
                  <div className="flex items-center gap-5">
                    <span className="grid size-12 shrink-0 place-items-center bg-white transition group-hover:scale-105">
                      <SiteIcon name={service.icon as SiteIconName} className="size-6" />
                    </span>
                    <h3 className="text-3xl font-medium tracking-[-0.07em] sm:text-4xl">{service.title}</h3>
                  </div>
                  <p className="max-w-2xl text-base leading-7 text-white/55 md:justify-self-end">{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="paper py-20 sm:py-28">
        <div className="container-premium">
          <Reveal>
            <div className="mb-10 grid gap-6 border-t border-black/10 pt-7 lg:grid-cols-[.32fr_1fr_.42fr] lg:items-end">
              <span className="label-dark">03 / Process</span>
              <h2 className="display-lg">Сначала порядок. Потом визуал.</h2>
              <p className="body-copy-dark lg:text-right">Каждый этап оставляет понятный артефакт и снижает неопределённость.</p>
            </div>
          </Reveal>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.035}>
                <div className="grid gap-5 py-8 lg:grid-cols-[7rem_.46fr_1fr] lg:items-start">
                  <span className="mono text-sm text-black/38">{item.step}</span>
                  <h3 className="text-4xl font-medium tracking-[-0.08em] sm:text-5xl">{item.title}</h3>
                  <p className="max-w-3xl text-base leading-7 text-black/58">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="py-20 sm:py-28">
        <div className="container-premium">
          <Reveal>
            <div className="mb-10 grid gap-6 border-t border-white/10 pt-7 lg:grid-cols-[.32fr_1fr_.42fr] lg:items-end">
              <span className="label">04 / Stack</span>
              <h2 className="display-lg">Инструменты без культа.</h2>
              <p className="body-copy lg:text-right">Выбор стека зависит от задачи, нагрузки и срока.</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="border border-white/10 px-4 py-3 mono text-[11px] uppercase text-white/55 transition hover:border-white/30 hover:text-white">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="paper py-20 sm:py-28">
        <div className="container-premium grid gap-12 lg:grid-cols-[.72fr_1fr]">
          <Reveal>
            <span className="label-dark">05 / FAQ</span>
            <h2 className="display-lg mt-5">Коротко о работе.</h2>
          </Reveal>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((item, index) => (
              <Reveal key={item.q} delay={index * 0.035}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-2xl font-medium tracking-[-0.06em]">
                    {item.q}
                    <span className="mono text-sm text-black/38 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-black/58">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-28">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-10 border-y border-white/10 py-10 lg:grid-cols-[1fr_.52fr] lg:items-end">
              <h2 className="display-lg">Если задача есть — её можно собрать в систему.</h2>
              <div>
                <p className="body-copy">Напишите в Telegram. Разберём цель, ограничения, сроки и формат работы.</p>
                <Link href="https://t.me/fuckbuild" target="_blank" className="mt-7 inline-flex h-12 items-center bg-white px-5 mono text-[11px] uppercase text-black transition hover:bg-white/85">
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
