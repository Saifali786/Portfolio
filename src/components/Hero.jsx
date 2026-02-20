import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - 96);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center section-padding pt-28 sm:pt-32">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="hero-badge inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3.5 sm:px-4 py-1.5 mb-6 sm:mb-7"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/95">
            Open to new opportunities
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="font-mono text-primary mb-3 sm:mb-4 text-[11px] sm:text-[14px] uppercase tracking-[0.22em]"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-[37px] leading-[0.95] sm:text-[52px] md:text-[74px] lg:text-[92px] font-semibold text-foreground mb-3"
        >
          Saif Ali <span className="text-gradient">Prasla.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="font-display text-[24px] leading-[1.06] sm:text-[34px] md:text-[50px] lg:text-[58px] font-medium text-muted-foreground mb-7 sm:mb-8"
        >
          I architect digital products
          <br className="hidden sm:block" />
          for the modern web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="text-muted-foreground max-w-2xl text-[16px] sm:text-[20px] md:text-[22px] leading-relaxed mb-10 sm:mb-12"
        >
          Software Developer with expertise in Angular, React, and cloud technologies.
          Currently focused on building accessible, performant web applications at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.78 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <button onClick={() => scrollToSection("contact")} className="btn-primary">
            Get In Touch
          </button>
          <button onClick={() => scrollToSection("experience")} className="btn-ghost text-[13px] sm:text-[15px]">
            View my work <ArrowDown size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
