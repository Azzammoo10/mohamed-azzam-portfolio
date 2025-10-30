import { Download, Github, Linkedin, Mail, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "./Button";
import { TerminalPanel } from "./TerminalPanel";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Détection appareils tactiles (téléphones/tablettes)
function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia && (window.matchMedia("(hover: none)").matches || window.matchMedia("(pointer: coarse)").matches)
      : false
  );
  useEffect(() => {
    const m1 = window.matchMedia("(hover: none)");
    const m2 = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(m1.matches || m2.matches);
    update();
    m1.addEventListener?.("change", update);
    m2.addEventListener?.("change", update);
    return () => {
      m1.removeEventListener?.("change", update);
      m2.removeEventListener?.("change", update);
    };
  }, []);
  return isTouch;
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const isTouch = useIsTouchDevice();

  // --- Canvas Particules ---
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 75 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0,255,204,0.08)";
      ctx.lineWidth = 1;

      // --- Relier les points proches ---
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // --- Dessiner les particules ---
      ctx.fillStyle = "rgba(0,255,204,0.9)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#081220] via-[#0A1825] to-[#0B1F2B] text-white">
      {/* --- Canvas Particules --- */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" />

      {/* --- Halo néon animé --- */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-teal-400/20 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyan-400/25 blur-[140px] rounded-full animate-pulse delay-700" />
      </div>

      {/* --- Contenu principal --- */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* --- Icône sécurité dynamique --- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] mt-8 md:mt-12"
          >
            <ShieldCheck size={20} strokeWidth={2.5} />
          </motion.div>
        </motion.div>


        {/* --- Nom --- */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
        >
          <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Mohamed</span>{" "}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,255,204,0.4)]">
            AZZAM
          </span>
        </motion.h1>


        {/* --- Sous-titre --- */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-teal-400 font-semibold mb-3"
        >
          Ingénieur MIAGE — Cybersécurité & Développement Sécurisé
        </motion.p>

        {/* --- Description --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8"
        >
          Axé sur la conception d’applications performantes et sécurisées, avec un intérêt particulier pour la protection des systèmes et la sécurité applicative.
          <br />
          <span className="text-cyan-400 font-medium">
            Recherche d’un stage de fin d’études (6 mois — Février/Mars 2026)
          </span>
        </motion.p>

        {/* --- Boutons avec effet glassmorphism --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Button
            variant="primary"
            icon={<Download size={18} />}
            className="backdrop-blur-md bg-gradient-to-r from-teal-500/30 to-cyan-500/30 border border-teal-400/40 shadow-[0_0_25px_rgba(0,255,204,0.25)] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,204,0.5)] transition-all duration-300 active:scale-95"
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
            className="backdrop-blur-md border border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(0,255,204,0.3)] transition-all duration-300 active:scale-95"
          >
            Me Contacter
          </Button>
        </motion.div>

        {/* --- Réseaux sociaux avec effet lueur --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
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
              className="text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,255,204,0.6)] transition-transform duration-300 hover:scale-125"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* --- Terminal / texte dynamique --- */}
        <div className="hidden md:flex justify-center mt-6">
          <TerminalPanel />
        </div>
        <div className="md:hidden text-cyan-400 text-sm font-mono animate-pulse mt-6">
          Chargement du profil sécurisé...
        </div>

        {/* --- Bouton de scroll placé juste sous le terminal --- */}
        <div className="flex justify-center mt-6 md:mt-8">
          <motion.button
            onClick={() => scrollToSection("#about")}
            aria-label="Aller à la section À propos"
            initial={{ opacity: 1 }}
            animate={isTouch ? { opacity: [0.9, 1, 0.9], y: [0, 1, 0] } : { opacity: [0.7, 1, 0.7], y: [0, 3, 0] }}
            transition={isTouch ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" } : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/70 bg-[#0A1825]/60 backdrop-blur-sm text-cyan-200 shadow-[0_0_10px_rgba(0,255,204,0.18)] hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            <ChevronDown size={18} className="text-cyan-300" />
            <span className="text-sm font-medium">About me</span>
          </motion.button>
        </div>
      </div>
    
    </section>
  );
}
