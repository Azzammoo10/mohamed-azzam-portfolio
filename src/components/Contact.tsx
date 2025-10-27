import { Card } from "./Card";
import { Button } from "./Button";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Phone } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [state, handleSubmit] = useForm("mwpwpynd");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setFormData({ email: "", message: "" });
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const contactInfo = [
    {
      icon: <Phone className="text-teal-400" size={22} />,
      label: "Téléphone",
      value: "+212 6 82 39 96 47",
      link: "tel:+212682399647",
    },
    {
      icon: <Mail className="text-cyan-400" size={22} />,
      label: "Email",
      value: "azzam.moo10@gmail.com",
      link: "mailto:azzam.moo10@gmail.com",
    },
    {
      icon: <MapPin className="text-teal-400" size={22} />,
      label: "Localisation",
      value: "Salé, Maroc",
    },
  
    {
      icon: <Linkedin className="text-teal-400" size={22} />,
      label: "LinkedIn",
      value: "Mohamed Azzam",
      link: "https://www.linkedin.com/in/mohamed-azzam-93115823a/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* --- Titre --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-teal-400">Contact</span>
          </h2>
          <p className="text-slate-300 text-lg">Restons en contact</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* --- Formulaire --- */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>

            <Card className="relative overflow-hidden">
              {/* ✅ Message de succès animé */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute top-3 right-3 flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-400/30 text-teal-300 px-3 py-1.5 rounded-lg text-sm shadow-md backdrop-blur-sm"
                  >
                    <CheckCircle size={16} />
                    Message envoyé avec succès !
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2 text-sm">
                    Adresse Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition text-sm"
                    placeholder="votre.email@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-rose-400 text-xs mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition resize-none text-sm"
                    placeholder="Votre message..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-rose-400 text-xs mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={state.submitting}
                  icon={<Send size={18} />}
                  className="w-full"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Card>
          </div>

          {/* --- Informations de contact --- */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  hover={!!info.link}
                  className="bg-slate-800/40 border border-slate-700/50 hover:border-teal-400/30 transition px-4 py-3 sm:py-4"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="mt-0.5 sm:mt-1">{info.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {info.label}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm hover:text-teal-400 transition break-words">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="mt-0.5 sm:mt-1">{info.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {info.label}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm break-words">{info.value}</p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
