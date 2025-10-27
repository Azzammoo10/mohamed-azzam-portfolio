import { Section } from './Section';
import { Card } from './Card';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Portail de Suivi Clients',
      description: 'Application web complète pour le suivi des projets clients avec dashboard interactif, gestion des rôles, génération de PDF, et notifications en temps réel.',
      tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/Azzammoo10/sqli-project-tracker',
      featured: true
    },
    {
      title: 'Gestionnaire de Mots de Passe',
      description: 'Application sécurisée en .NET utilisant le hachage SHA-256 et un système de chiffrement pour protéger les données sensibles des utilisateurs.',
      tech: ['.NET', 'C#', 'SHA-256', 'Encryption'],
      github: 'https://github.com/Azzammoo10/SecurePassManager-MVC',
      featured: true
    },
    {
      title: 'EMSI Career Connect',
      description: 'Plateforme web de recrutement et de réseautage professionnel dédiée aux lauréats de l’EMSI.',
      tech: ['Node.js', 'Express.js', 'React', 'Mongo DB','Azure'],
      github: 'https://github.com/Azzammoo10/Emsi-Career-connect',
      featured: false
    },
    {
      title: 'Application Web Django',
      description: 'Développement d\'une application web full-stack avec interface responsive et gestion complète des données utilisateurs.',
      tech: ['Django', 'Python', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/Azzammoo10/django-it-solutions-store',
      featured: false
    }
  ];

  return (
    <Section
      id="projects"
      title="Projets"
      subtitle="Réalisations techniques et applications développées"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} hover>
            <div className="flex flex-col h-full">
              {project.featured && (
                <span className="inline-block w-fit px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-semibold rounded-full mb-4">
                  Projet Majeur
                </span>
              )}

              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-700/50 text-teal-400 rounded-full text-xs border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-gradient-to-r from-slate-700/40 to-slate-600/40 border border-slate-600/40 rounded-lg text-slate-300 hover:text-white hover:border-teal-500/60 hover:bg-gradient-to-r hover:from-teal-500/15 hover:to-cyan-500/15 transition-all duration-300 overflow-hidden"
                >
                  {/* Effet de glow subtil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/3 group-hover:to-teal-500/5 transition-all duration-500"></div>
                  
                  {/* Contenu du bouton */}
                  <div className="relative flex items-center gap-2">
                    <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-medium text-sm">Code</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                  
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 -top-0.5 -left-0.5 w-0 h-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:w-full group-hover:h-full transition-all duration-600 ease-out"></div>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* --- Section Voir tous les projets --- */}
      <div className="mt-12 text-center">
        <div className="relative max-w-sm mx-auto">
          {/* Carte principale */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 shadow-lg shadow-slate-900/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              {/* Icône GitHub */}
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(45,255,196,0.3)]">
                <Github size={20} className="text-white" />
              </div>
              
              {/* Titre */}
              <h3 className="text-lg font-bold text-white">
                Voir <span className="text-teal-400">tous les projets</span>
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-slate-400 text-sm mb-4">
              Explorez mon portfolio complet sur GitHub
            </p>

            {/* Bouton GitHub */}
            <a
              href="https://github.com/Azzammoo10"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
            >
              <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>GitHub</span>
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
