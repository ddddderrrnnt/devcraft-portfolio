# DevCraft — premium portfolio

Премиальный сайт-портфолио разработчика на Next.js, React, TypeScript, TailwindCSS, Framer Motion, GSAP, Lenis и Three.js.

## Что реализовано

- Главная страница с премиальным dark/gold UI.
- Hero-блок с интерактивным стеклянным 3D-объектом на Three.js.
- Плавный scroll через Lenis.
- Reveal-анимации через Framer Motion и GSAP ScrollTrigger.
- Минималистичная шапка и полноэкранное нестандартное меню с превью проектов.
- Разделы: Работы, Услуги, Процесс, Технологии, FAQ, Контакты.
- Реальные карточки проектов со скриншотами, favicon и цветовыми палитрами, полученными с сайтов:
  - https://helpler.ru
  - https://nutritionalcouch.ru
  - https://нутришенкоуч.рф
  - http://propeptide.su
  - https://t.me/Edanafoto_bot
  - https://t.me/GormonGid_bot
- Отдельные страницы кейсов `/projects/[slug]`.
- SEO: metadata, sitemap, robots.
- Полная адаптивность.

## Запуск

```bash
npm install
npm run dev
```

Открыть: http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Основные файлы

- `app/page.tsx` — главная страница.
- `app/projects/[slug]/page.tsx` — страницы кейсов.
- `lib/projects.ts` — данные проектов.
- `components/header.tsx` — шапка и fullscreen menu.
- `components/hero-object.tsx` — 3D-объект.
- `app/globals.css` — глобальная дизайн-система.
