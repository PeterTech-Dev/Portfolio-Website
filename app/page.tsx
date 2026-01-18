import { portfolio, skillIcons } from "./data/portfolio";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ExperienceEducation from "./components/ExperienceEducation";
import Footer from "./components/Footer";
import Image from "next/image";

const marqueeItems =
  portfolio.skills.find((g) => g.title === "Languages")?.items ?? [];

export default function Page() {
  return (
    <div>
      <Navbar />

      {/* Hero (Josiah-style) */}
      <main
        id="home"
        className="relative h-dvh w-full bg-white overflow-hidden isolate"
      >
        {/* Content */}
        <div className="relative z-20 h-dvh w-full">
          <div className="h-dvh w-full md:grid md:grid-cols-[45%_55%]">
            {/* LEFT: Image */}
            <div className="relative h-dvh w-full overflow-visible">
              <img
                src={portfolio.links.image.src}
                alt={`${portfolio.name} portrait`}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  grayscale contrast-125 brightness-95
                  scale-110
                  z-20
                "
                style={{ objectPosition: "50% 60%" }}
              />
            </div>

            {/* RIGHT: Text (desktop), overlay (mobile) */}
            <div
              className="
                relative z-30
                flex flex-col
                justify-end md:justify-center
                h-full
                px-6 md:px-16
                pb-24 md:pb-0
                text-black
                max-md:absolute max-md:inset-0
                max-md:text-white
                max-md:bg-linear-to-t
                max-md:from-black/70
                max-md:via-black/30
                max-md:to-transparent
              "
            >

              <p className="text-lg font-light">Hi, I’m</p>

              <h1 className="mt-2 text-5xl font-semibold tracking-tight md:text-6xl">
                {portfolio.name}
              </h1>

              <p className="mt-4 text-sm md:text-base opacity-90">
                {portfolio.headline}
              </p>

              <div
                className="
                  mt-4 inline-flex items-center gap-2
                  text-sm font-medium
                  text-black/80
                  max-md:text-white/90
                "
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>

                <span>{portfolio.links.location}</span>
              </div>


              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="
                    border px-5 py-2 text-sm transition
                    border-current
                    hover:bg-black hover:text-white
                    max-md:hover:bg-white max-md:hover:text-black
                  "
                  href="#about"
                  rel="noreferrer"
                >
                  About Me
                </a>

                <a
                  className="
                    border px-5 py-2 text-sm transition
                    border-current
                    hover:bg-black hover:text-white
                    max-md:hover:bg-white max-md:hover:text-black
                  "
                  href={portfolio.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  className="
                    border px-5 py-2 text-sm transition
                    border-current
                    hover:bg-black hover:text-white
                    max-md:hover:bg-white max-md:hover:text-black
                  "
                  href={portfolio.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  className="
                    border px-5 py-2 text-sm transition
                    border-current
                    hover:bg-black hover:text-white
                    max-md:hover:bg-white max-md:hover:text-black
                  "
                  href={portfolio.links.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>

                <a
                  className="
                    border px-5 py-2 text-sm transition
                    border-current
                    hover:bg-black hover:text-white
                    max-md:hover:bg-white max-md:hover:text-black
                  "
                  href={`mailto:${portfolio.links.email}`}
                >
                  Email me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom marquee (BEHIND image) */}
        <div className="absolute bottom-0 left-0 z-10 w-full bg-black text-white opacity-0 md:opacity-100">
          <div className="py-4">
            <div className="marquee">
              <div className="marquee__track">
                {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="marquee__item inline-flex items-center gap-3 px-6 text-sm font-medium"
                  >
                    {skillIcons[name] && (
                      <Image
                        src={skillIcons[name]}
                        alt={name}
                        width={25}
                        height={25}
                      />
                    )}
                    <span>{name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>




      {/* Everything below the hero */}
      <div>
        {/* About + Skills (side-by-side) */}
        <section
          id="about"
          className="relative bg-white px-6 md:px-16 py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-stretch">
              {/* ABOUT */}
              <div className="border border-black p-8 md:p-10">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                    About
                  </h2>
                  <p className="mt-2 text-base text-black/70">
                    A little background and what I love building.
                  </p>
                </div>

                <div className="text-base md:text-lg leading-relaxed text-black/80 space-y-5">
                  <p>
                    I’m a full-stack developer who loves creating software and
                    applications from the ground up. I learned how to code because I enjoy
                    inventing and turning ideas into real, functional solutions. To me, coding
                    is the future of innovation, and I love being part of it.
                  </p>

                  <p>
                    I’ve managed hotels and worked as a kids’ camp counselor—experiences that
                    shaped me into a strong leader and people-focused problem solver. I handle
                    challenges calmly and efficiently, always prioritizing clear communication
                    and positive collaboration.
                  </p>

                  <p>
                    With a strong passion for UI and front-end development, I enjoy building
                    accessible, engaging interfaces that feel good to use.
                    I’m driven by curiosity, creativity, and
                    continuous improvement as I work towards becoming one of the best software engineers.
                  </p>
                </div>
              </div>

              {/* SKILLS (Featured / loud) */}
              <div className="border border-black p-8 md:p-10">
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                      Skills
                    </h2>
                    <p className="mt-2 text-base text-black/70">
                      Tools I use often.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {portfolio.skills.map((group) => (
                    <div key={group.title}>
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-base md:text-lg font-semibold text-black">
                          {group.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="
                              rounded-full border border-black
                              px-4 py-2
                              text-sm md:text-base
                              font-medium bg-black text-white
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <Section id="experience" title="Experience and Education">
          <ExperienceEducation
            experience={portfolio.experience}
            education={portfolio.education}
          />
        </Section>


        <Section
          id="projects"
          title="Projects"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {portfolio.projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Want to work together? Reach out."
        >
          <div className="rounded-2xl border border-black p-5">
            <p className="text-sm text-black/70">
              Email:{" "}
              <a className="underline" href={`mailto:${portfolio.links.email}`}>
                {portfolio.links.email}
              </a>
            </p>
          </div>
        </Section>

        <Footer />
      </div>
    </div>
  );
}
