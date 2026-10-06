import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {skills.items.map((s, i) => (
        <div
          key={s.name}
          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
        >
          <span className="pt-0.5 text-sm font-semibold text-slate-600">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-semibold text-white">{s.name}</h3>
            <p className="mt-0.5 text-sm text-slate-400">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
