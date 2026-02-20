import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const githubProfile = [
  "https://github.com/Saifali786/Halifax-Foodie",
  "https://github.com/Saifali786/CloudProject",
  "https://github.com/Saifali786/CookWithDal",
  "https://github.com/Saifali786/Apartment-Buddy",
  "https://github.com/Saifali786/Expensify-Project",
];

const projects = [
  {
    title: "Halifax Foodie",
    description:
      "Multi-cloud food ordering platform with order tracking, ratings, login analytics, feedback polarity visualization, and live support.",
    tech: [
      "ReactJS",
      "Python",
      "NodeJS",
      "AWS Cognito",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS Comprehend",
      "GCP Cloud Function",
      "GCP Firestore",
      "Google Artifact Registry",
      "Google Cloud Run",
      "Docker",
    ],
  },
  {
    title: "Sentiment Analyzer",
    description:
      "Serverless sentiment analysis application using microservices with NLP and text-to-speech integration.",
    tech: ["React", "AWS Lambda", "CloudFormation", "Amazon Comprehend", "AWS Polly"],
  },
  {
    title: "CookWithDal",
    description:
      "Secure full-stack recipe sharing platform with authentication, sessions, bookmarks, and robust REST APIs.",
    tech: ["React", "Express.js", "MongoDB", "REST APIs", "Material UI"],
  },
  {
    title: "Apartment Buddy",
    description:
      "Android app for complaint tracking and appointment scheduling with a management-side ticket resolution workflow.",
    tech: ["Kotlin", "Firebase Authentication", "GCP Firestore"],
  },
  {
    title: "Expensify",
    description:
      "Expense manager with wallet controls, subscription tracking, budget alerts, and pre-expiry email notifications.",
    tech: ["Java", "Maven", "Spring Boot", "HTML", "Thymeleaf", "JavaScript", "MySQL"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding max-w-4xl mx-auto">
      <SectionHeading
        index="03"
        title="Things I've Built"
        indexClassName="lg:text-sm"
        titleClassName="lg:text-5xl"
      />

      <div ref={ref} className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.13 }}
            className="panel interactive-lift relative overflow-hidden p-6 md:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/50 via-accent/60 to-transparent" />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <h3 className="font-display text-[28px] md:text-[38px] leading-[1.02] font-semibold text-foreground">
                {project.title}
              </h3>
              <a
                href={githubProfile[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary border border-primary/45 px-3 py-1.5 rounded-md hover:bg-primary/10"
              >
                <FaGithub size={13} /> GitHub
              </a>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-5 text-[17px] md:text-[19px]">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2.5">
              {project.tech.map((t) => (
                <li key={t} className="tech-pill">
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
