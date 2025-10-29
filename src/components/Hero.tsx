import { Download, Github, Linkedin, Mail, Lock } from "lucide-react";
import { Button } from "./Button";
import { TerminalPanel } from "./TerminalPanel";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // --- Effet particules de fond ---
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let particles: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 60 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0,255,204,0.15)";
      ctx.lineWidth = 1;

      // --- Relier les points proches ---
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // --- Dessiner les particules ---
      ctx.fillStyle = "rgba(0,255,204,0.8)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
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
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#050C17] text-white">
      {/* --- Canvas Particules --- */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
      />

      {/* --- Halo et couches néon --- */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-teal-500/20 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-cyan-400/25 blur-[140px] rounded-full animate-pulse delay-700" />
      </div>

      {/* --- Contenu principal --- */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* --- Icône Sécurité --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="text-teal-400"
          >
            <Lock size={42} className="drop-shadow-[0_0_8px_rgba(0,255,204,0.5)]" />
          </motion.div>
        </motion.div>

        {/* --- Titre principal --- */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,204,0.3)]">
            Mohamed Azzam
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
          Spécialisé dans la protection des systèmes, la sécurité offensive et la conception
          d’applications fiables.
          <br />
          <span className="text-cyan-400 font-medium">
            Recherche d’un stage de fin d’études (6 mois — Février/Mars 2026)
          </span>
        </motion.p>

        {/* --- Boutons --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Button
            variant="primary"
            icon={<Download size={18} />}
            className="hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,204,0.3)] active:scale-95"
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
            className="hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(0,255,204,0.25)] active:scale-95"
          >
            Me Contacter
          </Button>
        </motion.div>

        {/* --- Réseaux sociaux --- */}
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
              className="text-slate-400 hover:text-teal-400 transition-transform duration-300 hover:scale-125"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* --- Terminal Desktop / Mobile Message --- */}
        <div className="hidden md:flex justify-center mt-6">
          <TerminalPanel />
        </div>
        <div className="md:hidden text-teal-400 text-sm font-mono animate-pulse mt-6">
          Initialisation du pare-feu sécurisé...
        </div>
      </div>

      {/* --- Indicateur Scroll --- */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center p-2 shadow-[0_0_12px_rgba(0,255,204,0.4)]">
          <div className="w-1 h-3 bg-teal-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
