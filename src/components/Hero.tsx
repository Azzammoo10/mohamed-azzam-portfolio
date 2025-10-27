import { Download, Github, Linkedin, Mail, FolderGit2 } from "lucide-react";
import { Button } from "./Button";
import { TerminalPanel } from "./TerminalPanel";

export function Hero() {
  // Fonction pour scroller vers une section
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#081220]">
      {/* --- FOND CYBER --- */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05111E] via-[#081C2A] to-[#0B1F2B]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-teal-500/25 blur-[150px] rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-cyan-500/25 blur-[140px] rounded-full animate-[pulse_3s_ease-in-out_infinite] delay-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:80px_80px]" />
      </div>

      {/* --- CONTENU --- */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Mohamed <span className="text-teal-400">Azzam</span>
        </h1>

        <p className="text-xl md:text-2xl text-teal-400 font-semibold mb-2">
          Ingénieur MIAGE — Cybersécurité & Développement Sécurisé
        </p>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Passionné par la sécurité offensive, la détection des vulnérabilités et la conception d’applications fiables.
          <br />
          <span className="text-cyan-400 font-medium">
            Recherche d’un stage de fin d’études (6 mois — Février/Mars 2026)
          </span>
        </p>

        {/* --- Boutons principaux --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button
            variant="primary"
            icon={<Download size={18} />}
            className="hover:shadow-[0_0_20px_rgba(0,255,204,0.4)]"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Mohamed_Azzam_CV.pdf";
              link.download = "Mohamed_Azzam_CV.pdf";
              link.click();
            }}
          >
            Télécharger CV
          </Button>

          <Button
            variant="outline"
            icon={<Mail size={18} />}
            onClick={() => scrollToSection("#contact")}
            className="hover:shadow-[0_0_20px_rgba(0,255,204,0.4)]"
          >
            Me Contacter
          </Button>

          <Button
            variant="outline"
            icon={<FolderGit2 size={18} />}
            onClick={() => scrollToSection("#projects")}
            className="hover:shadow-[0_0_20px_rgba(0,255,204,0.4)]"
          >
            Voir mes projets
          </Button>
        </div>

        {/* --- Réseaux sociaux --- */}
        <div className="flex gap-6 justify-center mb-8">
          {[
            { href: "https://github.com/Azzammoo10", icon: <Github size={22} /> },
            { href: "https://linkedin.com/in/mohamed-azzam-93115823a/", icon: <Linkedin size={22} /> },
            { href: "mailto:azzam.moo10@gmail.com", icon: <Mail size={22} /> },
          ].map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* --- Terminal Desktop --- */}
        <div className="hidden md:flex justify-center mt-6">
          <TerminalPanel />
        </div>

        {/* --- Terminal Mobile --- */}
        <div className="md:hidden text-teal-400 text-sm font-mono animate-pulse mt-4">
          Initialisation de l’environnement sécurisé...
        </div>
      </div>

      {/* --- Indicateur scroll --- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center p-2 shadow-[0_0_10px_rgba(0,255,204,0.4)]">
          <div className="w-1 h-3 bg-teal-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
