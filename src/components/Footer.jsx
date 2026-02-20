import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 md:px-8 pb-10">
      <div className="max-w-screen-2xl mx-auto border-t border-border/70 pt-8">
        <div className="flex justify-center gap-5 mb-5">
          <a
            href="mailto:saifaliprasla786@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/saifali-prasla-35193218b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href="https://github.com/Saifali786"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground text-center">
          Built by Saif Ali Prasla
        </p>
      </div>
    </footer>
  );
};

export default Footer;
