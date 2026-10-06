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

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p, i) => {
          const Icon = iconMap[p.icon] ?? Code2;
          return (
            <div
              key={p.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{p.title}</h3>
                      {p.id === "nexa" && (
                        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                          LIVE
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-600">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <p className="mt-3 text-sm text-slate-400">{p.summary}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
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
                className="mt-4 self-start text-sm font-medium text-cyan-400 hover:underline"
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
