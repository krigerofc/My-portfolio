"use client";

import { X, ExternalLink, Github, type LucideIcon } from "lucide-react";
import { Wallet, Store, Tag, ShoppingBag, Bot, Gamepad2, Code2 } from "lucide-react";
import type { Project } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  Store,
  Tag,
  ShoppingBag,
  Bot,
  Gamepad2,
  Code2,
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = iconMap[project.icon] ?? Code2;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b0f1a] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <Icon size={18} />
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close project"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

        {project.impact && (
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-400">
            <span className="font-semibold text-slate-200">Impact: </span>
            {project.impact}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-500/90 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              <ExternalLink size={14} />
              Open the app
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/10"
            >
              <Github size={14} />
              View on GitHub
            </a>
          )}
          {!project.demo && !project.repo && (
            <p className="text-center text-xs text-slate-500">Private project — not public yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
