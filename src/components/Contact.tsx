import { Card } from "./Card";
import { Button } from "./Button";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [state, handleSubmit] = useForm("mwpwpynd"); // 👈 Ton ID Formspree
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setFormData({ email: "", message: "" }); // ✅ Vide le formulaire
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const contactInfo = [
    {
      icon: <Mail className="text-teal-400" size={24} />,
      label: "Email",
      value: "azzam.moo10@gmail.com",
      link: "mailto:azzam.moo10@gmail.com",
    },
    {
      icon: <MapPin className="text-cyan-400" size={24} />,
      label: "Localisation",
      value: "Salé, Maroc",
    },
    {
      icon: <Github className="text-teal-400" size={24} />,
      label: "GitHub",
      value: "github.com/Azzammoo10",
      link: "https://github.com/Azzammoo10",
    },
    {
      icon: <Linkedin className="text-cyan-400" size={24} />,
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
            <h3 className="text-2xl font-bold text-white mb-6">
              Envoyez-moi un message
            </h3>

            <Card className="relative overflow-hidden">
              {/* ✅ Animation du message de succès */}
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
                  <label
                    htmlFor="email"
                    className="block text-slate-300 mb-2 text-sm"
                  >
                    Adresse Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition"
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
                  <label
                    htmlFor="message"
                    className="block text-slate-300 mb-2 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition resize-none"
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
            <h3 className="text-2xl font-bold text-white mb-6">
              Informations de contact
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  hover={!!info.link}
                  className="bg-slate-800/40 border border-slate-700/50 hover:border-teal-400/30 transition"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4"
                    >
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {info.label}
                        </h4>
                        <p className="text-slate-400 text-sm hover:text-teal-400 transition">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {info.label}
                        </h4>
                        <p className="text-slate-400 text-sm">{info.value}</p>
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
