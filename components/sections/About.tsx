import { about } from "@/lib/content";

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {about.cards.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {c.tag}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">{c.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
            {c.body}{" "}
            {c.link && (
              <a
                href={c.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                {c.link.label}
              </a>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
