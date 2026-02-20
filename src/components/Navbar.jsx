import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];
const resumeHref = `${import.meta.env.BASE_URL}Prasla_Saifali_Resume.pdf`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage errors in private mode.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollTo = (id) => {
    const target = document.getElementById(id.toLowerCase());
    if (!target) return;

    const headerOffset = 96;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);

    const doScroll = () => {
      window.scrollTo({ top, behavior: "smooth" });
    };

    if (isOpen) {
      setIsOpen(false);
      window.setTimeout(doScroll, 180);
      return;
    }

    doScroll();
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/76 backdrop-blur-xl shadow-[0_10px_28px_hsl(var(--background)/0.58)]"
    >
      <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-3.5 sm:py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-primary font-semibold text-[19px] sm:text-[22px] tracking-[0.08em]"
        >
          {"<SP />"}
        </button>

        <ul className="hidden md:flex items-center gap-7 ml-auto">
          {navItems.map((item, i) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="font-mono text-[13px] uppercase tracking-[0.13em] text-muted-foreground hover:text-primary"
              >
                <span className="text-primary">0{i + 1}.</span> {item}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 bg-card/45"
            >
              {theme === "dark" ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
            </button>
          </li>
          <li>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-4 py-2 text-[13px]"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-8.5 w-8.5 sm:h-9 sm:w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 bg-card/45"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-[11px]"
          >
            Resume
          </a>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-8.5 w-8.5 sm:h-9 sm:w-9 items-center justify-center rounded-md border border-border text-foreground bg-card/45"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 max-h-[calc(100dvh-68px)] overflow-y-auto overscroll-contain"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item, i) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="font-mono text-[13px] uppercase tracking-[0.13em] text-muted-foreground hover:text-primary"
                  >
                    <span className="text-primary">0{i + 1}.</span> {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
