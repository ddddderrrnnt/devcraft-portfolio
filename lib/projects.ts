export type Project = {
  slug: string;
  title: string;
  type: "Веб-сайт" | "Telegram-бот" | "AI-продукт";
  url: string;
  year: string;
  description: string;
  short: string;
  screenshot: string;
  favicon: string;
  colors: string[];
  accent: string;
  services: string[];
  technologies: string[];
  task: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "helpler",
    title: "Helpler",
    type: "AI-продукт",
    url: "https://helpler.ru",
    year: "2026",
    description:
      "Онлайн-платформа психологической самопомощи: курсы, практики и AI-психолог 24/7 для работы с тревогой, стрессом, выгоранием и депрессией.",
    short:
      "Платформа психологической самопомощи с AI-ассистентом, курсами и образовательными материалами.",
    screenshot: "/projects/helpler.png",
    favicon: "/projects/helpler-favicon.ico",
    colors: ["#010f28", "#5482b4", "#7ea0c5", "#c4c6ca"],
    accent: "#7ea0c5",
    services: ["UX/UI", "Frontend", "Backend", "AI-интеграции"],
    technologies: ["React", "TypeScript", "Node.js", "AI API", "SEO"],
    task:
      "Собрать доверительный digital-продукт в чувствительной нише: понятная подача, быстрый старт для пользователя и ощущение защищённости без визуальной перегрузки.",
    solution:
      "Разработана спокойная дизайн-система, архитектура страниц, сценарии онбординга и интерфейс AI-помощника. Особое внимание — скорости загрузки, доступности и аккуратной работе с контентом.",
    result:
      "Получилась цельная платформа с премиальным first impression: клиент сразу понимает пользу, видит структуру продукта и может быстро перейти к практикам или AI-консультации.",
    metrics: [
      { value: "24/7", label: "AI-помощник" },
      { value: "5+", label: "ключевых сценариев" },
      { value: "SEO", label: "готовность к росту" },
    ],
  },
  {
    slug: "nutritionalcouch",
    title: "Nutritional Couch",
    type: "Веб-сайт",
    url: "https://nutritionalcouch.ru",
    year: "2026",
    description:
      "Сайт нутрициолога с программами питания, статьями и системой записи на консультации.",
    short:
      "Сайт нутрициолога с программами питания, статьями и системой записи на консультации.",
    screenshot: "/projects/nutritionalcouch.png",
    favicon: "/projects/nutritionalcouch-favicon.svg",
    colors: ["#f9f7f4", "#6b7b5e", "#2c2c2c", "#e3e3e3"],
    accent: "#6b7b5e",
    services: ["UX/UI", "Landing", "Content", "Forms"],
    technologies: ["React", "TypeScript", "CSS", "SEO", "Analytics"],
    task:
      "Упаковать экспертность нутрициолога в чистую, тёплую и понятную страницу, где пользователь без давления понимает программу и оставляет заявку.",
    solution:
      "Создана мягкая визуальная система с натуральной палитрой, структурированными блоками программы и ясной CTA-логикой. Контент разбит на короткие смысловые экраны.",
    result:
      "Сайт воспринимается как аккуратный экспертный продукт: легко читать, удобно сканировать, просто записаться на консультацию.",
    metrics: [
      { value: "1", label: "основной сценарий" },
      { value: "0", label: "визуального шума" },
      { value: "Form", label: "заявки" },
    ],
  },
  {
    slug: "nutrishen-couch",
    title: "Нутришен Коуч",
    type: "Веб-сайт",
    url: "https://нутришенкоуч.рф",
    year: "2026",
    description:
      "Русскоязычная версия сайта Nutritional Couch для программы восстановления печени и желчного пузыря.",
    short:
      "Локализованная версия сайта программы восстановления печени и желчного пузыря.",
    screenshot: "/projects/nutrishen-couch.png",
    favicon: "/projects/nutrishen-couch-favicon.svg",
    colors: ["#f9f7f4", "#6b7b5e", "#2c2c2c", "#e3e3e3"],
    accent: "#6b7b5e",
    services: ["Localization", "UX Writing", "Frontend", "SEO"],
    technologies: ["React", "TypeScript", "Responsive", "SEO"],
    task:
      "Сохранить визуальную идентичность проекта и адаптировать под русскоязычный домен, чтобы пользовательский путь остался таким же простым.",
    solution:
      "Настроена локализованная версия: домен, структура метаданных, контентные акценты и адаптивная вёрстка для разных устройств.",
    result:
      "Проект получил отдельную точку входа для русскоязычной аудитории без потери качества интерфейса и скорости восприятия.",
    metrics: [
      { value: "RU", label: "локализация" },
      { value: "SEO", label: "метаданные" },
      { value: "100%", label: "адаптив" },
    ],
  },
  {
    slug: "propeptide",
    title: "ProPeptide",
    type: "Веб-сайт",
    url: "http://propeptide.su",
    year: "2026",
    description:
      "Интернет-магазин пептидов с доставкой по Молдове: каталог, консультации и e-commerce сценарии.",
    short:
      "Интернет-магазин пептидов с доставкой по всей Молдове и современным e-commerce UX.",
    screenshot: "/projects/propeptide.png",
    favicon: "/projects/propeptide-favicon.ico",
    colors: ["#2463eb", "#0f1729", "#e2e8f0", "#94a3b8"],
    accent: "#2463eb",
    services: ["E-commerce", "Frontend", "Catalog UX", "SEO"],
    technologies: ["React", "TypeScript", "Catalog", "Forms", "SEO"],
    task:
      "Сделать современный магазин в медицинско-wellness нише: быстро объяснить ассортимент, повысить доверие и довести пользователя до консультации/заказа.",
    solution:
      "Разработана витрина с акцентом на каталог, преимущества доставки, понятные карточки препаратов и CTA для консультации. Интерфейс сделан чистым и мобильным первым.",
    result:
      "Получился быстрый e-commerce продукт с ясной структурой и сильным визуальным акцентом на ассортимент и консультационный сценарий.",
    metrics: [
      { value: "E-com", label: "логика продаж" },
      { value: "MD", label: "регион доставки" },
      { value: "Mobile", label: "first" },
    ],
  },
  {
    slug: "edanafoto-bot",
    title: "EdanaFoto Bot",
    type: "Telegram-бот",
    url: "https://t.me/Edanafoto_bot",
    year: "2026",
    description:
      "AI-бот для расчёта калорий по фото, анализа питания и подбора диеты.",
    short:
      "AI-бот для расчёта калорий по фото, анализа питания и подбора диеты.",
    screenshot: "/projects/edanafoto-bot.png",
    favicon: "/projects/edanafoto-bot-favicon.svg",
    colors: ["#0088cc", "#333333", "#7d7f81", "#2481cc"],
    accent: "#0088cc",
    services: ["Telegram Bot", "AI Vision", "Automation", "UX сценарии"],
    technologies: ["Python", "Telegram API", "OpenAI", "PostgreSQL", "Docker"],
    task:
      "Превратить сложный сценарий анализа питания в быстрый Telegram-flow: пользователь отправляет фото и получает понятный результат без лишних шагов.",
    solution:
      "Спроектированы диалоги, обработка изображений, интеграция AI Vision, сохранение истории и сценарии рекомендаций. Бот отвечает в привычном интерфейсе Telegram.",
    result:
      "Пользователь получает мгновенный разбор питания и персональные подсказки, а бизнес — масштабируемый канал взаимодействия без ручной рутины.",
    metrics: [
      { value: "AI", label: "анализ фото" },
      { value: "TG", label: "нативный канал" },
      { value: "Auto", label: "рекомендации" },
    ],
  },
  {
    slug: "gormongid-bot",
    title: "Gormon Gid Bot",
    type: "Telegram-бот",
    url: "https://t.me/GormonGid_bot",
    year: "2026",
    description:
      "Умный помощник по здоровью с рекомендациями, программами и AI-консультантом 24/7.",
    short:
      "Умный помощник по здоровью с рекомендациями, программами и AI-консультантом 24/7.",
    screenshot: "/projects/gormongid-bot.png",
    favicon: "/projects/gormongid-bot-favicon.svg",
    colors: ["#0088cc", "#333333", "#7d7f81", "#2481cc"],
    accent: "#0088cc",
    services: ["Telegram Bot", "AI-agent", "Health UX", "Automation"],
    technologies: ["Python", "Telegram API", "OpenAI", "Supabase", "Docker"],
    task:
      "Создать медицинско-wellness помощника, который бережно ведёт пользователя по вопросам здоровья и работает как цифровой консультант.",
    solution:
      "Собраны сценарии общения, AI-слой, обработка запросов, база знаний и логика выдачи рекомендаций. Упор — на ясные ответы, безопасность и доступность 24/7.",
    result:
      "Бот стал постоянной точкой контакта с аудиторией: помогает пользователям, разгружает консультации и поддерживает экспертный продукт.",
    metrics: [
      { value: "24/7", label: "AI-консультант" },
      { value: "Health", label: "сценарии" },
      { value: "KB", label: "база знаний" },
    ],
  },
];

export const featuredProjects = projects.slice(0, 6);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Docker",
  "OpenAI",
  "Telegram API",
  "Git",
  "Vercel",
];

export const services = [
  {
    title: "Разработка сайтов",
    text: "Маркетинговые сайты, e-commerce, личные кабинеты и сложные web-продукты под ключ.",
  },
  {
    title: "Telegram-боты",
    text: "Автоматизация продаж, консультаций, оплат, уведомлений и внутренних процессов.",
  },
  {
    title: "AI-агенты",
    text: "Ассистенты, RAG, анализ изображений, генерация контента и интеллектуальные сценарии.",
  },
  {
    title: "Автоматизация",
    text: "Интеграции сервисов, CRM, таблиц, уведомлений и рутинных бизнес-процессов.",
  },
  {
    title: "Интеграции",
    text: "API, платежи, базы данных, аналитика, внешние сервисы и production-инфраструктура.",
  },
];
