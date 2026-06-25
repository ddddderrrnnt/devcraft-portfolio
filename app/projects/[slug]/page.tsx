import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GsapEffects } from "@/components/gsap-effects";
import { ArrowRight, ArrowUpRight, Spark } from "@/components/icons";
import { PremiumButton } from "@/components/premium-button";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} — кейс`,
    description: project.short,
    openGraph: {
      title: `${project.title} — кейс DevCraft`,
      description: project.short,
      images: [project.screenshot],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return (
    <main className="overflow-hidden pt-28 sm:pt-36">
      <GsapEffects />

      <section className="container-premium relative pb-14 sm:pb-20">
        <div className="absolute left-1/2 top-4 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full opacity-40 blur-[150px]" style={{ background: project.accent }} />

        <Reveal>
          <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-champagne">
            <ArrowRight className="size-4 rotate-180" /> Назад к проектам
          </Link>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <Reveal>
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] text-champagne">
                  <Spark className="size-3" /> {project.type}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-xs text-white/50">{project.year}</span>
              </div>
              <h1 className="text-[16vw] font-medium leading-[.88] tracking-[-0.1em] text-white sm:text-7xl lg:text-8xl xl:text-9xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">{project.description}</p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PremiumButton href={project.url} target="_blank">Открыть проект</PremiumButton>
                <PremiumButton href="https://t.me/fuckbuild" target="_blank" variant="dark">Обсудить похожий</PremiumButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="glass relative overflow-hidden rounded-[2.4rem] p-3 sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] bg-white/[.03]">
                <Image
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
              <div className="absolute left-7 top-7 flex gap-2">
                {project.colors.map((color) => (
                  <span key={color} className="size-3 rounded-full border border-white/25" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-premium py-12 sm:py-16">
        <Reveal>
          <div className="glass grid rounded-[2rem] md:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="border-white/10 p-8 text-center md:border-l first:md:border-l-0">
                <div className="gold-text text-4xl font-medium tracking-[-0.06em]">{metric.value}</div>
                <div className="mt-2 text-sm text-white/50">{metric.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-premium py-12 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Задача", project.task],
            ["Решение", project.solution],
            ["Результат", project.result],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.07}>
              <article className="glass h-full rounded-[2rem] p-7 sm:p-8">
                <span className="mb-8 inline-flex size-11 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-sm text-champagne">0{index + 1}</span>
                <h2 className="text-2xl font-medium tracking-[-0.05em] text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/50">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-premium py-12 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1fr] lg:items-start">
          <Reveal>
            <span className="section-kicker">Visual system</span>
            <h2 className="h2-premium">Реальные экраны проекта, упакованные как кейс.</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/50">
              Скриншоты получены с реальных адресов проекта. В кейсе они используются без стоковых изображений и случайных мокапов.
            </p>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={0.1}>
              <div className="glass overflow-hidden rounded-[2rem] p-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem]">
                  <Image src={project.screenshot} alt={`${project.title} wide preview`} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover object-top" />
                </div>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              <Reveal delay={0.14}>
                <div className="glass overflow-hidden rounded-[2rem] p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <Image src={project.screenshot} alt={`${project.title} cropped preview`} fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover object-left-top" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="glass-gold flex h-full min-h-[320px] flex-col justify-between rounded-[2rem] p-7">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">Palette</p>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {project.colors.map((color) => (
                        <div key={color} className="rounded-2xl border border-white/10 p-3">
                          <div className="h-20 rounded-xl" style={{ backgroundColor: color }} />
                          <div className="mt-3 font-mono text-xs text-white/50">{color}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="container-premium py-12 sm:py-20">
        <Reveal>
          <div className="glass rounded-[2rem] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[.6fr_1fr] lg:items-center">
              <div>
                <span className="section-kicker">Stack</span>
                <h2 className="text-4xl font-medium leading-none tracking-[-0.07em] text-white sm:text-5xl">Использованные технологии</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-2xl border border-white/10 bg-white/[.035] px-5 py-3 text-sm text-white/60">{tech}</span>
                ))}
                {project.services.map((service) => (
                  <span key={service} className="rounded-2xl border border-gold/25 bg-gold/10 px-5 py-3 text-sm text-champagne">{service}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-premium py-14 sm:py-24">
        <Reveal>
          <Link href={`/projects/${nextProject.slug}`} className="group glass-gold relative block overflow-hidden rounded-[2.4rem] p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-35">
              <Image src={nextProject.screenshot} alt={nextProject.title} fill sizes="50vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/40">Следующий кейс</p>
              <h2 className="text-5xl font-medium tracking-[-0.08em] text-white sm:text-7xl">{nextProject.title}</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/50">{nextProject.short}</p>
              <span className="mt-8 inline-flex items-center gap-3 text-champagne">Смотреть кейс <ArrowUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </div>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
