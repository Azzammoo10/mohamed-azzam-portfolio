import { useEffect, useRef, useState } from "react";

type Props = {
  typingSpeed?: number;
  pauseBetweenLines?: number;
};

export function TerminalPanel({
  typingSpeed = 25,
  pauseBetweenLines = 900,
}: Props) {
const lines = [
  "Démarrage du parcours...",
  "[PROFIL :  Mohamed AZZAM — Ingénieur Info & Cybersécurité",
  "[ÉTAPE 1 : 🎓 Étudiant — Code sécurisé & réseaux.",
  "[ÉTAPE 2 : 💻 Dev Junior — Spring Boot & React.",
  "[ÉTAPE 3 : 🔐 Analyste Sec — Analyse & protection.",
  "[ÉTAPE 4 : 🚀 DevSecOps — Sécurité CI/CD automatisée.",
  "[OBJECTIF : 🧠 Expert Sécurité — Systèmes fiables & résilients.",
];


  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState(true);

  const blinkRef = useRef<number | null>(null);
  const typeRef = useRef<number | null>(null);
  const pauseRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;
    let char = 0;
    setText("");

    const currentLine = lines[index] ?? "";

    const type = () => {
      if (!mounted) return;
      if (char < currentLine.length) {
        setText((t) => t + currentLine.charAt(char));
        char++;
        typeRef.current = window.setTimeout(type, typingSpeed);
      } else {
        pauseRef.current = window.setTimeout(() => {
          if (!mounted) return;
          setIndex((prev) => (prev + 1) % lines.length);
        }, pauseBetweenLines);
      }
    };

    type();
    blinkRef.current = window.setInterval(() => setCursor((v) => !v), 500);

    return () => {
      mounted = false;
      if (blinkRef.current) clearInterval(blinkRef.current);
      if (typeRef.current) clearTimeout(typeRef.current);
      if (pauseRef.current) clearTimeout(pauseRef.current);
    };
  }, [index, typingSpeed, pauseBetweenLines]);

  return (
    <div className="relative w-full max-w-xl mx-auto mt-6 overflow-x-auto">
      {/* Effet de scan */}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-scan" />
      </div>

      <div className="relative bg-[#06121a]/90 border border-teal-400/10 rounded-lg p-3 font-mono text-[11px] md:text-sm text-slate-300 shadow-[0_0_18px_rgba(0,255,204,0.05)] backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400/80" />
          <span className="w-2 h-2 rounded-full bg-rose-400/70" />
          <span className="text-[10px] md:text-[11px] text-slate-400 ml-2">
            Roadmap — Progression de Carrière
          </span>
        </div>

        {/* Corps (sans wrap) */}
        <div className="flex items-center min-h-[60px] px-2">
          <span className="text-teal-400 select-none">➜</span>
          <span className="whitespace-pre text-slate-200 ml-1">{text}</span>
          <span
            aria-hidden
            className={`ml-1 w-[6px] h-3 bg-slate-300 transition-opacity duration-150 ${
              cursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
