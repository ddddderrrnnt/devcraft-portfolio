"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";
import { assetPath } from "@/lib/assets";

const nav = [
  { label: "Главная", href: "/#home" },
  { label: "Работы", href: "/#projects" },
  { label: "Услуги", href: "/#services" },
  { label: "Процесс", href: "/#process" },
  { label: "Контакты", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <div className="container-premium py-4">
          <div className={`flex items-center justify-between border px-4 py-3 transition duration-300 ${scrolled ? "border-white/10 bg-black/80 backdrop-blur-xl" : "border-white/10 bg-black/35 backdrop-blur-sm"}`}>
            <Link href="/#home" className="flex items-center gap-3" aria-label="DevCraft home">
              <span className="block size-2 rounded-full bg-white" />
              <span className="mono text-xs font-semibold uppercase tracking-[0.08em]">DevCraft</span>
            </Link>

            <nav className="hidden items-center gap-8 mono text-[11px] uppercase tracking-[0.16em] text-white/45 lg:flex">
              {nav.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link href="https://t.me/fuckbuild" target="_blank" className="hidden border border-white/10 px-4 py-2 mono text-[11px] uppercase text-white/65 transition hover:border-white hover:bg-white hover:text-black sm:block">
                Telegram
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="border border-white/10 px-4 py-2 mono text-[11px] uppercase text-white/80 transition hover:border-white hover:bg-white hover:text-black"
                aria-label="Открыть меню"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] overflow-y-auto bg-[#f5f5f2] text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-premium min-h-dvh py-4">
              <div className="flex items-center justify-between border border-black/10 px-4 py-3">
                <Link href="/#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <span className="block size-2 rounded-full bg-black" />
                  <span className="mono text-xs font-semibold uppercase tracking-[0.08em]">DevCraft</span>
                </Link>
                <button onClick={() => setOpen(false)} className="mono text-[11px] uppercase text-black/55 underline underline-offset-4 hover:text-black">
                  Close
                </button>
              </div>

              <div className="grid gap-10 py-10 lg:grid-cols-[.92fr_1.08fr] lg:py-16">
                <div>
                  <p className="label-dark mb-8">Navigation</p>
                  <div className="space-y-2">
                    {nav.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 12, opacity: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link href={item.href} onClick={() => setOpen(false)} className="group grid grid-cols-[3.5rem_1fr] items-baseline border-b border-black/10 py-4">
                          <span className="mono text-xs text-black/35">{String(index + 1).padStart(2, "0")}</span>
                          <span className="text-6xl font-medium leading-none tracking-[-0.085em] transition group-hover:translate-x-2 sm:text-8xl">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 16, opacity: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {projects.slice(0, 4).map((project, index) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`} onClick={() => setOpen(false)} className={`group border border-black/10 bg-white p-3 ${index === 0 ? "sm:col-span-2" : ""}`}>
                      <div className="relative aspect-[16/9] overflow-hidden bg-black">
                        <Image src={assetPath(project.screenshot)} alt={project.title} fill sizes="(min-width: 1024px) 580px, 100vw" className="bw-img object-cover object-top opacity-90 transition duration-700 group-hover:scale-105" />
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-4">
                        <span className="text-lg font-medium tracking-[-0.05em]">{project.title}</span>
                        <span className="mono text-[10px] uppercase text-black/40">{project.type}</span>
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
