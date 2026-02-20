import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "C",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "Angular",
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Docker",
      "Git",
      "Postman",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Oracle"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (Lambda, EC2, S3)",
      "GCP",
      "CloudFormation",
      "CI/CD",
      "Monitoring/Logging",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding max-w-4xl mx-auto">
      <SectionHeading
        index="04"
        title="Skills"
        indexClassName="lg:text-sm"
        titleClassName="lg:text-5xl"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.38, delay: 0.08 + idx * 0.08 }}
            className="panel p-4 sm:p-5 md:p-6 interactive-lift"
          >
            <h3 className="font-mono text-primary text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-3 sm:mb-4">
              {cat.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {cat.items.map((item) => (
                <li key={item} className="skill-pill">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
