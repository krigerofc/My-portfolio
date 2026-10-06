import { SiTypescript, SiPython, SiPostgresql, SiNextdotjs, SiReact } from "react-icons/si";
import { FaJava, FaDocker } from "react-icons/fa";
import { Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { skills } from "@/lib/content";

const iconMap: Record<string, { Icon: IconType | LucideIcon; color: string }> = {
  TypeScript: { Icon: SiTypescript, color: "#3b82f6" },
  Python: { Icon: SiPython, color: "#eab308" },
  Java: { Icon: FaJava, color: "#f97316" },
  "Next.js": { Icon: SiNextdotjs, color: "#e2e8f0" },
  Databases: { Icon: SiPostgresql, color: "#38bdf8" },
  "REST APIs": { Icon: Zap, color: "#2dd4bf" },
  "React Native": { Icon: SiReact, color: "#22d3ee" },
  Docker: { Icon: FaDocker, color: "#38bdf8" },
  Cybersecurity: { Icon: ShieldCheck, color: "#f472b6" },
};

export default function Skills() {
  const cols = 2;
  const rows = Math.ceil(skills.items.length / cols);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {skills.items.map((s, i) => {
        const meta = iconMap[s.name];
        const Icon = meta?.Icon;
        const isLastRow = Math.floor(i / cols) === rows - 1;
        return (
          <div
            key={s.name}
            className={`flex items-start gap-3 py-4 ${
              i % cols === 0 ? "md:pr-6" : "md:pl-6"
            } ${isLastRow ? "" : "border-b border-white/10"}`}
          >
            <span className="w-6 pt-0.5 text-sm font-semibold text-indigo-400/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            {Icon && <Icon size={20} className="mt-0.5 shrink-0" style={{ color: meta.color }} />}
            <div>
              <h3 className="font-semibold text-white">{s.name}</h3>
              <p className="mt-0.5 text-sm text-slate-400">{s.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
