import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 text-center text-xs text-white/40 bg-[#050505]">
      <div className="container-premium">
        <div>© {new Date().getFullYear()} DevCraft — ручная разработка</div>
        <div className="mt-2">
          <a href="https://t.me/fuckbuild" target="_blank" className="hover:text-white/70">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
