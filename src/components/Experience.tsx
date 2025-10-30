"use client";
import { LogoBadge } from "./LogoBadge"; // adapte le chemin
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useMotionSettings, fadeInUpVariants, getTransition } from "../motionConfig";

export function Experience() {
  const { isMobile, multipliers } = useMotionSettings();
  const experiences = [
    {
      year: "2025",
      company: "SQLI Digital Centre",
      role: "Stagiaire Ingénieur Développement Web",
      location: "Rabat",
      period: "06/2025 - 08/2025",
      type: "Stage Ingénieur",
      duration: "2 mois",
      logo: "/logos/sqli.png",
      achievements: [
        "Développement d’un portail web de suivi des projets clients (Spring Boot, React.js, PostgreSQL).",
        "Conception UML, modélisation de la base de données, maquettes Figma.",
        "Dashboard, rôles, historique, PDF, notifications temps réel et QR Code.",
      ],
      tech: ["Spring Boot", "React.js", "PostgreSQL", "Figma"],
    },
    {
      year: "2024",
      company: "ThreeComp",
      role: "Stagiaire Développeur Full-Stack",
      location: "Rabat",
      period: "08/2023 - 09/2023",
      type: "Stage Développement",
      duration: "2 mois",
      logo: "/logos/threecomp.png",
      achievements: [
        "Développement d’une application web Django/MySQL avec interface responsive.",
        "Création d’interfaces modernes et intuitives.",
      ],
      tech: ["Django", "MySQL", "Python"],
    },
    {
      year: "2023",
      company: "Novec",
      role: "Stagiaire Réseaux – Stage BTS",
      location: "Technopolis Rabat",
      period: "06/2023 - 07/2023",
      type: "Stage Réseaux",
      duration: "1 mois",
      logo: "/logos/novec.png",
      achievements: [
        "Mise en place d’une solution de supervision réseau (Nagios/Centreon).",
        "Surveillance et configuration d’alertes pour services critiques.",
      ],
      tech: ["Nagios", "Centreon", "Linux"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 bg-[#081220] overflow-hidden"
    >
      {/* --- Halo cybersécurité --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* --- Titre --- */}
        {isMobile ? (
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
              Expérience <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Professionnelle</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]" />
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Stages techniques et projets réalisés en entreprise.
            </p>
          </div>
        ) : (
          <motion.div
            initial={fadeInUpVariants(multipliers.distance * 0.8).hidden}
            whileInView={fadeInUpVariants(multipliers.distance * 0.8).show}
            transition={getTransition({ duration: 0.8 })}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
              Expérience <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Professionnelle</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]" />
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Stages techniques et projets réalisés en entreprise.
            </p>
          </motion.div>
        )}

        {/* --- Grille d’expériences --- */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, i) => (
            isMobile ? (
              <div key={i} className="group relative">
                <div className="h-full bg-slate-800/60 backdrop-blur-xl border border-slate-700/70 rounded-2xl p-6 overflow-hidden">
                  {/* --- Logo circulaire + année --- */}
                  <div className="flex items-center gap-4">
                    {/* Logo rond stylé */}
                    <LogoBadge src={exp.logo} alt={exp.company} />

                    {/* Année et durée */}
                    <div>
                      <div className="text-2xl font-bold text-white">{exp.year}</div>
                      <div className="text-xs text-slate-400">{exp.duration}</div>
                    </div>
                  </div>

                  {/* --- Entreprise & Lieu --- */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin size={14} className="text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* --- Poste --- */}
                  <div className="mb-4">
                    <h4 className="text-slate-200 font-medium text-base mb-2">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar size={14} className="text-teal-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* --- Réalisations --- */}
                  <div className="mb-4">
                    <h5 className="text-slate-300 font-medium text-sm mb-2">
                      Réalisations clés :
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="text-slate-400 text-xs flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* --- Technologies --- */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, k) => (
                      <span
                        key={k}
                        className="px-2 py-1 bg-slate-700/40 text-cyan-400 rounded-full text-xs border border-slate-600/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <motion.div
                key={i}
                initial={fadeInUpVariants(multipliers.distance).hidden}
                whileInView={fadeInUpVariants(multipliers.distance).show}
                transition={getTransition({ duration: 0.6, delay: i * 0.12 })}
                className="group relative"
              >
                <div className="h-full bg-slate-800/60 backdrop-blur-xl border border-slate-700/70 hover:border-cyan-400/50 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,255,204,0.1)] overflow-hidden">
                {/* --- Logo circulaire + année --- */}
                <div className="flex items-center gap-4">
  {/* Logo rond stylé */}
  <LogoBadge src={exp.logo} alt={exp.company} />

  {/* Année et durée */}
  <div>
    <div className="text-2xl font-bold text-white">{exp.year}</div>
    <div className="text-xs text-slate-400">{exp.duration}</div>
  </div>
</div>


                {/* --- Entreprise & Lieu --- */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={14} className="text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* --- Poste --- */}
                <div className="mb-4">
                  <h4 className="text-slate-200 font-medium text-base mb-2">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={14} className="text-teal-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* --- Réalisations --- */}
                <div className="mb-4">
                  <h5 className="text-slate-300 font-medium text-sm mb-2">
                    Réalisations clés :
                  </h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-xs flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* --- Technologies --- */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, k) => (
                    <span
                      key={k}
                      className="px-2 py-1 bg-slate-700/40 text-cyan-400 rounded-full text-xs border border-slate-600/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                </div>
              </motion.div>
            )
          ))}
        </div>

        {/* --- Statistiques dynamiques --- */}
        {isMobile ? (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
            {[
              { value: "4", label: "Stages", color: "text-teal-400" },
              { value: "7+", label: "Mois", color: "text-cyan-400" },
              { value: "8+", label: "Technologies", color: "text-blue-400" },
              { value: "70%", label: "Satisfaction", color: "text-indigo-400" },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={fadeInUpVariants(multipliers.distance).hidden}
            whileInView={fadeInUpVariants(multipliers.distance).show}
            transition={getTransition({ duration: 0.8, delay: 0.4 })}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-center"
          >
            {[
              { value: "4", label: "Stages", color: "text-teal-400" },
              { value: "7+", label: "Mois", color: "text-cyan-400" },
              { value: "8+", label: "Technologies", color: "text-blue-400" },
              { value: "70%", label: "Satisfaction", color: "text-indigo-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50"
              >
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
