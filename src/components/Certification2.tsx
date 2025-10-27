import { useState } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Award, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CertificationsSection() {
  const certifications = [
    { name: "CompTIA Security+", issuer: "CodeCademy", status: "In progress", url: "" },
    { name: "Fortinet NSE 1", issuer: "Fortinet", status: "Completed", url: "https://training.fortinet.com/mod/customcert/verify_certificate.php?contextid=251439&code=CzsYUTK2tF&qrcode=1" },
    { name: "CCNAv7 Introduction aux Réseaux", issuer: "Cisco", status: "Completed", url: "https://collection.cloudinary.com/daisrmfte/5b02c8692e3330f85ef7cc80f0f8b21e" },
    { name: "REST APIs with Spring and Java Skill Path", issuer: "CodeCademy", status: "Completed", url: "https://www.codecademy.com/profiles/AZZAM-MO/certificates/60f1edf0ac9368001c6025c4" },
    { name: "Become a Secure Coder", issuer: "Codecademy", status: "Completed", url: "https://www.codecademy.com/profiles/AZZAM-MO/certificates/90b621d88d884f0fabed4c3fd41e7e7c" },
    { name: "Cisco Packet Tracer Simulation", issuer: "OpenClassrooms", status: "Completed", url: "https://openclassrooms.com/fr/course-certificates/3159379323" },
    { name: "Linux Basics", issuer: "OpenClassrooms", status: "Completed", url: "https://openclassrooms.com/fr/course-certificates/9289267392" },
    { name: "UNIX WORKBANCH", issuer: "Coursera", status: "Completed", url: "https://www.coursera.org/learn/unix" },
    { name: "POO en C++", issuer: "Coursera", status: "Completed", url: "https://coursera.org/share/dafdc59f883c2bd21c94503717361687" },
    { name: "Java", issuer: "LinkedIn", status: "Completed", url: "https://www.linkedin.com/learning/certificates/5d5b30ef6c76b77eee6b2f37fc520cbac9cfec8e2f58994b314f07974944e0a0" },
    { name: "Git and Github", issuer: "LinkedIn", status: "Completed", url: "https://www.coursera.org/account/accomplishments/verify/CMYS0XRZCRA6" },
    { name: "Virtual Network in Azure", issuer: "Coursera", status: "Completed", url: "https://www.coursera.org/account/accomplishments/verify/M091EN04YFHY" },
  ];

  const [visibleCount, setVisibleCount] = useState(6);
  const toggleVisible = () => setVisibleCount(visibleCount === 6 ? certifications.length : 6);

  return (
    <section id="certifications" className="relative py-20 sm:py-24 overflow-hidden bg-slate-900">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
        {/* --- Header --- */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Certifications <span className="text-teal-400">Professionnelles</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-cyan-400 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto px-2">
            Parcours certifiant orienté cybersécurité, réseaux et développement sécurisé.
          </p>
        </div>

        {/* --- Liste des certifications --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto"
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
                  className="p-5 sm:p-6 rounded-xl border border-slate-700/70 bg-slate-900/50 backdrop-blur-md 
                  transition-all duration-300 hover:border-teal-500/40 hover:-translate-y-1 
                  hover:shadow-[0_0_25px_rgba(45,255,196,0.15)] relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1 leading-snug">{cert.name}</h4>
                      <p className="text-xs text-teal-400">{cert.issuer}</p>
                    </div>
                    {cert.status === "Completed" ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-400 flex-shrink-0 animate-pulse" />
                    )}
                  </div>

                  {/* --- Bouton de certificat --- */}
                  {cert.url ? (
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative inline-flex items-center gap-2 mt-2 mb-3 px-4 py-2 rounded-full text-xs font-medium text-teal-400 border border-teal-500/40 hover:text-white hover:border-teal-400 overflow-hidden transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/10 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                      <ExternalLink size={12} className="text-teal-400 group-hover:text-white transition-colors" />
                      <span className="relative z-10">Voir le certificat</span>
                    </motion.a>
                  ) : (
                    <div className="text-xs text-slate-500 italic mb-3">Formation en cours</div>
                  )}

                  {/* --- Statut --- */}
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
          <motion.button
            onClick={toggleVisible}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-2.5 text-sm font-semibold rounded-full border border-teal-500/50 text-teal-400 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <span className="relative z-10">
              {visibleCount === 6 ? "Afficher plus" : "Afficher moins"}
            </span>
          </motion.button>
        </div>

        {/* --- Objectif 2026 --- */}
        <div className="max-w-md sm:max-w-3xl mx-auto mt-14">
          <Card className="p-5 sm:p-6 text-center bg-gradient-to-br from-teal-900/20 to-cyan-900/10 border border-teal-500/30 rounded-xl hover:shadow-[0_0_25px_rgba(45,255,196,0.15)] transition-all">
            <Award className="h-6 w-6 text-teal-400 mx-auto mb-2" />
            <h3 className="text-white text-sm sm:text-base font-semibold mb-1">
              Objectif <span className="text-teal-400">2026</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              Poursuivre l’obtention de certifications avancées en cybersécurité afin de renforcer mon expertise technique.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
