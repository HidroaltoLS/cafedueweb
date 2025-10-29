import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";

export default function SocialWidget() {
  // Color único para todos los íconos (ajústalo a tu brand si quieres)
  const iconClass =
    "w-5 h-5 md:w-6 md:h-6 text-brand-800"; // un solo color para todos

  const itemClass =
    "rounded-full p-3 md:p-3.5 bg-white/90 backdrop-blur border border-neutral-300 shadow-md " +
    "hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition " +
    "focus:outline-none focus:ring-2 focus:ring-brand-500";

  return (
    <div
      className="fixed right-3 md:right-4 top-1/2 -translate-y-1/2 z-50
                 flex flex-col gap-3 md:gap-3.5"
      aria-label="Redes sociales Café Dúe"
    >
      <a
        href="https://www.instagram.com/cafedue_ec/"
        target="_blank"
        rel="noopener noreferrer"
        className={itemClass}
        aria-label="Instagram"
        title="Instagram"
      >
        <Instagram className={iconClass} />
      </a>

      <a
        href="https://www.youtube.com/@Cafedue"
        target="_blank"
        rel="noopener noreferrer"
        className={itemClass}
        aria-label="YouTube"
        title="YouTube"
      >
        <Youtube className={iconClass} />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61579350713776"
        target="_blank"
        rel="noopener noreferrer"
        className={itemClass}
        aria-label="Facebook"
        title="Facebook"
      >
        <Facebook className={iconClass} />
      </a>

      <a
        href="https://www.tiktok.com/@cafedueec"
        target="_blank"
        rel="noopener noreferrer"
        className={itemClass}
        aria-label="TikTok"
        title="TikTok"
      >
        <Music2 className={iconClass} />
      </a>
    </div>
  );
}
