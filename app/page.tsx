"use client";

import { useState } from "react";
import { Gamepad2 } from "lucide-react";
import TopNav from "@/components/TopNav";
import NeuralField from "@/components/NeuralField";
import SectionPanel from "@/components/SectionPanel";
import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Footprint from "@/components/sections/Footprint";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { about, journey, skills, footprint, contact, type SectionId } from "@/lib/content";

const projectsMeta = {
  eyebrow: "Realized projects",
  heading: "Projects with practical engineering decisions.",
  sub: "A compact view of projects involving automation, full-stack architecture, bots and games.",
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [exploring, setExploring] = useState(false);

  const panels: Record<SectionId, { eyebrow: string; heading: string; sub: string; node: React.ReactNode }> = {
    about: { ...about, node: <About /> },
    journey: { ...journey, node: <Journey /> },
    skills: { ...skills, node: <Skills /> },
    footprint: { ...footprint, node: <Footprint /> },
    projects: { ...projectsMeta, node: <Projects /> },
    contact: { ...contact, node: <Contact /> },
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <NeuralField
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        exploring={exploring}
        onExitExploring={() => setExploring(false)}
      />

      <TopNav
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        onGoHome={() => setActiveSection(null)}
      />

      <div className="relative z-10 px-4 pb-28 pt-24 pointer-events-none md:pt-28">
        {activeSection ? (
          <SectionPanel
            eyebrow={panels[activeSection].eyebrow}
            heading={panels[activeSection].heading}
            sub={panels[activeSection].sub}
            onBack={() => setActiveSection(null)}
          >
            {panels[activeSection].node}
          </SectionPanel>
        ) : (
          <Intro />
        )}
      </div>

      {!exploring && (
        <div className="fixed inset-x-0 bottom-6 z-20 flex flex-col items-center gap-3">
          <p className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs text-slate-400 backdrop-blur-md">
            ● Click a neural cluster or use the top navigation
          </p>
          <button
            onClick={() => setExploring(true)}
            className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
          >
            <Gamepad2 size={14} />
            Exploration mode
          </button>
        </div>
      )}
    </main>
  );
}
