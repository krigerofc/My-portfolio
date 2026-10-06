"use client";

import { useEffect, useRef, useState } from "react";
import { sections, type SectionId } from "@/lib/content";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alive: boolean;
  respawnAt: number;
};

type Bullet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const LINK_DIST = 140;
const NODE_COUNT = 46;

export default function NeuralField({
  activeSection,
  onSelectSection,
  exploring,
  onExitExploring,
}: {
  activeSection: SectionId | null;
  onSelectSection: (id: SectionId) => void;
  exploring: boolean;
  onExitExploring: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const nodesRef = useRef<Node[]>([]);
  const bulletsRef = useRef<Bullet[]>([]);
  const shipRef = useRef({ x: 0, y: 0, angle: -Math.PI / 2 });
  const keysRef = useRef<Record<string, boolean>>({});
  const lastShotRef = useRef(0);
  const exploringRef = useRef(exploring);
  const [score, setScore] = useState(0);

  useEffect(() => {
    exploringRef.current = exploring;
  }, [exploring]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h };
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    if (nodesRef.current.length === 0) {
      const { w, h } = sizeRef.current;
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.6 + Math.random() * 1.6,
        alive: true,
        respawnAt: 0,
      }));
      shipRef.current = { x: w / 2, y: h / 2, angle: -Math.PI / 2 };
    }

    const onKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key.toLowerCase()] = true;
      if ((e.key === " " || e.key === "Enter") && exploringRef.current) {
        e.preventDefault();
        const now = performance.now();
        if (now - lastShotRef.current > 180) {
          lastShotRef.current = now;
          const { x, y, angle } = shipRef.current;
          bulletsRef.current.push({
            x,
            y,
            vx: Math.cos(angle) * 6,
            vy: Math.sin(angle) * 6,
          });
        }
      }
      if (e.key === "Escape" && exploringRef.current) onExitExploring();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key.toLowerCase()] = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    const onClick = (e: MouseEvent) => {
      if (exploringRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const { w, h } = sizeRef.current;
      for (const s of sections) {
        const dx = mx - s.x * w;
        const dy = my - s.y * h;
        if (Math.sqrt(dx * dx + dy * dy) < 34) {
          onSelectSection(s.id);
          return;
        }
      }
    };
    canvas.addEventListener("click", onClick);

    let raf = 0;
    let t = 0;

    const step = () => {
      t += 1;
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      for (const n of nodes) {
        if (!n.alive) continue;
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        if (!nodes[i].alive) continue;
        for (let j = i + 1; j < nodes.length; j++) {
          if (!nodes[j].alive) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            ctx.globalAlpha = 1 - d / LINK_DIST;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      for (const n of nodes) {
        if (!n.alive) {
          if (performance.now() > n.respawnAt) {
            n.alive = true;
            n.x = Math.random() * w;
            n.y = Math.random() * h;
          }
          continue;
        }
        ctx.fillStyle = "rgba(148,163,184,0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const s of sections) {
        const x = s.x * w;
        const y = s.y * h;
        const pulse = 1 + 0.15 * Math.sin(t / 25 + x);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = 0.18;
        ctx.beginPath();
        ctx.arc(x, y, 22 * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(x, y, activeSection === s.id ? 9 : 7, 0, Math.PI * 2);
        ctx.fill();

        if (!exploringRef.current) {
          const onLeft = s.x < 0.5;
          ctx.font = "500 13px var(--font-sans), sans-serif";
          ctx.fillStyle = "rgba(226,232,240,0.85)";
          ctx.textAlign = onLeft ? "left" : "right";
          ctx.fillText(s.label, x + (onLeft ? 16 : -16), y + 4);
        }
      }

      if (exploringRef.current) {
        const ship = shipRef.current;
        const keys = keysRef.current;
        let dx = 0;
        let dy = 0;
        if (keys["w"] || keys["arrowup"]) dy -= 1;
        if (keys["s"] || keys["arrowdown"]) dy += 1;
        if (keys["a"] || keys["arrowleft"]) dx -= 1;
        if (keys["d"] || keys["arrowright"]) dx += 1;
        if (dx !== 0 || dy !== 0) {
          const len = Math.sqrt(dx * dx + dy * dy);
          ship.x = Math.max(12, Math.min(w - 12, ship.x + (dx / len) * 3.2));
          ship.y = Math.max(12, Math.min(h - 12, ship.y + (dy / len) * 3.2));
          ship.angle = Math.atan2(dy, dx);
        }

        const bullets = bulletsRef.current;
        for (let i = bullets.length - 1; i >= 0; i--) {
          const b = bullets[i];
          b.x += b.vx;
          b.y += b.vy;
          if (b.x < 0 || b.x > w || b.y < 0 || b.y > h) {
            bullets.splice(i, 1);
            continue;
          }
          for (const n of nodes) {
            if (!n.alive) continue;
            const ddx = b.x - n.x;
            const ddy = b.y - n.y;
            if (Math.sqrt(ddx * ddx + ddy * ddy) < n.r + 4) {
              n.alive = false;
              n.respawnAt = performance.now() + 1200;
              bullets.splice(i, 1);
              setScore((s) => s + 1);
              break;
            }
          }
        }

        ctx.fillStyle = "#fbbf24";
        for (const b of bullets) {
          ctx.beginPath();
          ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.save();
        ctx.translate(ship.x, ship.y);
        ctx.rotate(ship.angle + Math.PI / 2);
        ctx.fillStyle = "#22d3ee";
        ctx.beginPath();
        ctx.moveTo(0, -11);
        ctx.lineTo(7, 9);
        ctx.lineTo(0, 5);
        ctx.lineTo(-7, 9);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("click", onClick);
    };
  }, [activeSection, onSelectSection, onExitExploring]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 z-0 ${exploring ? "cursor-crosshair" : "cursor-default"}`}
      />
      {exploring && (
        <div className="fixed bottom-6 left-6 z-30 space-y-1 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md">
          <p className="text-sm font-semibold text-white">Exploration mode</p>
          <p className="text-2xl font-bold text-cyan-400">{score}</p>
          <p className="text-xs text-slate-400">WASD / Arrows: Move · Space / Enter: Shoot</p>
          <button
            onClick={onExitExploring}
            className="mt-2 rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            Stop / Exit
          </button>
        </div>
      )}
    </>
  );
}
