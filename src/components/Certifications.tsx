import { Section } from './Section';
import { Card } from './Card';
import { Award, GraduationCap } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: 'NSE 1 - Network Security Associate',
      issuer: 'Fortinet',
      type: 'Certification',
      status: 'Obtenu'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      type: 'Certification',
      status: 'En cours'
    },
    {
      name: 'CCNAv7 - Introduction aux Réseaux',
      issuer: 'Cisco',
      type: 'Certification',
      status: 'Obtenu'
    },
    {
      name: 'Cisco Packet Tracer',
      issuer: 'Cisco',
      type: 'Formation',
      status: 'Obtenu'
    },
    {
      name: 'Linux Administration',
      issuer: 'Formation Certifiante',
      type: 'Certification',
      status: 'Obtenu'
    }
  ];

  const education = [
    {
      degree: 'Cycle Ingénieur en Informatique & Réseaux',
      specialization: 'MIAGE - Méthodes Informatiques Appliquées à la Gestion des Entreprises',
      institution: 'EMSI Rabat',
      period: '10/2024 - Présent',
      level: 'Bac+5'
    },
    {
      degree: 'Brevet Technicien Supérieur',
      specialization: 'Systèmes & Réseaux Informatiques',
      institution: 'Lycée Technique Salé',
      period: '09/2021 - 06/2023',
      level: 'Bac+2'
    }
  ];

  return (
    <Section
      id="certifications"
      title="Formations & Certifications"
      subtitle="Parcours académique et certifications professionnelles"
      className="bg-slate-900/50"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-teal-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Formation Académique</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <div className="flex items-start gap-3">
                  <div className="mt-1 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-semibold rounded-full">
                    {edu.level}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-teal-400 text-sm mb-2">
                      {edu.specialization}
                    </p>
                    <p className="text-slate-400 text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-cyan-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-slate-400 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <span className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded">
                      {cert.type}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        cert.status === 'Obtenu'
                          ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                          : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
