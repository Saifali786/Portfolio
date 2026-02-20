import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionHeading = ({
  index,
  title,
  indexClassName = "",
  titleClassName = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 md:gap-4 mb-8 md:mb-10"
    >
      <span
        className={`font-mono text-primary text-[10px] md:text-sm tracking-[0.22em] px-2.5 md:px-3 py-1 rounded-full border border-primary/35 bg-primary/10 ${indexClassName}`.trim()}
      >
        {index}
      </span>
      <h2
        className={`font-display text-[30px] leading-[1.06] md:text-4xl font-semibold text-foreground tracking-[0.02em] ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      <div className="h-px flex-1 ml-2 bg-gradient-to-r from-primary/45 via-border to-transparent" />
    </motion.div>
  );
};

export default SectionHeading;
