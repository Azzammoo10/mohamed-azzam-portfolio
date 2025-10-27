import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050B16]/95 backdrop-blur-md border-t border-teal-500/10 py-10">
      {/* --- Effet de lumière douce --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[200px] bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* --- Contenu principal --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Texte principal */}
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2">
              Réalisé par{" "}
              <span className="font-semibold text-white">Mohamed Azzam</span> —{" "}
              <span className="text-teal-400">
                Ingénieur en Cybersécurité & Développement Sécurisé
              </span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © 2025 — Tous droits réservés
            </p>
          </div>

          {/* Icônes sociales */}
          <div className="flex gap-6">
            {[
              {
                href: "https://github.com/Azzammoo10",
                icon: <Github size={20} />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/mohamed-azzam-93115823a/",
                icon: <Linkedin size={20} />,
                label: "LinkedIn",
              },
              {
                href: "mailto:azzam.moo10@gmail.com",
                icon: <Mail size={20} />,
                label: "Email",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group text-slate-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
              >
                <div className="relative">
                  {icon}
                  <span className="absolute inset-0 blur-[8px] opacity-0 group-hover:opacity-60 bg-teal-400/40 rounded-full transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* --- Ligne décorative --- */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent my-8" />

        {/* --- Texte secondaire --- */}
        <p className="text-center text-slate-500 text-xs tracking-wide">
          Merci de votre visite — restons connectés sur{" "}
          <span className="text-teal-400 font-medium">LinkedIn</span> ou{" "}
          <span className="text-cyan-400 font-medium">GitHub</span>.
        </p>
      </div>
    </footer>
  );
}
