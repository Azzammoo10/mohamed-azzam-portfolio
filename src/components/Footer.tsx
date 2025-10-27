import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050B16]/95 backdrop-blur-md border-t border-teal-500/10 py-10 overflow-hidden">
      {/* --- Effet de halo lumineux --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[400px] sm:w-[600px] h-[180px] sm:h-[220px] bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* --- Bloc principal --- */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          {/* --- Texte principal --- */}
          <div className="space-y-2">
            <p className="text-slate-400 text-sm leading-relaxed">
              Réalisé par{" "}
              <span className="font-semibold text-white">Mohamed Azzam</span>
              {" — "}
              <span className="text-teal-400 block sm:inline">
                Ingénieur en Cybersécurité & Développement Sécurisé
              </span>
            </p>
            <p className="text-slate-500 text-xs">© 2025 — Tous droits réservés</p>
          </div>

          {/* --- Liens sociaux --- */}
          <div className="flex justify-center md:justify-end gap-6">
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
                <div className="relative flex items-center justify-center">
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
        <p className="text-center text-slate-500 text-xs sm:text-sm tracking-wide leading-relaxed">
          Merci de votre visite — restons connectés sur{" "}
          <a
            href="https://linkedin.com/in/mohamed-azzam-93115823a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 font-medium hover:underline"
          >
            LinkedIn
          </a>{" "}
          ou{" "}
          <a
            href="https://github.com/Azzammoo10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-medium hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
