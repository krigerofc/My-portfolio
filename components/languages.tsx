"use client";

import { FaJs, FaPython, FaReact, FaAngular, FaDocker, FaGitAlt, FaGithub, FaGitlab, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiDjango, SiRedis, SiPrisma, SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiFigma } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const technologies = [
  { icon: FaJs, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaPython, name: "Python" },
  { icon: FaNodeJs, name: "C#" },

  { icon: SiNextdotjs, name: "Next.js" },
  { icon: RiNextjsFill, name: "NextAuth" },
  { icon: SiDjango, name: "Django" },
  { icon: SiRedis, name: "Redis" },

  { icon: SiPrisma, name: "Prisma ORM" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMysql, name: "MySQL" },

  { icon: FaReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaAngular, name: "Angular" },
  { icon: SiFigma, name: "Figma" },

  { icon: FaGithub, name: "GitHub" },
  { icon: FaGitlab, name: "GitLab" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaDocker, name: "Docker" },
];

export default function Languages() {
  return (
    <div className="relative w-4/6 m-auto overflow-hidden  py-6 round">
        
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r  to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l  to-transparent z-10"></div>

      <div className="flex animate-scroll gap-10 whitespace-nowrap w-max">
        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-all duration-300"
            >
              <Icon className="text-2xl md:text-3xl text-green-500" />
              <span className="text-lg md:text-xl font-medium">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
