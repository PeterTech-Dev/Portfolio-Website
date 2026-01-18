"use client";

import { useMemo, useState } from "react";
import type { EducationItem, ExperienceItem } from "../data/portfolio";

const cx = (...c: Array<string | false | undefined>) => c.filter(Boolean).join(" ");

type Props = {
  experience: ExperienceItem[];
  education: EducationItem[];
};

function Dot() {
  return <span className="absolute left-[6px] top-6 h-3.5 w-3.5 rounded-full bg-black" />;
}

export default function ExperienceEducation({ experience, education }: Props) {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  const items = useMemo(() => {
    return tab === "experience" ? experience : education;
  }, [tab, experience, education]);

  return (
    <div className="border-2 border-black">
      {/* BIG Buttons */}
      <div className="grid grid-cols-2 border-b-2 border-black">
        <button
          type="button"
          onClick={() => setTab("experience")}
          className={cx(
            "py-6 md:py-8 text-center text-lg md:text-2xl font-semibold tracking-tight transition",
            tab === "experience"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          )}
        >
          Experience
        </button>

        <button
          type="button"
          onClick={() => setTab("education")}
          className={cx(
            "py-6 md:py-8 text-center text-lg md:text-2xl font-semibold tracking-tight transition border-l-2 border-black",
            tab === "education"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-black hover:text-white"
          )}
        >
          Education
        </button>
      </div>

      {/* Timeline */}
      <div className="px-6 py-10 md:px-10">
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[13px] top-0 h-full w-[2px] bg-black" />

          <ul className="space-y-8">
            {items.map((item, idx) => (
              <li key={idx} className="relative pl-12">
                <Dot />

                {/* Card */}
                <div className="border border-black p-6 md:p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      {tab === "experience" ? (
                        <>
                          <h3 className="text-xl md:text-2xl font-semibold text-black">
                            {(item as ExperienceItem).title}
                          </h3>

                          <p className="mt-2 text-base text-black/80">
                            <span className="font-semibold text-black">
                              {(item as ExperienceItem).company}
                            </span>
                            {(item as ExperienceItem).employmentType ? (
                              <span className="text-black/70">
                                {" "}• {(item as ExperienceItem).employmentType}
                              </span>
                            ) : null}
                            {(item as ExperienceItem).location ? (
                              <span className="text-black/70">
                                {" "}• {(item as ExperienceItem).location}
                              </span>
                            ) : null}
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-xl md:text-2xl font-semibold text-black">
                            {(item as EducationItem).qualification}
                          </h3>

                          <p className="mt-2 text-base text-black/80">
                            <span className="font-semibold text-black">
                              {(item as EducationItem).institution}
                            </span>
                            {(item as EducationItem).status ? (
                              <span className="text-black/70">
                                {" "}• {(item as EducationItem).status}
                              </span>
                            ) : null}
                            {(item as EducationItem).location ? (
                              <span className="text-black/70">
                                {" "}• {(item as EducationItem).location}
                              </span>
                            ) : null}
                          </p>
                        </>
                      )}
                    </div>

                    <div className="shrink-0 text-base md:text-lg font-medium text-black/80">
                      {"period" in item ? item.period : ""}
                    </div>
                  </div>

                  {/* Body */}
                  {tab === "experience" ? (
                    <ul className="mt-6 space-y-3 text-base leading-relaxed text-black/80">
                        {(item as ExperienceItem).highlights.map((h, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                            <span>{h}</span>
                        </li>
                        ))}
                    </ul>
                    ) : null}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm md:text-base text-black/70">
            Always learning — <span className="font-semibold text-black">striving to be better than I was yesterday.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
