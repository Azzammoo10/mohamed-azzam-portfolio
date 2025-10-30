import {  Calendar, Award, BookOpen } from "lucide-react";
import { Card } from "../components/ui/card";
import { motion } from "framer-motion";
import { useMotionSettings, fadeInUpVariants, getTransition } from "../motionConfig";

export function EducationSection() {
  const { isMobile, multipliers } = useMotionSettings();
  const education = [
    {
      period: "09/2021 – 06/2023",
      degree: "BTS – Brevet de Technicien Supérieur",
      school: "Lycée Technique Salé",
      specialization: "Systèmes & Réseaux Informatiques",
      level: "Technicien",
      icon: <BookOpen className="h-6 w-6 text-cyan-400" />,
      description: "Formation technique spécialisée en administration et maintenance des systèmes informatiques",
      achievements: ["Réseaux informatiques", "Maintenance système", "Support technique"]
    },
    {
      period: "10/2024 – Présent",
      degree: "Cycle Ingénieur Informatique & Réseaux (Bac+5)",
      school: "EMSI Rabat",
      specialization: "MIAGE",
      level: "Ingénieur",
      icon: <Award className="h-6 w-6 text-teal-400" />,
      description: "Formation avancée en méthodes informatiques appliquées à la gestion d'entreprise",
      achievements: ["Développement sécurisé", "Architecture logicielle", "Gestion de projet"]
    },
  ];

  return (
    <section
      id="education"
            className="relative py-24 bg-[#081220] overflow-hidden"

    >
      {/* --- Effet de halo cyber créatif --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* --- En-tête section créatif --- */}
        {isMobile ? (
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
              Parcours <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Académique</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]" />
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Un parcours alliant ingénierie logicielle, réseaux et cybersécurité.
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
              Parcours <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Académique</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]" />
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Un parcours alliant ingénierie logicielle, réseaux et cybersécurité.
            </p>
          </motion.div>
        )}

        {/* --- Timeline créative et interactive --- */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ligne de connexion décorative */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500 hidden lg:block"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              isMobile ? (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                {/* --- Carte de formation créative --- */}
                <div className="flex-1 w-full">
                  <Card className="group relative overflow-hidden bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6">
                    {/* Effet brillance désactivé sur mobile */}
                    
                    <div className="relative z-10">
                      {/* En-tête avec icône et niveau */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg">
                            {edu.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                            <span className="text-xs px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/30">
                              {edu.level}
                            </span>
                          </div>
                        </div>
                        <span className="flex items-center gap-2 text-sm text-slate-400">
                          <Calendar className="h-4 w-4 text-cyan-400" />
                          {edu.period}
                        </span>
                      </div>

                      {/* Diplôme et spécialisation */}
                      <div className="mb-4">
                        <p className="text-slate-200 font-semibold text-base mb-2">{edu.degree}</p>
                        <p className="text-teal-400 text-sm font-medium">
                          Spécialisation : {edu.specialization}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Compétences acquises */}
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <span
                            key={achIndex}
                            className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs border border-slate-600/50"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* --- Point de connexion décoratif --- */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-teal-500/50 z-10">
                  {index + 1}
                </div>

                {/* --- Espace vide pour l'alternance --- */}
                <div className="flex-1 w-full lg:block hidden"></div>
              </div>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* --- Carte de formation créative --- */}
                  <div className="flex-1 w-full">
                    <Card className="group relative overflow-hidden bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 hover:border-teal-500/60 hover:shadow-[0_0_30px_rgba(45,255,196,0.2)] transition-all duration-500 hover:-translate-y-2">
                      {/* Effet de brillance au hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/3 group-hover:to-teal-500/5 transition-all duration-700"></div>
                      
                      <div className="relative z-10">
                        {/* En-tête avec icône et niveau */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg">
                              {edu.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                              <span className="text-xs px-2 py-1 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/30">
                                {edu.level}
                              </span>
                            </div>
                          </div>
                          <span className="flex items-center gap-2 text-sm text-slate-400">
                            <Calendar className="h-4 w-4 text-cyan-400" />
                            {edu.period}
                          </span>
                        </div>
                        
                        {/* Diplôme et spécialisation */}
                        <div className="mb-4">
                          <p className="text-slate-200 font-semibold text-base mb-2">{edu.degree}</p>
                          <p className="text-teal-400 text-sm font-medium">
                            Spécialisation : {edu.specialization}
                          </p>
                        </div>
                        
                        {/* Description */}
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                          {edu.description}
                        </p>
                        
                        {/* Compétences acquises */}
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <span
                              key={achIndex}
                              className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs border border-slate-600/50"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* --- Point de connexion décoratif --- */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-teal-500/50 z-10">
                    {index + 1}
                  </div>
                  
                  {/* --- Espace vide pour l'alternance --- */}
                  <div className="flex-1 w-full lg:block hidden"></div>
                </motion.div>
              )
            ))}
          </div>
        </div>

        {/* --- Statistiques créatives --- */}
        {isMobile ? (
          <div className="mt-16 flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto text-center">
            <div className="w-32 sm:w-40 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
              <div className="text-2xl font-bold text-teal-400">2</div>
              <div className="text-sm text-slate-400">Formations</div>
            </div>
            <div className="w-32 sm:w-40 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-400">4+</div>
              <div className="text-sm text-slate-400">Années</div>
            </div>
            <div className="w-32 sm:w-40 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
              <div className="text-2xl font-bold text-teal-400">100%</div>
              <div className="text-sm text-slate-400">Réussite</div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto text-center"
          >
            <div className="w-32 sm:w-40 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-teal-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-teal-400">2</div>
              <div className="text-sm text-slate-400">Formations</div>
            </div>
            <div className="w-32 sm:w-40 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-teal-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-cyan-400">4+</div>
              <div className="text-sm text-slate-400">Années</div>
            </div>
            <div className="w-32 sm:w-40 p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-teal-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-teal-400">100%</div>
              <div className="text-sm text-slate-400">Réussite</div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
