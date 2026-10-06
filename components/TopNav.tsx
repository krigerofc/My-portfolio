"use client";

import { Github, Linkedin, MessageCircle, FileText } from "lucide-react";
import { profile, sections, type SectionId } from "@/lib/content";

export default function TopNav({
  activeSection,
  onSelectSection,
  onGoHome,
}: {
  activeSection: SectionId | null;
  onSelectSection: (id: SectionId) => void;
  onGoHome: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#05070b]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 text-sm font-semibold tracking-widest text-white"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          PEDRO HENRIQUE
        </button>

        <nav className="hidden items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelectSection(s.id)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                activeSection === s.id
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.social.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={profile.resume}
            download
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/10"
          >
            <FileText size={14} />
            CV
          </a>
        </div>
      </div>

      <nav className="flex items-center gap-1 overflow-x-auto border-t border-white/5 px-4 py-2 lg:hidden">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelectSection(s.id)}
            className={`shrink-0 rounded-full px-3 py-1 text-xs transition-colors ${
              activeSection === s.id
                ? "bg-white/10 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
