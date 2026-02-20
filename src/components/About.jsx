import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="section-padding max-w-4xl mx-auto">
      <SectionHeading index="01" title="About Me" indexClassName="lg:text-sm" titleClassName="lg:text-5xl" />

      <div className="grid md:grid-cols-[1.45fr_1fr] gap-10 items-start">
        <div className="panel p-6 md:p-8 space-y-5 text-muted-foreground leading-relaxed text-[18px] md:text-[20px]">
          <p>
            Hello! I'm Saif, a software developer based in Regina, SK with a passion for building
            accessible, performant web applications. I hold a Master's in Applied Computer Science from{" "}
            <span className="text-primary font-semibold">Dalhousie University</span> and a Bachelor's in
            Information Technology from <span className="text-primary font-semibold">Mumbai University</span>.
          </p>
          <p>
            I've had the privilege of working at the{" "}
            <span className="text-primary font-semibold">Canada Revenue Agency</span>, where I progressed from
            a co-op student to a Software Developer II, working on Angular-based tax filing portals that serve
            millions of Canadians.
          </p>
          <p>
            My focus is on writing clean, maintainable code and building systems that scale. I'm passionate
            about reactive programming, code quality, and mentoring fellow developers.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group w-60 h-60">
            <div className="absolute inset-0 rounded-2xl border border-primary/55 rotate-6 transition-transform duration-300 group-hover:rotate-3" />
            <div className="absolute inset-2 rounded-2xl border border-accent/45 -rotate-3 transition-transform duration-300 group-hover:-rotate-1" />
            <div className="panel relative w-full h-full rounded-2xl flex items-center justify-center overflow-hidden">
              <span className="font-display text-6xl text-gradient font-semibold tracking-[0.08em]">SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
