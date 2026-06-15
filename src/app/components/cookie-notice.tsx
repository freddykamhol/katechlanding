"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const storageKey = "katech_cookie_notice_ack";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVisible(window.localStorage.getItem(storageKey) !== "true");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function acknowledge() {
    window.localStorage.setItem(storageKey, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-4xl rounded-[1.5rem] border border-[#dfd7ca] bg-white/94 p-4 text-[#111815] shadow-[0_24px_80px_rgba(20,32,28,0.22)] backdrop-blur-2xl sm:bottom-5 sm:p-5">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-semibold">Cookie- und Speicherhinweis</p>
          <p className="mt-2 text-sm leading-6 text-[#53605b]">
            Diese Website verwendet keine Analyse-, Marketing- oder Tracking-Cookies. Es wird nur eine technisch
            notwendige Speicherung genutzt, um diesen Hinweis nicht erneut anzuzeigen.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-[#287563]">
            <Link href="/cookies" className="underline-offset-4 hover:underline">
              Cookie-Informationen
            </Link>
            <Link href="/datenschutz" className="underline-offset-4 hover:underline">
              Datenschutzerklärung
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={acknowledge}
          className="rounded-full bg-[#111815] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#26352f]"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
