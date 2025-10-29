// components/LogoBadge.tsx
type LogoBadgeProps = { src: string; alt: string };

export function LogoBadge({ src, alt }: LogoBadgeProps) {
  return (
    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-[0_0_14px_rgba(0,255,204,0.12)] flex items-center justify-center">
      {/* pastille interne blanche pour tous les logos (meilleure lisibilité) */}
      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
        {/* le logo n'est JAMAIS rogné : on limite largeur/hauteur à 70% */}
        <img
          src={src}
          alt={alt}
          className="max-w-[70%] max-h-[70%] object-contain"
          // Optionnel : petit boost lisibilité
          style={{ filter: "contrast(1.05) brightness(1.03)" }}
        />
      </div>

      {/* halo doux au survol */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/0 to-teal-500/0 opacity-0 group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-500" />
    </div>
  );
}
