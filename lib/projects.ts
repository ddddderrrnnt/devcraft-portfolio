export type Project = {
  slug: string;
  title: string;
  type: "Веб-платформа" | "Сайт" | "Интернет-магазин" | "Telegram-сервис";
  url: string;
  year: string;
  description: string;
  short: string;
  screenshot: string;
  favicon: string;
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
    type: "Веб-платформа",
    url: "https://helpler.ru",
    year: "2026",
    description:
      "Платформа психологической самопомощи с курсами, практиками и личным пользовательским сценарием.",
    short:
      "Веб-платформа для самостоятельной работы с состоянием: контент, практики, сценарии пользователя и аккуратная продуктовая логика.",
    screenshot: "/projects/helpler.png",
    favicon: "/projects/helpler-favicon.ico",
    services: ["UX/UI", "Frontend", "Backend", "Продуктовая логика"],
    technologies: ["React", "TypeScript", "Node.js", "REST API", "SEO"],
    task:
      "Собрать доверительный продукт в чувствительной нише: спокойный интерфейс, понятная структура, быстрый вход в практики и ощущение надёжности.",
    solution:
      "Спроектирована архитектура разделов, сценарии первого посещения, интерфейс контентных модулей и серверная логика для работы продукта. Особое внимание — скорости, адаптиву и чистой подаче.",
    result:
      "Получилась цельная веб-платформа с понятной навигацией, сильным первым экраном и аккуратной системой контента без визуального давления.",
    metrics: [
      { value: "Web", label: "платформа" },
      { value: "5+", label: "ключевых сценариев" },
      { value: "SEO", label: "подготовка к росту" },
    ],
  },
  {
    slug: "nutritionalcouch",
    title: "Nutritional Couch",
    type: "Сайт",
    url: "https://nutritionalcouch.ru",
    year: "2026",
    description:
      "Сайт нутрициолога с программами питания, статьями и системой записи на консультации.",
    short:
      "Экспертный сайт с программами питания, контентом и понятным пользовательским маршрутом до записи.",
    screenshot: "/projects/nutritionalcouch.png",
    favicon: "/projects/nutritionalcouch-favicon.svg",
    services: ["UX/UI", "Frontend", "Контентная структура", "Формы"],
    technologies: ["React", "TypeScript", "CSS", "Forms", "SEO"],
    task:
      "Упаковать экспертность нутрициолога в чистую страницу: без давления, с ясной программой, доверием и простым переходом к заявке.",
    solution:
      "Собрана структура страницы, контент разбит на короткие смысловые блоки, формы и CTA встроены в естественные точки принятия решения.",
    result:
      "Сайт читается спокойно, быстро объясняет ценность программы и ведёт пользователя к записи без лишних элементов.",
    metrics: [
      { value: "1", label: "основной сценарий" },
      { value: "Clean", label: "структура" },
      { value: "Form", label: "приём заявок" },
    ],
  },
  {
    slug: "nutrishen-couch",
    title: "Нутришен Коуч",
    type: "Сайт",
    url: "https://нутришенкоуч.рф",
    year: "2026",
    description:
      "Русскоязычная версия сайта Nutritional Couch для программы восстановления печени и желчного пузыря.",
    short:
      "Локализованная версия экспертного сайта с отдельным доменом, метаданными и адаптивной структурой.",
    screenshot: "/projects/nutrishen-couch.png",
    favicon: "/projects/nutrishen-couch-favicon.svg",
    services: ["Локализация", "UX Writing", "Frontend", "SEO"],
    technologies: ["React", "TypeScript", "Responsive", "SEO"],
    task:
      "Сохранить идентичность проекта и адаптировать под русскоязычный домен, не усложняя пользовательский путь.",
    solution:
      "Настроена локализованная версия: структура контента, домен, метаданные, адаптивная вёрстка и корректные переходы между блоками.",
    result:
      "Проект получил отдельную точку входа для русскоязычной аудитории с тем же уровнем аккуратности и скорости восприятия.",
    metrics: [
      { value: "RU", label: "локализация" },
      { value: "SEO", label: "метаданные" },
      { value: "100%", label: "адаптив" },
    ],
  },
  {
    slug: "propeptide",
    title: "ProPeptide",
    type: "Интернет-магазин",
    url: "http://propeptide.su",
    year: "2026",
    description:
      "Интернет-магазин пептидов с доставкой по Молдове: каталог, консультации и коммерческие сценарии.",
    short:
      "Витрина с каталогом, понятной логикой выбора, консультационным сценарием и мобильной вёрсткой.",
    screenshot: "/projects/propeptide.png",
    favicon: "/projects/propeptide-favicon.ico",
    services: ["E-commerce", "Frontend", "Каталог", "SEO"],
    technologies: ["React", "TypeScript", "Catalog", "Forms", "SEO"],
    task:
      "Сделать современный магазин в медицинско-wellness нише: быстро объяснить ассортимент, повысить доверие и довести пользователя до консультации или заказа.",
    solution:
      "Разработана витрина с акцентом на каталог, преимущества доставки, понятные карточки товаров и CTA для консультации. Интерфейс построен mobile-first.",
    result:
      "Получился быстрый коммерческий продукт с ясной структурой и сильным акцентом на ассортимент и консультационный сценарий.",
    metrics: [
      { value: "Shop", label: "витрина" },
      { value: "MD", label: "регион доставки" },
      { value: "Mobile", label: "first" },
    ],
  },
  {
    slug: "edanafoto-bot",
    title: "EdanaFoto Bot",
    type: "Telegram-сервис",
    url: "https://t.me/Edanafoto_bot",
    year: "2026",
    description:
      "Telegram-сервис для анализа питания по фото, учёта рациона и персональных рекомендаций.",
    short:
      "Самописный Telegram-сервис: пользователь отправляет фото, получает разбор рациона и сохраняет историю.",
    screenshot: "/projects/edanafoto-bot.png",
    favicon: "/projects/edanafoto-bot-favicon.svg",
    services: ["Telegram", "Backend", "Алгоритмы", "UX сценарии"],
    technologies: ["Python", "Telegram API", "PostgreSQL", "Docker", "Webhooks"],
    task:
      "Превратить сложный сценарий учёта питания в быстрый Telegram-flow: минимум шагов, понятный ответ, история взаимодействий.",
    solution:
      "Спроектированы диалоги, обработка входящих сообщений, серверная логика, хранение истории и сценарии рекомендаций. Всё работает в привычном интерфейсе Telegram.",
    result:
      "Пользователь получает быстрый разбор питания, а проект — масштабируемый канал взаимодействия без ручной рутины.",
    metrics: [
      { value: "TG", label: "канал" },
      { value: "Photo", label: "сценарий" },
      { value: "Auto", label: "логика ответов" },
    ],
  },
  {
    slug: "gormongid-bot",
    title: "Gormon Gid Bot",
    type: "Telegram-сервис",
    url: "https://t.me/GormonGid_bot",
    year: "2026",
    description:
      "Telegram-сервис по здоровью с программами, рекомендациями и структурированными пользовательскими сценариями.",
    short:
      "Telegram-сервис с программами, рекомендациями, базой знаний и продуманными сценариями общения.",
    screenshot: "/projects/gormongid-bot.png",
    favicon: "/projects/gormongid-bot-favicon.svg",
    services: ["Telegram", "Backend", "База знаний", "Автоматизация"],
    technologies: ["Python", "Telegram API", "Supabase", "Docker", "Webhooks"],
    task:
      "Создать Telegram-сервис, который бережно ведёт пользователя по вопросам здоровья и поддерживает экспертный продукт.",
    solution:
      "Собраны сценарии общения, серверная логика обработки запросов, база знаний, хранение состояний и выдача рекомендаций по выбранным маршрутам.",
    result:
      "Сервис стал постоянной точкой контакта с аудиторией: помогает пользователям, разгружает консультации и поддерживает экспертность проекта.",
    metrics: [
      { value: "24/7", label: "доступность" },
      { value: "KB", label: "база знаний" },
      { value: "Flow", label: "сценарии" },
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
  "Telegram API",
  "Git",
  "Vercel",
  "REST API",
];

export const services = [
  {
    title: "Веб-сайты",
    text: "Маркетинговые сайты, экспертные страницы, витрины и продуктовые интерфейсы под задачу.",
    icon: "window",
  },
  {
    title: "Telegram-сервисы",
    text: "Боты, webhooks, личные сценарии, уведомления, заявки и интеграции внутри Telegram.",
    icon: "telegram",
  },
  {
    title: "Backend",
    text: "Серверная логика, базы данных, API, роли, состояния, очереди и безопасные интеграции.",
    icon: "repository",
  },
  {
    title: "Автоматизация",
    text: "Связка сервисов, форм, таблиц, CRM, уведомлений и регулярных бизнес-процессов.",
    icon: "wrench",
  },
  {
    title: "Сопровождение",
    text: "Деплой, аналитика, SEO, мониторинг, улучшения и аккуратная поддержка после запуска.",
    icon: "archive",
  },
];
