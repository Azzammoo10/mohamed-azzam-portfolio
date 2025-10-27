import { Card } from './Card';
import { Shield, Code, Network, Award } from 'lucide-react';

export function About() {
  const strengths = [
    {
      icon: <Shield className="text-teal-400" size={32} />,
      title: 'Cybersécurité',
      description: 'Expert en sécurité des applications avec JWT, Spring Security, et hachage SHA-256'
    },
    {
      icon: <Code className="text-cyan-400" size={32} />,
      title: 'Développement Sécurisé',
      description: 'Full-stack avec Spring Boot, React.js, Django et .NET'
    },
    {
      icon: <Network className="text-teal-400" size={32} />,
      title: 'Réseaux & Supervision',
      description: 'Certifié CCNA avec expérience en Nagios et Centreon'
    },
    {
      icon: <Award className="text-cyan-400" size={32} />,
      title: 'Certifications',
      description: 'NSE 1 Fortinet, CompTIA Security+, CCNAv7, Linux'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            À <span className="text-teal-400">Propos</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Ingénieur en formation avec une passion pour la sécurité informatique
          </p>
        </div>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        {/* --- IMAGE --- */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-teal-500/70 shadow-[0_0_40px_rgba(45,255,196,0.25)] hover:shadow-[0_0_60px_rgba(45,255,196,0.45)] transition-all duration-500">
            <img
              src="/DSC_4573.jpg"
              alt="Portrait de Mohamed Azzam"
              className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* halo animé */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500/10 to-cyan-400/10 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* --- TEXTE --- */}
        <div className="text-left">
          <h3 className="text-2xl font-bold text-white mb-4">Mohamed Azzam</h3>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Étudiant en dernière année d'ingénierie à l'EMSI Rabat (spécialisation MIAGE),
            je suis passionné par la cybersécurité et le développement sécurisé.
          </p>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Grâce à une formation polyvalente et à plusieurs projets concrets en Java, .NET,
            C++, et supervision réseau, j'ai développé une expertise solide en sécurité des
            systèmes d'information.
          </p>
          <p className="text-teal-400 font-semibold">
            Recherche active : Stage PFE de 6 mois (Février/Mars 2026)
          </p>
        </div>
      </div>

      {/* --- COMPÉTENCES --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map((strength, index) => (
          <Card
            key={index}
            hover
            className="text-center hover:shadow-[0_0_25px_rgba(45,255,196,0.25)] transition-all duration-500"
          >
            <div className="flex justify-center mb-4">
              {strength.icon}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {strength.title}
            </h4>
            <p className="text-slate-400 text-sm">
              {strength.description}
            </p>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
}
