import Image from "next/image";
import { Mail, Linkedin, Github, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { profile, contact } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Phone,
};

export default function Contact() {
  const cols = 2;
  const rows = Math.ceil(contact.fields.length / cols);

  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={56}
          height={56}
          className="rounded-full border border-white/10 object-cover"
        />
        <div>
          {contact.available && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for projects
            </span>
          )}
          <h3 className="mt-1.5 font-semibold text-white">{profile.name}</h3>
          <p className="text-sm text-slate-400">{contact.title}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
        {contact.fields.map((f, i) => {
          const Icon = iconMap[f.icon] ?? Mail;
          const isLastRow = Math.floor(i / cols) === rows - 1;
          return (
            <a
              key={f.label}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 py-4 transition-colors hover:opacity-80 ${
                i % cols === 0 ? "md:pr-6" : "md:pl-6"
              } ${isLastRow ? "" : "border-b border-white/10"}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                <Icon size={16} />
              </span>
              <span>
                <p className="text-xs uppercase tracking-wider text-slate-500">{f.label}</p>
                <p className="text-sm font-medium text-white">{f.value}</p>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
