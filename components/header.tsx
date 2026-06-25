"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/projects";

const mainNav = [
  { label: "Кейсы", href: "/projects" },
  { label: "Услуги", href: "/#services" },
  { label: "Процесс", href: "/#process" },
  { label: "Контакт", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Top bar - minimal, black, clean */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-white/10">
        <div className="container-premium flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-2.5 w-2.5 rounded-full bg-white transition group-hover:scale-110" />
            <span className="font-semibold tracking-[-0.02em] text-lg">DevCraft</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Beautiful Burger */}
          <button
            onClick={toggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 hover:border-white/40 transition-all active:scale-[0.985]"
            aria-label="Меню"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/90"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Fullscreen Menu — clean & beautiful */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#050505] text-white overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-premium pt-6 pb-12">
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-12">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  <span className="font-semibold tracking-[-0.02em] text-xl">DevCraft</span>
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Закрыть
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1 mb-16">
                {mainNav.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block group py-3 text-4xl font-medium tracking-[-1.5px] transition hover:text-white/60"
                  >
                    {item.label}
                    <span className="ml-3 text-white/20 group-hover:text-white/40 transition">→</span>
                  </Link>
                ))}
              </div>

              {/* Projects Preview in Menu — ONLY way to access cases */}
              <div>
                <div className="flex items-baseline justify-between mb-6">
                  <p className="text-xs uppercase tracking-[2px] text-white/40">КЕЙСЫ</p>
                  <Link href="/projects" onClick={() => setOpen(false)} className="text-xs uppercase tracking-widest text-white/50 hover:text-white">
                    Все кейсы →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8">
                  {projects.slice(0, 6).map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      onClick={() => setOpen(false)}
                      className="group block border-b border-white/10 pb-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xl font-medium tracking-tight group-hover:underline">{project.title}</p>
                          <p className="text-sm text-white/50 mt-1">{project.type}</p>
                        </div>
                        <span className="text-xs text-white/30 mt-1 font-mono">{project.year}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom contact */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-sm text-white/50">Готов обсудить проект?</p>
                <a 
                  href="https://t.me/fuckbuild" 
                  target="_blank" 
                  className="inline-block mt-2 text-lg font-medium hover:underline"
                >
                  Написать в Telegram →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
