import { Code2, Briefcase, Gamepad2, GraduationCap, Building2, Sparkles } from "lucide-react";
import { journey } from "@/lib/content";

const icons = [Code2, Briefcase, Gamepad2, GraduationCap, Building2, Sparkles];

export default function Journey() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {journey.items.map((item, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div key={item.title} className="flex gap-4 md:flex-col md:gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <Icon size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {item.date}
              </p>
              <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
