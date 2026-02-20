import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    title: "Software Developer II",
    company: "Canada Revenue Agency",
    location: "Halifax, NS",
    range: "Aug 2024 – Mar 2025",
    points: [
      "Designed, coded, and tested Angular-based features for CRA's tax filing portals.",
      "Led production deployments, monitored logs, and managed incident escalations.",
      "Participated in backlog refinement, task estimation, and CI workflows to reduce cycle time.",
    ],
  },
  {
    title: "Software Developer I",
    company: "Canada Revenue Agency",
    location: "Halifax, NS",
    range: "Aug 2023 – Aug 2024",
    points: [
      "Simplified data flows using reactive programming, resolving three major performance issues.",
      "Created a code review framework that reduced technical debt by 50%.",
      "Developed reusable Angular components and increased test coverage by 30%.",
      "Mentored junior developers on coding practices and performance tuning.",
    ],
  },
  {
    title: "Software Developer Co-op",
    company: "Canada Revenue Agency",
    location: "Halifax, NS",
    range: "May 2023 – Aug 2023",
    points: [
      "Identified and fixed bugs, improved accessibility compliance, and implemented Java API layers.",
      "Wrote comprehensive technical documentation to accelerate onboarding.",
      "Contributed to automated testing across Angular services and directives.",
    ],
  },
  {
    title: "IT Support",
    company: "Dalhousie University",
    location: "Halifax, NS",
    range: "Jan 2023 – Aug 2023",
    points: [
      "Delivered end-user support across Windows, Mac, and Linux environments.",
      "Collaborated using MS Teams for rapid troubleshooting in a high-volume environment.",
    ],
  },
];

const ExperienceContent = ({ job, mobile = false }) => (
  <>
    <h3 className={`font-display text-foreground ${mobile ? "text-[24px] sm:text-[28px] leading-[1.08]" : "text-[34px] lg:text-[44px] leading-[1.02]"}`}>
      {job.title} <span className="text-primary">@ {job.company}</span>
    </h3>
    <p className={`font-mono text-muted-foreground mt-2 mb-6 uppercase tracking-[0.08em] ${mobile ? "text-[11px]" : "text-xs lg:text-sm"}`}>
      {job.range} · {job.location}
    </p>
    <ul className={mobile ? "space-y-2.5" : "space-y-3"}>
      {job.points.map((point, i) => (
        <li
          key={i}
          className={`flex gap-3 text-muted-foreground leading-relaxed ${mobile ? "text-[15px]" : "text-[17px] lg:text-[20px]"}`}
        >
          <span className="text-primary mt-1.5 shrink-0">▹</span>
          {point}
        </li>
      ))}
    </ul>
  </>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const mobileTabsContainerRef = useRef(null);
  const mobileTabRefs = useRef([]);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) {
      return;
    }

    const container = mobileTabsContainerRef.current;
    const activeButton = mobileTabRefs.current[activeTab];

    if (!container || !activeButton) {
      return;
    }

    const targetLeft = Math.max(
      0,
      activeButton.offsetLeft - (container.clientWidth - activeButton.offsetWidth) / 2,
    );

    container.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [activeTab]);

  return (
    <section id="experience" className="section-padding max-w-4xl mx-auto">
      <SectionHeading
        index="02"
        title="Where I've Worked"
        indexClassName="lg:text-sm"
        titleClassName="lg:text-5xl"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <div className="hidden md:flex md:flex-col panel p-2 h-fit min-w-[245px]">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`whitespace-nowrap font-mono text-xs uppercase tracking-[0.12em] px-4 py-3 text-left rounded-md transition-all border ${
                activeTab === i
                  ? "text-primary border-primary/50 bg-primary/12"
                  : "text-muted-foreground border-transparent hover:text-foreground hover:bg-background/30"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="hidden md:block panel p-6 md:p-8 min-h-[320px] flex-1">
          <ExperienceContent job={jobs[activeTab]} />
        </div>

        <div className="md:hidden w-full panel p-4">
          <div ref={mobileTabsContainerRef} className="flex overflow-x-auto border-b border-border mb-5 pb-1">
            {jobs.map((job, i) => (
              <button
                key={i}
                ref={(el) => {
                  mobileTabRefs.current[i] = el;
                }}
                onClick={() => setActiveTab(i)}
                className={`shrink-0 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.12em] px-3 py-2 text-left rounded-md transition-all border mr-2 ${
                  activeTab === i
                    ? "text-primary border-primary/50 bg-primary/12"
                    : "text-muted-foreground border-transparent"
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className="min-h-[240px]">
            <ExperienceContent job={jobs[activeTab]} mobile />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
