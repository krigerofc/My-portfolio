"use client";

import { useState } from "react";
import { Wallet, Store, Tag, ShoppingBag, Bot, Gamepad2, Code2, type LucideIcon } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import ProjectModal from "@/components/ProjectModal";

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  Store,
  Tag,
  ShoppingBag,
  Bot,
  Gamepad2,
  Code2,
};

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const cols = 2;
  const rows = Math.ceil(projects.length / cols);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((p, i) => {
          const Icon = iconMap[p.icon] ?? Code2;
          const isLastRow = Math.floor(i / cols) === rows - 1;
          return (
            <div
              key={p.id}
              className={`py-5 ${i % cols === 0 ? "md:pr-6" : "md:pl-6"} ${
                isLastRow ? "" : "border-b border-white/10"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Icon size={16} className="text-blue-400" />
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    {p.id === "nexa" && (
                      <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                        LIVE
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-slate-600">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <p className="mt-2 text-sm text-slate-400">{p.summary}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setOpen(p)}
                className="mt-3 text-sm font-medium text-cyan-400 hover:underline"
              >
                View details →
              </button>
            </div>
          );
        })}
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
