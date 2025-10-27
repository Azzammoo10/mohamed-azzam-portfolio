import { motion } from "framer-motion";
import { Card } from "./Card";
import {
  SiPython, SiCplusplus, SiSharp, SiJavascript, SiSpringboot, SiReact, SiDjango,
  SiDotnet, SiPostgresql, SiMysql, SiMongodb, SiGithub, SiFigma, SiPostman,
   SiNodedotjs, SiJsonwebtokens, SiCisco
} from "react-icons/si";
import { FaJava, FaLock, FaDatabase, FaCloud } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  // --- Langages ---
  Java: <FaJava className="text-orange-400 drop-shadow-[0_0_10px_rgba(255,165,0,0.6)]" />,
  Python: <SiPython className="text-yellow-400 drop-shadow-[0_0_8px_rgba(255,255,100,0.6)]" />,
  "C++": <SiCplusplus className="text-blue-400 drop-shadow-[0_0_8px_rgba(0,200,255,0.5)]" />,
  "C#": <SiSharp className="text-purple-500 drop-shadow-[0_0_8px_rgba(180,100,255,0.5)]" />,
  JavaScript: <SiJavascript className="text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,0,0.5)]" />,

  // --- Frameworks ---
  "Spring Boot": <SiSpringboot className="text-green-500 drop-shadow-[0_0_10px_rgba(0,255,100,0.6)]" />,
  "React.js": <SiReact className="text-cyan-400 animate-spin-slow drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]" />,
  Django: <SiDjango className="text-emerald-600 drop-shadow-[0_0_8px_rgba(0,255,100,0.4)]" />,
  ".NET": <SiDotnet className="text-indigo-400 drop-shadow-[0_0_8px_rgba(100,100,255,0.4)]" />,
  "Node.js": <SiNodedotjs className="text-green-500 drop-shadow-[0_0_10px_rgba(0,255,100,0.5)]" />,

  // --- Bases de données ---
  PostgreSQL: <SiPostgresql className="text-blue-500 drop-shadow-[0_0_8px_rgba(0,150,255,0.5)]" />,
  MySQL: <SiMysql className="text-sky-500 drop-shadow-[0_0_8px_rgba(0,200,255,0.5)]" />,
  MongoDB: <SiMongodb className="text-green-500 drop-shadow-[0_0_8px_rgba(0,255,100,0.5)]" />,

  // --- Sécurité ---
  JWT: <SiJsonwebtokens className="text-amber-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.5)]" />,
  "Spring Security": <FaLock className="text-teal-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]" />,
  "SHA-256": <FaLock className="text-emerald-400 drop-shadow-[0_0_8px_rgba(0,255,150,0.5)]" />,
  AES: <FaLock className="text-blue-400 drop-shadow-[0_0_8px_rgba(0,150,255,0.5)]" />,

  // --- Réseaux ---
  CCNA: <SiCisco className="text-blue-400 drop-shadow-[0_0_8px_rgba(0,150,255,0.5)]" />,
  "Packet Tracer": <SiCisco className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" />,
  Nmap: <FaLock className="text-teal-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" />,
  Wireshark: <FaLock className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" />,

  // --- Outils ---
  GitHub: <SiGithub className="text-gray-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]" />,
  Figma: <SiFigma className="text-pink-500 drop-shadow-[0_0_8px_rgba(255,100,150,0.4)]" />,
  Postman: <SiPostman className="text-orange-500 drop-shadow-[0_0_8px_rgba(255,150,50,0.4)]" />,
  Azure: <FaCloud className="text-blue-400 drop-shadow-[0_0_8px_rgba(0,150,255,0.4)]" />,
};

function SkillBadge({ skill }: { skill: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, y: -3 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-md border border-slate-700/40 text-slate-200 rounded-full text-sm shadow-inner hover:shadow-[0_0_14px_rgba(45,255,196,0.5)] transition-all duration-300"
    >
      <span className="text-lg">{iconMap[skill] || <FaDatabase className="text-slate-400" />}</span>
      <span className="font-medium">{skill}</span>
    </motion.span>
  );
}

export function Skills() {
  const skillCategories = [
    { category: "Langages", skills: ["Java", "Python", "C++", "C#", "JavaScript"], color: "from-teal-500 to-cyan-500" },
    { category: "Frameworks", skills: ["Spring Boot", "React.js", "Django", ".NET", "Node.js"], color: "from-cyan-500 to-blue-500" },
    { category: "Bases de Données", skills: ["PostgreSQL", "MySQL", "MongoDB"], color: "from-blue-500 to-indigo-500" },
    { category: "Sécurité", skills: ["JWT", "Spring Security", "SHA-256", "AES"], color: "from-teal-500 to-emerald-500" },
    { category: "Réseaux", skills: ["CCNA", "Packet Tracer", "Nmap", "Wireshark"], color: "from-emerald-500 to-green-500" },
    { category: "Outils", skills: ["GitHub", "Figma", "Postman", "Azure"], color: "from-blue-500 to-cyan-500" },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 bg-gradient-to-b from-[#050B16] via-[#071C29] to-[#0B1F2B] overflow-hidden">
      {/* --- Effets de fond --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* --- Titre --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            Compétences <span className="text-teal-400">Techniques</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Un ensemble de technologies utilisées couvrant le développement, la sécurité et l’intégration cloud.
          </p>
          <div className="h-[2px] w-24 mx-auto mt-5 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_15px_rgba(0,255,204,0.4)]"></div>
        </motion.div>

        {/* --- Grille des compétences --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-lg border border-slate-700/50 shadow-lg hover:shadow-[0_0_25px_rgba(45,255,196,0.25)] transition-all duration-500">
                <h3
                  className={`text-lg font-semibold mb-4 text-white bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <SkillBadge key={i} skill={skill} />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
