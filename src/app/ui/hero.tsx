"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  brand: string;
  headline: string;
  subhead: React.ReactNode;
  email: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export default function Hero({ brand, headline, subhead, email }: Props) {
  const reducedMotion = usePrefersReducedMotion();
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
    if (!isPointerFine || reducedMotion) return;
    const card = cardRef.current;
    if (!card) return;

    const onMove = (event: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);

      const px = x / rect.width;
      const py = y / rect.height;

      const rotateY = (px - 0.5) * 12;
      const rotateX = -(py - 0.5) * 12;

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
  }, [isPointerFine, reducedMotion]);

  const capabilities = useMemo(
    () => ["Engineering", "Plattformen", "Prozessoptimierung"],
    [],
  );

  const signature = useMemo(
    () => ["Klarheit", "Tempo", "Qualität", "Wirkung"],
    [],
  );

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#06070b] text-zinc-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-75 [filter:saturate(1.1)]">
          <div className="absolute -top-72 left-1/2 h-[980px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.50),rgba(99,102,241,0)_60%)] blur-3xl animate-[auroraShift_18s_ease-in-out_infinite]" />
          <div className="absolute -bottom-72 left-1/3 h-[980px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.28),rgba(16,185,129,0)_62%)] blur-3xl animate-[auroraShift_18s_ease-in-out_infinite]" />
          <div className="absolute top-10 left-2/3 h-[820px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.16),rgba(236,72,153,0)_62%)] blur-3xl animate-[auroraShift_24s_ease-in-out_infinite]" />
        </div>

        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_68%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_10%,rgba(255,255,255,0.14),rgba(255,255,255,0)_55%)]" />

        <div className="absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]">
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.85)_1px,transparent_1px)] [background-size:26px_26px] animate-[twinkle_7.5s_ease-in-out_infinite]" />
          <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:54px_54px] animate-[twinkle_10s_ease-in-out_infinite]" />
        </div>
      </div>

      <main className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="relative">
          <div className="pointer-events-none absolute -inset-12 -z-10 rounded-[44px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.2),rgba(255,255,255,0)_70%)] blur-2xl" />

          <div className="rounded-[34px] bg-gradient-to-br from-white/14 via-white/7 to-white/12 p-[1px] shadow-[0_50px_160px_rgba(0,0,0,0.78)]">
            <div
              ref={cardRef}
              className="relative overflow-hidden rounded-[34px] bg-white/[0.05] p-6 backdrop-blur-2xl will-change-transform [transform:perspective(1200px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] transition-transform duration-200 ease-out sm:p-12"
            >
              <div className="pointer-events-none absolute -inset-28 bg-[conic-gradient(from_210deg,rgba(99,102,241,0.0),rgba(99,102,241,0.14),rgba(16,185,129,0.10),rgba(236,72,153,0.09),rgba(99,102,241,0.0))] blur-2xl animate-[floatSlow_14s_ease-in-out_infinite]" />
              <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_72%)]">
                <div className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.28)_50%,transparent_65%)] animate-[shineSweep_7.5s_ease-in-out_infinite]" />
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_82%)]">
                <div className="absolute inset-0 [background:radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,20%),rgba(255,255,255,0.18),rgba(255,255,255,0)_60%)]" />
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-200 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.65)]" />
                    {brand}
                  </div>
                  <div className="text-[11px] font-medium text-zinc-200/70">
                    {new Date().getFullYear()}
                  </div>
                </div>

                <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  <span className="bg-gradient-to-b from-white via-white to-white/65 bg-clip-text text-transparent">
                    {headline}
                  </span>
                </h1>

                <div className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-200/85 sm:text-lg">
                  {subhead}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-2 text-xs text-zinc-200/80">
                  {capabilities.map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    Kontakt aufnehmen
                  </a>
                </div>

                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-3 text-[11px] text-zinc-100/70">
                    {signature.map((word, idx) => (
                      <span key={word} className="inline-flex items-center gap-3">
                        <span>{word}</span>
                        {idx === signature.length - 1 ? null : (
                          <span className="text-zinc-100/30">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-10 text-center text-xs text-zinc-500">
                  © {new Date().getFullYear()} · {brand}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
