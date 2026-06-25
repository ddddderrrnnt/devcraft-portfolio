"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";
import { ArrowUpRight, CloseIcon, MenuIcon, Spark } from "@/components/icons";

const nav = [
  { label: "HOME", href: "/#home", preview: "Главный экран" },
  { label: "PROJECTS", href: "/#projects", preview: "Кейсы и реальные продукты" },
  { label: "SERVICES", href: "/#services", preview: "Сайты, боты и AI" },
  { label: "PROCESS", href: "/#process", preview: "От анализа до запуска" },
  { label: "ABOUT", href: "/#technologies", preview: "Стек и подход" },
  { label: "CONTACT", href: "/#contact", preview: "Обсуждение проекта" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <div className="container-premium py-5">
          <div
            className={`flex items-center justify-between rounded-full border px-3 py-3 transition-all duration-500 sm:px-4 ${
              scrolled
                ? "border-white/10 bg-black/50 shadow-card backdrop-blur-2xl"
                : "border-transparent bg-transparent"
            }`}
          >
            <Link href="/#home" className="group inline-flex items-center gap-3" aria-label="DevCraft home">
              <span className="relative grid size-9 place-items-center rounded-full border border-gold/30 bg-gold/10 text-champagne shadow-glow">
                <Spark className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </span>
              <span className="text-sm font-semibold tracking-[-0.03em] text-white">DevCraft</span>
            </Link>

            <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[.025] px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/50 lg:flex">
              <Link href="/#projects" className="transition hover:text-champagne">Работы</Link>
              <Link href="/#services" className="transition hover:text-champagne">Услуги</Link>
              <Link href="/#process" className="transition hover:text-champagne">Процесс</Link>
              <Link href="/#faq" className="transition hover:text-champagne">FAQ</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="https://t.me/fuckbuild"
                target="_blank"
                className="group hidden overflow-hidden rounded-full border border-gold/30 bg-gold/10 px-5 py-3 text-xs font-medium text-champagne transition hover:border-champagne/60 hover:bg-champagne hover:text-black sm:inline-flex"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Связаться <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="group grid size-11 place-items-center rounded-full border border-white/10 bg-white/[.035] text-white transition hover:border-gold/40 hover:bg-gold/10 hover:text-champagne"
                aria-label="Открыть меню"
              >
                <MenuIcon className="size-5 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] overflow-hidden bg-black/80 backdrop-blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="container-premium flex min-h-dvh flex-col py-7">
              <div className="flex items-center justify-between">
                <Link href="/#home" onClick={() => setOpen(false)} className="inline-flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full border border-gold/30 bg-gold/10 text-champagne">
                    <Spark className="size-4" />
                  </span>
                  <span className="text-sm font-semibold">DevCraft</span>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[.04] text-white/100 transition hover:border-gold/40 hover:text-champagne"
                  aria-label="Закрыть меню"
                >
                  <CloseIcon className="size-5" />
                </button>
              </div>

              <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1fr_.82fr] lg:gap-16">
                <div className="relative">
                  <p className="mb-8 text-xs uppercase tracking-[0.32em] text-white/40">Navigation</p>
                  <div className="space-y-2">
                    {nav.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ delay: 0.06 * index, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-end justify-between border-b border-white/10 py-4 transition hover:border-champagne/40"
                        >
                          <span className="text-[12vw] font-medium leading-none tracking-[-0.09em] text-white/90 transition group-hover:text-champagne sm:text-7xl lg:text-8xl">
                            {item.label}
                          </span>
                          <span className="hidden pb-3 text-sm text-white/30 transition group-hover:text-white/100 md:block">{item.preview}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden lg:block"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {projects.slice(0, 4).map((project, index) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        onClick={() => setOpen(false)}
                        className={`group glass relative overflow-hidden rounded-[2rem] p-3 ${index === 0 ? "col-span-2" : ""}`}
                      >
                        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.35rem] bg-white/[.03]">
                          <Image
                            src={project.screenshot}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1024px) 420px, 100vw"
                            className="object-cover object-top opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        </div>
                        <div className="mt-3 flex items-center justify-between px-1 text-sm">
                          <span className="font-medium text-white/80">{project.title}</span>
                          <ArrowUpRight className="size-4 text-champagne" />
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[2rem] border border-gold/20 bg-gold/10 p-6 text-sm leading-6 text-white/60">
                    Полноэкранное меню работает как мини-презентация: не просто список ссылок, а первый слой впечатления о качестве продукта.
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
