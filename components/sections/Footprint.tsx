import { footprint } from "@/lib/content";

export default function Footprint() {
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-xl font-bold text-indigo-300">
          +A
        </div>
        <div>
          <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
            {footprint.highlight.badge}
          </span>
          <h3 className="mt-1.5 font-semibold text-white">{footprint.highlight.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{footprint.highlight.body}</p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {footprint.items.map((item, i) => (
          <div key={item.title} className="flex gap-4">
            <span className="pt-0.5 text-sm font-semibold text-slate-600">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-0.5 text-sm text-slate-400">
                {item.body}{" "}
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    {item.link.label}
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-slate-400">
        <span>{footprint.extra.label}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-slate-300">
          {footprint.extra.name}
        </span>
      </div>
    </div>
  );
}
