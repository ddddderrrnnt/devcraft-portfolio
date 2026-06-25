import Image from "next/image";
import { assetPath } from "@/lib/assets";

const iconMap = {
  window: "/svg4-icons/window.webp",
  wrench: "/svg4-icons/wrench.webp",
  telegram: "/svg4-icons/telegram.webp",
  mail: "/svg4-icons/mail.webp",
  repository: "/svg4-icons/repository.webp",
  archive: "/svg4-icons/archive.webp",
  table: "/svg4-icons/table.webp",
} as const;

export type SiteIconName = keyof typeof iconMap;

export function SiteIcon({ name, className = "size-6" }: { name: SiteIconName; className?: string }) {
  return (
    <Image
      src={assetPath(iconMap[name])}
      alt=""
      width={48}
      height={48}
      className={`bw-icon object-contain ${className}`}
      aria-hidden="true"
    />
  );
}
