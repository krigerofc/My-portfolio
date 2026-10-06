"use client";

import Image from "next/image";
import { profile } from "@/lib/content";

export default function Intro() {
  return (
    <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pt-28 text-center md:pt-36">
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={112}
        height={112}
        className="mb-6 rounded-full border border-white/10 object-cover"
      />

      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
        {profile.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">{profile.name}</h1>
      <p className="mt-5 max-w-2xl text-balance text-slate-400">{profile.bio}</p>

      <div className="mt-10 grid grid-cols-3 gap-6 md:gap-10">
        {profile.stats.map((s) => (
          <div key={s.label}>
            <p className="text-xl font-bold text-white md:text-2xl">{s.value}</p>
            <p className="mt-1 text-xs text-slate-500 md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        {profile.languages.map((l) => (
          <div key={l.name} className="text-center">
            <p className="text-sm font-medium text-slate-200">{l.name}</p>
            <p className="text-xs text-slate-500">{l.level}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-black/40 text-left shadow-xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 text-xs text-slate-500">{profile.code.filename}</span>
        </div>
        <pre className="overflow-x-auto px-4 py-3 text-xs leading-relaxed text-slate-300" style={{ fontFamily: "var(--font-mono)" }}>
          {profile.code.lines.join("\n")}
        </pre>
      </div>
    </div>
  );
}
