"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ProjectItem } from "../data/portfolio";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(() => project.images ?? [], [project.images]);
  const cover = images[0];
  const hasGallery = images.length > 0;
  const canPrev = images.length > 1;
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);


  const openGallery = () => {
    if (!hasGallery) return;
    setActiveIndex(0);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (!hasGallery) return;

      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, hasGallery, images.length]);

  return (
    <>
      <div
        role={hasGallery ? "button" : undefined}
        tabIndex={hasGallery ? 0 : -1}
        onClick={hasGallery ? openGallery : undefined}
        onKeyDown={(e) => {
          if (!hasGallery) return;
          if (e.key === "Enter" || e.key === " ") openGallery();
        }}
        className={[
          "group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition",
          "border-black", // ✅ full black border
          hasGallery ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-md" : "cursor-default",
          hasGallery ? "hover:border-black" : "", // ✅ hover only if it has images
          "focus:outline-none focus:ring-2 focus:ring-black",
        ].join(" ")}
      >
        {/* Top image */}
        {cover ? (
          <div className="relative">
            <Image
              src={cover}
              alt={`${project.name} preview`}
              className="h-48 w-full object-cover"
              priority={false}
            />

            {/* ✅ keep overlay black, no opacity border */}
            <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />

            <div className="absolute bottom-3 left-3 rounded-full border border-black bg-white px-3 py-1 text-xs">
              {images.length > 1 ? `View ${images.length} images` : "View image"}
            </div>
          </div>
        ) : null}

        <div className="p-5">
          <h3 className="text-lg font-semibold">{project.name}</h3>

          {/* ❌ no dates */}

          <p className="mt-2 text-sm text-black/70">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black bg-black px-3 py-1 text-xs text-white"
              >
                {t}
              </span>
            ))}
          </div>

          {project.notes?.length ? (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-black/70">
              {project.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          ) : null}

          {/* Bottom-right GitHub button */}
          {project.links?.github ? (
            <div className="mt-5 flex justify-end">
              <a
                className="rounded-xl border border-black bg-white px-4 py-2 text-sm transition hover:bg-black hover:text-white"
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            </div>
          ) : null}
        </div>
      </div>

      {/* Modal gallery */}
      {open ? (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-label="Close gallery"
          />

          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-black bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-black p-4">
              <h4 className="text-lg font-semibold">{project.name}</h4>

              <button
                className="rounded-xl border border-black px-3 py-2 text-sm transition hover:bg-black hover:text-white"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="grid gap-4 p-4 md:grid-cols-[1.4fr_0.6fr]">
              <div className="relative overflow-hidden rounded-2xl border border-black bg-black/5">
                <Image
                  src={images[activeIndex]}
                  alt={`${project.name} image ${activeIndex + 1}`}
                  className="h-[320px] w-full object-contain md:h-[440px]"
                />

                {/* Left button */}
                {canPrev && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    aria-label="Previous image"
                    className="
                      absolute left-3 top-1/2 -translate-y-1/2
                      grid h-12 w-12 place-items-center
                      rounded-full border border-black bg-white/80
                      backdrop-blur transition
                      hover:bg-white
                      active:scale-95
                    "
                  >
                    <Image src="/icons/left-arrow.svg" alt="" width={20} height={20} />
                  </button>
                )}

                {/* Right button */}
                {canPrev && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    aria-label="Next image"
                    className="
                      absolute right-3 top-1/2 -translate-y-1/2
                      grid h-12 w-12 place-items-center
                      rounded-full border border-black bg-white/80
                      backdrop-blur transition
                      hover:bg-white
                      active:scale-95
                    "
                  >
                    <Image src="/icons/right-arrow.svg" alt="" width={20} height={20} />
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-sm text-black/70">{project.description}</p>

                {images.length > 1 ? (
                  <div className="grid grid-cols-4 gap-2">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`overflow-hidden rounded-xl border transition ${
                          i === activeIndex ? "border-black" : "border-black hover:border-black"
                        }`}
                        aria-label={`View image ${i + 1}`}
                      >
                        <Image src={img} alt="" className="h-16 w-full object-cover" />
                      </button>
                    ))}
                  </div>
                ) : null}

                {images.length > 1 ? (
                  <div className="flex items-center justify-between text-xs text-black">
                    <span>
                      {activeIndex + 1} / {images.length}
                    </span>
                  </div>
                ) : null}

                {project.links?.github ? (
                  <div className="pt-2">
                    <a
                      className="inline-flex rounded-xl border border-black px-4 py-2 text-sm transition hover:bg-black hover:text-white"
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
