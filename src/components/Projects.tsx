"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useReducedMotion } from "framer-motion";

// 👉 Détection robuste des appareils tactiles (tous types de téléphones/tablettes)
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

// 👉 useIsMobile hook partagé
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

// Pattern d'animation mobile aligné avec About.tsx

export function Projects() {
  const projects = [
    {
      title: "SecureAuth+",
      description:
        "Plateforme IAM avec Spring Security, JWT, audit de sécurité et gestion dynamique des rôles.",
      tech: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Lombok"],
      github: "https://github.com/Azzammoo10/SecureAuth-.git",
      featured: true,
      status: "En cours",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Portail de Suivi Clients",
      description:
        "Application web de suivi client avec dashboard, PDF, rôles et notifications en temps réel.",
      tech: ["Spring Boot", "React.js", "PostgreSQL", "JWT"],
      github: "https://github.com/Azzammoo10/sqli-project-tracker",
      featured: true,
      status: "Terminé",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "SecurePassManager",
      description:
        "Gestionnaire de mots de passe en .NET avec hachage SHA-256 et chiffrement AES.",
      tech: [".NET", "C#", "SHA-256", "Encryption"],
      github: "https://github.com/Azzammoo10/SecurePassManager-MVC",
      featured: true,
      status: "Terminé",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "EMSI Career Connect",
      description:
        "Plateforme de recrutement et de réseautage pour les lauréats EMSI.",
      tech: ["Node.js", "Express.js", "React", "MongoDB", "Azure"],
      github: "https://github.com/Azzammoo10/Emsi-Career-connect",
      featured: false,
      status: "Terminé",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Application Web Django",
      description:
        "Application web full-stack Django avec gestion complète et interface responsive.",
      tech: ["Django", "Python", "MySQL", "Bootstrap"],
      github: "https://github.com/Azzammoo10/django-it-solutions-store",
      featured: false,
      status: "Terminé",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Gestion Universitaire (C++)",
      description:
        "Application POO en C++ pour gérer les étudiants, enseignants et personnels.",
      tech: ["C++", "POO", "UML", "OOP Design"],
      github:
        "https://github.com/Azzamm5/application-de-gestion-des-tudiants-et-du-personnel-universitaire.git",
      featured: true,
      status: "Terminé",
      color: "from-sky-500 to-teal-500",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const shouldReduce = useReducedMotion();
  const isMobile = useIsMobile();
  const isTouch = useIsTouchDevice();

  const toggleVisible = () => {
    setVisibleCount(visibleCount === 3 ? projects.length : 3);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Terminé":
        return "from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/40";
      case "En cours":
        return "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/40";
      default:
        return "from-slate-600/20 to-slate-700/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#081220] overflow-hidden">
      {/* Halo de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 blur-[90px] rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Titre */}
        {isTouch ? (
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
              Projets <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Techniques</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]" />
            <p className="text-slate-300 text-sm max-w-xl mx-auto">Réalisations concrètes combinant sécurité, performance et innovation.</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
              Projets <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Techniques</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]" />
            <p className="text-slate-300 text-sm max-w-xl mx-auto">Réalisations concrètes combinant sécurité, performance et innovation.</p>
          </motion.div>
        )}

        {/* Grille de projets */}
        {isTouch ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.slice(0, visibleCount).map((project) => (
              <div key={project.title} className="group relative">
                <div
                  className={`relative h-full bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 overflow-hidden`}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Titre et statut */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`p-3 bg-gradient-to-br ${project.color}/20 rounded-xl`}>
                          <Github className="h-6 w-6 text-cyan-400" strokeWidth={1.6} />
                        </div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      </div>
                      <span className={`text-xs px-2 py-1 bg-gradient-to-r ${getStatusStyle(project.status)} rounded-full border font-medium`}>
                        {project.status}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs border border-slate-600/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-slate-700/40 to-slate-600/40 border border-slate-600/40 rounded-lg text-slate-300 hover:text-white overflow-hidden"
                    >
                      <Github size={16} />
                      <span className="font-medium text-sm">Code</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <AnimatePresence mode="sync">
              {projects.slice(0, visibleCount).map((project) => (
                <motion.div
                  key={project.title}
                  layout={!isMobile && !shouldReduce}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }}
                  exit={{ opacity: 0, y: -10 }}
                  className="group relative"
                >
                  <div
                    className={`relative h-full bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 transition-all duration-300 hover:border-teal-500/60 hover:shadow-[0_0_15px_rgba(45,255,196,0.15)] hover:-translate-y-2 overflow-hidden`}
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Titre et statut */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`p-3 bg-gradient-to-br ${project.color}/20 rounded-xl`}>
                            <Github className="h-6 w-6 text-cyan-400" strokeWidth={1.6} />
                          </div>
                          <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        </div>
                        <span className={`text-xs px-2 py-1 bg-gradient-to-r ${getStatusStyle(project.status)} rounded-full border font-medium`}>
                          {project.status}
                        </span>
                      </div>

                      <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs border border-slate-600/50">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-slate-700/40 to-slate-600/40 border border-slate-600/40 rounded-lg text-slate-300 hover:text-white transition-all duration-300 overflow-hidden"
                      >
                        <Github size={16} />
                        <span className="font-medium text-sm">Code</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Bouton "Afficher plus / moins" */}
        <div className="text-center mt-10">
          {isTouch ? (
            <button
              onClick={toggleVisible}
              className="relative px-8 py-2.5 text-sm font-semibold rounded-full border border-teal-500/50 text-teal-400 overflow-hidden group"
            >
              <span className="relative z-10">{visibleCount === 3 ? "Afficher plus" : "Afficher moins"}</span>
            </button>
          ) : (
            <motion.button
              onClick={toggleVisible}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative px-8 py-2.5 text-sm font-semibold rounded-full border border-teal-500/50 text-teal-400 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <span className="relative z-10">{visibleCount === 3 ? "Afficher plus" : "Afficher moins"}</span>
            </motion.button>
          )}
        </div>

        {/* Bouton global "Voir tous les projets sur GitHub" */}
        <div className="text-center mt-6">
          {isTouch ? (
            <a
              href="https://github.com/Azzammoo10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full border border-teal-500/50 text-teal-400 hover:text-white hover:border-teal-400 hover:bg-teal-500/10"
            >
              <Github size={18} />
              <span className="font-medium">Voir tous les projets sur GitHub</span>
            </a>
          ) : (
            <motion.a
              href="https://github.com/Azzammoo10"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full border border-teal-500/50 text-teal-400 hover:text-white hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-300"
            >
              <Github size={18} />
              <span className="font-medium">Voir tous les projets sur GitHub</span>
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
}
