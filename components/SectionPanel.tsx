"use client";

import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export default function SectionPanel({
  eyebrow,
  heading,
  sub,
  onBack,
  children,
}: {
  eyebrow: string;
  heading: string;
  sub: string;
  onBack: () => void;
  children: ReactNode;
}) {
  return (
    <div className="relative z-10 mx-auto flex max-h-[calc(100vh-7rem)] max-w-5xl flex-col overflow-y-auto rounded-3xl border border-white/10 bg-[#070a12]/80 p-6 shadow-2xl backdrop-blur-xl pointer-events-auto md:p-10">
      <button
        onClick={onBack}
        className="mb-6 flex w-fit cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
      >
        <ArrowLeft size={14} />
        Back to neural map
      </button>

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white">{heading}</h2>
      <p className="mt-2 max-w-2xl text-slate-400">{sub}</p>

      <div className="mt-8">{children}</div>
    </div>
  );
}
