import { motion, useReducedMotion } from "framer-motion";
import { Card } from "./Card";
import { Shield, Code, Network, Award } from "lucide-react";

export function About() {
  const shouldReduce = useReducedMotion();

  const strengths = [
    {
      icon: <Shield className="text-teal-400" size={28} />,
      title: "Cybersécurité",
      description:
        "Protection d’applications : Spring Security, JWT, chiffrement (SHA-256).",
    },
    {
      icon: <Code className="text-cyan-400" size={28} />,
      title: "Dev sécurisé",
      description: "Full-stack : Spring Boot, React, Django, .NET (bonnes pratiques).",
    },
    {
      icon: <Network className="text-teal-400" size={28} />,
      title: "Réseaux & supervision",
      description: "CCNA, Packet Tracer, Nmap, Wireshark, Nagios.",
    },
    {
      icon: <Award className="text-cyan-400" size={28} />,
      title: "Certifications",
      description: "NSE 1, CCNAv7, Linux, Security+ (en cours).",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-[#081220] overflow-hidden"
      aria-label="À propos"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-10 md:mb-12">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-4xl font-extrabold text-white mb-3 tracking-tight"
          >
            À <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Propos</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-slate-300 text-base md:text-lg mt-3"
          >
            Ingénieur en formation, passionné par la sécurité et le développement
            d’applications fiables.
          </motion.p>
        </div>

        {/* Image + Texte */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12 md:mb-14">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full overflow-hidden border border-teal-500/40 shadow-[0_0_32px_rgba(45,255,196,0.12)]">
              <img
                src="/DSC_4573.jpg"
                alt="Portrait de Mohamed Azzam"
                loading="lazy"
                className="object-cover w-full h-full"
              />
              {/* halo discret */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-teal-500/10 blur-2xl" />
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Mohamed Azzam
            </h3>

            <p className="text-slate-300 leading-relaxed mb-3">
              Étudiant en dernière année (EMSI Rabat – MIAGE), je conçois des
              applications en intégrant la sécurité dès la conception
              (authentification, contrôle d’accès, chiffrement, logs).
            </p>

            <p className="text-slate-300 leading-relaxed mb-3">
              Projets concrets en Java/Spring Boot, .NET, Python/Django et supervision réseau.
              J’applique des pratiques fiables et conformes aux bonnes normes (OWASP, tests, observabilité).
            </p>

            <p className="text-teal-400 font-medium">
              Objectif : Stage PFE de 6 mois (Février/Mars 2026) – Analyste
              sécurité / Pentest / DevSecOps.
            </p>
          </motion.div>
        </div>

        {/* Séparateur discret */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-10" />

        {/* Cartes de compétences */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {strengths.map((s, i) => (
            <Card
              key={i}
              className="
                group h-full p-5 md:p-6 rounded-2xl
                bg-slate-800/40 border border-slate-700/50
                transition-all duration-300
                hover:border-teal-500/40 hover:shadow-[0_0_22px_rgba(45,255,196,0.18)]
              "
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="shrink-0">{s.icon}</div>
                <h4 className="text-white font-semibold text-base md:text-lg">
                  {s.title}
                </h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {s.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
