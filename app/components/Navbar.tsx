"use client";

import { useEffect, useState } from "react";
import styles from "./navIcon3.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll only when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-black/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <a href="#" className="font-medium">
            Portfolio
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li>
                <a href="#about" className="hover:opacity-70 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:opacity-70 transition-opacity"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:opacity-70 transition-opacity"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full bg-black text-white md:hidden"
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

      {/* Mobile fullscreen menu overlay */}
      <div
        className={[
          "fixed inset-0 z-[60] bg-white transition-all duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <nav className="h-[calc(100vh-64px)] px-4 pb-10 pt-16">
          <ul className="flex h-full flex-col justify-end gap-6">
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="
                  block text-6xl font-semibold tracking-tight text-black
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
                  block text-6xl font-semibold tracking-tight text-black
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
                  block text-6xl font-semibold tracking-tight text-black
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
