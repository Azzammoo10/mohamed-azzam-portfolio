import {  Calendar, MapPin, Code, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      year: '2025',
      company: 'SQLI Digital Centre',
      role: 'Stagiaire Ingénieur Développement Web',
      location: 'Rabat',
      period: '06/2025 - 08/2025',
      type: 'Stage Ingénieur',
      duration: '3 mois',
      achievements: [
        'Développement d\'un portail web de suivi des projets clients en Spring Boot, React.js, PostgreSQL',
        'Conception du portail : UML, modélisation de la base de données, maquettage avec Figma',
        'Fonctionnalités clés : dashboard, rôles, historique, PDF, notifications temps réel, QR Code'
      ],
      tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'Figma'],
      icon: <Code className="h-6 w-6 text-teal-400" />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      year: '2024',
      company: 'ThreeComp',
      role: 'Stagiaire Développeur Full-Stack',
      location: 'Rabat',
      period: '08/2023 - 09/2023',
      type: 'Stage Développement',
      duration: '2 mois',
      achievements: [
        'Développement d\'une application web en Django/MySQL avec interface responsive',
        'Création d\'interfaces utilisateur modernes et intuitives'
      ],
      tech: ['Django', 'MySQL', 'Python'],
      icon: <Users className="h-6 w-6 text-cyan-400" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      year: '2023',
      company: 'Novec',
      role: 'Stagiaire Réseaux - Stage BTS',
      location: 'Technopolis Rabat',
      period: '06/2023 - 07/2023',
      type: 'Stage Réseaux',
      duration: '2 mois',
      achievements: [
        'Mise en place d\'une solution de supervision réseau avec Nagios et Centreon',
        'Surveillance des services critiques et configuration d\'alertes'
      ],
      tech: ['Nagios', 'Centreon', 'Linux'],
      icon: <Building2 className="h-6 w-6 text-blue-400" />,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* --- Effet de fond professionnel --- */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* --- En-tête section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Expérience <span className="text-teal-400">Professionnelle</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,204,0.5)]" />
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Parcours professionnel et réalisations techniques en entreprise.
          </p>
        </motion.div>

        {/* --- Grille d'expériences créative --- */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* --- Carte d'expérience --- */}
              <div className="relative h-full bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 hover:border-teal-500/60 hover:shadow-[0_0_30px_rgba(45,255,196,0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/3 group-hover:to-teal-500/5 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  {/* En-tête avec icône et année */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-br ${exp.color}/20 rounded-xl`}>
                        {exp.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{exp.year}</div>
                        <div className="text-xs text-slate-400">{exp.duration}</div>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50">
                      {exp.type}
                    </span>
                  </div>

                  {/* Entreprise et localisation */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-1">{exp.company}</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin size={14} className="text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Poste */}
                  <div className="mb-4">
                    <h4 className="text-slate-200 font-semibold text-base mb-2">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Calendar size={14} className="text-teal-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Réalisations */}
                  <div className="mb-4">
                    <h5 className="text-slate-300 font-medium text-sm mb-2">Réalisations clés :</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-400 text-xs leading-relaxed flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Section statistiques professionnelles --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
            <div className="text-2xl font-bold text-teal-400">3</div>
            <div className="text-sm text-slate-400">Stages</div>
          </div>
          <div className="text-center p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
            <div className="text-2xl font-bold text-cyan-400">7+</div>
            <div className="text-sm text-slate-400">Mois</div>
          </div>
          <div className="text-center p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
            <div className="text-2xl font-bold text-blue-400">10+</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div className="text-center p-4 bg-slate-800/40 rounded-xl border border-slate-700/50">
            <div className="text-2xl font-bold text-indigo-400">100%</div>
            <div className="text-sm text-slate-400">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
