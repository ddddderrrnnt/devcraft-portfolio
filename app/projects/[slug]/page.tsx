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
    <main className="overflow-hidden bg-[#050505] pt-28 text-white sm:pt-36">
      <GsapEffects />

      <section className="container-premium pb-12 sm:pb-20">
        <Reveal>
          <Link href="/#projects" className="mono mb-8 inline-flex text-xs uppercase text-white/50 underline underline-offset-4 hover:text-white">
            ← Все проекты
          </Link>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <Reveal>
              <div className="grid grid-cols-[5rem_1fr] border-y border-white/20 py-4 mono text-xs uppercase text-white/50 sm:grid-cols-[8rem_1fr]">
                <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                <span>{project.type} / {project.year}</span>
              </div>
              <h1 className="mt-8 text-[18vw] font-semibold leading-[.82] tracking-[-0.11em] sm:text-8xl lg:text-[8.5rem]">
                {project.title}
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 tracking-[-0.045em] text-white/65 sm:text-2xl sm:leading-9">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={project.url} target="_blank" className="border border-white bg-white px-6 py-4 mono text-xs uppercase text-black transition hover:bg-transparent hover:text-white">
                  Открыть проект →
                </Link>
                <Link href="https://t.me/fuckbuild" target="_blank" className="border border-white/25 px-6 py-4 mono text-xs uppercase text-white transition hover:bg-white hover:text-black">
                  Обсудить похожий →
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="border border-white/20 p-4">
              <div className="mb-4 flex justify-between mono text-xs uppercase text-white/45">
                <span>Live capture</span>
                <span>Grayscale preview</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
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

      <section className="invert-section py-12 sm:py-16">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-px bg-black/20 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-[#f4f4f1] p-8 text-center">
                  <div className="mono text-5xl tracking-[-0.08em]">{metric.value}</div>
                  <div className="mt-3 mono text-xs uppercase text-black/45">{metric.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="invert-section py-12 sm:py-20">
        <div className="container-premium">
          <div className="border-t border-black/20">
            {[
              ["Задача", project.task],
              ["Решение", project.solution],
              ["Результат", project.result],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="grid gap-5 border-b border-black/20 py-8 lg:grid-cols-[9rem_.45fr_1fr]">
                  <span className="mono text-sm text-black/45">0{index + 1}</span>
                  <h2 className="text-4xl font-semibold tracking-[-0.08em]">{title}</h2>
                  <p className="max-w-3xl text-base leading-7 text-black/60">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container-premium grid gap-8 lg:grid-cols-[.65fr_1fr]">
          <Reveal>
            <span className="section-label">Screens / System</span>
            <h2 className="h2-system mt-4">Единая подача без цветового шума.</h2>
            <p className="body-system mt-6 max-w-lg">
              Для портфолио экраны намеренно сведены в монохром: фокус остаётся на структуре, сетке и качестве реализации.
            </p>
          </Reveal>

          <div className="grid gap-4">
            <Reveal delay={0.1}>
              <div className="border border-white/20 p-4">
                <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
                  <Image src={assetPath(project.screenshot)} alt={`${project.title} wide preview`} fill sizes="(min-width: 1024px) 800px, 100vw" className="bw-img object-cover object-top" />
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal delay={0.14}>
                <div className="border border-white/20 p-4">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                    <Image src={assetPath(project.screenshot)} alt={`${project.title} crop`} fill sizes="(min-width: 768px) 400px, 100vw" className="bw-img object-cover object-left-top" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="flex min-h-[320px] flex-col justify-between border border-white/20 p-6">
                  <p className="section-label">Build notes</p>
                  <div>
                    <h3 className="text-4xl font-semibold tracking-[-0.08em]">{project.type}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/55">{project.short}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="invert-section py-12 sm:py-20">
        <div className="container-premium">
          <Reveal>
            <div className="grid gap-8 border-y border-black/20 py-8 lg:grid-cols-[.5fr_1fr] lg:items-center">
              <div>
                <span className="section-label-dark">Stack / Services</span>
                <h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-0.08em] sm:text-7xl">Что использовано</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...project.technologies, ...project.services].map((item) => (
                  <span key={item} className="border border-black/20 px-4 py-3 mono text-xs uppercase text-black/65">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-24">
        <div className="container-premium">
          <Reveal>
            <Link href={`/projects/${nextProject.slug}`} className="group grid gap-6 border-y border-white/20 py-8 lg:grid-cols-[.7fr_1fr] lg:items-end">
              <div>
                <p className="section-label">Следующий кейс</p>
                <h2 className="mt-4 text-[16vw] font-semibold leading-[.82] tracking-[-0.1em] sm:text-8xl">{nextProject.title}</h2>
              </div>
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="body-system max-w-xl">{nextProject.short}</p>
                <span className="mono text-xs uppercase text-white transition group-hover:translate-x-1">Смотреть →</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
