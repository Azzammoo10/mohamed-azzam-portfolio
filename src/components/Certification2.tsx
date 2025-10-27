import { useState } from "react"
import { Card } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Award, CheckCircle2, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function CertificationsSection() {
  const certifications = [
    { name: "CompTIA Security+", issuer: "CodeCademy", status: "In progress", url: "" },
    { name: "Fortinet NSE 1", issuer: "Fortinet", status: "Completed", url: "" },
    { name: "CCNAv7 Introduction aux Réseaux", issuer: "Fortinet", status: "Completed", url: "" },
    { name: "REST APIs with Spring and Java Skill Path", issuer: "CodeCademy", status: "Completed", url: "" },
    { name: "Become a Secure Coder", issuer: "Codecademy", status: "Completed", url: "" },
    { name: "Cisco Packet Tracer Simulation", issuer: "Openclassrom", status: "Completed", url: "" },
    { name: "Linux Basics", issuer: "Openclassrom", status: "Completed", url: "" },
    { name: "UNIX WORKBANCH", issuer: "Coursera", status: "Completed", url: "" },
    { name: "POO en C++", issuer: "Coursera", status: "Completed", url: "" },
    { name: "Java", issuer: "LinkedIn", status: "Completed", url: "" },
    { name: "Git and Github", issuer: "LinkedIn", status: "Completed", url: "" },
    { name: "Virtual Network in Azure", issuer: "Coursera", status: "Completed", url: "" },
  ]

  const logos = [
    { src: "/logos/fortinet.png", alt: "Fortinet", url: "https://www.fortinet.com" },
    { src: "/logos/cisco.png", alt: "Cisco", url: "https://www.cisco.com" },
    { src: "/logos/coursera.png", alt: "Coursera", url: "https://www.coursera.org" },
    { src: "/logos/linkedin.png", alt: "LinkedIn", url: "https://www.linkedin.com" },
    { src: "/logos/codecademy.png", alt: "Codecademy", url: "https://www.codecademy.com" },
    { src: "/logos/openClassrooms.png", alt: "OpenClassrooms", url: "https://openclassrooms.com" },
  ]

  const [visibleCount, setVisibleCount] = useState(6)
  const toggleVisible = () => setVisibleCount(visibleCount === 6 ? certifications.length : 6)

  return (
    <section id="certifications" className="relative py-24 overflow-hidden bg-slate-900">

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* --- Titre principal --- */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Certifications <span className="text-teal-400">Professionnelles</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Parcours certifiant orienté cybersécurité, réseaux et développement sécurisé.
          </p>
        </div>

        {/* --- Liste des certifications --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {certifications.slice(0, visibleCount).map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  className="p-6 rounded-xl border border-slate-700/70 bg-slate-900/50 backdrop-blur-md 
                  transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 
                  hover:shadow-[0_0_25px_rgba(45,255,196,0.15)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1 leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-teal-400">{cert.issuer}</p>
                    </div>

                    {cert.status === "Completed" ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-400 flex-shrink-0 animate-pulse" />
                    )}
                  </div>

                  <p className="text-xs text-slate-400 mb-2">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        className="text-cyan-400 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Voir le certificat
                      </a>
                    ) : (
                      "Formation en ligne"
                    )}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/40">
                    <span className="text-xs text-slate-500">
                      {cert.status === "Completed" ? "Validée" : "En cours"}
                    </span>
                    <Badge
                      variant="secondary"
                      className={`text-[11px] ${
                        cert.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-400/40"
                          : "bg-yellow-500/10 text-yellow-300 border-yellow-400/40"
                      }`}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- Bouton Afficher plus / moins --- */}
        <div className="text-center mt-10">
          <button
            onClick={toggleVisible}
            className="px-6 py-2 text-sm font-medium rounded-full border border-teal-500/50 text-teal-400 
            hover:bg-teal-500/10 transition-all duration-300"
          >
            {visibleCount === 6 ? "Afficher plus" : "Afficher moins"}
          </button>
        </div>

 {/* --- Section Organismes de certification professionnelle --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="text-teal-400">Organismes</span> de certification
            </h3>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Partenaires de formation reconnus dans le domaine de la cybersécurité et des technologies
            </p>
          </div>

          {/* Grille d'organismes professionnelle */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {logos.map((logo, index) => (
              <motion.a
                key={index}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col items-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl hover:border-teal-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Effet de glow au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:via-cyan-500/3 group-hover:to-teal-500/5 rounded-xl transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Logo */}
                  <div className="mb-3 p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all duration-300">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 w-auto object-contain transition-all duration-300"
                    />
                  </div>

                  {/* Nom de l'organisme */}
                  <p className="text-xs text-slate-400 group-hover:text-teal-400 transition-colors text-center font-medium">
                    {logo.alt}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Badge de reconnaissance professionnelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-teal-500/30 rounded-full"
          >
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-300">Partenaires officiels reconnus</span>
          </motion.div>
        </motion.div>


        {/* --- Objectif 2026 --- */}
        <div className="max-w-3xl mx-auto mt-14">
          <Card className="p-5 text-center bg-gradient-to-br from-teal-900/20 to-cyan-900/10 border border-teal-500/30 rounded-xl hover:shadow-[0_0_25px_rgba(45,255,196,0.15)] transition-all">
            <Award className="h-6 w-6 text-teal-400 mx-auto mb-2" />
            <h3 className="text-white text-sm font-semibold mb-1">
              Objectif <span className="text-teal-400">2026</span>
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md mx-auto">
              Poursuivre l’obtention de certifications avancées en cybersécurité afin de renforcer mon expertise technique.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

/*



*/