import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "À Propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Expérience", href: "#experience" },
    { label: "Projets", href: "#projects" },
    { label: "Formations", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-teal-500/10 shadow-[0_0_25px_rgba(0,255,204,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* --- LOGO PHOTO --- */}
          <a
            href="#home"
            className="flex items-center gap-2 text-teal-400 hover:text-cyan-400 transition-all duration-300"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-teal-400/60 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,204,0.3)] hover:shadow-[0_0_12px_rgba(0,255,255,0.4)]">
              <img
                src="/DSC_4573.jpg" // ✅ place ton image dans /public/mohamed.jpg
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-lg tracking-wide text-slate-200 hover:text-teal-300 transition">
              MA
            </span>
          </a>

          {/* --- MENU DESKTOP --- */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-slate-300 hover:text-teal-400 text-sm font-medium transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* --- BOUTON MOBILE --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-teal-400 transition-transform duration-300 active:scale-90"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE --- */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-[#050B16]/95 backdrop-blur-xl border-t border-teal-500/10 shadow-[0_0_20px_rgba(0,255,204,0.1)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative px-6 py-6 space-y-3">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-cyan-500/5 blur-3xl" />

          <div className="relative space-y-2">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-200 font-medium text-sm px-4 py-3 rounded-md border border-transparent hover:border-teal-400/40 hover:text-teal-400 hover:bg-slate-800/30 active:scale-[0.98] transition-all duration-300 opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${idx * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="relative pt-5 text-center border-t border-slate-700/50">
            <p className="text-[11px] text-slate-500">
              © 2025 <span className="text-teal-400 font-medium">Azzam Portfolio</span> — Sécurité & Dev
            </p>
          </div>
        </div>
      </div>

      {/* --- Animation fade-in --- */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease forwards;
        }
      `}</style>
    </nav>
  );
}
