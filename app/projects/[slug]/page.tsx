import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="pt-20 bg-[#050505] text-white min-h-screen pb-24">
      <div className="container-premium max-w-3xl">
        <div className="pt-8">
          <Link href="/projects" className="text-sm text-white/50 hover:text-white">← Все кейсы</Link>

          <h1 className="text-6xl font-semibold tracking-[-2.5px] mt-8 mb-3">{project.title}</h1>
          <p className="text-xl text-white/70">{project.type} · {project.year}</p>

          <p className="mt-8 max-w-prose text-lg leading-relaxed text-white/70">{project.description}</p>

          <div className="flex gap-3 mt-8">
            <a href={project.url} target="_blank" className="btn btn-white">
              Открыть проект
            </a>
            <Link href="https://t.me/fuckbuild" target="_blank" className="btn">
              Обсудить похожий
            </Link>
          </div>
        </div>

        {/* Clean case info */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="grid gap-x-12 gap-y-12 md:grid-cols-3 text-sm">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-3">Задача</div>
              <p className="text-white/80 leading-relaxed">{project.task}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-3">Решение</div>
              <p className="text-white/80 leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-3">Результат</div>
              <p className="text-white/80 leading-relaxed">{project.result}</p>
            </div>
          </div>
        </div>

        {/* Minimal metrics */}
        <div className="mt-16 grid grid-cols-3 gap-px bg-white/10">
          {project.metrics.map((m, i) => (
            <div key={i} className="bg-[#050505] p-6 text-center">
              <div className="font-mono text-3xl tracking-tighter">{m.value}</div>
              <div className="text-xs mt-1 text-white/50">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="mt-16">
          <div className="text-xs uppercase tracking-[2px] text-white/40 mb-4">Технологии</div>
          <div className="flex flex-wrap gap-2">
            {[...project.technologies, ...project.services].map((tech, i) => (
              <span key={i} className="px-4 py-1.5 text-sm border border-white/10 rounded text-white/70">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Next */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <Link href={`/projects/${nextProject.slug}`} className="group block text-right">
            <div className="text-xs text-white/40">СЛЕДУЮЩИЙ КЕЙС</div>
            <div className="text-4xl font-semibold tracking-tight mt-1 group-hover:underline">{nextProject.title}</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
