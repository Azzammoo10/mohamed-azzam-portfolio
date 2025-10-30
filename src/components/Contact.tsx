import { Card } from "./Card";
import { Button } from "./Button";
import { Mail, MapPin, Linkedin, Send, CheckCircle, Phone } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isMobile;
}

export function Contact() {
  const [state, handleSubmit] = useForm("mwpwpynd");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });
  const isMobile = useIsMobile();

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
    <section
      id="contact"
      className="relative py-20 sm:py-24 px-4 sm:px-6 bg-[#081220] overflow-hidden"
    >
      {/* --- Effets lumineux --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-teal-500/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* --- Titre --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">Restons en contact</p>
        </div>

        {/* --- Contenu principal --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* --- Formulaire --- */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Envoyez-moi un message
            </h3>

            <Card className="relative overflow-hidden p-4 sm:p-6 shadow-[0_0_25px_rgba(0,255,204,0.05)]"
>
              {/* ✅ Message de succès amélioré */}
<AnimatePresence>
  {showSuccess && (
    <motion.div
      initial={isMobile ? { opacity: 0 } : { opacity: 0, y: -15, scale: 0.8, filter: "blur(6px)" }}
      animate={isMobile ? { opacity: 1, transition: { duration: 0.15 } } : {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 12,
          duration: 0.5,
        },
      }}
      exit={isMobile ? { opacity: 0 } : {
        opacity: 0,
        scale: 0.8,
        y: -15,
        filter: "blur(6px)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 
                 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 
                 border border-teal-400/30 text-teal-200 
                 rounded-xl text-sm font-medium shadow-lg backdrop-blur-md
                 overflow-hidden"
    >
      {/* 🌟 Animation d’icône en boucle */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <CheckCircle className="text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]" size={18} />
      </motion.div>

      <motion.span
        animate={{ opacity: [1, 0.9, 1], x: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="text-cyan-200"
      >
        Message envoyé avec succès !
      </motion.span>

      {/* 💫 Halo animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-teal-400/10 blur-md rounded-xl"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition text-sm"
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
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition resize-none text-sm"
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
                  className="w-full text-sm sm:text-base"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </Card>
          </div>

          {/* --- Informations --- */}
          {/* --- Informations --- */}
<div>
  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
    Informations de contact
  </h3>

  <div className="space-y-3 sm:space-y-4">
    {contactInfo.map((info, index) => (
      <Card
        key={index}
        className="bg-slate-800/40 border border-slate-700/50 
                   px-4 py-4 rounded-xl shadow-sm"
      >
        {info.link ? (
          <a
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4"
          >
            <div className="flex items-center justify-center w-10 h-10 
                            rounded-full bg-gradient-to-r 
                            from-teal-500/10 to-cyan-500/10 
                            border border-teal-400/20">
              {info.icon}
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-0.5">
                {info.label}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                {info.value}
              </p>
            </div>
          </a>
        ) : (
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center w-10 h-10 
                            rounded-full bg-gradient-to-r 
                            from-teal-500/10 to-cyan-500/10 
                            border border-teal-400/20">
              {info.icon}
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base mb-0.5">
                {info.label}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                {info.value}
              </p>
            </div>
          </div>
        )}
      </Card>
    ))}
  </div>
</div>

        </div>

        

      </div>

        <motion.div
          className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 z-30"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const homeSection = document.querySelector("#home");
              if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="relative flex items-center justify-center
                      w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                      rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10
                      border border-teal-400/30 backdrop-blur-md
                      shadow-[0_0_12px_rgba(0,255,204,0.25)]
                      hover:shadow-[0_0_25px_rgba(0,255,204,0.45)]
                      transition-all duration-300 group"
          >
            {/* Flèche animée */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 
                          text-cyan-400 group-hover:text-teal-300 
                          transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.div>

            {/* Halo lumineux doux */}
            <div className="absolute inset-0 rounded-full 
                            bg-gradient-to-r from-teal-500/30 to-cyan-500/30 
                            blur-md opacity-20 group-hover:opacity-40 
                            transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>


    </section>
  );
}
