"use client";

import { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";
import styles from "./navIcon3.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-999 bg-white/70 backdrop-blur border-b border-black/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="font-medium">Portfolio</div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full bg-black text-white"
          >
            <div className={`${styles.icon3} ${open ? styles.open : ""}`}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <div
        className={[
          "fixed inset-0 z-[60] bg-white transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* top row (quick links + close) */}
        <div className="sticky top-16 flex items-center justify-between px-4 py-4">
          <div className="flex gap-2">
            {portfolio.links.linkedin && (
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-full bg-black px-4 py-2 text-xs font-medium text-white
                  transition-all duration-200
                  hover:scale-[1.03] hover:-translate-y-px
                  hover:shadow-md
                  active:scale-[0.98]
                "
              >
                LinkedIn
              </a>
            )}

            {/* If you have resume link, add it in your data and render here */}
            {portfolio.links.website && (
              <a
                href={portfolio.links.website}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-full bg-black px-4 py-2 text-xs font-medium text-white
                  transition-all duration-200
                  hover:scale-[1.03] hover:-translate-y-px
                  hover:shadow-md
                  active:scale-[0.98]
                "
              >
                Resume
              </a>
            )}
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-black/20 text-black"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* big links */}
        <nav className="h-[calc(100vh-64px)] px-4 pb-10">
          <ul className="flex h-full flex-col justify-end gap-6">
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="
                  block text-6xl font-semibold tracking-tight text-black md:text-8xl
                  transition-all duration-200 ease-out
                  hover:translate-x-2 hover:opacity-80
                "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="
                  block text-6xl font-semibold tracking-tight text-black md:text-8xl
                  transition-all duration-200 ease-out
                  hover:translate-x-2 hover:opacity-80
                "
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="
                  block text-6xl font-semibold tracking-tight text-black md:text-8xl
                  transition-all duration-200 ease-out
                  hover:translate-x-2 hover:opacity-80
                "
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
