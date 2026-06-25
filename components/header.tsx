"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";
import { assetPath } from "@/lib/assets";

const nav = [
  { label: "HOME", href: "/#home", meta: "Главная" },
  { label: "PROJECTS", href: "/#projects", meta: "Реальные работы" },
  { label: "SERVICES", href: "/#services", meta: "Что делаю" },
  { label: "PROCESS", href: "/#process", meta: "Как работаю" },
  { label: "STACK", href: "/#stack", meta: "Технологии" },
  { label: "CONTACT", href: "/#contact", meta: "Связь" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <div className="container-premium py-4">
          <div className={`grid grid-cols-[1fr_auto_1fr] items-center border px-4 py-3 transition duration-300 ${scrolled ? "border-white/20 bg-black/82 backdrop-blur-xl" : "border-white/10 bg-black/20"}`}>
            <Link href="/#home" className="mono text-sm font-semibold uppercase tracking-[-0.04em]">
              DEVCRAFT
            </Link>
            <nav className="hidden gap-8 mono text-[11px] uppercase tracking-[0.18em] text-white/50 lg:flex">
              <Link href="/#projects" className="transition hover:text-white">Работы</Link>
              <Link href="/#services" className="transition hover:text-white">Услуги</Link>
              <Link href="/#process" className="transition hover:text-white">Процесс</Link>
              <Link href="/#contact" className="transition hover:text-white">Контакты</Link>
            </nav>
            <div className="flex justify-end gap-3">
              <Link href="https://t.me/fuckbuild" target="_blank" className="hidden border border-white/20 px-4 py-2 mono text-xs uppercase text-white/70 transition hover:bg-white hover:text-black sm:block">
                Написать
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="border border-white/20 px-4 py-2 mono text-xs uppercase text-white transition hover:bg-white hover:text-black"
                aria-label="Открыть меню"
              >
                MENU
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] overflow-y-auto bg-[#f4f4f1] text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-premium min-h-dvh py-4">
              <div className="grid grid-cols-[1fr_auto] border border-black/20 px-4 py-3">
                <Link href="/#home" onClick={() => setOpen(false)} className="mono text-sm font-semibold uppercase">DEVCRAFT</Link>
                <button onClick={() => setOpen(false)} className="mono text-xs uppercase underline underline-offset-4">Close</button>
              </div>

              <div className="grid gap-8 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-16">
                <div>
                  <p className="section-label-dark mb-8">Navigation / Index</p>
                  <div className="border-t border-black/20">
                    {nav.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ y: 26, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 12, opacity: 0 }}
                        transition={{ delay: index * 0.035, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link href={item.href} onClick={() => setOpen(false)} className="group grid grid-cols-[4.5rem_1fr] items-end border-b border-black/20 py-4 sm:grid-cols-[7rem_1fr]">
                          <span className="mono pb-2 text-xs text-black/45">{String(index + 1).padStart(2, "0")}</span>
                          <span>
                            <span className="block text-[13vw] font-semibold leading-[.8] tracking-[-0.1em] transition group-hover:translate-x-3 sm:text-7xl lg:text-8xl">{item.label}</span>
                            <span className="mono mt-2 block text-xs uppercase text-black/45">{item.meta}</span>
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ x: 28, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 16, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {projects.slice(0, 4).map((project, index) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`} onClick={() => setOpen(false)} className={`group border border-black/20 bg-black text-white ${index === 0 ? "sm:col-span-2" : ""}`}>
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image src={assetPath(project.screenshot)} alt={project.title} fill sizes="(min-width: 1024px) 520px, 100vw" className="bw-img object-cover object-top opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                      </div>
                      <div className="flex items-center justify-between border-t border-white/20 p-4">
                        <span className="font-medium tracking-[-0.04em]">{project.title}</span>
                        <span className="mono text-xs text-white/50">{project.type}</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
