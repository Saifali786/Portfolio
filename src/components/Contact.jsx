import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding max-w-3xl mx-auto text-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="panel p-8 md:p-12"
      >
        <p className="font-mono text-primary text-xs uppercase tracking-[0.24em] mb-4">05. What's Next?</p>
        <h2 className="font-display text-[34px] sm:text-[44px] md:text-[64px] leading-[0.98] text-foreground mb-6">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-10 text-[18px] md:text-[22px] max-w-2xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi,
          feel free to reach out and I'll do my best to get back to you.
        </p>
        <a href="mailto:saifaliprasla786@gmail.com" className="btn-primary px-8 py-4">
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
