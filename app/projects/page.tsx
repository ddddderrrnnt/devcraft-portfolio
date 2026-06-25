"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "web" | "tg">("all");

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "web") return p.type.includes("Веб") || p.type.includes("Сайт") || p.type.includes("магазин");
    if (filter === "tg") return p.type.includes("Telegram");
    return true;
  });

  return (
    <main className="pt-20 bg-[#050505] text-white min-h-screen pb-24">
      <div className="container-premium">
        {/* Header */}
        <div className="flex items-center justify-between pt-8 pb-10">
          <div>
            <Link href="/" className="text-sm text-white/50 hover:text-white">← На главную</Link>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-[-1.8px] mt-4">Кейсы</h1>
            <p className="mt-2 text-white/50 max-w-md">Реальные сайты и сервисы, сделанные вручную.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-10 text-sm">
          <button 
            onClick={() => setFilter("all")} 
            className={`px-4 py-1.5 rounded-full border transition ${filter === "all" ? "bg-white text-black border-white" : "border-white/20 hover:border-white/50"}`}
          >
            Все
          </button>
          <button 
            onClick={() => setFilter("web")} 
            className={`px-4 py-1.5 rounded-full border transition ${filter === "web" ? "bg-white text-black border-white" : "border-white/20 hover:border-white/50"}`}
          >
            Сайты
          </button>
          <button 
            onClick={() => setFilter("tg")} 
            className={`px-4 py-1.5 rounded-full border transition ${filter === "tg" ? "bg-white text-black border-white" : "border-white/20 hover:border-white/50"}`}
          >
            Telegram
          </button>
        </div>

        {/* Cases List — clean and minimal */}
        <div className="space-y-4">
          {filtered.map((project, index) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              className="group block case-card px-6 py-7 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/40 tabular-nums">{(index + 1).toString().padStart(2, "0")}</span>
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-1px] group-hover:underline">
                      {project.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-white/70 max-w-[620px] leading-relaxed text-[15px]">
                    {project.short}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1 text-right">
                  <span className="text-xs uppercase tracking-widest text-white/40">{project.type}</span>
                  <span className="font-mono text-sm text-white/50">{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-white/40">
          Хочешь похожий проект? <Link href="https://t.me/fuckbuild" target="_blank" className="underline">Напиши в Telegram</Link>
        </div>
      </div>
    </main>
  );
}
