import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GsapEffects } from "@/components/gsap-effects";
import { Reveal } from "@/components/reveal";
import { getProject, projects } from "@/lib/projects";
import { assetPath } from "@/lib/assets";

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

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="overflow-hidden bg-[#050505] pt-32 text-white sm:pt-40">
      <GsapEffects />

      <section className="container-premium pb-16 sm:pb-24">
        <Reveal>
          <Link href="/#projects" className="label mb-9 inline-flex underline underline-offset-4 hover:text-white">
            ← Назад к работам
          </Link>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-end">
          <div>
            <Reveal>
              <div className="mb-7 flex max-w-lg items-center justify-between border-b border-t border-white/10 py-3 mono text-[11px] uppercase text-white/45">
                <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                <span>{project.type} / {project.year}</span>
              </div>
              <h1 className="display-xl max-w-5xl">{project.title}</h1>
              <p className="body-copy mt-8 max-w-2xl">{project.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={project.url} target="_blank" className="inline-flex h-12 items-center justify-center bg-white px-5 mono text-[11px] uppercase text-black transition hover:bg-white/85">
                  Открыть проект →
                </Link>
                <Link href="https://t.me/fuckbuild" target="_blank" className="inline-flex h-12 items-center justify-center border border-white/15 px-5 mono text-[11px] uppercase text-white/75 transition hover:border-white hover:bg-white hover:text-black">
                  Обсудить похожий →
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="border border-white/10 bg-[#0b0b0b] p-3 shadow-[0_40px_140px_rgba(0,0,0,.65)]">
              <div className="flex items-center justify-between border-b border-white/10 px-2 py-2 mono text-[11px] uppercase text-white/40">
                <span>Live capture</span>
                <span>Case screen</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <Image
                  src={assetPath(project.screenshot)}
                  alt={`${project.title} screenshot`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 780px, 100vw"
                  className="bw-img object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="paper py-16 sm:py-20">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-px bg-black/10 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-white p-8">
                  <div className="mono text-4xl tracking-[-0.08em]">{metric.value}</div>
                  <div className="mt-3 mono text-[11px] uppercase text-black/45">{metric.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="paper pb-20 sm:pb-28">
        <div className="container-premium">
          <div className="divide-y divide-black/10 border-y border-black/10">
            {[
              ["Задача", project.task],
              ["Решение", project.solution],
              ["Результат", project.result],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="grid gap-5 py-9 lg:grid-cols-[7rem_.36fr_1fr] lg:items-start">
                  <span className="mono text-sm text-black/38">0{index + 1}</span>
                  <h2 className="text-4xl font-medium tracking-[-0.08em] sm:text-5xl">{title}</h2>
                  <p className="max-w-3xl text-base leading-7 text-black/58">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-premium grid gap-12 lg:grid-cols-[.7fr_1fr]">
          <Reveal>
            <span className="label">Screens</span>
            <h2 className="display-lg mt-5">Экран как часть системы.</h2>
            <p className="body-copy mt-6 max-w-lg">
              В кейсе показаны реальные экраны проекта. Подача сведена к монохрому, чтобы фокус остался на структуре и качестве интерфейса.
            </p>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.08}>
              <div className="border border-white/10 bg-[#0b0b0b] p-3">
                <div className="relative aspect-[16/9] overflow-hidden bg-white">
                  <Image src={assetPath(project.screenshot)} alt={`${project.title} wide preview`} fill sizes="(min-width: 1024px) 820px, 100vw" className="bw-img object-cover object-top" />
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal delay={0.12}>
                <div className="border border-white/10 bg-[#0b0b0b] p-3">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white">
                    <Image src={assetPath(project.screenshot)} alt={`${project.title} crop`} fill sizes="(min-width: 768px) 420px, 100vw" className="bw-img object-cover object-left-top" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="flex min-h-[320px] flex-col justify-between border border-white/10 bg-[#0b0b0b] p-6">
                  <p className="label">Build notes</p>
                  <div>
                    <h3 className="text-4xl font-medium tracking-[-0.08em]">{project.type}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/55">{project.short}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="paper py-20 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-8 border-y border-black/10 py-8 lg:grid-cols-[.46fr_1fr] lg:items-center">
              <div>
                <span className="label-dark">Stack</span>
                <h2 className="display-md mt-4">Что внутри</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...project.technologies, ...project.services].map((item) => (
                  <span key={item} className="border border-black/10 bg-white px-4 py-3 mono text-[11px] uppercase text-black/58">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-premium">
          <Reveal>
            <Link href={`/projects/${nextProject.slug}`} className="group grid gap-8 border-y border-white/10 py-10 lg:grid-cols-[.65fr_1fr] lg:items-end">
              <div>
                <p className="label">Следующий кейс</p>
                <h2 className="display-lg mt-4">{nextProject.title}</h2>
              </div>
              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="body-copy max-w-xl">{nextProject.short}</p>
                <span className="mono text-[11px] uppercase text-white transition group-hover:translate-x-1">Смотреть →</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
