import { motion, useReducedMotion } from "framer-motion";
import { Card } from "./Card";
import { Shield, Code, Network, Award } from "lucide-react";
import { useEffect, useState } from "react";

export function About() {
  const shouldReduce = useReducedMotion();
  // Custom hook to detect mobile view
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
    useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);
    return isMobile;
  }
  const isMobile = useIsMobile();

  // fadeUp variant that adapts for mobile performance
  const fadeUp = isMobile
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.18 } }, // ultra-fast fade only on mobile
      }
    : {
        hidden: { opacity: 0, y: shouldReduce ? 0 : 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  const strengths = [
    {
      icon: <Shield className="text-teal-400" size={26} />,
      title: "Cybersécurité",
      description:
        "Protection d’applications : Spring Security, JWT, chiffrement (SHA-256).",
    },
    {
      icon: <Code className="text-cyan-400" size={26} />,
      title: "Dev sécurisé",
      description: "Full-stack : Spring Boot, React, Django, .NET (bonnes pratiques).",
    },
    {
      icon: <Network className="text-teal-400" size={26} />,
      title: "Réseaux & supervision",
      description: "CCNA, Packet Tracer, Nmap, Wireshark, Nagios.",
    },
    {
      icon: <Award className="text-cyan-400" size={26} />,
      title: "Certifications",
      description: "NSE 1, CCNAv7, Linux, Security+ (en cours).",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 bg-[#081220] overflow-hidden"
      aria-label="À propos"
    >
      {/* --- Halo de fond --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-teal-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[220px] sm:w-[350px] md:w-[400px] h-[220px] sm:h-[350px] md:h-[400px] bg-cyan-500/10 blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* --- Titre --- */}
        <div className="text-center mb-10 md:mb-14">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            À{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Propos
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Ingénieur en formation, passionné par la sécurité et le développement
            d’applications fiables.
          </motion.p>
        </div>

        {/* --- Image + Texte --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* --- Image --- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-teal-500/40 shadow-[0_0_32px_rgba(45,255,196,0.12)]">
              <img
                src="/DSC_4573.jpg"
                alt="Portrait de Mohamed Azzam"
                loading="lazy"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* --- Texte --- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center md:text-left px-2 sm:px-0"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">
              Mohamed Azzam
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
              Étudiant en dernière année (EMSI Rabat – MIAGE), je conçois des
              applications en intégrant la sécurité dès la conception
              (authentification, contrôle d’accès, chiffrement, logs).
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
              Projets concrets en Java/Spring Boot, .NET, Python/Django et supervision réseau.
              J’applique des pratiques fiables et conformes aux bonnes normes (OWASP, tests, observabilité).
            </p>

            <p className="text-teal-400 font-medium text-sm sm:text-base">
               Objectif : Stage PFE de 6 mois (Février/Mars 2026) – Analyste
              sécurité / Pentest / DevSecOps.
            </p>
          </motion.div>
        </div>

        {/* --- Séparateur discret --- */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-10 sm:mb-12" />

        {/* --- Cartes de compétences --- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {strengths.map((s, i) => (
            <Card
              key={i}
              className="group h-full p-5 sm:p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50
                         transition-all duration-300 hover:border-teal-500/40 
                         hover:shadow-[0_0_22px_rgba(45,255,196,0.18)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="shrink-0">{s.icon}</div>
                <h4 className="text-white font-semibold text-base sm:text-lg">
                  {s.title}
                </h4>
              </div>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {s.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
