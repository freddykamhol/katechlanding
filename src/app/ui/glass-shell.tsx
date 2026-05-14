"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  badge: string;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function GlassShell({ badge, title, description, children, footer }: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer:fine)");
    const update = () => setIsPointerFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;
    const card = cardRef.current;
    if (!card) return;

    const onMove = (event: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);

      const px = x / rect.width;
      const py = y / rect.height;

      const rotateY = (px - 0.5) * 10;
      const rotateX = -(py - 0.5) * 10;

      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
    };

    const onLeave = () => {
      card.style.setProperty("--rx", `0deg`);
      card.style.setProperty("--ry", `0deg`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    card.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    };
  }, [isPointerFine]);

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#06070b] text-zinc-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-80 [filter:saturate(1.25)]">
          <div className="absolute -top-56 left-1/2 h-[780px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.55),rgba(99,102,241,0)_60%)] blur-3xl animate-[auroraShift_16s_ease-in-out_infinite]" />
          <div className="absolute -bottom-64 left-1/3 h-[880px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.28),rgba(16,185,129,0)_62%)] blur-3xl animate-[auroraShift_18s_ease-in-out_infinite]" />
          <div className="absolute top-10 left-2/3 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.22),rgba(236,72,153,0)_62%)] blur-3xl animate-[auroraShift_22s_ease-in-out_infinite]" />
        </div>

        <div className="absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]">
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.85)_1px,transparent_1px)] [background-size:22px_22px] animate-[twinkle_5.5s_ease-in-out_infinite]" />
          <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:46px_46px] animate-[twinkle_7.5s_ease-in-out_infinite]" />
        </div>

        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_68%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_15%,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />

        <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]">
          <div className="absolute left-[-20%] top-[18%] h-[2px] w-[220px] rotate-[10deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[0.3px] animate-[shoot_3.8s_ease-in-out_infinite]" />
          <div className="absolute left-[-30%] top-[46%] h-[2px] w-[280px] rotate-[12deg] bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[0.3px] animate-[shoot_5.3s_ease-in-out_infinite] [animation-delay:1.2s]" />
          <div className="absolute left-[-25%] top-[72%] h-[2px] w-[240px] rotate-[8deg] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-[0.3px] animate-[shoot_6.2s_ease-in-out_infinite] [animation-delay:2.1s]" />
        </div>
      </div>

      <main className="relative mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),rgba(255,255,255,0)_70%)] blur-2xl" />
          <div className="rounded-3xl bg-gradient-to-br from-white/14 via-white/6 to-white/10 p-[1px] shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
            <div
              ref={cardRef}
              className="relative overflow-hidden rounded-3xl bg-white/[0.045] p-6 backdrop-blur-2xl will-change-transform [transform:perspective(1200px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] transition-transform duration-200 ease-out sm:p-12"
            >
              <div className="pointer-events-none absolute -inset-24 bg-[conic-gradient(from_220deg,rgba(99,102,241,0.0),rgba(99,102,241,0.22),rgba(16,185,129,0.18),rgba(236,72,153,0.16),rgba(99,102,241,0.0))] blur-2xl animate-[floatSlow_12s_ease-in-out_infinite]" />
              <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]">
                <div className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.35)_50%,transparent_65%)] animate-[shineSweep_6.5s_ease-in-out_infinite]" />
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_80%)]">
                <div className="absolute inset-0 [background:radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,20%),rgba(255,255,255,0.22),rgba(255,255,255,0)_60%)]" />
              </div>

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-xs font-medium text-zinc-200 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.65)]" />
                  {badge}
                </div>

                <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  <span className="bg-gradient-to-b from-white via-white to-white/65 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h1>

                <div className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-200/85 sm:text-lg">
                  {description}
                </div>

                {children ? <div className="mt-9">{children}</div> : null}
              </div>
            </div>
          </div>
        </div>

        {footer ? (
          <footer className="mt-10 text-center text-xs text-zinc-500">{footer}</footer>
        ) : null}
      </main>
    </div>
  );
}
