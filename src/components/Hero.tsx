import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./Button";
import { TerminalPanel } from "./TerminalPanel";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#081220] text-white">
      {/* --- FOND CYBER ANIMÉ --- */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050C17] via-[#081C2A] to-[#0B1F2B]" />
        <div className="absolute top-1/3 left-1/3 w-[280px] h-[280px] bg-teal-500/25 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-cyan-500/25 blur-[140px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,204,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,204,0.04)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:80px_80px]" />
      </div>

      {/* --- EFFET BINAIRE 0101 --- */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 h-[200%] text-[10px] md:text-xs text-teal-400/30 font-mono tracking-widest animate-scrollBinary leading-tight whitespace-pre">
        {"01010110011010100101101001010110010101101001101001011001011010 ".repeat(300)}
      </div>
    </div>




      {/* --- CONTENU --- */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          Mohamed <span className="text-teal-400">Azzam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-teal-400 font-semibold mb-3"
        >
          Ingénieur MIAGE — Cybersécurité & Développement Sécurisé
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8"
        >
          Passionné par la sécurité offensive, la détection des vulnérabilités et la conception d’applications fiables.
          <br />
          <span className="text-cyan-400 font-medium">
            Recherche d’un stage de fin d’études (6 mois — Février/Mars 2026)
          </span>
        </motion.p>

        {/* --- Boutons principaux --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Button
  variant="primary"
  icon={<Download size={18} />}
  className="hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,204,0.25)] active:scale-95"
  onClick={() => {
    // --- 🔹 Envoi d’un événement à Google Analytics ---
    if (window.gtag) {
      window.gtag("event", "download_cv", {
        event_category: "engagement",
        event_label: "Téléchargement CV",
        value: 1,
      });
    }

    // --- 🔹 Action réelle de téléchargement ---
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
  className="hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(0,255,204,0.25)] active:scale-95"
          >
            Me Contacter
          </Button>
        </motion.div>

        {/* --- Réseaux sociaux --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 justify-center mb-8"
        >
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
              className="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-125"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* --- Terminal ou Animation Mobile --- */}
        <div className="hidden md:flex justify-center mt-6">
          <TerminalPanel />
        </div>
        <div className="md:hidden text-teal-400 text-sm font-mono animate-pulse mt-6">
          Initialisation de l’environnement sécurisé...
        </div>
      </div>

      {/* --- Indicateur scroll --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center p-2 shadow-[0_0_12px_rgba(0,255,204,0.4)]">
          <div className="w-1 h-3 bg-teal-400 rounded-full" />
        </div>
      </div>

     

    </section>
  );
}
