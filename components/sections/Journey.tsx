import { Code2, Briefcase, Gamepad2, GraduationCap, Building2, Sparkles } from "lucide-react";
import { journey } from "@/lib/content";

const icons = [Code2, Briefcase, Gamepad2, GraduationCap, Building2, Sparkles];

export default function Journey() {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="relative flex min-w-max gap-10 px-2 md:min-w-0 md:justify-between">
        <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-cyan-500/10 via-cyan-400/40 to-cyan-500/10" />

        {journey.items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={item.title} className="relative z-10 flex w-40 flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-[#070a12] text-cyan-300">
                <Icon size={18} />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {item.date}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
